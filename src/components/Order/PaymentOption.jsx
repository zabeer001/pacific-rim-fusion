import React from 'react';
import CreditCardForm from './CreditCardForm';

function PaymentOption({ name, selected, images, image, onSelect }) {
  console.log(name, selected, images, image, onSelect );
  
  const borderColor = selected ? 'border-green-800' : 'border-zinc-300';
  const textColor = selected ? 'text-green-800' : 'text-black';

  return (
    <div>
      <label
        className={`flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white rounded-lg border border-solid ${borderColor} cursor-pointer 
        ${selected ? 'bg-green-100' : ''} mt-2` }
        onClick={onSelect}
      >
        <div className="flex gap-3 items-center my-auto">
          <div className="relative">
            <input
              type="radio"
              checked={selected}
              className="sr-only"
              onChange={onSelect}
            />
            <div className={`w-5 h-5 border-2 rounded-full cursor-pointer ${selected ? 'border-green-800' : 'border-zinc-300'}`}>
              <div className={`absolute inset-0 rounded-full transition-all ${selected ? 'scale-50 bg-green-800' : 'scale-0'}`}></div>
            </div>
          </div>
          <div className={`text-base ${textColor}`}>{name}</div>
        </div>
        <div className="flex gap-2">
          {images ? (
            images.map((img, index) => (
              <img key={index} src={img} alt="icon" className="w-[42px]" />
            ))
          ) : (
            <img src={image} alt="icon" className="w-[66px]" />
          )}
        </div>
      </label>

      {name === 'Credit Card' && selected && (
        <div className="w-full mt-4">
          <CreditCardForm />
        </div>
      )}
    </div>
  );
}

export default PaymentOption;