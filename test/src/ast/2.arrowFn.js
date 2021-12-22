let code = `let fn=()=>a+b`;

//默认调用presets中的预设
let babel = require('@babel/core')

let babel = require('@babel/types');//这个模块的作用:判断这个node是不是这个node;生成对应的表达式
let arrowFunction = {//访问者模式
    visitor: { //当访问到某个路径的时候进行匹配
        ArrowFunctionExpress(path) { 
            let node = path.node;//取到对应的对象 通过路径获取
            let params = node.params;//获取当前函数的参数
            let body = node.body;//函数函数体
            // let right = t.blockStatement([t.returnStatement(body)]);
            if (!t.isBlockStatement(body)) { //如果有代码块就不处理 
                //否则声明一个代码块 返回以前的箭头函数的结果
                body = t.blockStatement([t.returnStatement(body)])
            }
            let functioExpression = t.functioExpression(null, params,
                body)
            
            //用新的内容替换掉老的内容
            path.replaceWith(functioExpression);
        }
    }
}

let r=babel.transform(code, {
    presets: [
        arrowFunction
    ],
    plugins:[]
})
console.log(r.code)
