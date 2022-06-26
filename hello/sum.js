function sum(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2;
}

/**
 * module对象: 在每一个模块中, module对象代表该模块自身
 * export属性: module的一个属性, 它向外提供接口
 * 导出该模块外部可以使用的函数
 */
module.exports.sum = sum
module.exports.subtract = subtract