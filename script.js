var txtTarefaAdicionar = document.querySelector('#txtTarefaAdicionar');
var opçõesAdicionar = document.querySelector('#opçõesAdicionar');
var btnAdicionar = document.querySelector('#btnAdicionar');

var txtTarefaRemover = document.querySelector('#txtTarefaRemover'); 
var opçõesRemover = document.querySelector('#opçõesRemover');
var btnRemover = document.querySelector('#btnRemover');

var listaFaculdade = document.querySelector('#listaFaculdade');
var listaDiaAdia = document.querySelector('#listaDiaAdia');


btnAdicionar.onclick = function(){



    if(opçõesAdicionar.value == 'faculdade')
    {
        var tarefa = txtTarefaAdicionar.value;
        
        var item = document.createElement('li');

        item.appendChild(document.createTextNode(tarefa));

        listaFaculdade.appendChild(item);
    } else {
        var tarefa = txtTarefaAdicionar.value;

        var item = document.createElement('li');

        item.appendChild(document.createTextNode(tarefa));

        listaDiaAdia.appendChild(item);
    }
}

btnRemover.onclick = function(){

    
    var lis = document.getElementsByTagName('li');


    for (let i = 0; i < lis.length; i++) {

        if(txtTarefaRemover.value == lis[i].innerHTML){
            if(opçõesRemover.value == 'faculdade'){
                listaFaculdade.removeChild(lis[i]);
                break;
            } else if (opçõesRemover.value == 'diaAdia'){
                listaDiaAdia.removeChild(lis[i]);
                break;
            }
        }
        
    }
    
}