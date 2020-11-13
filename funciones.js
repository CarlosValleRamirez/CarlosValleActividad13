const amigos = [];

while (true) {
  let nombre = prompt("Kidz");
  if (nombre !== "fin") {
    amigos.push(nombre);
  } else {
    break;
  }
}

console.table(amigos);
