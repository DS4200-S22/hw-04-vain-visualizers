
// initializing value
count = 0
function counter() {
    count++;
    document.getElementById('click-count').innerHTML = "" + count;
}


// circle3 opacity

function opacityChecker() {
    if (document.getElementById("item3").style.opacity === "0.001") {
        document.getElementById("item3").style.opacity = "1.0";
    } else {
        document.getElementById("item3").style.opacity = "0.001";
    }
}