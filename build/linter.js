const json = `{
    "block": "grid",
    "mods": {
        "m-columns": "10"
    },
    "content": [
        {
            "block": "grid",
            "elem": "fraction",
            "elemMods": {
                "m-col": "2"
            },
            "content": [
                {
                    "block": "payment"
                }
            ]
        },
        {
            "block": "grid",
            "elem": "fraction",
            "elemMods": {
                "m-col": "8"
            },
            "content": [
                {
                    "block": "offer"
                }
            ]
        }
    ]
 }`;

function lint(string) {
    let errors = [];
    let object = JSON.parse(string);
    
    if(object.block == 'warning') {
        errors = lintWarning(object, errors, string);
    }
    if(object.block == 'grid') {
        errors = lintGrid(object.content, object.mods['m-columns'], errors, string);
    }
    console.log(errors[0].location);
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

//lint(json);