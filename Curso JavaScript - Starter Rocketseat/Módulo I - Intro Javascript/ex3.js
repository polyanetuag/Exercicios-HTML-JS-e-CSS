// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano(true/false) caso existe ou não

var lista = ["ReactJS","React Native", "JavaScripto"];

function temHabilidade(listaDeHabilidade) {
    var TemJavascript = listaDeHabilidade.indexOf("JavaScript")
    console.log(TemJavascript)
    if (TemJavascript >= 0) {
        return true
    } else {
        return false
    }
}

console.log(temHabilidade(lista))       // true ou false
if (temHabilidade(lista)) {
    console.log("Tem javascript")
}else {
    console.log("Não Tem javascript")

}
