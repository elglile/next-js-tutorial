"use client"
import ProductsList from "@/components/ProductsList";
import { useEffect, useState } from "react"
import Loading from "./loading";
// import ProductsList from ""
export default function Product(){
    const [products, setProducts]= useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {setProducts(data)
    setLoading(false);
  });
    },[])
    return(
        <main className="container">
            {loading ? <Loading /> : <ProductsList products={products} />}{loading ? <Loading /> : <ProductsList products={products} />}
        </main>
    )
}