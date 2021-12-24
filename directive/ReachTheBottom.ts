export const reachTheBottom = {
    bind(el: HTMLElement, binding: any) {
        el.addEventListener(
            "scroll",
            function () {
                if (el.clientHeight + el.scrollTop >= el.scrollHeight - 100) {
                    if (binding.value.isShowTrigger) {
                        binding.value.callback();
                    }
                }
            },
            true
        );
    }
}