const json = `{
    "block": "warning",
    "content": [
        {
            "block": "placeholder",
            "mods": { "size": "m" }
        },
        {
            "elem": "content",
            "content": [
                {
                    "block": "text",
                    "mods": { "size": "m" }
                },
                {
                    "block": "text",
                    "mods": { "size": "l" }
                }
            ]
        }
    ]
}`;

//lint(json);

function lint(string) {
    let object = JSON.parse(string);
    let errors = [];
    errors = lintMain(object, errors, string);
    console.log(errors);
    return errors;
}

function lintMain(object, errors, string){
    let h1 = false, h2 = false;
    console.log(object.block);
    switch(object.block){
        case 'warning':
            errors = lintWarning(object, errors, string);
            break;
        case 'grid':
            errors = lintGrid(object.content, object.mods['m-columns'], errors, string);
            break;
        case 'text': 
            errors = lintText(h1, h2, errors);
            break;
        default:
            if(object.content) {
                object.content.forEach(item=>{
                    error = lintMain(item, errors, string);
                });
            }
    }
    return errors;
}

function lintText(h1, h2, errors){
    if(object.mods.type === 'h1') {
        if(h1) {
            errors.push({
                "code": "TEXT.SEVERAL_H1",
                "error": "Заголовок первого уровня на странице должен быть единственным",
                "location": {
                    "start": { "column": 1, "line": 1 },
                    "end": { "column": 2, "line": 12 }
                }
            });
        }
        h1 = true;
    }
    if(object.mods.type === 'h2') {
        h2 = true;
        if(!h1) {
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
        if(!h2) {
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

function lintWarning(object, errors, str){
    let textSize;
    let firstBlock = false;
    
    object.content.forEach(element => {
        if(element.elem === 'content') {
            element.content.forEach((item, index) => {
                if(index === 0) {
                    textSize = item.mods.size;
                    return;
                }
                if(textSize !== item.mods.size) {
                    errors.push({
                        "code": "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
                        "error": "Тексты в блоке warning должны быть одного размера",
                        "location": {
                            "start": { "column": 1, "line": 1 },
                            "end": { "column": 2, "line": str.split('\n').length }
                        }
                    });
                }
            });
        }
        if(element.block === 'placeholder') {
            errors = lintWarningPlaceholder(element, errors, str);
            firstBlock = 'placeholder';
        }
        if(element.block === 'button') {
            error = lintWarningButton(element, textSize, errors, str);
            error = lintWarningWhoFirst(firstBlock, errors, str);
        }
    });

    return errors;
}

// 02
function lintWarningButton(button, textSize, errors, str) {
    let sizes = ['s', 'm', 'l', 'xl', 'xxl'];
    let line, column;

    if(button.mods.size !== sizes.indexOf(textSize) + 1) {
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
function lintWarningWhoFirst(firstBlock, errors, str) {
    if(!firstBlock) {
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
