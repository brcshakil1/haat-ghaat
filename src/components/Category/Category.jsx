import PropTypes from 'prop-types'
import Card from '../Card/Card';

function Category({category, handleProducts, handleRemove}) {
    const {name, products} = category;
  return (
    <div className='my-10'>
        <h2 
        className='border-2 border-sky-400 py-2 px-4 rounded-sm text-[#131921] text-xl font-semibold inline cursor-default'>
            {name}
        </h2>
        <div className='grid grid-cols-3 gap-5'>
            {
                products.map(product => <Card 
                        key={product.id} 
                        product={product} 
                        handleProducts={handleProducts}
                        handleRemove={handleRemove}
                    />)
            }
        </div>
    </div>
  )
}

Category.propTypes = {
    category: PropTypes.array,
    handleProducts: PropTypes.func,
    handleRemove: PropTypes.func,
}

export default Category
