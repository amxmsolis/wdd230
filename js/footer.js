const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
document.getElementById('currentTime').textContent = new Date().toLocaleTimeString();
document.getElementById('currentYear').textContent = new Date().getFullYear();