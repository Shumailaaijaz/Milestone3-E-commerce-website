import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Define an interface for the product data
interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

// Fetch data function
async function getdata(): Promise<Product[]> {
  const fetchData = await client.fetch<Product[]>(
    `*[_type == "product"] {
      name,
      price,
      "imageUrl": image.asset->url
    }`
  );
  return fetchData;
}

export default async function Product() {
  const data = await getdata();

  return (
    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((val, i) => (
        <div
          key={i}
          className="relative group rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-4 shadow-lg overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition duration-300 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-2xl"></div>

          {/* Product Image */}
          <div className="relative z-10 flex justify-center items-center">
            <Image
              src={val.imageUrl}
              alt={val.name}
              className="rounded-lg transition-transform duration-300 group-hover:scale-110 h-[100px] w-[100px]"
              width={300}
              height={300}
            />
          </div>

          {/* Product Details */}
          <div className="relative z-10 mt-5 text-center text-white">
            <h3 className="text-xl font-bold lg:h-[100px] group-hover:text-pink-400 transition-colors duration-300">
              {val.name}
            </h3>
            <p className="mt-2 text-gray-300 text-sm">Exclusive Product</p>
            <p className="mt-3 text-2xl font-extrabold text-yellow-400">
              ${val.price}
            </p>
          </div>

          {/* Action Button */}
          <div className="relative z-10 mt-5 text-center">
           <Link href="/contact"> 
           <button className="px-6 py-2 text-sm font-medium text-gray-900 bg-yellow-400 rounded-full shadow-md hover:bg-yellow-500 transition-transform duration-300 group-hover:scale-105">
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}