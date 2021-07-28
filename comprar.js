// valor x 1 pc
let valor = 50000;
// Descuentos 
let des15 = 15;
// Total
let valorT = 0;
// cantidad 
let totalPagar = 0;

function calcularDescuento(cantidad){

  let subtotal = valor * cantidad
  let descuento = 0

  if(subtotal >= 600000){
    descuento = des15
  }

  return descuento

}

function comprar(){
    swal.fire({
       
    title: '<span class="rojo"> ¿Seleccione la cantidad de meses que deseas suscribirte?',
    background: `rgba(0, 0, 0, 0.600`,
    icon: 'question',
    confirmButtonText: 'Calcular',
    backdrop: true,
    footer: '<span class="rojo">Si decides comprar la suscribcion por una año tendras un descuento del 15%</span>',
    input: 'text',
    inputPlaceholder: 'Cantidad',
    inputValue: '',      
    }
    ).then(result => {
      console.log(result.value)

      let cantidad = result.value
      let descuento = calcularDescuento(cantidad)
      let subtotal = (valor * cantidad) 
      let valor_descuento = subtotal / 100 * descuento
      let totalPagar = subtotal - valor_descuento

      swal.fire({

        title: `El total de su compra es de: $${subtotal} y su descuento es de: $${valor_descuento}, ${descuento}% total a pagar: $${totalPagar}` , 
      
        showCancelButton: true,
        confirmButtonText: `Comprar`,

      })

    })

}
