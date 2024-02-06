import { useState } from 'react'
import './App.css'
import icon from '../images/shop.svg'
import bur1 from '../images/screen.png'
import bur2 from '../images/shot.png'
import bur3 from '../images/can.png'
import play from  '../images/arrowrightb.svg'
import disp1 from '../images/scant1.png'
import disp2 from '../images/scant2.png'
import disp3 from '../images/scant3.png'
import disp4 from '../images/scant4.png'
import star1 from '../images/vector.svg'
import star2 from '../images/vector.svg'
import star3 from '../images/vector.svg'
import star4 from '../images/vector.svg'
import star5 from '../images/vector.svg'
import svg1 from '../images/arrow-left.svg'
import ea from '../images/brand.png'
import ra from '../images/brand1.png'
import her from '../images/brand3.png'
import gv from '../images/brand4.png'
import svg2 from '../images/arrow-right.svg'
import gat from '../images/Rectangle-f.png'
import wrap from '../images/Rectangle02.png'
import lg from '../images/fb.svg'
import lg1 from '../images/x.svg'
import lg2 from '../images/insta.svg'
import lg3 from '../images/pin.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section className='header'>
      <div className='header-nav'>
        <div id='header-h3'>TAGADT PERFUMERY</div>
        <div id='nav'>
        <navbar>
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li><img src={icon} alt="" className='sh'/></li>
          </navbar>
        </div>
      </div>

      <div className='header-txt'>
        <h2 className='txt-h2'>A Luxurious Perfume Store</h2>
        <p className='txt-p'>IT GIVES A FIRST IMPRESSION AND A LASTING RECOLLECTION </p>
        
      </div>
      
      <div className='btn'><button className='btn1'>SHOP NOW</button></div>
     </section>
     <section className='body'>

            {/* showcase section */}
      <section className='showcase'>
            <div className='image'><img src={bur1} alt="" /></div>
            <div className='showcase-txt'>
              <h1>BURBERRY BODY CRYSTAL</h1>
              <h2>250 ML</h2>
              <h3>$1480</h3>
              <p>Burberry's exquisite fragrance captivates with a harmonious blend of floral and woody notes. Timeless elegance unfolds, leaving a trail of sophistication. A scent that defines refined luxury and lasting allure. Lorem ipsum dolor sit amet consectetur. </p>
              <button className='btn2'>Buy Now <img src={play} alt="" className='bat'/></button>
            </div>
            </section>
            <section className='showcase2'>
            <div className='showcase-txt'>
              <h1>BLUE DE CHANEL</h1>
              <h2>100 ML</h2>
              <h3>$620</h3>
              <p>Chanel's perfume epitomizes timeless glamour, blending floral and oriental notes. A symphony of elegance, it unveils a captivating allure. An iconic fragrance that defines sophistication and chic allure. </p>
              <button className='btn2'>Buy Now <img src={play} alt="" className='bat'/></button>
            </div>
            <div className='image'><img src={bur2} alt="" /></div>
            </section>
            <section className='showcase3'>
            <div className='image'><img src={bur3} alt="" /></div>
            <div className='showcase-txt'>
              <h1>BVALGARI</h1>
              <h2>150 ML</h2>
              <h3>$1200</h3>
              <p>Bvlgari's perfume exudes an opulent blend of floral and precious gem-inspired notes. A symphony of sophistication, it unfolds with timeless allure. A fragrance that defines luxury and enduring elegance </p>
              <button className='btn2'>Buy Now <img src={play} alt="" className='bat'/></button>
            </div>
                  </section> 
                  <div id='h2'><h2 className='h2'>Our Featured products</h2></div>
          <section className='products'>
           
            <div className='display'>
              <div id='display1'>
                <div className='box'><img src={disp1} alt="" className='batt' /></div>
                <div className='gat'>
                <h2 className='product-txt'>
                  Jour d'Hermes
                </h2>
                <div id='product-st'>
                  <img src={star1} alt="" />
                  <img src={star2} alt="" />
                  <img src={star3} alt="" />
                  <img src={star4} alt="" />
                </div>
                <h3>$7900</h3>
              </div>
            </div>
                  </div>
            {/* nat */}


            <div className='display'>
              <div id='display1'>
              <div className='box'><img src={disp2} alt="" className='batt2' /></div>
              <div className='gat'>
                <h2 className='product-txt'>
                  1 million
                </h2>
                <div id='product-st'>
                  <img src={star1} alt="" />
                  <img src={star2} alt="" />
                  <img src={star3} alt="" />
                  <img src={star4} alt="" />
                  <img src={star5} alt="" />
                </div>
                <h3>$4500</h3>
              </div>
            </div>
                    </div>
            <div className='display'>
              <div id='display1'>
              <div className='box'><img src={disp3} alt="" className='batt5'/></div>
                <div className='gat'>
                  <h2 className='product-txt'>
                  Shalimar
                </h2>
                <div id='product-st'>
                  <img src={star1} alt="" />
                  <img src={star2} alt="" />
                  <img src={star3} alt="" />
                  <img src={star4} alt="" />
                  <img src={star5} alt="" />
                </div>
                <h3>$8400</h3>
                </div>   
              </div>
            </div>


            {/* new */}
            <div className='display'>
              <div id='display1'>
              <div className='box'> <img src={disp4} alt="" className='batt3' /></div>
              <div className='gat'>
                <h2 className='product-txt'>
                  Sculpteur D'Espices 
                </h2>
                <div id='product-st'>
                  <img src={star1} alt="" />
                  <img src={star2} alt="" />
                  <img src={star3} alt="" />
                  <img src={star4} alt="" />
                  <img src={star5} alt="" />
                </div>
                <h3>$4900</h3>
              </div>
            </div>
            </div>
          </section>
          <button className='btn3'>Veiw All Products <img src={play} alt="" className='bat'/></button>
          <div id='h2'><h2 className='h2'>Selling Famous Brand Perfumes</h2></div>
          <section className='brand'>
              <img src={svg2} alt="" />
                <img src={ea} alt="" />
                <img src={ra} alt="" />
                <img src={her} alt="" />
                <img src={gv} alt="" />
                <img src={svg1} alt="" />
          </section>
          <div>
            <img src={gat} alt="" className='st' />
            </div>

          <section className='footer'>
      <div className='imgx'>
        <img src={wrap} alt="" className='bat1'/>
        <h3 className='talk'>TAGADT Perfumery</h3>
        <div className='lg'>
        <img src={lg} alt="" />
        <img src={lg1} alt="" />
        <img src={lg2} alt="" />
        <img src={lg3} alt="" /></div>
        
      </div>
      <div className='links'>
        <ul>
        <div className='list'><h4 className='lnks'>Quick Links</h4></div>
        <div className='list'>Visit Store</div>
        <div className='list'>About Us</div>
        <div className='list'>Let's Connect</div>
        </ul>
      </div>
      <div className='link'>
        <div className='list'><h4 className='lnks'>Important Links</h4></div>
        <div className='list'>Privacy Policy</div>
        <div className='list'>Shopping Details</div>
        <div className='list'>Terms & Conditions</div>
      </div>

      <div className='txxt'>
        <p className='tt'>Get in touch with us for the best quality perfumes and cosmetics products</p>
      </div>
      
     </section>
      <div id='line'></div>
      <div id='copyright'>@Copyright tagadtperfumery2024</div>
     </section>
     
    </>
  )
}

export default App
