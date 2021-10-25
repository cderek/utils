var setCookie = require('./setCookie');
/**
 * 
 * @desc 根据name删除cookie
 * @param  {String} name 
 */
export function removeCookie(name:string) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}