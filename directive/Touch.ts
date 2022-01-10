export const touch = {
    touchstartY: 0,
    bind(el: HTMLElement, binding: any) {
        el.addEventListener('touchstart', function (event: any) {
            touch.touchstartY = event.clientY || event.changedTouches[0].clientY;
        });

        el.addEventListener('touchmove', function (event: any) {
            event.preventDefault();
            const touchmoveY = event.clientY || event.changedTouches[0].clientY;
            const moveDistance = touchmoveY - touch.touchstartY;
            el.style.transform = `translateY(${moveDistance}px)`;
        });

        el.addEventListener('touchend', function (event: any) {
            const touchendY = event.clientY || event.changedTouches[0].clientY;

            const moveScale =
                (touchendY - touch.touchstartY) / document.documentElement.clientHeight;

            if (moveScale < -0.1) {
                el.style.transform = `translateY(-100%)`;
                binding.value.callback();
            } else {
                el.style.transform = `translateY(0)`;
            }
        });
    }
}