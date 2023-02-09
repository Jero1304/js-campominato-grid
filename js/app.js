console.log('griglia');

let latoGriglia = 2;
let numeroCelle = latoGriglia **2;
console.log('lato griglia:',latoGriglia,'numero celle:',numeroCelle);

const grigliaEle = document.querySelector('.griglia');
const gridBtnEle = document.getElementById('grid-btn');
// console.log('griglia:',grigliaEle,'button:',gridBtnEle);

gridBtnEle.addEventListener('click', function(){

    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1;
        // console.log(num);
        
        let divString = ` <div class="cella" style="width: calc(100% / ${latoGriglia});" >${num} </div> `;
        // console.log('stringa:',divString);
        grigliaEle.innerHTML += divString;
    }
    
    const cellaEle = document.querySelectorAll('.cella');
    for (let i = 0; i < cellaEle.length; i++) {

        let cellaSingola = cellaEle[i];
        cellaSingola.addEventListener('click', function(){
            console.log(`cella numero ${i + 1}`);
            cellaSingola.classList.add('bg-primary');
        })
    }

    
    
})



