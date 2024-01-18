import persone from './data.json' with {type: 'json'};
const listaPers1 = document.getElementById("listaPers1");
const listaPers2 = document.getElementById("listaPers2");
let nomi = [];
function bananaSplit(gelato, cherryOnTop) {
    let cono = [];
    const mid = Math.floor(gelato.length / 2);
    for (let persona of gelato) {
        cono.push(persona.nome);
        if (cono.length === mid && cherryOnTop) {
            break;
        }
    }
    return cono;
}
nomi = bananaSplit(persone, true);
for (let i = 0; i < (persone.length/2); i++) {
    persone.splice(0, 1);
}
function elaboraNomi(elaborabili) {
    let lista = "";
    for (let nome of elaborabili) {
        lista += "<li>" + nome + "</li>\n";
    }
    return lista;
}
listaPers1.innerHTML = elaboraNomi(nomi);
nomi = bananaSplit(persone, false);
console.log(nomi);
listaPers2.innerHTML = elaboraNomi(nomi);