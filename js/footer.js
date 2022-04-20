const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
};
let daycount=54;
let targetEvent="Christmas";
const daysUntil = `There are ${daycount} days until ${targetEvent}!`;



document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('newsText').textContent = daysUntil;
