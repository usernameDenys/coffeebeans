import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { FaStripe } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
    const [pMethod, setMethod] = useState('pod');
    const { navigate } = useContext(ShopContext);
    return (
        <form className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t font-[Barlow]">
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title titlePart1={'DELIVERY'} titlePart2={'INFORMATION'} />
                </div>

                {/* delivery info block */}
                <div className='flex gap-3'>
                    <input required type="text" placeholder='First name' className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' />
                    <input required type="text" placeholder='Last name' className='border  border-gray-300 rounded py-1.5 px-3.5 w-full' />
                </div>
                <input required
                    type="email"
                    placeholder="Email Address"
                    className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"

                />
                <input
                    required
                    type="text"
                    placeholder="Street"
                    className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"

                />
                <div className="flex flex-col sm:flex-row  gap-3">
                    <input
                        required
                        type="text"
                        placeholder="City"
                        className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"

                    />
                    <input
                        required
                        type="text"
                        placeholder="Region"
                        className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"

                    />
                </div>
                <div className="flex flex-col sm:flex-row  gap-3">
                    <input
                        required
                        type="text"
                        placeholder="Zipcode"
                        className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"

                    />
                    <input
                        required
                        type="text"
                        placeholder="Country"
                        className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"

                    />
                </div>
                <input
                    required
                    type="number"
                    placeholder="Phone "
                    className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"

                />
            </div>
            {/* payment method block */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title titlePart1={'PAYMENT'} titlePart2={'METHOD'} />
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <span className={` min-w-3.5 h-3.5 border rounded-full ${pMethod === 'stripe' ? 'bg-green-400' : ''}`}></span>
                            <FaStripe className="h-5 mx-4 text-2xl text-[#5167FC]" />
                        </div>
                        <div onClick={() => setMethod('pod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                            <span className={` min-w-3.5 h-3.5 border rounded-full ${pMethod === 'pod' ? 'bg-green-400' : ''}`}></span>
                            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                    <div className="w-full text-end mt-8">
                        <button
                            onClick={() => navigate('/orders')}
                            className="bg-black text-white px-16 py-3 text-sm w-full">
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>



        </form>

    )
}

export default PlaceOrder
