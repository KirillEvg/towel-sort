module.exports = function towelSort (matrix) { 
   let p;

   if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
   }
  
  const mat= matrix.map((el, k) =>{

    if(k%2 === 0){
      p = el;
    }
    else {
      p = el.reverse();
    }

  return p;
});

 return mat.flat();
}
 


