import React from 'react'
import { HeroSection } from '../componets/HeroSection'

export const About = () => {
  const data = {
    name:"patel ecommerce"
  }
  return (
    <HeroSection myData={data}/>
  )
}
