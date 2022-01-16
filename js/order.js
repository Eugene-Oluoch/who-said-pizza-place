//DOM Italian
let price_display_italian = document.getElementById('price-italian');
let small_pizza_italian = document.getElementById('italian-small');
let medium_pizza_italian = document.getElementById('italian-medium');
let large_pizza_italian = document.getElementById('italian-large');
let extra_cheese_checkbox_italian = document.getElementById('italian-extra-cheese');
let spicy_sauce_checkbox_italian = document.getElementById('italian-spicy-sauce');
let garlic_sauce_checkbox_italian = document.getElementById('italian-garlic-sauce');
let quantity_italian = document.getElementById('italian-quantity');
let add_to_cart_italian = document.getElementById('add-to-cart-italian');

//Pizza Sizes Price Italian
let small_pizza_price_italian = 2.99;
let medium_pizza_price_italian = 3.99;
let large_pizza_price_italian = 4.99;
//Pizza Ingredients Price
let extra_cheese_italian = 0.50;
let spicy_sauce_italian = 0.30;
let garlic_sauce_italian = 0.3;
//Displays Default Price Italian
let default_price_italian = price_display_italian.innerHTML = `$${small_pizza_price_italian}`;
//Small Pizza Click Display Italian
small_pizza_italian.addEventListener('click', smallPizzaDisplayItalian);

function smallPizzaDisplayItalian() {
    price_display_italian.innerHTML = `$${small_pizza_price_italian}`;
};
//Medium Pizza Click Display Italian
medium_pizza_italian.addEventListener('click', mediumPizzaDisplayItalian);

function mediumPizzaDisplayItalian() {
    price_display_italian.innerHTML = `$${medium_pizza_price_italian}`;
};
//Large Pizza Click Display Italian
large_pizza_italian.addEventListener('click', largePizzaDisplayItalian);

function largePizzaDisplayItalian() {
    price_display_italian.innerHTML = `$${large_pizza_price_italian}`;
};

//Extra Cheese Add Italian
extra_cheese_checkbox_italian.addEventListener('change', extraCheeseAddItalian);

function extraCheeseAddItalian() {
    if (this.checked) {
        let current_price_italian = parseFloat(price_display_italian.innerHTML.replace("$", ""));
        let total_italian = current_price_italian + extra_cheese_italian;
        price_display_italian.innerHTML = `$${total_italian}`;
    } else {
        let current_price_italian = parseFloat(price_display_italian.innerHTML.replace("$", ""));
        let total_italian = current_price_italian - extra_cheese_italian;
        price_display_italian.innerHTML = `$${total_italian}`;
    }
};

//Garlic Sauce Add Italian
garlic_sauce_checkbox_italian.addEventListener('change', garlicSauceAddItalian);

function garlicSauceAddItalian() {
    if (this.checked) {
        let current_price_italian = parseFloat(price_display_italian.innerHTML.replace("$", ""));
        let total_italian = current_price_italian + garlic_sauce_italian;
        price_display_italian.innerHTML = `$${total_italian}`;
    } else {
        let current_price_italian = parseFloat(price_display - italian.innerHTML.replace("$", ""));
        let total_italian = current_price_italian - garlic_sauce_italian;
        price_display_italian.innerHTML = `$${total_italian}`;
    }
};
//Spicy Sauce Add Italian
spicy_sauce_checkbox_italian.addEventListener('change', spicySauceAddItalian);

function spicySauceAddItalian() {
    if (this.checked) {
        let current_price_italian = parseFloat(price_display_italian.innerHTML.replace("$", ""));
        let total_italian = current_price_italian + spicy_sauce_italian;
        price_display_italian.innerHTML = `$${total_italian}`;
    } else {
        let current_price_italian = parseFloat(price_display_italian.innerHTML.replace("$", ""));
        let total_italian = current_price_italian - spicy_sauce_italian;
        price_display_italian.innerHTML = `$${total_italian}`;
    }
};

//Add to cart Italian
add_to_cart_italian.addEventListener('click', quantityMultiplyItalian);

