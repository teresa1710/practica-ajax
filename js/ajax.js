var btnCargar = document.getElementById('cargar');

function cargarAjax(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "hola.txt", true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var contenido = document.getElementById('contenido');
            contenido.innerHTML = xhr.responseText;
        }
    }

    xhr.send();
}

btnCargar.addEventListener('click', cargarAjax);