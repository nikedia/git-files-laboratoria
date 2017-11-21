
//Creación de Nodos + Añadir Nodos  con appendChild + Eliminar con removeChild
    var parrafo = document.createElement('p');
    var title = document.createElement('h1');
    var text = document.createTextNode('ohhhhh');
    document.body.appendChild(parrafo);
    document.body.appendChild(title);
    parrafo.appendChild(text);
    //document.body.removeChild(title);