function quantityMultiplyItalian() {
    let current_price_italian = parseFloat(price_display_italian.innerHTML.replace("$", ""));
    let quantity_number_italian = quantity_italian.value;
    let total_italian = current_price_italian * quantity_number_italian;
    price_display_italian.innerHTML = `$${total_italian}`;
    $('.cart').append(`                
    <li class="cart-li">
    <div class="cart-li-item-image">
        <img src="images/italian.jpg" alt="">
        <p>Italian</p>
    </div>
    <div class="cart-li-price-li">
        <p class="items-price">$${total_italian}</p>
    </div>
    <div class="cart-li-quantity-li">
        <p>${quantity_number_italian}</p>
    </div>
</li>`);
};




//DOM Greek
let price_display_greek = document.getElementById('price-greek');
let small_pizza_greek = document.getElementById('greek-small');
let medium_pizza_greek = document.getElementById('greek-medium');
let large_pizza_greek = document.getElementById('greek-large');
let extra_cheese_checkbox_greek = document.getElementById('greek-extra-cheese');
let spicy_sauce_checkbox_greek = document.getElementById('greek-spicy-sauce');
let garlic_sauce_checkbox_greek = document.getElementById('greek-garlic-sauce');
let quantity_greek = document.getElementById('greek-quantity');
let add_to_cart_greek = document.getElementById('add-to-cart-greek');

//Pizza Sizes Price Greek
let small_pizza_price_greek = 1.99;
let medium_pizza_price_greek = 2.99;
let large_pizza_price_greek = 3.99;
//Pizza Ingredients Price Greek
let extra_cheese_greek = 0.50;
let spicy_sauce_greek = 0.30;
let garlic_sauce_greek = 0.3;
//Displays Default Price Greek
let default_price_greek = price_display_greek.innerHTML = `$${small_pizza_price_greek}`;
//Small Pizza Click Display Greek
small_pizza_greek.addEventListener('click', smallPizzaDisplayGreek);

function smallPizzaDisplayGreek() {
    price_display_greek.innerHTML = `$${small_pizza_price_greek}`;
};
//Medium Pizza Click Display Greek
medium_pizza_greek.addEventListener('click', mediumPizzaDisplayGreek);

function mediumPizzaDisplayGreek() {
    price_display_greek.innerHTML = `$${medium_pizza_price_greek}`;
};
//Large Pizza Click Display Greek
large_pizza_greek.addEventListener('click', largePizzaDisplayGreek);

function largePizzaDisplayGreek() {
    price_display_greek.innerHTML = `$${large_pizza_price_greek}`;
};

//Extra Cheese Add Greek
extra_cheese_checkbox_greek.addEventListener('change', extraCheeseAddGreek);

function extraCheeseAddGreek() {
    if (this.checked) {
        let current_price_greek = parseFloat(price_display_greek.innerHTML.replace("$", ""));
        let total_greek = current_price_greek + extra_cheese_greek;
        price_display_greek.innerHTML = `$${total_greek}`;
    } else {
        let current_price_greek = parseFloat(price_display_greek.innerHTML.replace("$", ""));
        let total_greek = current_price_greek - extra_cheese_greek;
        price_display_greek.innerHTML = `$${total_greek}`;
    }
};

//Garlic Sauce Add Greek
garlic_sauce_checkbox_greek.addEventListener('change', garlicSauceAddGreek);

function garlicSauceAddGreek() {
    if (this.checked) {
        let current_price_greek = parseFloat(price_display_greek.innerHTML.replace("$", ""));
        let total_greek = current_price_greek + garlic_sauce_greek;
        price_display_greek.innerHTML = `$${total_greek}`;
    } else {
        let current_price_greek = parseFloat(price_display_greek.innerHTML.replace("$", ""));
        let total_greek = current_price_greek - garlic_sauce_greek;
        price_display_greek.innerHTML = `$${total_greek}`;
    }
};
//Spicy Sauce Add Greek
spicy_sauce_checkbox_greek.addEventListener('change', spicySauceAddGreek);

function spicySauceAddGreek() {
    if (this.checked) {
        let current_price_greek = parseFloat(price_display_greek.innerHTML.replace("$", ""));
        let total_greek = current_price_greek + spicy_sauce_greek;
        price_display_greek.innerHTML = `$${total_greek}`;
    } else {
        let current_price_greek = parseFloat(price_display_greek.innerHTML.replace("$", ""));
        let total_greek = current_price_greek - spicy_sauce_greek;
        price_display_greek.innerHTML = `$${total_greek}`;
    }
};

