function crearMenu()
{
     let opciones = ["Iniciar sistema","Listar Bancos", "Agregar banco", "Buscar banco"]
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
            listarBancos();
        })
     }
     else if(opcion==="Buscar banco")
     {
        boton.addEventListener("click", ()=>{
            let filtrados = buscarBanco();
           
            listarBancos(filtrados);

        })
     }
     
     document.body.appendChild(boton);
     });
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