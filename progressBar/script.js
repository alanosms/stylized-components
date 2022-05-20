btnPrevious = document.getElementById("previous");
btnNext = document.getElementById("next");

btnPrevious.addEventListener('click', previousStatus);
btnNext.addEventListener('click', nextStatus);

let activeStep = 1;
let maxStep = 4;
let minStep = 1;
checkButtonState();
function checkButtonState(){
    btnNext.disabled = false;
    btnPrevious.disabled = false;
    if(activeStep === maxStep){
        btnNext.disabled = true;
    }
        if(activeStep === minStep){
            btnPrevious.disabled = true;
        }
}
function nextStatus(){
    activeStep = activeStep + 1;
    document.querySelector(`[data-step="${activeStep}"]`).classList.add('active');
    checkButtonState();
}
function previousStatus(){
    document.querySelector(`[data-step="${activeStep}"]`).classList.remove('active');
    activeStep = activeStep - 1;
    checkButtonState(); 
}

