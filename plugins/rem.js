export default function () {
    const baseSize = 16
    function setRem() {
        // 当前页面宽度相对于 375 宽的缩放比例
        const scale = document.documentElement.clientWidth / 375
        document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
    }
    // 初始化
    setRem()
    window.onresize = function () {
        setRem()
    }
}
