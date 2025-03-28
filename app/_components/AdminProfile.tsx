import Image from 'next/image'
import React from 'react'

const AdminProfile = () => {
    return (
        <div className='flex flex-col md:flex-row bg-myPrimaryBlue/80 p-10 gap-20 items-center justify-center rounded-lg'>
            <div className='flex rounded-xl bg-white items-center justify-center overflow-hidden p-3' >
                <Image
                    src='/logo.svg'
                    alt='Admin Profile'
                    width={200}
                    height={200}
                ></Image>
            </div>
            <div className='flex items-center justify-center flex-col gap-2'>
                <h1 className='text-3xl font-bold text-white'>
                    Hoang Tu Shun Official
                </h1>
                <h2 className='text-xl font-semibold text-white'>
                    shunquang.contact@gmail.com
                </h2>
            </div>
        </div>
    )
}

export default AdminProfile