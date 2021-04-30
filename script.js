// Throw

function sayMyName(name = "") {
  if (name === "") {
    throw "nome é obrigatório";
  }
  console.log("depois do erro");
}

// try ..... catch
try {
  sayMyName();
} catch (e) {
  console.log(e);
}

console.log("após a função");
