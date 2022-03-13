const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter');
                entry.target.classList.remove('before-enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }
)

export default {
    mounted: function (el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    }
}
