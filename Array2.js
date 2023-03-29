//1
 function count(n){
for(let i=1; i<=n;i++){
    console.log(i)
    }
}

 count(99)

//2
 function count(n){
    if(n <=0){
        console.log('invalid')
    } else{
    for(let i=1; i<=n;i++){
         console.log(i)
        }
     }
 }

 //3
    function replaceWithX (arr, x){
        for(let i=0; i< arr.length; i++) {
          arr[i]=x
        }
        console.log(arr)
}
    replaceWithX([1,2,3,4,5],9);