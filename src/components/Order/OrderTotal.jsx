

function OrderTotal() {
  return (
    <div className="flex flex-col mt-5 w-full font-medium leading-tight whitespace-nowrap max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full text-base max-md:max-w-full">
        <div className="self-stretch my-auto text-neutral-400">Subtotal</div>
        <div className="self-stretch my-auto text-neutral-900">₿7,000.00</div>
      </div>
      <div className="mt-4 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
        <div className="self-stretch my-auto text-base text-neutral-400">Shipping</div>
        <div className="self-stretch my-auto text-lg text-neutral-900">Free</div>
      </div>
      <div className="mt-4 w-full border border-solid bg-neutral-400 border-neutral-400 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
        <div className="self-stretch my-auto text-base text-neutral-400">Total</div>
        <div className="self-stretch my-auto text-xl text-neutral-900">₿48000.00</div>
      </div>
    </div>
  );
}

export default OrderTotal;