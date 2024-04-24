import products from '@/products.json';
import ProductCard from '@/components/ProductCard'
import TopDiv from '@/components/TopDiv';
export default function Product() {
  return (
    <div className="w-full gap-5 min-h-screen ">
      <TopDiv></TopDiv>
      <div id='about' className="relative -mb-6 w-full overflow-x-auto pb-6">
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
