const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }
)

export default {
    created: function (el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    }
}
