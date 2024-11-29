import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { useCart } from "@/globals/CartProvider";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { cartItems, handleAddToCart, handleRemoveFromCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const inCart = cartItems && cartItems.find((item) => item.id === product?.id);

  // Cache the discount value for each product
  const discountPrice = useMemo(() => {
    const discountGenerator = (price: number) => {
      const discount = Math.floor(Math.random() * 31);
      if (discount < price && price - discount > 5) {
        return price - discount;
      } else {
        return price - 5;
      }
    };
    return discountGenerator(product?.price);
  }, [product?.price]);

  return (
    <div
      className="flex flex-col p-4 bg-white border rounded-lg shadow-lg cursor-pointer w-[400px]"
      role="region"
      aria-labelledby={`product-${product.id}`}
    >
      {!imageLoaded && (
        <div
          className="w-full h-[300px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-pulse rounded-lg"
          role="img"
          aria-label="Loading image"
          aria-live="polite"
        />
      )}
      <div
        className="w-full rounded"
        style={{ position: "relative", height: "300px" }}
        aria-hidden="true"
      >
        <Image
          src={product?.image}
          alt={product?.name}
          layout="fill"
          objectFit="cover"
          className="rounded"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="mt-4">
        <h3
          id={`product-${product.id}`}
          className="text-xl font-semibold text-center"
          tabIndex={0}
        >
          {product?.name}
        </h3>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-2">
          <p className="mt-2 font-bold text-md" aria-live="polite">
            ${discountPrice}
          </p>
          <p className="mt-2 font-light text-gray-500 line-through text-md">
            ${Number(product?.price)}
          </p>
        </div>
        {inCart ? (
          <Button
            color="failure"
            onClick={() => handleRemoveFromCart(product?.id)}
            aria-label={`Remove ${product?.name} from cart`}
            tabIndex={0}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={() => handleAddToCart(product)}
            aria-label={`Add ${product?.name} to cart`}
            tabIndex={0}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}
