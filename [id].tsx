// app/products/[id].tsx
import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Details for Sofa {id}</h1>
      <p>Details about Sofa {id} will go here.</p>
      {/* Product details will be fetched or static here */}
    </div>
  );
}
