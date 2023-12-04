import { useState } from 'react'
import logo from '../public/assets/imgs/logo-oasis.svg'
import cart from '../public/assets/imgs/shopping-cart.svg'
import './App.scss'
import Product from './components/Product';

function App() {
  const products = [
    { 
      name: "sunscreen + hand moisturizer combo", 
      picture: "./assets/imgs/mockup-product-1.png", 
      altPicture: "Produto 1",
      topPick: false
    },
    { 
      name: "night time facial cream", 
      picture: "./assets/imgs/mockup-product-2.png", 
      altPicture: "Produto 2",
      topPick: false
    },
    { 
      name: "facial scrub + moisturizer combo", 
      picture: "./assets/imgs/mockup-product-3.png", 
      altPicture: "Produto 3",
      topPick: true
    },
  ]

  return (
    <>
      <body>
        <header>
          <nav className='flex flex-jc-sb'>
          <a href="/" target="_blank">
            <img src={logo} className="header__logo" alt="Oasis-logo"/>
          </a>

          <div className='header__links'>
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">products</a>
            <a href="#">about us</a>
          </div>
          
          <div className='shopping__cart'>
            <a href="/">
              <img src={cart} className='child' alt="shopping-cart" />
            </a>
          </div>
          </nav>
        </header>
        
        <hr className='decorative__break'/>

        <div className='hero__banner flex flex-jc-sb'>
          <div className='text__box'>
            <h1>pure wellness, <br/> naturally yours.</h1>
            <p>
              explore a world of conscious cosmetics that celebrate the harmony between nature and self-care.
            </p>
            <button type='button' className='shop__button'>shop now</button>
          </div>

          <div className='hero__image flex flex-jc-c'>
            <img src="./assets/imgs/hero-picture.png" alt="hero-image" />
          </div>
        </div>

        <hr className='decorative__break'/>

        <div className='products'>
          {products.map((product) => (
            <Product 
              name={product.name} 
              picture={product.picture} 
              altPicture={product.altPicture}
              topPick={product.topPick}
            />
          ))}
        </div>

        <hr className='decorative__break'/>

        <div className='model__banner'>
          <img src="./assets/imgs/model-mockup.png" alt="model-banner"/>
          <div className='banner__text'>
          <h3>
          take some time<br/>for yourself.
          </h3>
          <p>
          indulge in nature's elegance: discover our curated collection of pure and organic self-care cosmetics. immerse yourself in a world of botanical beauty, where each product is crafted to enhance your well-being naturally embrace the essence of organic luxury, where skincare meets sustainability. elevate your self-care routine with our consciously curated selection of wholesome beauty essentials.
          </p>
          </div>
        </div>

        <hr className='decorative__break'/>

        <div className='organic__img'>
          <img src="./assets/imgs/organic-header.svg" alt="organic-img" />
        </div>

        <hr className='decorative__break'/>

        <div className='newsletter__container'>
            <h2>subscribe to our newsletter!</h2>
            <p>we just need your email to let you know all about the world of oasis.</p>
            
            <div className='email__container'>
            <input type="email" className='email' pattern='.+@example\.com' required/>
            <button type='button' className='submit__button'>ok!</button>
            </div>
        </div>

        <footer>
          <img src="./assets/imgs/footer_bg.png" alt="footer-img" className='footer__bg'/>
        </footer>
      </body>
    </>
  )
}

export default App;
