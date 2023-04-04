let producto = prompt("¿Qué producto estás buscando: Suscripcion o Clase?");
const PRODUCTO_UNO = "SUSCRIPCION";
const PRODUCTO_DOS = "CLASE";
let productoClases = '';
let productoSuscripciones = '';
let mensual = 20; 
let semestral = 18;
let anual = 16; 
let paqueteTres = 10;
let paqueteCinco = 16;
let paqueteSiete = 24;
let paqueteNueve = 30;

if(producto.toUpperCase() == PRODUCTO_UNO || producto.toLowerCase() == PRODUCTO_UNO){
    productoSuscripciones = prompt("Elige entre las siguientes opciones: Mensual, Semestral, Anual. O bien el porcentaje deseado para cada suscripción, respectivamente: 20, 18, 16.");
    console.log("Elige entre las siguientes opciones: Mensual, Semestral, Anual. O bien el porcentaje deseado para cada suscripción, respectivamente: 20, 18, 16.");
    switch(productoSuscripciones){
        case "mensual":
        case "20":
            alert("Has seleccionado la suscripción Mensual. Precio: " + mensual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            console.log("Has seleccionado la suscripción Mensual. Precio: " + mensual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            break;
        case "semestral":
        case "18":
            alert("Has seleccionado la suscripción Semestral. Precio: " + semestral + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            console.log("Has seleccionado la suscripción Semestral. Precio: " + semestral + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            break;
        case "anual":
        case "16":
            alert("Has seleccionado la suscripción Anual. Precio: " + anual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            console.log("Has seleccionado la suscripción Anual. Precio: " + anual + " " + "dólares." + " " + "Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos.");
            break;    
        default:
            prompt("Suscripción ingresada inexistente. Por favor, intente nuevamente.");
    }
} else if(producto.toUpperCase() == PRODUCTO_DOS || producto.toLowerCase() == PRODUCTO_DOS){
    productoClases = Number(prompt("Elige entre las siguientes opciones: 3, 5, 7, 9. O bien el porcentaje deseado para cada paquete de clases, respectivamente: 17, 20, 15, 17."));
    console.log("Elige entre las siguientes opciones: 3, 5, 7, 9. O bien el porcentaje deseado para cada paquete de clases, respectivamente: 17, 20, 15, 17.");
    switch(productoClases){
        case 3:
            alert("Has seleccionado el paquete de " + productoClases + " " + "por el precio de " + paqueteTres + " " + "dólares." + " ");
            console.log("Has seleccionado el paquete de " + productoClases+ "por el precio de " + paqueteTres + " " + "dólares." + " ");
            break;
        case 5:
            alert("Has seleccionado el paquete de " + productoClases +  " " + "por el precio de " + paqueteCinco + " " + "dólares." + " ");
            console.log("Has seleccionado el paquete de " + productoClases+ "por el precio de " + paqueteCinco + " " + "dólares." + " ");
            break;
        case 7:
            alert("Has seleccionado el paquete de " + productoClases + " " + "por el precio de " + paqueteSiete + " " + "dólares." + " ");
            console.log("Has seleccionado el paquete de " + productoClases + "por el precio de " + paqueteSiete + " " + "dólares." + " ");
            break;
        case 9:
            alert("Has seleccionado el paquete de " + productoClases +  " " + "por el precio de " + paqueteNueve + " " + "dólares." + " ");
            console.log("Has seleccionado el paquete de " + productoClases + "por el precio de " + paqueteNueve + " " + "dólares." + " ");
            break;    
        default:
            productoSuscripciones = "Clase ingresada inexistente. Por favor, intente nuevamente."
    }
  } else if(producto !== PRODUCTO_UNO && producto !== PRODUCTO_DOS){
        prompt("Ha ingresado información inválida. Por favor intente nuevamente.");
}
