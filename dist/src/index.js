import persone from "./data.json"
const listaPers1 = document.getElementById("listaPers1");
const listaPers2 = document.getElementById("listaPers2");
let nomi = [], i = 0;
console.log(persone);
for (let persona of persone) {
    nomi.push(persona.nome);
    persone.splice(i, 1)
    if (i >= (persone.length / 2)) {
        break;
    }
}
function elaboraNomi(elaborabili) {
    let lista = "";
    for (let nome of elaborabili) {
        lista += "<li>" + nome + "</li>\n";
    }
    return lista;
}
listaPers1.innerHTML = elaboraNomi(nomi);
nomi = [];
for (let persona of persone) {
    nomi.push(persona.nome);
}
listaPers2.innerHTML = elaboraNomi(nomi);