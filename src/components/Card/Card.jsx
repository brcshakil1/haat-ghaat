import PropTypes from 'prop-types'

function Card({product, handleProducts, handleRemove}) {
    const {id, img, name, details, price, discount} = product;

    const disCountPrice = price - (price * discount / 100);
    
  return (
    <div className='md:w-[290px] my-5 bg-white p-4 rounded-md'>
        <img src={img} alt="" className='w-[280px] h-[200px] object-cover rounded-md'/>
        <div>
            <h3 className='text-xl font-medium py-2'>{name}</h3>
            <p>{details}</p>
            <p className='py-2.5'>Regular Price: {price}</p>
            <p>
            {price > disCountPrice.toFixed(2) ?`Price with discount: ${disCountPrice.toFixed(2)}`: ''}
            </p>
            <button 
            className='bg-sky-400 
            py-2 px-5 
            rounded-md 
            text-white mt-5 
            font-semibold'

            onClick={() => {
              handleProducts(id, product, disCountPrice)
              handleRemove(product)
            }}
            >Add To Cart</button>
        </div>
    </div>
  )
}

Card.propTypes = {
    product: PropTypes.object,
    handleProducts: PropTypes.func,
    handleRemove: PropTypes.func
}

export default Card
