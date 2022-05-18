/*Monica Solis WDD230 */
const hambutton = document.querySelector('.menuHamburger');
const mainnav = document.querySelector('.siteNavigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('changeMenuResp')
}, false);
window.onresize = () => {
    if (window.innerWidth > 815) mainnav.classList.remove('changeMenuResp')
};

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector('#currentDate').textContent = new Date().toLocaleDateString('en-US', options);
document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.getElementById('updateDate').textContent = new Date(document.lastModified).toISOString();