var jogador
var equipe
var norepeat
function cadastrar() {
    jogador = document.getElementById('jogador').value
    equipe = document.getElementById('equipe').value
    localStorage.setItem(jogador, jogador + ' - ' + equipe)
    alert(localStorage.getItem(jogador))
}
function mostrarValor(){
    if(localStorage.getItem(jogador) != norepeat){
        norepeat = localStorage.getItem(jogador)
    var node = document.createElement("li");
    var textnode = document.createTextNode(localStorage.getItem(jogador))
    node.appendChild(textnode)
    document.getElementById("listarTimes").appendChild(node)
    } else {
    alert("Valor já cadastrado")
    } 
}