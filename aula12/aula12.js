let var1 = 'A' 
let var2 = 'B'
let var3 = 'C'

const var1Temp = var1
var1 = var2
var2 = var3
var3 = var1Temp

console.log(var1, var2, var3)