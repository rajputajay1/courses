import React from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Main from '../Layout/Main/Main'
import About from '../Pages/About/About'
import Contect from '../Pages/Contect/Contect'
import CarrerCounselling from '../Pages/Carrer/CarrerCounselling'
import Dmit from '../Pages/Dmit/Dmit'
import Mba from '../Pages/Mba/Mba'


const Index = () => {
  return (
      <>
           <Header />
            <Routes>
             
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contect />} />
              <Route path="/carrercounselling" element={<CarrerCounselling />} />
              <Route path="/dmit" element={<Dmit />} />
              <Route path="/mba" element={<Mba />} />

              
                  
                
            </Routes>

         <Footer /> 
          

    </>
  )
}

export default Index