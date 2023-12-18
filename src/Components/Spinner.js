import React from 'react'
import { Flex,Spin } from 'antd'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] flex-col'>
        <p className='font-bold text-2xl py-3' >Content Loading...</p>
      <Flex align="center" gap="middle">
    
    <Spin size="large" />
  </Flex>
    </div>
  )
}

export default Spinner