//Add to cart Greek
add_to_cart_greek.addEventListener('click', quantityMultiplyGreek);

function quantityMultiplyGreek() {
    let current_price_greek = parseFloat(price_display_greek.innerHTML.replace("$", ""));
    let quantity_number_greek = quantity_greek.value;
    let total_greek = current_price_greek * quantity_number_greek;
    price_display_greek.innerHTML = `$${total_greek}`;
    $('.cart').append(`                
    <li class="cart-li">
    <div class="cart-li-item-image">
        <img src="images/greek.jpg" alt="">
        <p>Greek</p>
    </div>
    <div class="cart-li-price-li">
        <p class="items-price">$${total_greek}</p>
    </div>
    <div class="cart-li-quantity-li">
        <p>${quantity_number_greek}</p>
    </div>
</li>`);
};




//DOM Caucasian
let price_display_caucasian = document.getElementById('price-caucasian');
let small_pizza_caucasian = document.getElementById('caucasian-small');
let medium_pizza_caucasian = document.getElementById('caucasian-medium');
let large_pizza_caucasian = document.getElementById('caucasian-large');
let extra_cheese_checkbox_caucasian = document.getElementById('caucasian-extra-cheese');
let spicy_sauce_checkbox_caucasian = document.getElementById('caucasian-spicy-sauce');
let garlic_sauce_checkbox_caucasian = document.getElementById('caucasian-garlic-sauce');
let quantity_caucasian = document.getElementById('caucasian-quantity');
let add_to_cart_caucasian = document.getElementById('add-to-cart-caucasian');

//Pizza Sizes Price Caucasian
let small_pizza_price_caucasian = 2.50;
let medium_pizza_price_caucasian = 3.50;
let large_pizza_price_caucasian = 4.50;
//Pizza Ingredients Price Caucasian
let extra_cheese_caucasian = 0.50;
let spicy_sauce_caucasian = 0.30;
let garlic_sauce_caucasian = 0.3;
//Displays Default Price Caucasian
let default_price_caucasian = price_display_caucasian.innerHTML = `$${small_pizza_price_caucasian}`;
//Small Pizza Click Display Caucasian
small_pizza_caucasian.addEventListener('click', smallPizzaDisplayCaucasian);

function smallPizzaDisplayCaucasian() {
    price_display_caucasian.innerHTML = `$${small_pizza_price_caucasian}`;
};
//Medium Pizza Click Display Caucasian
medium_pizza_caucasian.addEventListener('click', mediumPizzaDisplayCaucasian);

function mediumPizzaDisplayCaucasian() {
    price_display_caucasian.innerHTML = `$${medium_pizza_price_caucasian}`;
};
//Large Pizza Click Display Caucasian
large_pizza_caucasian.addEventListener('click', largePizzaDisplayCaucasian);

function largePizzaDisplayCaucasian() {
    price_display_caucasian.innerHTML = `$${large_pizza_price_caucasian}`;
};

//Extra Cheese Add Caucasian
extra_cheese_checkbox_caucasian.addEventListener('change', extraCheeseAddCaucasian);

function extraCheeseAddCaucasian() {
    if (this.checked) {
        let current_price_caucasian = parseFloat(price_display_caucasian.innerHTML.replace("$", ""));
        let total_caucasian = current_price_caucasian + extra_cheese_caucasian;
        price_display_caucasian.innerHTML = `$${total_caucasian}`;
    } else {
        let current_price_caucasian = parseFloat(price_display_caucasian.innerHTML.replace("$", ""));
        let total_caucasian = current_price_caucasian - extra_cheese_caucasian;
        price_display_caucasian.innerHTML = `$${total_caucasian}`;
    }
};

//Garlic Sauce Add Caucasian
garlic_sauce_checkbox_caucasian.addEventListener('change', garlicSauceAddCaucasian);

function garlicSauceAddCaucasian() {
    if (this.checked) {
        let current_price_caucasian = parseFloat(price_display_caucasian.innerHTML.replace("$", ""));
        let total_caucasian = current_price_caucasian + garlic_sauce_caucasian;
        price_display_caucasian.innerHTML = `$${total_caucasian}`;
    } else {
        let current_price_caucasian = parseFloat(price_display_caucasian.innerHTML.replace("$", ""));
        let total_caucasian = current_price_caucasian - garlic_sauce_caucasian;
        price_display_caucasian.innerHTML = `$${total_caucasian}`;
    }
};
//Spicy Sauce Add Caucasian
spicy_sauce_checkbox_caucasian.addEventListener('change', spicySauceAddCaucasian);

