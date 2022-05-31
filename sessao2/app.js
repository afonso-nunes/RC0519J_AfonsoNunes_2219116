document.addEventListener('DOMContentLoaded', () =>{

    var dados = [];
    function Tarefa(){
        var task = document.getElementById('texto').value;

var check = document.createElement(input="checkbox");

        var tabBody = document.getElementById('tabDados');

        var tabRow = document.createElement('TR');

        var tabTexto = document.createElement('TD');
        tabTexto.innerText = task;

        var tabCheck = document.createElement('TD');
        tabCheck.inputMode = check;

        /*var tabCheck = document.createElement('TD');
        tabCheck.innerHTML = 
*/

        var item = {
            'id' : dados.length,
            'task' : texto,
          //  'check' : checkk,
        };

        dados.push(item);

        tabRow.appendChild(tabTexto);

        tabBody.appendChild(tabRow);
    }

    document.getElementById("botao").addEventListener("click", Tarefa);
});