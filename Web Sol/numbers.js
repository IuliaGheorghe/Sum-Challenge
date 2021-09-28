let arrayOfNumbers = document.getElementById('array');
let target = document.getElementById('target');

let positive = document.getElementById('positive');
let negative = document.getElementById('negative');

let solveBtn = document.getElementById('solve');
let resetBtn = document.getElementById('reset');

function solveChallenge(){

    arrayOfNumbers = arrayOfNumbers.value.split(' ').map(Number);
    target = target.value;
    
    let found = false;

    for(let i=0; i<arrayOfNumbers.length;i++){
        if(!found){
            let tryNumber = arrayOfNumbers[i];
            let searched = target - tryNumber;
            for(let j=0; j<arrayOfNumbers.length; j++){
                if(arrayOfNumbers[j] === searched){
                    if(tryNumber === searched) continue;
                    positive.style.display = "block";
                    positive.innerText = 'First number is '+ tryNumber + ' found at position ' + i + ' and second number is ' + arrayOfNumbers[j] + ' found at position ' + j + '.';
                    found = true;
                    resetBtn.style.display = "block";
                    solveBtn.style.display = "none";
                    break;
                }            
            }
        }
    }

    if(!found){
        negative.style.display = "block";
        negative.innerText = 'Combination not found!';
        resetBtn.style.display = "block";
        solveBtn.style.display = "none";
    }

}

function resetChallenge(){
    location.reload();
}
