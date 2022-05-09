// Simulador de cuotas sobre tarjeta de credito 

//  Usuario: JuanAlba
//  Contraseña: 1234

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

//MENU

let opcion = Number(prompt(`Ingrese el numero de opcion que desea:
1. Imprimir resumen tarjeta
2. Calcular nueva compra
3. Salir `))

if (opcion === 1){
    alert('No existen resumenes en estos momentos.')
}
else if (opcion===2){
    nuevaCompra();
    breack
}
else if (opcion===3){
    breack
}
else {
    alert(`Opcion invalida, inserte un numero que 
            se encuentre dentro del menu.`)
}
// calculo de nueva compra

function nuevaCompra(){
    let precio = Number(prompt('Ingrese monto de compra:'))
    let cuotas = Number(prompt('Ingrese cantidad de cuotas:'))
    let recargo = Number(prompt('Ingrese % recargo de compra:'))
    let resultado = (precio*(1.+(recargo/100)))/ cuotas
    alert (resultado)
}
