// YOUR CODE BELOW
function myIndexOf(source,searchValue,startIdx=0){
    let store=0
    // if(source,searchValue,startIdx){
        for(i=startIdx;i<source.length;i++){
            if (source[i]===searchValue){
                store=i;
            }
            return store
         }
 else{
     return -1;
   }
}
myIndexOf('hello', 'h'); // => 0
myIndexOf('hello', 'e'); // => 1
myIndexOf('hello', 'l'); // => 2
myIndexOf('hello', 'l'); // => 2
myIndexOf('hello', 'o'); // => 4

myIndexOf('twice twice', 'ice'); => 2

// find the index of the first instance of 'ice' starting at index 5.
myIndexOf('twice twice', 'ice', 5); => 8

myIndexOf('happy string', 'sad'); => -1