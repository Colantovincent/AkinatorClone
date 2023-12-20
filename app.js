const si = document.getElementById("si");
const no = document.getElementById("no");
const domanda = document.getElementById("domanda");
const risposta = document.getElementById("risposta");
const restart = document.getElementById("restart");
const happy = document.querySelector(".img-thumbnail");
const domande = [
    {
        text: "è vivo?",
        vivo: true
    },
    {
        text: "è uomo?",
        sesso: true
    },
    {
        text: "è uno scienziato?",
        ruolo: "Scienziato"
    },
    {
        text: "è un pittore o scultore?",
        ruolo: "Artista"
    },
    {
        text: "è un musicista, cantante o compositore?",
        ruolo: "Musicista"
    },
    {
        text: "è un ingegnere?",
        ruolo: "Ingegnere"
    },
    {
        text: "è uno scrittore/scenografo?",
        ruolo: "Scrittore"
    },
    {
        text: "è un imprenditore?",
        ruolo: "Imprenditore"
    },
    {
        text: "è un programmatore?",
        ruolo: "Programmatore"
    },
    {
        text: "è un matematico?",
        ruolo: "Matematico"
    },
    {
        text: "è un poeta?",
        ruolo: "Poeta"
    },
    {
        text: "è di epoca contemporanea?",
        epoca: "contemporanea"
    },
    {
        text: "è di epoca rinascimentale?",
        epoca: "rinascimentale"
    },
    {
        text: "è di epoca medioevale?",
        epoca: "medioevo"
    },
    {
        text: "è vissuto/nato nel secolo 1800?",
        epoca: "restaurazione"
    },
    {
        text: "è nato nel periodo A.C.?",
        epoca: "avanti cristo"
    },
    {
        text: "è nato in America?",
        nazione: "America"
    },
    {
        text: "è Danese?",
        nazione: "Danimarca"
    },
    {
        text: "è Ceco?",
        nazione: "Repubblica Ceca"
    },
    {
        text: "è Italiano?",
        nazione: "Italia"
    },
    {
        text: "è spagnolo?",
        nazione: "Spagna"
    },
    {
        text: "è giapponese?",
        nazione: "Giappone"
    },
    {
        text: "è francese?",
        nazione: "Francia"
    },
    {
        text: "è inglese?",
        nazione: "Inghilterra"
    }
];
let persone;
async function fetching() {
    try {
        fetch("data.json").then(response => response.json()).then(data =>{persone = data; setEvent()});
    } catch (error) {
        console.error("Errore: " + error);
    }
}
fetching();
const setEvent = () => {
    let i, parametro, persona = [...persone], domandePossibili = [...domande];
    const cambiaDomanda = () => {
        console.log(persona);
        i = Math.floor(Math.random() * (domandePossibili.length - 1));
        domanda.textContent = "Il tuo personaggio " + domandePossibili[i].text;
        parametro = Object.keys(domandePossibili[i])[1];
    };
    cambiaDomanda();
    const endProgram = () => {
        if (persona.length >= 2) {
            for (let el in persona) {
                risposta.textContent += el.nome + "\n";
            }
            happy.src = "/resources/cat.gif";
            happy.alt = "Happy Happy Happy";
        } else if (persona.length === 0) {
            risposta.textContent = "Wo-ho something went wrong~";
            happy.src = "/resources/fyou.png";
            happy.alt = "F* you";
        } else {
            risposta.textContent = persona[0].nome; 
            happy.src = "/resources/cat.gif";
            happy.alt = "Happy Happy Happy";
        }
        si.disabled = true;
        no.disabled = true;
        happy.hidden = false;
    };
    si.addEventListener("click", () => {
        persona = persona.filter((el) => el[parametro] === domandePossibili[i][parametro]);
        domandePossibili.splice(i, 1);
        domandePossibili = domandePossibili.filter(el => Object.keys(el)[1] != parametro); //filtra l'array di domande per togliere le ridondanze
        (persona.length < 2 || domandePossibili.length == 0) ? endProgram() : cambiaDomanda();
    });
    no.addEventListener("click", () => {
        persona = persona.filter((el) => el[parametro] != domandePossibili[i][parametro]);
        domandePossibili.splice(i, 1);
        (persona.length < 2 || domandePossibili.length == 0) ? endProgram() : cambiaDomanda();
    });
    restart.addEventListener("click", () => {
        si.disabled = false;
        no.disabled = false;
        happy.hidden = true;
        risposta.textContent = "";
        persona = [...persone];
        domandePossibili = [...domande];
    });
};