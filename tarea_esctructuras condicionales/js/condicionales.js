 
    var nombre = prompt("Hey ¿Cual es tu Nombre?");
    var edad = prompt ("Hey  ¿Cual es tu talla de ROPA?");

switch (nombre) {
    case "RICHIE":
        document.write("> HEY RICHIE")
        break;
    case "RICHARD":
        document.write("> HEY RICHARD");
        break;
    default:
        document.write("> HEY "+nombre);
        break;
}
if (edad >= 26) {
    document.write(" BIENVENIDO A LA TIENDA ZARA");
    
} else{     
    document.write(" NO PUEDES COMPRAR AUN EN ESTE SITIO NO TIENES LOS REQUISITOS SUFICIENTES , LO SENTIMOS ");
};
