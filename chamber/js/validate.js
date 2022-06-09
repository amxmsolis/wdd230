/*Monica Solis WDD230 */
const hambutton = document.querySelector('.menuHamburger');
const mainnav = document.querySelector('.siteNavigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('changeMenuResp')
}, false);
window.onresize = () => {
    if (window.innerWidth > 815) mainnav.classList.remove('changeMenuResp')
};

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
document.querySelector('#currentDate').textContent = new Date().toLocaleDateString('en-US', options);
document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.getElementById('updateDate').textContent = new Date(document.lastModified).toISOString();
document.getElementById('dateTime').value = new Date().toString();

const d = new Date();
if ((d.getDay() == 1) || (d.getDay() == 2)) {
    document.querySelector('#bannerInfo').style.display = "block";
};

/*20220601 LazyLoad */
const lazyImages = document.querySelectorAll("[data-src]");
function placeholderImage(img) {
    const srcImage = img.getAttribute("data-src");
    if (!srcImage) {
        return;
    }
    img.src = srcImage;
}
const setsImages = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            placeholderImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, setsImages);

lazyImages.forEach(image => {
    imgObserver.observe(image);
});


