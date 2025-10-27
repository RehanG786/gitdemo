console.log("Javascript Program");

const cart = {
    total: 1200,
    memberType: "gold",  // "none", "silver", "gold", "platinum"
    isFirstOrder: false,
    location: "metro"
};

let discount = 0;
let shippingCharge = 0;

// Base discount and shipping logic
if (cart.total < 500) {
    discount = 0;
    shippingCharge = 50;
} else if (cart.total < 1000) {
    discount = 5;
    shippingCharge = 25;
} else {
    discount = 10;
    shippingCharge = 0;
}

// Member discount logic
if (cart.memberType === "silver") {
    discount += 5;
} else if (cart.memberType === "gold") {
    discount += 10;
} else if (cart.memberType === "platinum") {
    discount += 15;
}

// Additional offer logic
if (cart.isFirstOrder) {
    discount += 10;
}

if (cart.location !== "metro") {
    shippingCharge += 20;
}

const finalAmount = cart.total - (cart.total * discount / 100) + shippingCharge;

// ✅ Correct interpolation using ${}
console.log(`Discount: ${discount}%`);
console.log(`Shipping Charge: ₹${shippingCharge}`);
console.log(`Final Payable Amount: ₹${finalAmount.toFixed(2)}`);
