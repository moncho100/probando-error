
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

// Genero un saludo
console.log("Bienvenido " + nombre + " " + apellido + " " + "a la mejor Libreria de Argentina")

class Producto{
    constructor(id, nombre,precio, autor, editorial, genero){
        this.id = id
        this.nombre = nombre;
        this.precio = precio;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
    }

    //Con este metodo muestro los Libros
    mostrarProducto() {
        return (
        "id: " +
        this.id +
        " "+
        "autor: " +
        this.autor +
        " Nombre: " +
        this.nombre +
        " Precio: " +
        this.precio + 
        " " +
        "Editorial: " +
        this.editorial +
        " " +
        "Genero: " +
        this.genero +
        "\n"
        );
    }

}

//Genero el array de libros(productos)
let productos = [
    new Producto(1,"Papel Pintado",1000, "Diego Giacomini", "Galerna", "Política y Economía"),
    new Producto(2,"La Revolucion De La Libertad",1000, "Diego Giacomini","Galerna", "Política Y Economía"),
    new Producto(3,"Libertad-Libertad-Libertad",1000,"Milei Giacomini","Galerna", "Política"),
    new Producto(4,"Hacia una nueva Libertad",1000,"Rothbard","Unión Editorial","Filosofía, Política, Liberalismo, Economía"),
    new Producto(5,"Que le hizo el gobierno a nuestro dinero",1000,"Rothbard","Unión Editorial","Ciencias económicas"),
    new Producto(6,"La anatomia del estado",1000,"Rothbard","Unión Editorial","Economía, Ciencias sociales"),
    new Producto(7,"Competencia y empresarialidad",1000 ,"Israel M. Kirzner","Unión Editorial","Ciencias económicas"),
    new Producto(8,"Liberalismo - La tradición clásica",1000 ,"Ludwig von Mises","Unión Editorial","Ciencias económicas, Ciencias Sociales, Política"),
    new Producto(9,"Política económica",1000 ,"Ludwig von Mises","Unión Editorial","Ciencias económicas, Economía, Política"),
    new Producto(10,"Crítica del intervencionismo",1000 ,"Ludwig von Mises","Unión Editorial","Política, Economía"),
    new Producto(11,"Autobiografía de un liberal",1000 ,"Ludwig von Mises","Unión Editorial","Ciencias sociales y humanísticas"),
    new Producto(12,"La mentalidad anticapitalista",1000 ,"Ludwig von Mises","Unión Editorial","Ciencias sociales y humanísticas, Economía"),
]


let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${productos.id}</h3>
                        <p> Nombre: ${productos.nombre}</p>
                        <p> Autor: ${productos.autor}</p>
                        <p>Editorial: ${productos.editorial}</p>
                        <p>Genero: ${productos.genero}</p>
                        <b> $ ${productos.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);

//Genero un array de autores
let autores = ["Diego Giacomini", "Milei Giacomini","Rothbard", "Ludwig von Mises", "Israel M. Kirzner"];

// Genero el arrays, metiendo los objetos adentro
const productosEnCarro=[];


//Uso esta variable para si el usuario no quiere continuar la compra
let autor = ""

//Este ciclo se va a repetir hasta que el usuario, escriba finalizar o enter directamente
while(autor != "Finalizar" && autor != null) {
    let string = autores.join ("\n");//Genero el string de autores uno abajo de otro
    autor = prompt(
        'Ingrese un autor para continuar comprando o ingrese "Finalizar" para terminar sus compra/s: \n(' + string + ")"
    );
   
    //
    if (autor != "Finalizar" && autor != null) {
       let productosFiltradoPorAutor = productos.filter(
        (item) => item.autor == autor
        );

        //Genero una lista con todos los libros de ese autor
        let cartel = "";
        for (let i = 0; i < productosFiltradoPorAutor.length; i++) {
            cartel += productosFiltradoPorAutor[i].mostrarProducto();
        }

        //Genero una lista de los libros del autor seleccionado anteriormente
        let idSeleccionado = parseInt(
            prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel)
        );


        let productoParaCarro = productosFiltradoPorAutor.find(
            (item) => item.id == idSeleccionado
            );


        if (productoParaCarro) {
                productosEnCarro.push(productoParaCarro);                
            }            
    }    
}

if (productosEnCarro.length > 0) {
    alert('Te invitamos a Iniciar sesion o Registrarte para terminar tu compra');
    let nombre = prompt('ingrese su nombre');
    let apellido = prompt('ingrese su apellido')
    let mail = prompt('ingrese su email');

    //Creo una funcion para finalizar la compra
function comprar(nombre, apellido, email, productosEnCarro) {
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);/*
    Uso el metodo reduce para pasar el precio final de la compra/s */
    alert("Gracias" +" " + nombre + " " + apellido + " por tu compra. \n Total: $" + cant + "\n En breve te llegara a tu email: " + email + " " +  "Cuanto tiempo tardara el envio" );
    /*Llamo un alert para que muestre la confirmacion de compra */
}

//Llamo a la funcion
comprar(nombre, apellido, mail, productosEnCarro);}




