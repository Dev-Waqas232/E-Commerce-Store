'use client';
import Image from 'next/image';

export default function Product({ product }) {
  console.log(product);
  return (
    <div className="h-[300px]">
      <div className="w-full flex h-[70%] bg-[#f5f5f5] justify-center items-center ">
        <Image src={product.image} className="object-cover" />
      </div>
      <h2 className="font-headings mt-3 font-semibold">{product.name}</h2>
      <div className="flex gap-8">
        <p className="text-primary text-sm font-semibold">${product.price}</p>
        {product.discount_price && (
          <p className="text-gray-500 text-sm line-through">
            ${product.discount_price}
          </p>
        )}
      </div>
      <p className="text-xs text-gray-500">({product.reviews})</p>
    </div>
  );
}
