let fruits = new Map([
  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry", "blue"],

  ["banana", "yellow"],

  ["kiwi", "brown"],

  ["mandarin", "orange"],
])

for (let name of fruits.keys()) {
  console.log(`Ключ — ${name}, значение — ${fruits.get(name)}`)
}