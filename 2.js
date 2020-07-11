let awalIkan = 1476;
let hari = 471;

function jumlahIkan(awal, day){
    let result = awal;
    let lahir = 46;
    for(let i=0; i<=day; i++){
        if(i==lahir-1){
            result -= (result*0.06);
            // console.log(result)
        }
        else if(i==lahir){
            result += (result*5)
            lahir += 46;
            // console.log(result, lahir)
        }
    }
    return Math.round(result)
}

console.log(jumlahIkan(awalIkan, hari))