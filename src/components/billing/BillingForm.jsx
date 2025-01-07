
import { FormInput } from "./FormInput";

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setCountry, setFullName } from './../../redux/billSlice';  // Add 




export function BillingForm() {
  const dispatch = useDispatch()
  const formFields = [
    { id: "fullName", label: "Full Name", required: true },
    { id: "country", label: "Country", required: true },
    { id: "city", label: "Town/City/Region", required: true },
    { id: "address", label: "Address", required: true },
    { id: "apartment", label: "Apartment/Floor", required: false },
    { id: "email", label: "Email address", required: true, type: "email" },
    { id: "phone", label: "Phone Number", required: false, type: "tel" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onvalchange = (name,value) => {
    console.log(name,value);
    
    dispatch(setCountry({country: value}));
    dispatch(setFullName({fullName: value}));
  


    
  }

  return (
    <div className="flex flex-col leading-tight max-w-[570px]">
      <h1 className="text-3xl font-semibold text-green-800 max-md:max-w-full">
        Billing Information
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-base text-red-600 max-md:max-w-full">
          {formFields.map((field) => (
            <div key={field.id} className="mt-8">
              <FormInput {...field} onValueChange={(name,val) => onvalchange(name,val)} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-4 w-full text-xs text-center text-neutral-400 max-md:max-w-full">
          <input
            type="checkbox"
            id="saveInfo"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <label htmlFor="saveInfo" className="self-stretch my-auto">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
}

//<label for="fullName" class="max-md:max-w-full">Full Name <span class="text-red-600">*</span></label>


{/* <div class="flex flex-col mt-5 w-full max-md:max-w-full"><div class="flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white rounded-lg border border-solid border-green-800  max-md:max-w-full"><div class="flex gap-3 items-start self-stretch my-auto"><div class="flex flex-col w-5"><input type="radio" class="appearance-none w-5 h-5 border-2 rounded-full border-solid cursor-pointer checked:bg-green-800 checked:border-green-800" readonly="" checked=""></div><div class="text-base leading-tight text-green-800">Credit Card</div></div><div class="flex gap-2 items-start self-stretch my-auto"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe00476675e2c1990c9c3bb56914959c7c985407828c8975f3d75575105fb2a?placeholderIfAbsent=true&amp;apiKey=2e251f586b5b47d69c37dbbb20f835df" alt="" class="object-contain shrink-0 aspect-[1.5] w-[42px]"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c90657d66f959f2735eb28bbee503146ad88d7d130e1feaaf68f42ef888fbf0?placeholderIfAbsent=true&amp;apiKey=2e251f586b5b47d69c37dbbb20f835df" alt="" class="object-contain shrink-0 aspect-[1.5] w-[42px]"></div></div><div class="flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white rounded-lg border border-solid border-zinc-300 mt-4 max-md:max-w-full"><div class="flex gap-3 items-start self-stretch my-auto"><div class="flex flex-col w-5"><input type="radio" class="appearance-none w-5 h-5 border-2 rounded-full border-solid cursor-pointer checked:bg-green-800 checked:border-green-800" readonly=""></div><div class="text-base leading-tight text-black">PayPal</div></div><div class="flex gap-2 items-start self-stretch my-auto"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b81887d892c8b0cda4b3af51771e04341ab9e75d128795a2c184c9c05398d349?placeholderIfAbsent=true&amp;apiKey=2e251f586b5b47d69c37dbbb20f835df" alt="" class="object-contain shrink-0 aspect-[2.36] w-[66px]"></div></div><div class="flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white rounded-lg border border-solid border-zinc-300 mt-4 max-md:max-w-full"><div class="flex gap-3 items-start self-stretch my-auto"><div class="flex flex-col w-5"><input type="radio" class="appearance-none w-5 h-5 border-2 rounded-full border-solid cursor-pointer checked:bg-green-800 checked:border-green-800" readonly=""></div><div class="text-base leading-tight text-black">Cash on delivery</div></div><div class="flex gap-2 items-start self-stretch my-auto"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80de602c0e24735424830e9724c4010c6223046420fc0ffc9a83a3eb6c39eac2?placeholderIfAbsent=true&amp;apiKey=2e251f586b5b47d69c37dbbb20f835df" alt="" class="object-contain shrink-0 aspect-[2.36] w-[66px]"></div></div><form class="flex flex-col mt-4 w-full text-base leading-tight text-zinc-400 max-md:max-w-full"><label for="cardholderName" class="sr-only">Cardholder Name</label><input id="cardholderName" type="text" placeholder="Cardholder Name" class="flex-1 shrink self-stretch px-4 py-4 w-full rounded-lg border border-solid border-zinc-400 min-h-[48px] max-md:max-w-full text-black"><label for="cardNumber" class="sr-only">Card Number</label><input id="cardNumber" type="text" placeholder="Card Number" class="flex-1 shrink self-stretch px-4 py-4 mt-4 w-full rounded-lg border border-solid border-zinc-400 min-h-[48px] max-md:max-w-full text-black"><div class="flex flex-wrap gap-4 items-start mt-4 w-full whitespace-nowrap max-md:max-w-full"><div class="flex-1 min-w-[240px]"><label for="expDate" class="sr-only">Expiration Date</label><input id="expDate" type="text" placeholder="Exp.Date" class="w-full px-4 py-4 rounded-lg border border-solid border-zinc-400 min-h-[48px] text-black"></div><div class="flex-1 min-w-[240px]"><label for="cvv" class="sr-only">CVV</label><input id="cvv" type="text" placeholder="CVV" class="w-full px-4 py-4 rounded-lg border border-solid border-zinc-400 min-h-[48px] text-black"></div></div></form></div> */}