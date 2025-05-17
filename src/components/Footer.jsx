import React from 'react'
import coffeeBeansIcon from '../assets/icons/coffeeBeansIcon.svg'
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
    return (

        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <div className='flex items-center gap-2 mb-5'>
                        <img src={coffeeBeansIcon} alt="cooffeebeans logo" />
                        <a href="/" className='text-lg font-bold sm:text-3xl'>CoffeeBeans</a>
                    </div>
                    <p className='w-foll md:w-1/2 text-gray-600 font-[Barlow]'>
                        This website was created by <strong> Holenko Denys</strong> for educational purposes only and is not intended for commercial use.
                        Product information and images were sourced from <a href="https://www.coffeebean.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">coffeebean.com</a>.
                    </p>
                </div>
                <article>
                    <h5 className='text-xl font-medium mb-5'>COMPANY</h5>
                    <ul className='flex flex-col gap-1 text-gray-600 font-[Barlow]'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/">Privacy policy</a></li>
                    </ul>
                </article>
                <article>
                    <h5 className='text-xl font-medium mb-5'>GET IN TOUCH</h5>
                    <ul className='flex flex-col gap-1 text-gray-600 font-[Barlow]'>
                        <li className='flex items-center gap-1'><BsTelephone /> +33 6 43 69 66 94</li>
                        <li className='flex items-center gap-1'><MdAlternateEmail />denysgolenko@gmail.com</li>

                    </ul>
                </article>

            </div>

            <div>
                <hr />
                <p className="text-xs text-gray-600 text-center pb-4 my-6 font-[Barlow]">
                    © {new Date().getFullYear()} Holenko Denys. All rights reserved.
                </p>
            </div>

        </div>

    )
}

export default Footer
