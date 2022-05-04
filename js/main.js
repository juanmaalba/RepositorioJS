//Seleccion de seguros
let seguro = prompt(`Seleccionar producto de calidad:
                                1. Premium
                                2. Avanzado
                                3. Medio
                                4. Bajo
                                5. Salir` );
while(seguro != 'Salir'){
    switch (seguro){
        case 'Premium':
            alert('Usted adquirio el paquete Premium');
            break
        case 'Avanzado':
            alert('Usted adquirio el paquete Avanzado');
            break
        case 'Medio':
            alert('Usted adquirio el paquete Medio');
            break
        case 'Bajo':
            alert('Usted adquirio el paquete Bajo');
            break
        default:
            alert('No es una opcion valida')
    }
    seguro = prompt(`Seleccionar producto de calidad:
                                1. Premium
                                2. Avanazdo
                                3. Medio
                                4. Bajo
                                5. Salir` );
}

// Contar hasta numero
let numero = Number(prompt('Ingresar un numero:'))
for (let i = 1; i<=numero; i+=1){
    console.log(numero);
}