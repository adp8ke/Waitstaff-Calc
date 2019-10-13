const STORE = {
  meals: [],
  mealCount: 0,
  totalTips: 0
};

function generateMealElement(meal) {
  return `<h2><Customer Charges</h2>
                <p>Subtotal: ${meal.price + calculateTax(meal)}</p>
                <p>Tip: ${calculateTip(meal)}</p>
                <p>Total: ${meal.price +
                  calculateTax(meal) +
                  calculateTip(meal)}</p>`;
}

function generateTipsElement() {
  return `<h2>My Earnings Info</h2>
                <p>Meal count: ${STORE.mealCount}</p>
                <p>Total tips: ${STORE.totalTips}</p>
                <p>Average tips: ${STORE.totalTips / STORE.mealCount}</p>`;
}

function renderWaitStaffCalculator(meal) {
  $(".js-customer-charges").html(generateMealElement(meal));
  $(".js-earnings-info").html(generateTipsElement());
}

function handleSubmit() {
  $("#enter-meal-details").submit(function(event) {
    event.preventDefault();
    const price = $(".js-meal-price-entry").val();
    const tax = $(".js-tax-percentage-entry").val() / 100;
    const tip = $(".js-tip-percentage-entry").val() / 100;
    $(".js-meal-price-entry").val("");
    $(".js-tax-percentage.entry").val("");
    $(".js-tip-percentage-entry").val("");
    const newMeal = addMeal(price, tax, tip);
    renderWaitStaffCalculator(newMeal);
  });
}

function addMeal(mealPrice, mealTax, mealTip) {
  STORE.mealCount += 1;
  const newMeal = {
    id: STORE.mealCount,
    price: mealPrice,
    tax: mealTax,
    tip: mealTip
  };
  STORE.meals.push(newMeal);
  STORE.totalTips += calculateTip(newMeal);
  return newMeal;
}

function calculateTip(meal) {
  return meal.price * (1 + meal.tip);
}

function calculateTax(meal) {
  return meal.price * (1 + meal.tax);
}

function handleReset() {
  return undefined;
}

function handleCancel() {
  return undefined;
}

function handleWaitstaffCalculator() {
  handleSubmit();
  handleReset();
  handleCancel();
}

$(handleWaitstaffCalculator);
