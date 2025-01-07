import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const products = [
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e2eee2d87f9223e15d4d490ff2922fdad0a22157bd32d19501954d9886d6193?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07a15d7f9b9bb47f1c399eb2bcca6083f278b4bf5bd9f04b6458478c49d90e56?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f30190ae8334711be131a4faa618ed10d6b8118e1fb0977816b5faf9d799c?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4dd039fee230bad73c9e81be9b42370d963639728093a42252a4373a6761bd5b?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5876283651517a075632f1cf4dcb2ec865e183ad25f964e7eac9ed23f304dc0d?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/437698f36a55085fdea81db93566e5977998abe1c4e84a54633d51c875ad61b8?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1130998d2e61365068b144f3d996b8edb94edba896e3fcba0a19881a3601d24f?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4dd039fee230bad73c9e81be9b42370d963639728093a42252a4373a6761bd5b?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9", price: "7,000.00", originalPrice: "9,25.00" }
];

export default function HomeAfter() {
  return (
    <>
      <div className="p-5">
        <h1>Hello</h1>
      </div>
      <div className='bg-primary-light rounded-3xl'>
        <div className='container'>
          <div className="flex flex-col items-center py-7">
            <div className="flex flex-col self-stretch w-full max-md:max-w-full">
              <h1 className="text-4xl font-semibold leading-tight text-center text-green-800 max-md:max-w-full">
                Our Featured Products
              </h1>
              <h2 className="mt-2 text-xl font-medium leading-tight text-center bg-clip-text max-md:max-w-full">
                Products
              </h2>
              <div className="flex gap-1 items-start self-center mt-2">
                <div className="flex shrink-0 w-3 h-1 bg-stone-600 bg-opacity-30" />
                <div className="flex shrink-0 w-10 h-1 bg-green-800" />
                <div className="flex shrink-0 w-3 h-1 bg-stone-600 bg-opacity-30" />
              </div>
            </div>
            <div className=" items-center mt-10 w-full max-md:max-w-full">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ms-auto">
                {products.map((product, index) => (
                  <FeaturedProducts key={index} {...product} />
                ))}
              </div>
            </div>
            <button
              className="flex gap-3 justify-center items-center px-6 py-3 mt-10 text-base font-medium leading-tight text-white bg-green-800 rounded-lg max-md:px-5"
              aria-label="Explore more products"
            >
              <div className="flex gap-1 items-center self-stretch my-auto">
                <div className="self-stretch my-auto">Explore More</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00651e66aeccdb8ce0f30cf002cbf41fd80842796b048d2f1aecf41ebb2ee3d8?placeholderIfAbsent=true&apiKey=13a72d2a8d4c40b0974e394fc11603d9"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
