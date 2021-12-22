let code = `let fn=()=>a+b`;

//默认调用presets中的预设
let babel = require('@babel/core')

let t = require('@babel/types');//这个模块的作用:判断这个node是不是这个node;生成对应的表达式
let importPlugin = {
    visitor: {
        importDeclaration(path) { 
            let node = path.node;
            let specifiers = node.specifiers;
            //当前长度不是1 并且不是默认导出我就要转换
            if (!(specifiers.length === 1
                && t.isImportDefaultSpecifier(specifiers[0]))) { 
                specifiers=specifiers.map(specifier => { 
                    if (t.isImportDefaultSpecifier(specifier)) {
                        //当前为默认导出
                        return t.importDeclaration([t.importDefaultSpecifier(specifier.local)]
                        ,t.stringLiteral(node.source.value)) 
                    } else { 
                        return t.importDeclaration([t.importDefaultSpecifier(specifier.local)]
                            , t.stringLiteral(node.source.value+'/'+specifier.local.name)) 
                    }
                })
                path.replaceWithMultiple(specifiers)
            }
        }
    }
}

let r = babel.transform(code, {
    presets: [
        
    ],
    plugins: [
        importPlugin
    ]
})
console.log(r.code)
