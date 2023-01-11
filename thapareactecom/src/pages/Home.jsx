import React from 'react'
import { HeroSection } from '../componets/HeroSection';
import { Services } from '../componets/Services';
import { Trusted } from '../componets/Trusted';

export const Home = () => {
  const data = {
    name:"patel store"
  }
  return (
    <>
    
      <HeroSection myData={data}/>
      <Services/>
      <Trusted/>
    
    </>
    )
  };
  
 