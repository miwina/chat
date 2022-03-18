//console.log(2)
const API="https://chat2022.marinadrabovica.repl.co"
let zina=document.querySelector('.manaZina');
let zinas=document.querySelector('.chataZinas');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');
    zinas.innerHTML=zinas.innerHTML + '<br/>'+zina.value;

}

async function ieladetChataZinas()
{
    let datiNoServera=await fetch(API + '/lasit');
    let dati =await datiNoServera.text();
    //console.log(dati);
    zinas.innerHTML=dati;
}
<<<<<<< HEAD
setInterval(ieladetChataZinas,1000)
=======
>>>>>>> 787ca92929bc37e7d10bbaa360aeb489103f9d1f
