import ProductsList from "@/components/ProductsList";
export default async function Product(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()
    return(
        <main className="container">
            <ProductsList products={products}/>
        </main>
    )
}



