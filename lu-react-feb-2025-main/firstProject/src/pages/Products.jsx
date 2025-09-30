import { useState } from "react";
import ProductItem from "../components/ProductItem";

export default function Products()
{

    let [products,setProducts] = useState([
        {
            name:"Iphone 15",
            price:89000,
            imageUrl:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=90&crop=false"
        },
        {
            name:"Samsung S23",
            price:97000,
            imageUrl:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715785282/Croma%20Assets/Communication/Mobiles/Images/268867_0_sstd64.png?tr=w-600"
        },
        {
            name:"Oneplus 8",
            price:56000,
            imageUrl:"https://m.media-amazon.com/images/I/51eLtG3A3aL.jpg"
        }
    ])


    return (
        <>
            <div className="products">


                {
                    products.map((product)=>{
                        return (
                            <ProductItem name={product.name} price = {product.price} imageUrl={product.imageUrl}/>
                        )
                    })
                }


            
               


            </div>

          

        </>
    )
}