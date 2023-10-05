// задание 1
let users = [];

console.log("start", users);
for (let i = 0; i < Infinity; i++) {
  let words = prompt("Введите команду");
  let command = words.split(", ");
  if (command[0] == "add") {
    users.push(command[1]);
  } else if (command[0] == "del") {
    for (let key in users) {
      users[key] == command[1] ? users.splice(key, 1) : "";
    }
  } else if (command[0] == "stop") {
    break;
  }
  console.log(users);
}