function spicySauceAddCaucasian() {
    if (this.checked) {
        let current_price_caucasian = parseFloat(price_display_caucasian.innerHTML.replace("$", ""));
        let total_caucasian = current_price_caucasian + spicy_sauce_caucasian;
        price_display_caucasian.innerHTML = `$${total_caucasian}`;
    } else {
        let current_price_caucasian = parseFloat(price_display_caucasian.innerHTML.replace("$", ""));
        let total_caucasian = current_price_caucasian - spicy_sauce_caucasian;
        price_display_caucasian.innerHTML = `$${total_caucasian}`;
    }
};

//Add to cart Caucasian
add_to_cart_caucasian.addEventListener('click', quantityMultiplyCaucasian);

function quantityMultiplyCaucasian() {
    let current_price_caucasian = parseFloat(price_display_caucasian.innerHTML.replace("$", ""));
    let quantity_number_caucasian = quantity_caucasian.value;
    let total_caucasian = current_price_caucasian * quantity_number_caucasian;
    price_display_caucasian.innerHTML = `$${total_caucasian}`;
    $('.cart').append(`                
    <li class="cart-li">
    <div class="cart-li-item-image">
        <img src="images/caucasian.jpg" alt="">
        <p>Caucas...</p>
    </div>
    <div class="cart-li-price-li">
        <p class="items-price">$${total_caucasian}</p>
    </div>
    <div class="cart-li-quantity-li">
        <p>${quantity_number_caucasian}</p>
    </div>
</li>`);
};



//DOM American
let price_display_american = document.getElementById('price-american');
let small_pizza_american = document.getElementById('american-small');
let medium_pizza_american = document.getElementById('american-medium');
let large_pizza_american = document.getElementById('american-large');
let extra_cheese_checkbox_american = document.getElementById('american-extra-cheese');
let spicy_sauce_checkbox_american = document.getElementById('american-spicy-sauce');
let garlic_sauce_checkbox_american = document.getElementById('american-garlic-sauce');
let quantity_american = document.getElementById('american-quantity');
let add_to_cart_american = document.getElementById('add-to-cart-american');

//Pizza Sizes Price American
let small_pizza_price_american = 2.70;
let medium_pizza_price_american = 3.70;
let large_pizza_price_american = 4.70;
//Pizza Ingredients Price American
let extra_cheese_american = 0.50;
let spicy_sauce_american = 0.30;
let garlic_sauce_american = 0.3;
//Displays Default Price American
let default_price_american = price_display_american.innerHTML = `$${small_pizza_price_american}`;
//Small Pizza Click Display American
small_pizza_american.addEventListener('click', smallPizzaDisplayAmerican);

function smallPizzaDisplayAmerican() {
    price_display_american.innerHTML = `$${small_pizza_price_american}`;
};
//Medium Pizza Click Display American
medium_pizza_american.addEventListener('click', mediumPizzaDisplayAmerican);

function mediumPizzaDisplayAmerican() {
    price_display_american.innerHTML = `$${medium_pizza_price_american}`;
};
//Large Pizza Click Display American
large_pizza_american.addEventListener('click', largePizzaDisplayAmerican);

function largePizzaDisplayAmerican() {
    price_display_american.innerHTML = `$${large_pizza_price_american}`;
};

//Extra Cheese Add American
extra_cheese_checkbox_american.addEventListener('change', extraCheeseAddAmerican);

function extraCheeseAddAmerican() {
    if (this.checked) {
        let current_price_american = parseFloat(price_display_american.innerHTML.replace("$", ""));
        let total_american = current_price_american + extra_cheese_american;
        price_display_american.innerHTML = `$${total_american}`;
    } else {
        let current_price_american = parseFloat(price_display_american.innerHTML.replace("$", ""));
        let total_american = current_price_american - extra_cheese_american;
        price_display_american.innerHTML = `$${total_american}`;
    }
};

//Garlic Sauce Add American
garlic_sauce_checkbox_american.addEventListener('change', garlicSauceAddAmerican);

