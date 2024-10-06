let arr = [1,3,5,6,23,67,2,6,7];
let quicksort = function(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
}
console.log(quicksort(arr))