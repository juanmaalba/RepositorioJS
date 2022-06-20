function crearMenu()
{
     let opciones = ["Iniciar sistema","Listar Bancos", "Agregar banco", "Buscar banco", "Recomiendanos"]
     opciones.forEach((opcion)=>{
     const boton = document.createElement("button");
     boton.innerHTML=opcion;

     if(opcion === "Iniciar sistema")
     {
         boton.addEventListener("click", ()=>{
             ingresarSistema();
         })
     }
     else if(opcion === "Listar Bancos")
     {
        boton.addEventListener("click", ()=>{
            listarBancos(bancos);
        })
     }
     else if(opcion === "Agregar banco")
     {
        boton.addEventListener("click", ()=>{
            agregarBanco();
            listarBancos(bancos);
        })
     }
     else if(opcion==="Buscar banco")
     {
        boton.addEventListener("click", ()=>{
            let filtrados = buscarBanco();
           
            listarBancos(filtrados);

        })
     }
     else if(opcion==="Recomiendanos")
     {
        boton.addEventListener("click", ()=>{
            sweetAlert();
        })
     }
     
     document.body.appendChild(boton);
     });
}

function agregarBanco()
{
    let id = Number(prompt('Ingrese el id:'))
    let nombre = prompt('Ingrese nombre del banco:')
    let monto =Number(prompt('Ingresa el monto que tiene depositado:'))
    let banco = new Banco(id,nombre,monto)
    bancos.push(banco)
    alert('Banco Ingresado correctamente')
    localStorage.setItem('Bancos', JSON.stringify(bancos))
}

function listarBancos(listaBancos)
{
   let miLista = document.querySelector("#listaBancos");
   if(!miLista)
   {
     miLista = document.createElement("table");
     miLista.setAttribute("id", "listaBancos");
   }
   miLista.innerHTML="";

   const encabezado = document.createElement("tr");
   
   const tdId = document.createElement("th");
   tdId.innerHTML="ID";
   encabezado.appendChild(tdId);

   const tdNombre = document.createElement("th");
   tdNombre.innerHTML="Nombre";
   encabezado.appendChild(tdNombre);

   const tdMonto = document.createElement("th");
   tdMonto.innerHTML="Monto:";
   encabezado.appendChild(tdMonto);

   const tdAcciones = document.createElement("th");
   tdAcciones.innerHTML="Acciones";
   encabezado.appendChild(tdAcciones);

   miLista.appendChild(encabezado)
   
   listaBancos.forEach((banco)=>{
       const nodotr = document.createElement("tr");
       let nodotd = document.createElement("td");
       nodotd.innerHTML=`${banco.id}`;
       nodotr.appendChild(nodotd)
       
       nodotd = document.createElement("td");
       nodotd.innerHTML=`${banco.nombre}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`${banco.monto}`;
       nodotr.appendChild(nodotd);

       nodotd = document.createElement("td");
       nodotd.innerHTML=`Borrar | Editar`;
       nodotr.appendChild(nodotd);

       miLista.appendChild(nodotr);
   });

   document.body.appendChild(miLista);
}
function sweetAlert()
{
    
    Swal.fire({
    title: 'Quieres recomendarnos?',
    text: "Puedes darnos 5 estrellas en google!",
    
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!! 5 estrellas',
    cancelButtonText: 'A trabajar más..',
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire(
        'Confirmado! ',
        'Nos otorgaste 5 estrellas.',
        'success'
        )
    }
    
    })
    
}