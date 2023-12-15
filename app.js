const si = document.getElementById("si");
const no = document.getElementById("no");
const domanda = document.getElementById("domanda");
const risposta = document.getElementById("risposta");
const persone = [
    {
        nome: "Leonardo da Vinci",
        nascita: 1472,
        sesso: true,
        vivo: false,
        ruolo: "scienziato"
    },
    {
        nome: "Michael Jackson",
        nascita: 1960,
        sesso: true,
        vivo: false,
        ruolo: "musicista"
    },
    {
        nome: "Frida Khalo",
        nascita: 1907,
        sesso: false,
        vivo: false,
        ruolo: "artista"
    },
    {
        nome: "Samantha Cristoforetti",
        nascita: 1977,
        sesso: false,
        vivo: true,
        ruolo: "scienziato"
    }
];
const domande = [
    {
        text: "Il tuo personaggio è vivo?",
        vivo: true
    },
    {
        text: "Il tuo personaggio è uomo?",
        sesso: true
    },
    {
        text: "Il tuo personaggio è uno scienziato?",
        ruolo: "scienziato"
    },
    {
        text: "Il tuo personaggio è un artista?",
        ruolo: "artista"
    },
    {
        text: "Il tuo personaggio è un musicista?",
        ruolo: "musicista"
    }
];
let i, parametro, persona = [...persone], domandePossibili = [...domande];
const cambiaDomanda = () => {
    i = Math.floor(Math.random() * (domandePossibili.length - 1));
    domanda.textContent = domandePossibili[i].text;
    parametro = Object.keys(domandePossibili[i])[1];
};
cambiaDomanda();
const endProgram = () => {
    risposta.textContent =  "All this time... You've been thinking of... " + persona[0].nome;
    si.disabled = true;
    no.disabled = true;
};
si.addEventListener("click", () => {
    persona = persona.filter((el) => el[parametro] === domandePossibili[i][parametro]);
    domandePossibili.splice(i, 1);
    persona.length == 1 ? endProgram() : cambiaDomanda();
});
no.addEventListener("click", () => {
    persona = persona.filter((el) => el[parametro] != domandePossibili[i][parametro]);
    domandePossibili.splice(i, 1);
    persona.length == 1 ? endProgram() : cambiaDomanda();
});