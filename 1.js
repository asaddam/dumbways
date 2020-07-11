var data = [['a','c','b','e','d'], ['g','e','f']]

function sortArray(data){
    var result = []
    // result.push(data[0][0])

    for(let j=0;j<data.length;j++) {
        let arr = data[j]
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        
        result.push(arr)
        // console.log(data[j])
    }      
    result.sort(function(a, b){return a.length - b.length});
    return result;

}

console.log(sortArray(data))