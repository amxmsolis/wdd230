let tempVar= 70;
let speedVar= 23;
let windVar;
if (tempVar > 50){
    windVar="NA";
}else{
    windVar= (35.74 + (0.6215 * tempVar))-(35.75 * Math.pow(speedVar,0.16)) + (0.4275*tempVar*Math.pow(speedVar,0.16));
    windVar= Math.round(windVar);
}

document.querySelector("#tempVar").textContent= tempVar;
document.querySelector("#speedVar").textContent= speedVar;
document.querySelector("#windVar").textContent= windVar;