const coupons = [
  {
      name: "JuanDC_es_Batman",
      discount: 15,
  },
  {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
  },
  {
      name: "es_un_secreto",
      discount: 25,
  },
  {
    name: "es_el_mejor_curso_practico_de_JavaScript",
      discount: 85,
  },
  {
    name: "nunca_pares_de_aprender",
      discount: 99,
  },
];

const inputPrice = document.getElementById('InputPrice');
const inputDiscount = document.getElementById('InputDiscount');
const inputCoupon = document.getElementById('InputCoupon');
const resultP = document.getElementById('resultPrice')

function calcularPrecioConDescuento(precio,  descuento) {

  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularPrecioTwo (precio, descuento, cupon) {
  const descuentoTotal = parseInt(descuento) + parseInt(cupon);
  const porcentajePrecioConDescuento = 100 - descuentoTotal;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const priceValue = inputPrice.value;
  const discountValue = inputDiscount.value;
  if ( priceValue == 0  ) {
    resultP.innerText = `Por favor introduce un precio para continuar`;
  } else if ( discountValue == 0 ) {
    resultP.innerText = `Por favor introduce un descuento para continuar`;
  } else {
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
  }
}

function onClickButtonPriceCoupon() {
  const priceValue = inputPrice.value;
  const couponValue = inputCoupon.value;

  if ( couponValue == 0 ) {
    resultP.innerText = `Por favor introduce un descuento para continuar`;
  } else if ( priceValue == 0 ) {
    resultP.innerText = `Por favor introduce un precio para continuar`;
  } else {
    const isCouponValueValid = function (coupon) {
      return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    const descuento = userCoupon.discount;
    if (!userCoupon) {
      resultP.innerHTML = `El cupón <strong>${couponValue}</strong> no es válido`;
    }  else {
      const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
      resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
    }
  }
}

function onClickButtonPriceTwo() {
  const priceValue = inputPrice.value;
  const discountValue = inputDiscount.value;
  const couponValue = inputCoupon.value;

  if ( couponValue == 0 ) {
    resultP.innerText = `Por favor introduce un cupón para continuar`;
  } else if ( priceValue == 0 ) {
    resultP.innerText = `Por favor introduce un precio para continuar`;
  } else if ( discountValue == 0 ) {
    resultP.innerText = `Por favor introduce un descuento para continuar`;
  } else {
    const isCouponValueValid = function (coupon) {
      return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    const descuento = userCoupon.discount;
    if (!userCoupon) {
      resultP.innerHTML = `El cupón <strong>${couponValue}</strong> no es válido`;
    } else {
      const precioConDescuento = calcularPrecioTwo(priceValue, discountValue,descuento);
      resultP.innerText = `El precio con los dos descuentos es: $${precioConDescuento}`;
    }
  }
}

// console.log(`El precio original es: ${precioOriginal}, el descuento es: ${descuento}, y el total a pagar es: ${precioConDescuento}`);