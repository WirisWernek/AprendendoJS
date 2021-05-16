function calc(degree) {
  const celsiusExist = degree.toUpperCase().includes("C");
  const fahrenheitExist = degree.toUpperCase().includes("F");
  //fluxo de erro
  if (!celsiusExist && !fahrenheitExist) {
    throw new Error("Grau Não Identificado");
  }

  //fluxo ideal fahrenheit-> celsius
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * (5 / 9);
  let degreeSign = "C";
  //fluxo alternativo celsius -> fahrenheit
  if (celsiusExist) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => celsius * (9 / 5) + 32;
    degreeSign = "F";
  }

  return formula(updatedDegree) + degreeSign;
}
try {
  console.log(calc("50F"));
  console.log(calc("10C"));
} catch (error) {
  console.log(error.message);
}
