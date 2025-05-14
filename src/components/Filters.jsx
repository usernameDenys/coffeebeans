import React from 'react'
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Filters = () => {
    const [showFilter, setShowFilter] = useState(false);
    return (
        <div className='min-w-60'>
            <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                <IoIosArrowForward className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} /></p>

            <fieldset className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                <legend className='mb-3 text-sm font-medium'>BREW TYPE</legend>
                <form className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='wBean' className='w-3' value={'Whole Bean'} />
                        <label htmlFor="wBean">Whole Bean</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='ground' className='w-3' value={'Ground'} />
                        <label htmlFor="ground">Ground</label>
                    </div>
                </form>
            </fieldset>
            <fieldset className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                <legend className='mb-3 text-sm font-medium'>ROAST</legend>
                <form className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='light' className='w-3' value={'Light'} />
                        <label htmlFor="light">Light</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='medium' className='w-3' value={'Medium'} />
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='dark' className='w-3' value={'Dark'} />
                        <label htmlFor="dark">Dark</label>
                    </div>

                </form>
            </fieldset>

        </div>
    )
}

export default Filters
