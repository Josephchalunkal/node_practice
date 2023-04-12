const arr1 = [10,20,30,20,10,7,20]
let arr2 = arr1.filter((value,index,self)=>self.indexOf(value)!==index)
console.log(arr2);