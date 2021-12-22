import a from './utils/b'
import '@/css/1'
// import './css/2.less'
import $ from 'jquery'

import src from './favicon.ico'

console.log($)
let img = new Image()
img.src = src;
document.body.appendChild(img)
fetch('/api/add').then(res=>{res.json()}).then(data=>{console.log(data)})
console.log(a)
console.log(666)

class A {
    // constructor() {
    //   this.qq = 123
    // }
    state = {
        q: 123
    }
    static QQ = 123
}

let newA=new A()