import { PRODUCTS } from '@/data';
import ProductList from './ProductList';
import { Button } from './ui/button';

export default function FeaturedProducts() {
  return (
    <div className="py-8">
      <h2 className="flex gap-6 text-xl text-primary font-headings items-center">
        <div className="w-3 h-6 bg-primary rounded-sm" />
        Featured Products
      </h2>
      <ProductList products={PRODUCTS} />
      <div className="flex w-full justify-center items-center mt-8">
        <Button variant="secondary" size="lg" className="font-headings">
          View More
        </Button>
      </div>
    </div>
  );
}
