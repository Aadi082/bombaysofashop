// pages/index.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  { id: 1, name: "Sofa 1", image: "/images/sofa1.jpg" },
  { id: 2, name: "Sofa 2", image: "/images/sofa2.jpg" },
  { id: 3, name: "Sofa 3", image: "/images/sofa3.jpg" }
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to Sofa Shop!</h1>
      <p>Your one-stop destination for high-quality sofas and home furniture.</p>

      {/* Featured products */}
      <section>
        <h2>Featured Sofas</h2>
        <div className="featured-products">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-item">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={500} 
                height={300} 
              />
              <p>{product.name}</p>
              <Link href={`/products/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .featured-products {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 30px;
        }

        .product-item {
          text-align: center;
        }

        .product-item img {
          border-radius: 10px;
        }

        .product-item p {
          margin-top: 10px;
          font-size: 1.2rem;
        }

        .product-item button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }

        .product-item button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default Home;
