const g = 10;
var vel
var tempo;
var hmax;
var res;

function resultado() {

    vel = Number(document.getElementById('v0').value)
    res = document.getElementById('res')
    tempo = (vel/g);
    hmax = (vel**2)/(2*g); 
    
    res.innerHTML=`<p>Seu tempo de subida será iguál a ${tempo} segundo(s) e sua altura máxima será de ${hmax} metro(s).</p>`

}







