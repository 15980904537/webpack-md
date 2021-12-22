let code = `function ast(){}`;

let esprima = require('esprima');
let estraverse = require('estraverse');
let escodegen = require('escodegen');
let ast = esprima.parseScript(code);

estraverse.traverse(ast, {//只有带type的属性
    enter(node) {
        console.log(node)
        if (node.type === 'Identifier') { 
            node.name='hello'
        }
     },
    leave(node) { 

    }
})

let r = escodegen.generate(ast);
console.log(r);