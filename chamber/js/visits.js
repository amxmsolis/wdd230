// 20220604 Local Storage
const visitsValue = document.querySelector("#lastVisit");
let numVisits = Number(window.localStorage.getItem("visits"));
if (numVisits !== 0) {
    visitsValue.textContent = numVisits;
} else {
    visitsValue.textContent = "This is your first visit, welcome!";
}
numVisits++;
localStorage.setItem("visits", numVisits);

