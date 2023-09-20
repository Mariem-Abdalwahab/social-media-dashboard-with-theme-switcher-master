// Dark Mode
let btn = document.querySelector('.bttn');
let btnBefore = document.querySelector('.togglebtn');

if(localStorage.getItem('theme')=='dark'){
    document.body.classList.add('black');
    btnBefore.classList.add('rigth');
    btn.classList.add('btnBack');
    document.body.style.backgroundColor = "hsl(230, 17%, 14%" ;
}
// localStorage.clear();
btn.addEventListener('click',()=>{
    document.body.classList.toggle('black');
    btnBefore.classList.toggle('rigth');
    btn.classList.toggle('btnBack');
    
    if(document.body.classList.contains('black')){
        window.localStorage.setItem("theme","dark");
        document.body.style.backgroundColor = "hsl(230, 17%, 14%" ;
    }
    else{
        window.localStorage.setItem("theme","ligth");
        document.body.style.backgroundColor = "white" ;
    }
});




// Increasing

let toop = document.querySelectorAll('.box-top .num');
let tars = document.querySelectorAll('.tar');
toop = Array.from(toop);
tars = Array.from(tars);

increas(toop);
increas(tars);

function increas(arr){
    arr.map(ele=>{
        let target = ele.dataset.target;
    console.log(target)
    let count = Math.floor(20/(target));
    let set = setInterval(()=>{
        ele.textContent++;
        if(ele.textContent==target){
            if(ele.classList.contains('kk')){
                ele.textContent += 'K'
            }
            clearInterval(set);
        }
    },count);
    
    })
}