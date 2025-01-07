import { CategorySidebar } from "../../components/CategorySidebar/CategorySidebar"
export default function Categories() {
  return (
    <div className="self-center mt-20 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <CategorySidebar />
        </div>
        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap grow gap-8 items-center max-md:mt-8">
            {/* {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}
