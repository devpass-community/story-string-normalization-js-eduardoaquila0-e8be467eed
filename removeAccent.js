
function removeAccent(str) {
    return str.normalize('NFD').replace(/[\u0300-\u36f]/g, "")
}

module.exports = removeAccent;


/* 
var frase = "á ã ê ò";

var semAcento = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, "");


console.log(semAcento);
*/