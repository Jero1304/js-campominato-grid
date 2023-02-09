console.log('griglia');

let latoGriglia = 4;
let numeroCelle = latoGriglia **2;
console.log('lato griglia:',latoGriglia,'numero celle:',numeroCelle);

const grigliaEle = document.querySelector('.griglia');
const gridBtnEle = document.getElementById('grid-btn')
console.log(grigliaEle,gridBtnEle);

gridBtnEle.addEventListener('click', function(){
    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1;
        console.log(num);

        let divString = ` <div class="cella" style="width: calc(100% / ${latoGriglia});" >${num} </div> `;
        console.log(divString);

        grigliaEle.innerHTML += divString;
    }
    
})


