import PropTypes from 'prop-types'
import Category from '../Category/Category';
import Cart from '../Cart.jsx/Cart';
import { useState } from 'react';

const Categories = ({categories}) => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleProducts = (id,item, price) => {
        const ifItemAlreadyExist = products.find(product => product.id === id);
        const totalProductPrice = totalPrice + price;
        if(ifItemAlreadyExist) {
            return alert("You can't buy same item twice.")
        }
        setTotalPrice(totalProductPrice)
        setProducts([...products, item]);
        
    }

    // const handleRemove = (item) => {
    //     const removeItem = products.filter(product => product.id !== item.id);
    //     console.log(removeItem)
    // }
    return (
        <div className='flex justify-between'>
            <div>
                {
                    categories.map((category, idx) => <Category 
                        key={idx} 
                        category={category} 
                        handleProducts={handleProducts}
                        // handleRemove={handleRemove}
                    />)
                }
            </div>
            <div className='w-[280px] md:mt-[88px]'>
                <div className='bg-white p-4'>
                    <h2 className='pb-2.5'>Cart: {products.length}</h2>
                    <hr />
                    <h3 className='pt-2.5'>Products Name</h3>
                    <Cart products={products}
                    // handleRemove={handleRemove}
                    />
                    <hr />
                    <p>Total Price: {totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
}


export default Categories;