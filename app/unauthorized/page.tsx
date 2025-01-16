import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const UnauthorizedPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full mt-20 gap-3'>
            <h1 className='text-2xl font-bold text-myPrimaryRed'>Bạn không có quyền truy cập vào trang này!</h1>
            <h2 className='font-semibold text-myPrimaryBlue'>
                Vui lòng quay trở lại trang chủ
            </h2>
            <Link href={'/'}>
                <Button className='bg-myPrimaryBlue hover:bg-myPrimaryBlue/80 text-white'>
                    Trang chủ
                </Button>
            </Link>
        </div>
    )
}

export default UnauthorizedPage