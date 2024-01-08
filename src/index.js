import persone from "./data.json"
const listaPers = document.getElementById("listaPers");
let nomi = [];
for (let persona of persone) {
    nomi.push(persona.nome);
}
function elaboraNomi(elaborabili) {
    let lista = "";
    for (let nome of elaborabili) {
        lista += "<li>" + nome + "</li>\n";
    }
    return lista;
}
console.log(elaboraNomi(nomi));
listaPers.innerHTML = elaboraNomi(nomi);