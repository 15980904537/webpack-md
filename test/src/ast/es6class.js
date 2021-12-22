// let code = `let fn=()=>a+b`;

//默认调用presets中的预设
let babel = require('@babel/core')

let t = require('@babel/types');//这个模块的作用:判断这个node是不是这个node;生成对应的表达式
class Person { 
    constructor(type) { 
        this.type=type
    }
    getType() { 
        return this.type
    }
}

let classPlugin = {
    visitor: {
        ClassDeclaration(path) { 
            let node = path.node;//当前类的节点
            let body = node.body.body;//当前类的函数
            let id = node.id;//当前类的名字
            // let params = body.params;
            let methods=body.map(method => { 
                if (method.kind === 'constructor') {
                    //构造函数
                    return t.functionDeclaration(id, method.params, method.body)
                } else { 
                    let left = t.memberExpression(id, t.identifier('prototype'));
                    //Person.prototype.getType
                    left = t.memberExpression(left, method.key);
                    let right = t.functionDeclaration(null, method.params, method.body);
                    return t.assignmentExpression('=', left, right);
                }

            })
            path.replaceWithMultiple(methods)
        }
    }
}
let r = babel.transform(code, {
    presets: [
    ],
    plugins: [
        classPlugin
    ]
})
console.log(r.code)
