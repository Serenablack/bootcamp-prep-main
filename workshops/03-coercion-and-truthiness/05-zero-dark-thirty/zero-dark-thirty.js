YOUR CODE BELOW
function zeroDarkThirty(num){
    let char=""
    let nnum=String(num)
    if (num===0){
        return (NaN)
    }else{
    for (i=0;i<nnum.length;i++){
       while (nnum[i]!=0){
            char+=nnum[i]
        }
    }
    return String(char ) 
}
}


zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23
// console.log(0 == "0");
// console.log(false == "false");
