export function CategorySidebar() {
    return (
      <aside className="flex flex-col px-1 pt-7 w-full font-semibold leading-tight bg-gray-200 rounded-lg pb-[612px] max-md:pb-24 max-md:mt-8">
        <div className="flex flex-col p-6 max-md:px-5">
          <div className="flex flex-col w-full">
            <h2 className="text-3xl text-green-800">Shop by Flowers</h2>
            <div className="flex flex-col self-start mt-4 text-2xl text-black whitespace-nowrap">
              <button className="hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">Indica</button>
              <button className="mt-3 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">Sativa</button>
              <button className="mt-3 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">Hybrid</button>
            </div>
          </div>
          <div className="flex flex-col mt-16 w-full max-md:mt-10">
            <div className="w-full border border-dashed bg-neutral-700 border-neutral-700 min-h-[1px]" />
            <div className="flex flex-col mt-2 w-full">
              <h2 className="text-3xl text-neutral-700">Categories</h2>
              <div className="flex flex-col items-start self-start mt-6 text-2xl text-black">
                <button className="whitespace-nowrap hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">Flower</button>
                <button className="mt-2 whitespace-nowrap hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">Topicals</button>
                <button className="mt-2 whitespace-nowrap hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">Apprel</button>
                <button className="mt-2 whitespace-nowrap hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">Edibels</button>
                <button className="mt-2 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">Vape Products</button>
                <button className="self-stretch mt-2 whitespace-nowrap hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800">
                  Concentrations
                </button>
              </div>
            </div>
            <div className="mt-2 w-full border border-dashed bg-neutral-700 border-neutral-700 min-h-[1px]" />
          </div>
        </div>
      </aside>
    );
  }