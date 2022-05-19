// Simulador de cuotas sobre tarjeta de credito 

//  Usuario: JuanAlba
//  Contraseña: 1234

// Ingresar al usuario y contraseña
class Banco{
    constructor(id,nombre)
    {
        this.id = id
        this.nombre = nombre
    }
}
const bancos = [];

mostrarMenuBancos();


function mostrarMenuBancos()
{
    seleccion = 0
    while(seleccion!== 6)
    {
        let seleccion = Number(prompt(`Seleccione una opcion de banco a trabajar:
        1. Agregar banco
        2. Eliminar banco
        3. Modificar bancos
        4. Listar bancos
        5. Ingresar a sistema
        6. Salir`))

        switch(seleccion)
        {
            case 1:
                {
                    agregarBanco();
                    break;
                }
            case 2:
                {
                    eliminarBanco();
                    break;
                }
            case 3:
                {
                    modificarBanco();
                    break;
                }
            case 4:
                {
                    listarBancos();
                    break;
                }
            case 5:
                {
                    ingresarSistema();
                    break;
                }
            default:
                {
                    alert('Opcion Invalida')
                    break;
                }
        }

    }
    
    
}
//                    FUNCIONES                        //

function agregarBanco()
{
    let id = prompt('Ingrese el id:')
    let nombre = prompt('Ingrese nombre del banco:')

    let banco = new Banco(id,nombre)
    bancos.push(banco)
    
}

function nuevaCompra(){
    let precio = Number(prompt('Ingrese monto de compra:'))
    let cuotas = Number(prompt('Ingrese cantidad de cuotas:'))
    let recargo = Number(prompt('Ingrese % recargo de compra:'))
    let resultado = (precio*(1.+(recargo/100)))/ cuotas
    alert (resultado)
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
                3. Salir `))
                
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
