import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div id='nav-main'>
      <div id='logo'>
      <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
      <h2>GeekFoods</h2>
      </div>
      <ul id='nav'>
        <li id='nav-home'>Home</li>
        <li>Quote</li>
        <li>Resturant</li>
        <li>Foods</li>
        <li>Contact</li>
      </ul>
      <button id='nav-btn'>Get started</button>
    </div>
    </>
  )
}

export default App
