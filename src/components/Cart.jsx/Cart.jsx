import PropTypes from 'prop-types'

function Cart({products}) {
  return (
    <div className='pt-2.5'>
        {
            products.map((product, idx) => <div key={product.id} className='flex justify-between py-1'>
                <h3>{idx+1}. {product.name}</h3>
                <div 
                className='bg-red-400 text-2xl text-white flex items-center justify-center rounded-full w-6 h-6 cursor-pointer'
                // onClick={handleRemove}
                >-</div>
            </div>)
        }
    </div>
  )
}

Cart.propTypes = {
    products: PropTypes.array,
    handleRemove: PropTypes.func
}

export default Cart
