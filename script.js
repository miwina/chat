//console.log(2)
const API="https://chat2022.marinadrabovica.repl.co"
let zina=document.querySelector('.manaZina');
let zinas=document.querySelector('.chataZinas');
let vards=document.querySelector('.vards');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');
    zinas.innerHTML=zinas.innerHTML + '<br/>'+zina.value;
    fetch(API +'/sutit/'+vards.value+'/'+zina.value);

}

async function ieladetChataZinas()
{
    let datiNoServera=await fetch(API + '/lasit');
    let dati =await datiNoServera.text();
    //console.log(dati);
    zinas.innerHTML=dati;
}
async function ieladetChataZinasJson()
{
    let datiNoServera=await fetch(API + '/lasit');
    let dati =await datiNoServera.json();
    //console.log(await dati[0]['zina'])
    zinas.innerHTML='';

    let i=0; 
    while (i<await dati.length){
        //console.log(i);
        let laiks='[<i>'+'????     '+'</i>]';
        if ("laiks" in dati [i]){
        laiks='[<i>'+dati[i]['laiks']+'</i>]';
        }
        
        zinas.innerHTML=zinas.innerHTML+ laiks +dati[i]['vards']+': '+dati[i]['zina']+'<br/>';
        i=i+1;
    }
    zinas.scrollTop=zinas.scrollHeight;

    //console.log(await dati)
}
setInterval(ieladetChataZinasJson,1000)
//setInterval(ieladetChataZinas,1000);