function garlicSauceAddAmerican() {
    if (this.checked) {
        let current_price_american = parseFloat(price_display_american.innerHTML.replace("$", ""));
        let total_american = current_price_american + garlic_sauce_american;
        price_display_american.innerHTML = `$${total_american}`;
    } else {
        let current_price_american = parseFloat(price_display_american.innerHTML.replace("$", ""));
        let total_american = current_price_american - garlic_sauce_american;
        price_display_american.innerHTML = `$${total_american}`;
    }
};
//Spicy Sauce Add American
spicy_sauce_checkbox_american.addEventListener('change', spicySauceAddAmerican);

function spicySauceAddAmerican() {
    if (this.checked) {
        let current_price_american = parseFloat(price_display_american.innerHTML.replace("$", ""));
        let total_american = current_price_american + spicy_sauce_american;
        price_display_american.innerHTML = `$${total_american}`;
    } else {
        let current_price_american = parseFloat(price_display_american.innerHTML.replace("$", ""));
        let total_american = current_price_american - spicy_sauce_american;
        price_display_american.innerHTML = `$${total_american}`;
    }
};

//Add to cart American
add_to_cart_american.addEventListener('click', quantityMultiplyAmerican);

function quantityMultiplyAmerican() {
    let current_price_american = parseFloat(price_display_american.innerHTML.replace("$", ""));
    let quantity_number_american = quantity_american.value;
    let total_american = current_price_american * quantity_number_american;
    price_display_american.innerHTML = `$${total_american}`;
    $('.cart').append(`                
    <li class="cart-li">
    <div class="cart-li-item-image">
        <img src="images/american.jpg" alt="">
        <p>Americ...</p>
    </div>
    <div class="cart-li-price-li">
        <p class="items-price">$${total_american}</p>
    </div>
    <div class="cart-li-quantity-li">
        <p>${quantity_number_american}</p>
    </div>
</li>`);
};





//DOM Tomatoe
let price_display_tomatoe = document.getElementById('price-tomatoe');
let small_pizza_tomatoe = document.getElementById('tomatoe-small');
let medium_pizza_tomatoe = document.getElementById('tomatoe-medium');
let large_pizza_tomatoe = document.getElementById('tomatoe-large');
let extra_cheese_checkbox_tomatoe = document.getElementById('tomatoe-extra-cheese');
let spicy_sauce_checkbox_tomatoe = document.getElementById('tomatoe-spicy-sauce');
let garlic_sauce_checkbox_tomatoe = document.getElementById('tomatoe-garlic-sauce');
let quantity_tomatoe = document.getElementById('tomatoe-quantity');
let add_to_cart_tomatoe = document.getElementById('add-to-cart-tomatoe');

//Pizza Sizes Price Tomatoe
let small_pizza_price_tomatoe = 3.99;
let medium_pizza_price_tomatoe = 4.99;
let large_pizza_price_tomatoe = 5.99;
//Pizza Ingredients Price Tomatoe
let extra_cheese_tomatoe = 0.50;
let spicy_sauce_tomatoe = 0.30;
let garlic_sauce_tomatoe = 0.3;
//Displays Default Price Tomatoe
let default_price_tomatoe = price_display_tomatoe.innerHTML = `$${small_pizza_price_tomatoe}`;
//Small Pizza Click Display Tomatoe
small_pizza_tomatoe.addEventListener('click', smallPizzaDisplayTomatoe);

function smallPizzaDisplayTomatoe() {
    price_display_tomatoe.innerHTML = `$${small_pizza_price_tomatoe}`;
};
//Medium Pizza Click Display Tomatoe
medium_pizza_tomatoe.addEventListener('click', mediumPizzaDisplayTomatoe);

function mediumPizzaDisplayTomatoe() {
    price_display_tomatoe.innerHTML = `$${medium_pizza_price_tomatoe}`;
};
//Large Pizza Click Display Tomatoe
large_pizza_tomatoe.addEventListener('click', largePizzaDisplayTomatoe);

function largePizzaDisplayTomatoe() {
    price_display_tomatoe.innerHTML = `$${large_pizza_price_tomatoe}`;
};

//Extra Cheese Add Tomatoe
extra_cheese_checkbox_tomatoe.addEventListener('change', extraCheeseAddTomatoe);

