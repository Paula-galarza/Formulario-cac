const valorTickets= 200;


let descuentoEstudiante= 80;
let descuentoTrainee= 50;
let descuentoJunior= 15;

let nombre= document.getElementById ("nombre");
let apellido= document.getElementById ("apellido");
let email= document.getElementById ("email");
let cantidadTickets= document.getElementById ("cantidadTickets");
let categoria= document.getElementById ("categoria");



function total_a_pagar()
{


    let totalValorTickets=(cantidadTickets.value*valorTickets);
if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
    }
else if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
    }
    else if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
    }
else if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
    }
    
    totalPago.innerHTML=totalValorTickets;

}

function reset_total_a_pagar()
{
    
    totalPago.innerHTML="Total a pagar: $";
}

resumen.addEventListener("click",total_a_pagar);

borrar.addEventListener("click",reset_total_a_pagar)

