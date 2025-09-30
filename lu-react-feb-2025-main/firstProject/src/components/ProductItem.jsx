export default function ProductItem(props)
{
    return (
        <>  
            <div className="product-item">
                <img className="product-img" src={props.imageUrl}/>
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
            </div>
        </>
    )
}