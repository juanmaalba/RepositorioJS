// Simulador de cuotas sobre tarjeta de credito 

//  Usuario: JuanAlba
//  Contraseña: 1234

class Banco{
    constructor(id,nombre,monto)
    {
        this.id = id
        this.nombre = nombre
        this.monto = monto
    }
}
const banco1 = new Banco(1, "Galicia", 10.000)
const banco2 = new Banco(2, "Macro", 15.000)
const banco3 = new Banco(3,"Nacion", 0)

const bancos = [banco1,banco2,banco3];


mostrarMenuBancos();

function mostrarMenuBancos()
{
    seleccion = 0
    while(seleccion !== 7)
    {
        seleccion = Number(prompt(`Seleccione una opcion de banco a trabajar:
        1. Agregar banco
        2. Buscar banco
        3. Eliminar banco
        4. Modificar bancos
        5. Listar bancos
        6. Ingresar a sistema
        7. Salir`))

        switch(seleccion)
        {
            case 1:
                {
                    agregarBanco();
                    break;
                }
            case 2:
                {
                    buscarBanco();
                    break;
                }
            case 3:
                {
                    eliminarBanco();
                    break;
                }
            case 4:
                {
                    modificarBanco();
                    break;
                }
            case 5:
                {
                    listarBancos();
                    break;
                }
            case 6:
                {
                    ingresarSistema();
                    break;
                }
            default:
                {
                    alert("Opcion Invalida")
                    break;
                }
        }

    }
    
}
//                    FUNCIONES                        //

function agregarBanco()
{
    let id = Number(prompt('Ingrese el id:'))
    let nombre = prompt('Ingrese nombre del banco:')
    let monto =Number(prompt('Ingresa el monto que tiene depositado:'))
    let banco = new Banco(id,nombre,monto)
    bancos.push(banco)
    
}


function buscarBanco(){
    let nombre = prompt('Ingresa el nombre que quieres buscar')
    let encontrado = bancos.filter((banco) => usuario.nombre.toLowerCase().indexOf(nombre.toLocaleLowerCase())!==-1)
    console.log('Se encontro el usuario:', encontrado)
}


function eliminarBanco(){
    let id = Number(prompt('Ingrese el id a eliminar:'))
    let encontrado = bancos.find((banco)=>banco.id === id)
    if(!encontrado)
    {
        alert('Banco no encontrado')
    }
    else{
        let index = bancos.indexOf(encontrado) // capturar indice
        bancos.splice(index,1) // 1 elemento

    }
}


function modificarBanco(){
    let id = Number(prompt('Ingrese el id del banco que desea modificar:'))
    let existe = bancos.some((banco) => banco.id === id)
    if(existe)
    {
        let encontrado = bancos.find((banco)=>banco.id === id)
        let nuevoMonto = Number(prompt('Ingrese nuevo monto:'))

        encontrado.monto = nuevoMonto
        alert('Usuario modificado con exito')

    }
    else
    {
        alert('Usuario no encontrado')
    }
}


function listarBancos(){
    bancos.forEach(banco => {
        console.log(banco)
    });
}


function ingresarSistema()
{   
    const usuario = prompt('Ingresar nombre de usuario:')
    if(usuario === 'JuanAlba'){
        alert('Usuario encontrado')
    }
    else{
        alert('Usuario no encontrado')
        const usuario = prompt('Ingresar nombre de usuario:')
    }
    const psw = prompt('Ingresar contraseña:')
    if(psw === '1234')
        {
            alert('Contraseña aceptada, bienvenido.')

            let opcion = 0
            while(opcion !== 3)
            {
                opcion = Number(prompt(`Ingrese el numero de opcion que desea:
                1. Imprimir resumen tarjeta
                2. Calcular nueva compra
                3. Volver a menu de bancos
                                             `))
                
                switch(opcion){
                    
                    case 1: 
                        {
                            alert('No existen resumenes en estos momentos.')
                        }
                    case 2:
                        {
                            nuevaCompra();
                        }
                    default:
                        {
                            alert('Opcion Invalida')
                        }
            }
        }
    }
}


function nuevaCompra(){
    let precio = Number(prompt('Ingrese monto de compra:'))
    let cuotas = Number(prompt('Ingrese cantidad de cuotas:'))
    let recargo = Number(prompt('Ingrese % recargo de compra:'))
    let resultado = (precio*(1.+(recargo/100)))/ cuotas
    alert (resultado)
}