/*Monica Solis WDD230 */
document.querySelector('#currentDate').textContent = new Date().toDateString();
document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.getElementById('updateDate').textContent = new Date(document.lastModified).toISOString();