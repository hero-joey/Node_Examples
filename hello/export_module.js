//导出数据
export var color = 'red'
export let name = 'Hero'
export const magicNum = 7 

//导出函数
export function sum(num1, num2) {
    return num1 + num2;
}

//导出类
export class Rectangle {
    constructor(lengh, width) {
        this.lengh = lengh;
        this.width = width
    }
}

//定义一个函数， 并导出函数引用
function multiply(num1, num2) {
    return num1 * num2;
}

export {multiply}