function extraCheeseAddTomatoe() {
    if (this.checked) {
        let current_price_tomatoe = parseFloat(price_display_tomatoe.innerHTML.replace("$", ""));
        let total_tomatoe = current_price_tomatoe + extra_cheese_tomatoe;
        price_display_tomatoe.innerHTML = `$${total_tomatoe}`;
    } else {
        let current_price_tomatoe = parseFloat(price_display_tomatoe.innerHTML.replace("$", ""));
        let total_tomatoe = current_price_tomatoe - extra_cheese_tomatoe;
        price_display_tomatoe.innerHTML = `$${total_tomatoe}`;
    }
};

//Garlic Sauce Add Tomatoe
garlic_sauce_checkbox_tomatoe.addEventListener('change', garlicSauceAddTomatoe);

function garlicSauceAddTomatoe() {
    if (this.checked) {
        let current_price_tomatoe = parseFloat(price_display_tomatoe.innerHTML.replace("$", ""));
        let total_tomatoe = current_price_tomatoe + garlic_sauce_tomatoe;
        price_display_tomatoe.innerHTML = `$${total_tomatoe}`;
    } else {
        let current_price_tomatoe = parseFloat(price_display_tomatoe.innerHTML.replace("$", ""));
        let total_tomatoe = current_price_tomatoe - garlic_sauce_tomatoe;
        price_display_tomatoe.innerHTML = `$${total_tomatoe}`;
    }
};
//Spicy Sauce Add Tomatoe
spicy_sauce_checkbox_tomatoe.addEventListener('change', spicySauceAddTomatoe);

function spicySauceAddTomatoe() {
    if (this.checked) {
        let current_price_tomatoe = parseFloat(price_display_tomatoe.innerHTML.replace("$", ""));
        let total_tomatoe = current_price_tomatoe + spicy_sauce_tomatoe;
        price_display_tomatoe.innerHTML = `$${total_tomatoe}`;
    } else {
        let current_price_tomatoe = parseFloat(price_display_tomatoe.innerHTML.replace("$", ""));
        let total_tomatoe = current_price_tomatoe - spicy_sauce_tomatoe;
        price_display_tomatoe.innerHTML = `$${total_tomatoe}`;
    }
};

//Add to cart Tomatoe
add_to_cart_tomatoe.addEventListener('click', quantityMultiplyTomatoe);

function quantityMultiplyTomatoe() {
    let current_price_tomatoe = parseFloat(price_display_tomatoe.innerHTML.replace("$", ""));
    let quantity_number_tomatoe = quantity_tomatoe.value;
    let total_tomatoe = current_price_tomatoe * quantity_number_tomatoe;
    price_display_tomatoe.innerHTML = `$${total_tomatoe}`;
    $('.cart').append(`                
    <li class="cart-li">
    <div class="cart-li-item-image">
        <img src="images/tomato.jpg" alt="">
        <p>Tomatoe</p>
    </div>
    <div class="cart-li-price-li">
        <p class="items-price">$${total_tomatoe}</p>
    </div>
    <div class="cart-li-quantity-li">
        <p>${quantity_number_tomatoe}</p>
    </div>
</li>`);
};



//DOM Margherita
let price_display_margherita = document.getElementById('price-margherita');
let small_pizza_margherita = document.getElementById('margherita-small');
let medium_pizza_margherita = document.getElementById('margherita-medium');
let large_pizza_margherita = document.getElementById('margherita-large');
let extra_cheese_checkbox_margherita = document.getElementById('margherita-extra-cheese');
let spicy_sauce_checkbox_margherita = document.getElementById('margherita-spicy-sauce');
let garlic_sauce_checkbox_margherita = document.getElementById('margherita-garlic-sauce');
let quantity_margherita = document.getElementById('margherita-quantity');
let add_to_cart_margherita = document.getElementById('add-to-cart-margherita');

//Pizza Sizes Price Margherita
let small_pizza_price_margherita = 4.99;
let medium_pizza_price_margherita = 5.99;
let large_pizza_price_margherita = 6.99;
//Pizza Ingredients Price Margherita

