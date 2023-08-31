import React from 'react'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'


function Root() {
  return (
    <div>
      <Header />
      <Menu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root
