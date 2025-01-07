'use client'

import { useState } from 'react';
import ProductCard from './ProductCard';
import PaymentOption from './PaymentOption';
import OrderTotal from './OrderTotal';

const products = [
  {
    id: 1,
    name: "American Beauty",
    price: "₿7,000.00",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ccc5e223761fa5739a8bee65f2cab4ae2cc0c9a95f555ea1248946eb1fe057f?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  },
  {
    id: 2,
    name: "American Beauty",
    price: "₿7,000.00",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ccc5e223761fa5739a8bee65f2cab4ae2cc0c9a95f555ea1248946eb1fe057f?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  },
  {
    id: 3,
    name: "American Beauty",
    price: "₿7,000.00",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ccc5e223761fa5739a8bee65f2cab4ae2cc0c9a95f555ea1248946eb1fe057f?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  }
];

const paymentOptions = [
  {
    id: 1,
    name: "Credit Card",
    images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/9fe00476675e2c1990c9c3bb56914959c7c985407828c8975f3d75575105fb2a?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df", "https://cdn.builder.io/api/v1/image/assets/TEMP/1c90657d66f959f2735eb28bbee503146ad88d7d130e1feaaf68f42ef888fbf0?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"]
  },
  {
    id: 2,
    name: "PayPal",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b81887d892c8b0cda4b3af51771e04341ab9e75d128795a2c184c9c05398d349?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  },
  {
    id: 3,
    name: "Cash on delivery",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/80de602c0e24735424830e9724c4010c6223046420fc0ffc9a83a3eb6c39eac2?placeholderIfAbsent=true&apiKey=2e251f586b5b47d69c37dbbb20f835df"
  }
];

function OrderSummary() {
  const [selectedPaymentId, setSelectedPaymentId] = useState(1);
  

  const handlePaymentSelection = (id) => {
    setSelectedPaymentId(id);
    const selectedOption = paymentOptions.find(option => option.id === id);
    console.log(selectedOption);
  };

  const subtotal = products.reduce((total, product) => {
    const numericPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
    return total + numericPrice;
  }, 0);
  
  console.log("Subtotal:", `₿${subtotal.toLocaleString()}`);

  return (
    <div className="flex flex-col max-w-[570px]">
      <h1 className="text-3xl font-semibold leading-tight text-green-800 max-md:max-w-full">
        Order Summary
      </h1>
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-base font-medium leading-tight max-md:max-w-full">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <OrderTotal subtotal={subtotal} shippingCharge={3000} />
        <div className="flex flex-col mt-5 w-full max-md:max-w-full">
          {paymentOptions.map((option, index) => (
              <PaymentOption 
              key={option.id} 
              {...option} 
              isFirst={index === 0}
              selected={option.id === selectedPaymentId}
              onSelect={() => handlePaymentSelection(option.id)}
            />
          ))}
        </div>
      </div>
      <button 
        className="gap-2.5 self-stretch px-6 py-5 mt-8 w-full text-base font-semibold leading-tight text-white bg-green-800 rounded-lg min-h-[56px] max-md:px-5 max-md:max-w-full"
        aria-label="Place Order"
      >
        Place Order
      </button>
    </div>
  );
}

export default OrderSummary;
// 
{/* <div class="flex flex-col mt-5 w-full font-medium leading-tight whitespace-nowrap max-md:max-w-full"><div class="flex flex-wrap gap-10 justify-between items-center w-full text-base max-md:max-w-full"><div class="self-stretch my-auto text-neutral-400">Subtotal</div><div class="self-stretch my-auto text-neutral-900">₿7,000.00</div></div><div class="mt-4 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:max-w-full"></div><div class="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full"><div class="self-stretch my-auto text-base text-neutral-400">Shipping</div><div class="self-stretch my-auto text-lg text-neutral-900">Free</div></div><div class="mt-4 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:max-w-full"></div><div class="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full"><div class="self-stretch my-auto text-base text-neutral-400">Total</div><div class="self-stretch my-auto text-xl text-neutral-900">₿48000.00</div></div></div> */}

{/* <div class="flex flex-col mt-5 w-full font-medium leading-tight whitespace-nowrap max-md:max-w-full"><div class="flex flex-wrap gap-10 justify-between items-center w-full text-base max-md:max-w-full"><div class="self-stretch my-auto text-neutral-400">Subtotal</div><div class="self-stretch my-auto text-neutral-900">₿7,000.00</div></div><div class="mt-4 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:max-w-full"></div><div class="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full"><div class="self-stretch my-auto text-base text-neutral-400">Shipping</div><div class="self-stretch my-auto text-lg text-neutral-900">Free</div></div><div class="mt-4 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:max-w-full"></div><div class="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full"><div class="self-stretch my-auto text-base text-neutral-400">Total</div><div class="self-stretch my-auto text-xl text-neutral-900">₿48000.00</div></div></div> */}