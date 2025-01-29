/*******************************/
/***********FETCH API***********/
/***************************** */

/*Fetch API: en javascript permite hacer solicitudes HTTP de manera sencilla
utilizamos promesas, se una principalmente para hacer peticiones a un servidor*/

/*METODO GET*/
// fetch("https://jsonplaceholder.typicode.com/posts/1") //URL de la API a consumir
// .then(response => response.json()) //convertimos la respuesta de la api a formato a JSON    
// .then(data => console.log(data)) //mostramos los datos en consola
// .catch(error => console.error("Error", error)); //capturamos el error en caso de que exista


/*METODO POST*/
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     Header: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "Nuevo Post",
//         body: "Contenido del post",
//         userId: 1
//     })
// })
// .then(response => response.json()) //convertimos la respuesta de la api a formato a JSON    
// .then(data => console.log("Respuesta: ", data)) //mostramos los datos en consola
// .catch(error => console.error("Error", error)); //capturamos el error en caso de que exista



/*Pero a traves de funciones async/await */
// async function obtenerDatos() {
//     try {
//         let response = await 
//         fetch("https://jsonplaceholder.typicode.com/posts/3");
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error", error);
//     }
// }
// console.log("Datos Obtenidos", obtenerDatos()); //llamamos a la funcion para que se ejecute

/* Cuando utilizamos Fetch Api
Cuando necesitamos hacer solicitudes HTTP al navegador
para interactuar con apis rest(JSON placeholder, feirebase, etc)*/


fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    const lista = document.getElementById("users");
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = "usuario 1:" + user.name;
        lista.appendChild(li);
        
    });
})
.catch(error => console.error("Error", error)); 