import React from 'react';

import CustomButton from './CustomButton';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-primary-blue-100">
        <Link href={'/'} className="flex justify-center items-center">
          {/*<Image src={'/logo.svg'} alt="logo" width={118} height={18} className="object-contain" />*/}
          <h1 className="text-2xl font-bold text-primary-blue">RentCar</h1>
        </Link>

        {/*<CustomButton onClick title="Sign In" btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" />*/}
        <Link href='/signin' className='custom-btn text-primary-blue rounded-full hover:bg-white bg-white/80 min-w-[130px]'>Sign In</Link>
      </nav>
    </header>
  );
};

export default Navbar;
