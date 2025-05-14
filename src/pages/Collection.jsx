import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

import Filters from '../components/Filters';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [filterProducts, setFilterProduct] = useState([]);

    useEffect(() => {
        setFilterProduct(products)
    }, [products])

    return (
        <main className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t font-[Barlow]'>
            <Filters />
            <div className='flex-1'>
                <section className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title titlePart1={'ALL'} titlePart2={'COLLECTION'} />
                    <select name="product-sort" id="sort" className='border border-gray-300 text-sm px-2'>
                        <option value="relevent">Sort by: Relevent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </section>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductCard key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

                        ))
                    }
                </div>
            </div>





        </main>
    )
}

export default Collection
