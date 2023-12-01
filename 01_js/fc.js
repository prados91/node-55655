let cuenta = 0;

function contador(numero) {
  cuenta += numero;

  console.log(cuenta);
}

contador(2);
contador(5);
contador(10);

const concatenar = (tercera, cuarta) => {
  let primera = "Hola";
  let segunda = "Mundo";

  console.log(primera, segunda, tercera, cuarta);
};

concatenar("soy", "Augusto");

const array = ["a", "b", "c"];

const corroborar = (array) => {
  const tipsoDeDato = array.map((each) => ({ valor: each, tipo: typeof each }));
  console.log(tipsoDeDato);
  return tipsoDeDato;
};
