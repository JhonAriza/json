async function obtenerDatos(){
    // llama los datos atraves de la url
    const response = await  fetch("http://localhost/json/datos.json");
    // aca se envia la informacion en formato text
    const json = await response.text();
console.log(json);


    // trasforma texto a formato json
    //  console.log(JSON.parce(json));


// // esta funion es para pasar de un json a formato text
       console.log(JSON.stringify(json))


//     //  esta funcion es para mostrar un propiedad en consola
     console.log(json.nombre);
       console.log(json.direccion.colonia);
     json.experiencia.forEach(element => {
         console.log(element.empresa)
        
    });
}obtenerDatos();