let extra_cheese_margherita = 0.50;
let spicy_sauce_margherita = 0.30;
let garlic_sauce_margherita = 0.3;
//Displays Default Price Margherita
let default_price_margherita = price_display_margherita.innerHTML = `$${small_pizza_price_margherita}`;
//Small Pizza Click Display Margherita
small_pizza_margherita.addEventListener('click', smallPizzaDisplayMargherita);

function smallPizzaDisplayMargherita() {
    price_display_margherita.innerHTML = `$${small_pizza_price_margherita}`;
};
//Medium Pizza Click Display Margherita
medium_pizza_margherita.addEventListener('click', mediumPizzaDisplayMargherita);

function mediumPizzaDisplayMargherita() {
    price_display_margherita.innerHTML = `$${medium_pizza_price_margherita}`;
};
//Large Pizza Click Display Margherita
large_pizza_margherita.addEventListener('click', largePizzaDisplayMargherita);

function largePizzaDisplayMargherita() {
    price_display_margherita.innerHTML = `$${large_pizza_price_margherita}`;
};

//Extra Cheese Add Margherita
extra_cheese_checkbox_margherita.addEventListener('change', extraCheeseAddMargherita);

function extraCheeseAddMargherita() {
    if (this.checked) {
        let current_price_margherita = parseFloat(price_display_margherita.innerHTML.replace("$", ""));
        let total_margherita = current_price_margherita + extra_cheese_margherita;
        price_display_margherita.innerHTML = `$${total_margherita}`;
    } else {
        let current_price_margherita = parseFloat(price_display_margherita.innerHTML.replace("$", ""));
        let total_margherita = current_price_margherita - extra_cheese_margherita;
        price_display_margherita.innerHTML = `$${total_margherita}`;
    }
};

//Garlic Sauce Add Margherita
garlic_sauce_checkbox_margherita.addEventListener('change', garlicSauceAddMargherita);

function garlicSauceAddMargherita() {
    if (this.checked) {
        let current_price_margherita = parseFloat(price_display_margherita.innerHTML.replace("$", ""));
        let total_margherita = current_price_margherita + garlic_sauce_margherita;
        price_display_margherita.innerHTML = `$${total_margherita}`;
    } else {
        let current_price_margherita = parseFloat(price_display_margherita.innerHTML.replace("$", ""));
        let total_margherita = current_price_margherita - garlic_sauce_margherita;
        price_display_margherita.innerHTML = `$${total_margherita}`;
    }
};
//Spicy Sauce Add Margherita
spicy_sauce_checkbox_margherita.addEventListener('change', spicySauceAddMargherita);

function spicySauceAddMargherita() {
    if (this.checked) {
        let current_price_margherita = parseFloat(price_display_margherita.innerHTML.replace("$", ""));
        let total_margherita = current_price_margherita + spicy_sauce_margherita;
        price_display_margherita.innerHTML = `$${total_margherita}`;
    } else {
        let current_price_margherita = parseFloat(price_display_margherita.innerHTML.replace("$", ""));
        let total_margherita = current_price_margherita - spicy_sauce_margherita;
        price_display_margherita.innerHTML = `$${total_margherita}`;
    }
};

//Add to cart Margherita
add_to_cart_margherita.addEventListener('click', quantityMultiplyMargherita);

function quantityMultiplyMargherita() {
    let current_price_margherita = parseFloat(price_display_margherita.innerHTML.replace("$", ""));
    let quantity_number_margherita = quantity_margherita.value;
    let total_margherita = current_price_margherita * quantity_number_margherita;
    price_display_margherita.innerHTML = `$${total_margherita}`;
    $('.cart').append(`                
    <li class="cart-li">
    <div class="cart-li-item-image">
        <img src="images/Margherita.jpg" alt="">
        <p>Margher...</p>
    </div>
    <div class="cart-li-price-li">
        <p class="items-price">$${total_margherita}</p>
    </div>
    <div class="cart-li-quantity-li">
        <p>${quantity_number_margherita}</p>
    </div>
</li>`);
};
//Proceed to checkout
let button_proceed = document.getElementById('main-cart-proceed-button');
button_proceed.addEventListener('click', function() {
    if (confirm("Do you want your order to be delivered? ")) {
        alert("The deliver fee is $10 and we only do deliveries in Nairobi");
        let address = prompt("Enter your address: ");
        alert(`Your order will be delivered to: ${address}`)
    } else {
        alert("You clicked me but you want to test out the options given")
    }
});