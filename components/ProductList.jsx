import Product from './Product';

export default function ProductList({ products }) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 mt-6">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
