let counts = setInterval(updated, 50);
let upto = 0;

const count = document.getElementById("counter");
const hr = document.getElementById("hr");

function updated(){
    ++upto;
    count.innerHTML = "LOADING " +upto + "%";
    hr.style.width = upto + "%";
    if(upto === 100){
        clearInterval(counts);
        count.innerHTML="DONE!";
        count.style.color = "green";
        hr.style.display = "none";
    }
}
