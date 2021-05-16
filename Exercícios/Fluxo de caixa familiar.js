// incomings  = entradas
// expenses   = saidas

let finalfinance;

function FamilyIncome() {
  let i;
  let totalincomings;
  let totalexpenses;
  let finalincomings = 0;
  let finalexpenses = 0;
  const finance = {
    incomings: [800, 1500, 200, 300],
    expenses: [400, 500, 500, 50, 100],
  };

  totalincomings = finance.incomings.length;

  totalexpenses = finance.expenses.length;

  for (i = 0; i < totalincomings; i++) {
    finalincomings += finance.incomings[i];
  }

  for (i = 0; i < totalexpenses; i++) {
    finalexpenses += finance.expenses[i];
  }

  finalfinance = finalincomings - finalexpenses;

  return finalfinance;
}
function Check() {
  if (finalfinance > 0) {
    console.log("Saldo Positivo de: R$", finalfinance.toFixed(2));
  } else if (finalfinance == 0) {
    console.log("Saldo Nulo");
  } else {
    console.log("Saldo Negativo de: R$", finalfinance.toFixed(2));
  }
}

FamilyIncome();
Check();
