// Simulador de cuotas sobre tarjeta de credito 

// Ingresar al usuario y contraseña

const usuario = prompt('Ingresar nombre de usuario:')
if(usuario === 'JuanAlba'){
    alert('Usuario encontrado')
}
else{
    alert('Usuario no encontrado')
    const usuario = prompt('Ingresar nombre de usuario:')
}
const psw = prompt('Ingresar contraseña:')
if(psw === '1234'){
    alert('Contraseña aceptada, bienvenido.')
    
}
else{
    alert('Contraseña incorrecta')
    const psw = prompt('Vuelve a ingresar contraseña:')
}

// Menu  
//HACER FUNCION DE MENU PARA NO REPETIR CODIGO
let opcion = Number(prompt(`Ingrese el numero de opcion que desea:
                                        1. Imprimir resumen tarjeta
                                        2. Calcular nueva compra
                                        3.  `))

if (opcion=== 1){

}
else if (opcion===2){

}
else if (opcion===3){
        
}
else {
    alert(`Opcion invalida, inserte un numero que 
            se encuentre dentro del menu.`)
}
// calculo de nueva compra
