/**
 * 
 * @desc 生成随机数
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

export function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10)
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10)
    default:
      return 0
  }
}