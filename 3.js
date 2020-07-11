function cetakGambar(angka){
    let result = ''
    for(let i = 0; i < angka; i++){
        for(let j = 0; j < angka; ++j) {
            result += ((i + j) % 2 == 0) ? '= ' : '* ';
        }
        result += '\n';
    }
    return result
}

console.log(cetakGambar(5))