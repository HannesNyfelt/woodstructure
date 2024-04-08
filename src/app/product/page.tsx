import products  from '@/products.json';
import ProductCard from '@/components/ProductCard'
export default function Product() {
    return (
        <div className="w-full gap-5 min-h-screen mt-10 ">
        <div className="relative -mb-6 w-full overflow-x-auto pb-6">
          <ul
            role="list"
            className="mx-4 flex flex-wrap flex-auto gap-10"
          >
            {products.sv.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            </ul>
        </div>
        </div>
    );
}
