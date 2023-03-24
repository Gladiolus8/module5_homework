//Задание 1

message = prompt("Введите число")
num = +message

if (typeof num === "number" && num != NaN) {
  if (num % 2 === 0) {
    console.log("Чётное")
  } else {
    console.log("Нечётное")
  }
} else {
  console.log("Упс, кажется, вы ошиблись")
}