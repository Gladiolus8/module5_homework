//Задание 6

let arr = [1, 1, 1, 1]

for (let i = 1; i < arr.length; i++) {
  if (arr[0] != arr[i]) {
    console.log("False")
    break
  }
  if (i == arr.length - 1) {
    console.log("True")
  }
}