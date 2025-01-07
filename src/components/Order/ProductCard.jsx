/* eslint-disable react/prop-types */


function ProductCard({ image, name, price }) {
  return (
    <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full mb-4">
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="object-contain shrink-0 self-stretch my-auto w-20 rounded-lg aspect-[1.54]"
      />
      <div className="flex flex-1 shrink gap-10 justify-between items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="w-60 text-green-800">{name}</div>
        <div className="text-neutral-900">{price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
