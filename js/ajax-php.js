var btnCargar = document.getElementById('cargar');

function cargarAjax(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "servidor.php", true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var eljson = JSON.parse(xhr.responseText);
            var contenido = document.getElementById('contenido');
            contenido.innerHTML = eljson.frontend;
        }
    }

    xhr.send();
}

btnCargar.addEventListener('click', cargarAjax);