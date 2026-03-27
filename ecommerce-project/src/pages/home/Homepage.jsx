import axios from 'axios'
import { useSearchParams } from 'react-router'
import { useEffect, useState } from 'react'
import Header from "../../components/Header"
import ProductsGrid from './ProductsGrid'
import "./HomePage.css"

function HomePage({ cart, loadCart }) {
  const [ products, setProducts ] = useState([]);
  const [ searchParams ] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      const response = search 
        ? await axios.get(`/api/products?search=${search}`)
        : await axios.get('/api/products')
      setProducts(response.data);
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="https://supersimple.dev/images/home-favicon.png" />
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage