(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const s=[{nome:"Michael Jackson",epoca:"contemporanea",ruolo:"Musicista",sesso:!0,vivo:!1,nazione:"America",nobel:!1,riconoscimento:!0},{nome:"Bjarne Stroustrup",epoca:"contemporanea",ruolo:"Ingegnere",sesso:!0,vivo:!0,nazione:"Danimarca",nobel:!1,riconoscimento:!1},{nome:"Bill Gates",epoca:"contemporanea",ruolo:"Imprenditore",sesso:!0,vivo:!0,nazione:"America",nobel:!1,riconoscimento:!0},{nome:"Jeff Bezos",epoca:"contemporanea",ruolo:"Imprenditore",sesso:!0,vivo:!0,nazione:"America",nobel:!1,riconoscimento:!1},{nome:"Samuel Altman",epoca:"contemporanea",ruolo:"Ingegnere",sesso:!0,vivo:!0,nazione:"America",nobel:!1,riconoscimento:!1},{nome:"Brendan Eich",epoca:"contemporanea",ruolo:"Programmatore",sesso:!0,vivo:!0,nazione:"America",nobel:!1,riconoscimento:!1},{nome:"Katherine Johnson",epoca:"contemporanea",ruolo:"Matematico",sesso:!1,vivo:!1,nazione:"America",nobel:!1,riconoscimento:!0},{nome:"Samantha Cristoforetti",epoca:"contemporanea",ruolo:"Astronauta",sesso:!1,vivo:!0,nazione:"Italia",nobel:!1,riconoscimento:!0},{nome:"Leonardo da Vinci",epoca:"rinascimentale",ruolo:"Scienziato",sesso:!0,vivo:!1,nazione:"Italia",nobel:!1,riconoscimento:!1},{nome:"Isaac Newton",epoca:"rinascimentale",ruolo:"Scienziato",sesso:!0,vivo:!1,nazione:"Inghilterra",nobel:!1,riconoscimento:!1},{nome:"José de Acosta",epoca:"rinascimentale",ruolo:"Scrittore",sesso:!0,vivo:!1,nazione:"Spagna",nobel:!1},{nome:"Marie Curie",epoca:"restaurazione",ruolo:"Scienziato",sesso:!1,vivo:!1,nazione:"Francia",nobel:!1},{nome:"Vincent Van Gogh",epoca:"restaurazione",ruolo:"Artista",sesso:!0,vivo:!1,nazione:"Olanda",nobel:!1},{nome:"Giuseppe Verdi",epoca:"restaurazione",ruolo:"Musicista",sesso:!0,vivo:!1,nazione:"Italia",nobel:!1},{nome:"Charlotte Bronte",epoca:"restaurazione",ruolo:"Scrittore",sesso:!1,vivo:!1,nazione:"Inghilterra",nobel:!1},{nome:"Emily Dickinson",epoca:"restaurazione",ruolo:"Poeta",sesso:!1,vivo:!1,nazione:"America",nobel:!1},{nome:"Frida Kahlo",epoca:"contemporanea",ruolo:"Artista",sesso:!1,vivo:!1,nazione:"Messico",nobel:!1},{nome:"Pablo Picasso",epoca:"restaurazione",ruolo:"Artista",sesso:!0,vivo:!1,nazione:"Spagna",nobel:!1,riconoscimento:!1},{nome:"Saffo",epoca:"avanti cristo",ruolo:"Poeta",sesso:!1,vivo:!1,nazione:"Grecia",nobel:!1,riconoscimento:!1},{nome:"William Shakespeare",epoca:"rinascimentale",ruolo:"Scrittore",sesso:!0,vivo:!1,nazione:"Inghilterra",nobel:!1,riconoscimento:!1},{nome:"Macchiavelli",epoca:"rinascimentale",ruolo:"Scrittore",sesso:!0,vivo:!1,nazione:"Italia",nobel:!1,riconoscimento:!1},{nome:"Virgilio",epoca:"avanti cristo",ruolo:"Poeta",sesso:!0,vivo:!1,nazione:"Italia",nobel:!1,riconoscimento:!1},{nome:"Enrique Iglesias",epoca:"contemporanea",ruolo:"Musicista",sesso:!0,vivo:!1,nazione:"Spagna",nobel:!1,riconoscimento:!0},{nome:"Hideo Kojima",epoca:"contemporanea",ruolo:"Scrittore",sesso:!0,vivo:!0,nazione:"Giappone",nobel:!1,riconoscimento:!1},{nome:"Alexandre Dumas",epoca:"restaurazione",ruolo:"Scrittore",sesso:!0,vivo:!1,nazione:"Francia",nobel:!1,riconoscimento:!1},{nome:"J. K. Rowling",epoca:"contemporanea",ruolo:"Scrittore",sesso:!1,vivo:!0,nazione:"Inghilterra",nobel:!1,riconoscimento:!0},{nome:"Pitagora",epoca:"avanti cristo",ruolo:"Matematico",sesso:!0,vivo:!1,nazione:"Grecia",nobel:!1,riconoscimento:!1},{nome:"Ferdinand Porsche",epoca:"restaurazione",ruolo:"Ingegnere",sesso:!0,vivo:!1,nazione:"Repubblica Ceca",nobel:!1,riconoscimento:!0},{nome:"Antonin Leopold Dvorak",epoca:"restaurazione",ruolo:"Musicista",sesso:!0,vivo:!1,nazione:"Repubblica Ceca",nobel:!1,riconoscimento:!1},{nome:"Murasaki Shibiku",epoca:"medioevo",ruolo:"Scrittore",sesso:!1,vivo:!1,nazione:"Giappone",nobel:!1,riconoscimento:!1},{nome:"Enzo Ferrari",epoca:"contemporanea",ruolo:"Ingegnere",sesso:!0,vivo:!1,nazione:"Italia",nobel:!1,riconoscimento:!0}],f=document.getElementById("listaPers1"),m=document.getElementById("listaPers2");let i=[],c=0;console.log(s);for(let a of s)if(i.push(a.nome),s.splice(c,1),c>=s.length/2)break;function u(a){let n="";for(let r of a)n+="<li>"+r+`</li>
`;return n}f.innerHTML=u(i);i=[];for(let a of s)i.push(a.nome);m.innerHTML=u(i);