const getScrollTop = require('./getScrollTop');
const setScrollTop = require('./setScrollTop');
const requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        (window as any ).webkitRequestAnimationFrame ||
        (window as any).mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
/**
 * 
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 
 * @param {Number} duration 
 */
export function scrollTo(to:number, duration:number) {
    if (duration < 0) {
        setScrollTop(to);
        return
    }
    let diff = to - getScrollTop();
    if (diff === 0) return
    let step = diff / duration * 10;
    requestAnimFrame(
        function () {
            if (Math.abs(step) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + step);
            // eslint-disable-next-line no-mixed-operators
            if ((diff > 0 && getScrollTop() >= to) || (diff < 0 && getScrollTop() <= to)) {
                return;
            }
            scrollTo(to, duration - 16);
        });
}