import React, { useState } from 'react'
import axios from 'axios'
import Card from './Card'


const ShowProducts = () => {

  const [product, setProduct] = useState([])
  const [viewCards, setViewCards] = useState(false)
  const card_list = [];
  function getProducts() {

    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProduct(response.data.products)
        setViewCards(true);
      })
      .catch((error) => {
        console.log(error)
      })

  }


  return (
    <div>
      <button onClick={getProducts}>View Products</button>

      <table border={2}
      >
        <thead>
          <th>Id</th>
          <th>title</th>
          <th>description</th>
          <th>category</th>
          <th>price</th>
          <th>Product1</th>
        </thead>
        <tbody>
          {
            product.map((product, i) => {
              return <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td><img src={product.thumbnail} alt="product-thumbnail" /></td>
              </tr>
            })
          }
        </tbody>
      </table>


      {/* <div class="row">
        {
          viewCards && (
            product.map((product, index) => <div class="col"><Card product={product} /></div>

            )


          )
        }
      </div> */}
    </div>
  )
}

export default ShowProducts
