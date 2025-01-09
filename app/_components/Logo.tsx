import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image src="/logo.svg" alt="Logo" width={60} height={60} />
        
    </div>
  )
}

export default Logo