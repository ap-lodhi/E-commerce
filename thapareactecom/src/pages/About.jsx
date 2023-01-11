import React, { useContext } from 'react'
import { HeroSection } from '../componets/HeroSection'
import { useProductContext } from '../context/ProductContex'

export const About = () => {
  const {myName} = useProductContext()
  const data = {
    name:"patel ecommerce"
  }
  return (
    <>
    {myName}
    <HeroSection myData={data}/>

    </>
  )
}
