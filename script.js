window.onload = function() {
    myDateTime(); // optional initial call
    setInterval(myDateTime, 1000);
};


//Date and Time
function myDateTime()
{
    const d = new Date();
    document.querySelector(".date").innerHTML = "Date: " + d.toDateString();
    document.querySelector(".time").innerHTML = "Time: " + d.toLocaleTimeString();
}

setInterval(myDateTime, 1000);

const stopWatch = document.querySelector(".stopWatch");

stopWatch.addEventListener("click", () => {
    
})
