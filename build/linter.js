const json = `[
    {
        "block": "text",
        "mods": { "type": "h1" }
    },

    {
        "block": "text",
        "mods": { "type": "h1" }
    }
]`;

//lint(json);

function lint(string) {
    let object = JSON.parse(string);
    let errors = [];
    let headers = {h1: false, h2: false};
    let textInfo = {firstBlock: false, firstText: false, textSize: false};
    errors = lintMain(object, errors, string, headers, textInfo);
    console.log(errors);
    return errors;
}

function lintMain(object, errors, string, headers, textInfo){
    console.log(object.block);
    switch(object.block){
        case 'warning':
            object.content.forEach(item=> {
                errors = lintWarning(item, errors, string, textInfo);
            })
            break;
        case 'grid':
            errors = lintGrid(object.content, object.mods['m-columns'], errors, string);
            break;
        case 'text': 
            errors = lintText(object, headers, errors);
            break;
        default:
            if(Array.isArray(object.content)) {
                object.content.forEach(item => {
                    error = lintMain(item, errors, string, headers, textInfo);
                });
            }
            else {
                if(typeof(object.content) === 'object') {
                    for(key in object.content) {
                        error = lintMain(object.content[key], errors, string, headers, textInfo);
                    }
                }
                if(Array.isArray(object)) {
                    object.forEach(item => {
                        error = lintMain(item, errors, string, headers, textInfo);
                    });
                }
            }
    }
    return errors;
}

function lintText(object, headers, errors){
    if(object.mods.type === 'h1') {
        if(headers.h1) {
            errors.push({
                "code": "TEXT.SEVERAL_H1",
                "error": "Заголовок первого уровня на странице должен быть единственным",
                "location": {
                    "start": { "column": 1, "line": 1 },
                    "end": { "column": 2, "line": 12 }
                }
            });
        }
        headers.h1 = true;
    }
    if(object.mods.type === 'h2') {
        headers.h2 = true;
        if(!headers.h1) {
            errors.push({
                "code": "TEXT.INVALID_H2_POSITION",
                "error": "Заголовок второго уровня не может находиться перед заголовком первого уровня",
                "location": {
                    "start": { "column": 1, "line": 1 },
                    "end": { "column": 2, "line": 12 }
                }
            });
        }
    }
    if(object.mods.type === 'h3') {
        if(!headers.h2) {
            errors.push({
                "code": "TEXT.INVALID_H3_POSITION",
                "error": "Заголовок третьего уровня не может находиться перед заголовком второго уровня",
                "location": {
                    "start": { "column": 1, "line": 1 },
                    "end": { "column": 2, "line": 12 }
                }
            });
        }
    }
    return errors;
}

function lintGrid(content, gridSize, errors, str){
    let marketing = 0;
    let marketingBlocks = ['commercial', 'offer'];
    let infoBlocks = ['payment', 'warning', 'product', 'history', 'cover', 'collect', 'articles', 'subscribtion', 'event'];
    content.forEach(item => {
        if(item.elem == 'fraction') {
            if(marketingBlocks.includes(item.content[0].block)){
                marketing += +item.elemMods['m-col'];
            }
        }
    });
    if(marketing > gridSize / 2) {
        errors.push({
            "code": "GRID.TOO_MUCH_MARKETING_BLOCKS",
            "error": "Маркетинговые блоки не могут занимать больше половины от всех колонок блока grid",
            "location": {
                "start": { "column": 1, "line": 1 },
                "end": { "column": 2, "line": str.split('\n').length }
            }
        });
    }
    return errors;
}   

function lintWarning(object, errors, str, textInfo){
    console.log(textInfo);
    if(object.content) {
        object.content.forEach(item => {
            errors = lintWarning(item, errors, str, textInfo);
        });
    }
    else {
        if(object.block == 'text') {
            if(!textInfo.firstText) {
                textInfo.firstText = true;
                textInfo.textSize = object.mods.size;
                return errors;
            }
            if(textInfo.textSize !== object.mods.size) {
                errors.push({
                    "code": "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
                    "error": "Тексты в блоке warning должны быть одного размера",
                    "location": {
                        "start": { "column": 1, "line": 1 },
                        "end": { "column": 2, "line": str.split('\n').length }
                    }
                });
            }
        }
        if(object.block == 'placeholder') {
            errors = lintWarningPlaceholder(object, errors, str);
            textInfo.firstBlock = 'placeholder';
        }
        if(object.block === 'button') {
            error = lintWarningButton(object, textInfo.textSize, errors, str);
            error = lintWarningWhoFirst(textInfo, errors, str);
        }
    }
    return errors;
}

// 02
function lintWarningButton(button, textSize, errors, str) {
    let sizes = ['s', 'm', 'l', 'xl', 'xxl'];
    let line, column, trueSize;
    sizes.forEach((item, index, arr) => {
        if(item === textSize) {
            trueSize = arr[index+1];
        }
    });
    console.log(button.mods.size);
    if(button.mods.size !== trueSize) {
        str.split('\n').forEach((item, index) => {
            if(item.indexOf('button') !== -1) {
                line = index + 1;
                column = item.length;
            }
        });
        errors.push({
            "code": "WARNING.INVALID_BUTTON_SIZE",
            "error": "Размер кнопки блока warning должен быть на 1 шаг больше эталонного",
            "location": {
                "start": { "column": 1, "line": line },
                "end": { "column": column, "line": line }
            }
        });
    }
    return errors;
}
// 03
function lintWarningWhoFirst(textInfo, errors, str) {
    if(!textInfo.firstBlock) {
        let line, column;
        str.split('\n').forEach((item, index) => {
            if(item.indexOf('button') !== -1) {
                line = index + 1;
                column = item.length;
            }
        });
        errors.push({
            "code": "WARNING.INVALID_BUTTON_POSITION",
            "error": "Блок button в блоке warning не может находиться перед блоком placeholder",
            "location": {
                "start": { "column": 1, "line": line },
                "end": { "column": column, "line": line }
            }
        });
    }
    return errors;
}
// 04
function lintWarningPlaceholder(placeholder, errors, str) {
    let size = placeholder.mods.size;
    let line, column;
    
    if(size !== 's' && size !== 'm' && size !== 'l') {
        str.split('\n').forEach((item, index) => {
            if(item.indexOf('placeholder') !== -1) {
                line = index + 1;
                column = item.length;
            }
        });
        errors.push({
            "code": "WARNING.INVALID_PLACEHOLDER_SIZE",
            "error": "Допустимые размеры для блока placeholder в блоке warning (значение модификатора size): s, m, l",
            "location": {
                "start": { "column": 1, "line": line },
                "end": { "column": column, "line": line }
            }
        });
    }
    return errors;
}
