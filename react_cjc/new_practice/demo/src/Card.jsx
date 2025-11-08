import React from 'react'

const Card = (props) => {
  return (

    <div className='bg-dark text-white justify-content-center align-items-center' style={{ width: 'fit-content' }}>
      <img src={props.product.thumbnail} style={{ width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      <div className='p-2 m-1' style={{ width: '50%' }}>
        <table>
          <tbody>
            <tr>
              <th>Proudct Id : </th>
              <td>{props.product.id}</td>

            </tr>
            <tr>
              <th>Product title : </th>
              <td>{props.product.title}</td>
            </tr>
            <tr>
              <th>Product description : </th>
              <td>{props.product.description}</td>

            </tr>
            <tr>
              <th>Product Category : </th>
              <td>{props.product.category}</td>
            </tr>
            <tr>
              <th>Product Price : </th>
              <td>{props.product.price}</td>
            </tr>
          </tbody>
        </table>

        <div className='d-flex m-3 p-2 gap-2'>
          <button className="btn btn-primary">Add To Cart</button>
          <button className="btn btn-success">Buy Now</button>
          <button className="btn btn-danger">Cancel</button>

        </div>
      </div>
    </div>

  )
}

export default Card
