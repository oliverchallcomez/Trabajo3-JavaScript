//nombre de los juguetes 
const juguetes = {
  Monopolio: 70.99,
  Ajedrez: 78.99,
  Lego: 100.99,
  Dama: 58.50,
  Laberinto: 35.00,
};

//funcion para sacar juguetesseleccionados, precio, subtotal
function actualizarRecibo(cantidad) {
  const jugueteSeleccionado = document.getElementById('producto').textContent;
  const precio = juguetes[jugueteSeleccionado];
  const subtotal = cantidad * precio;


  
// condicional if y else, para comparar la cantidad igresado por teclado
  if (cantidad < 10) {
    descuento = subtotal * 0.035;
  } else if (cantidad >= 10 && cantidad <= 20) {
    descuento = subtotal * 0.07;
  } else if (cantidad > 20) {
    descuento = subtotal * 0.095;
  } else {
    descuento = 0;
  }
  
  // operacion de descuento de sub total menos descuento
  const total = subtotal - descuento;

  //codigo de impresion de cantidad precio, cantidad, dubtotal, descuento, total
  document.getElementById('precio').textContent = precio.toFixed(2);
  document.getElementById('cantidad').textContent = cantidad;
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('descuento').textContent = `-${descuento.toFixed(2)}`;
  document.getElementById('total').textContent = total.toFixed(2);
}

//codigo para pedir datos que ingresen por teclado
const productoIngresado = prompt('Selecione un producto:');
const cantidadIngresada = prompt('Ingrese cantidad:');

//condicional de comparacion del nombre de producto y cantida si existe o no para volver a ingresar
if (juguetes.hasOwnProperty(productoIngresado)) {

  document.getElementById('producto').textContent = productoIngresado;
  document.getElementById('cantidad').textContent = cantidadIngresada;


  actualizarRecibo(parseInt(cantidadIngresada));
} else {
  alert('El producto ingresado no está en el catálogo. El recibo no se actualizará.');
}