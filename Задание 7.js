 let arr = [1, 0, null, 2, "Hi", 3, 4, "12", 6, 8]
 let evenNumber = 0
 let oddNumber = 0
 let nullElement = 0
 for (let i = 0; i < arr.length; i++) {
   if (typeof arr[i] === "number") {
     if (arr[i] === 0) {
       nullElement++
     } else if (arr[i] % 2 === 1) {
       oddNumber++
     } else {
       evenNumber++
     }
   }
 }

 console.log(`null elements in an array ${nullElement}`)
 console.log(`even elements in an array ${evenNumber}`)
 console.log(`odd elements in an array ${oddNumber}`)