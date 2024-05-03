import React from "react";
import './Style.css'
import { Link } from "react-router-dom";
import aventadorImg from './images/aventador.png'
import Img1 from './images/klipartz.com.png'
import Img2 from './images/2015-koenigsegg-one1-first-drive-review-car-and-driver-photo-654233-s-original.png'
import Img3 from './images/Ferrari-488-Spider-PNG-Pic.png'
import Img4 from './images/gtr-r35.png'
import Img5 from './images/porsche.png'
import Img6 from './images/Untitled-1.png'
import Img7 from './images/carmeet.jpg'
import Img8 from './images/minhnhua.jpg'
import Img9 from './images/congdong.jpg'


function Home () {
    return (
        <>
        <div class="hero">
            <h1>Hot Product !!!</h1>
            <img src={aventadorImg} alt="Aventador" />
            <div class="hero-wrapper"></div>
            
        </div>
            <section className="shop" >
        <div className="heading">
            <span>Shop Now</span>
            <h1>Shop Car</h1>
        </div>
        <div className="shop-container" id="shop">
            <div className="box">
                <div className="box-img">
                    <div className="evenboxinner">Hot!</div>
                    <img src={Img1} alt="" />
                </div>
             
                <h2>Lamborghini Hurrican</h2>
                <span>$500.000</span>
                <Link to="#" className="btn">Order Now</Link>
            </div>
            <div className="box">
                <div className="box-img">
                    <div className="evenboxinner">Hot!</div>
                    <img src={Img2} alt="" />
                </div>
            
                <h2>Pagani Zonda </h2>
                <span>$1.500.000</span>
                <Link to="#" className="btn">Order Now</Link>
            </div>
            <div className="box">
                <div className="box-img">
                    <div className="evenboxinner">Hot!</div>
                    <img src={Img3} alt="" />
                    
                </div>
            
                <h2>Ferrari Spider</h2>
                <span>$450.000</span>
                <Link to="#" className="btn">Order Now</Link>
            </div>
            <div className="box">
                <div className="box-img">
                    <div className="evenboxinner">Hot!</div>
                    <img src={Img4} alt="" />
                    
                </div>
            
                <h2>Nissan GTR R34</h2>
                <span>$200.000</span>
                <Link to="#" className="btn">Order Now</Link>
            </div>
            <div className="box">
                <div className="box-img">
                    <div className="evenboxinner">Hot!</div>
                    <img src={Img5} alt="" />
                    
                </div>
            
                <h2>Porsche</h2>
                <span>$350.000</span>
                <Link to="#" className="btn">Order Now</Link>
            </div>
            <div className="box">
                <div className="box-img">
                    <div className="evenboxinner">Hot!</div>    
                    <img src={Img6} alt="" />
                    
                </div>
            
                <h2>Koenigsegg</h2>
                <span>$1.000.000</span>
                <Link to="#" className="btn">Order Now</Link>
            </div>
        </div>
    </section>

    <section class="delivery" id="delivery">
        <div class="heading-delivery">
            <span>Get Now</span>
            <h1>Worldwide Order Shipping</h1>
        </div>
        <div class="container2">
            <div class="delivery-img">
            <img src={Img7} alt="" />
            </div>
            <div class="delivery-text">
                <h2>Free Shipping And Offer</h2>
                <p>In addition to our commitment to excellence in automotive engineering, we also prioritize accessibility and convenience for our valued customers. With our free shipping service, purchasing your dream vehicle is made even easier. Whether you're located across the country or around the world, our streamlined shipping process ensures that your vehicle arrives safely and promptly to your doorstep, hassle-free.

                    Furthermore, we understand the importance of offering competitive pricing without compromising on quality. Our reasonable prices make luxury and performance accessible to a wide range of budgets, ensuring that everyone can experience the thrill of driving one of our exceptional vehicles. At our company, affordability meets excellence, empowering you to embark on your journey with confidence and peace of mind.
                    
                    
                    
                    
                    
                    
                    </p>
                <Link to="#" class="btn">Order Now</Link>
            </div>
        </div>
    </section>

    <section class="review" id="review">
        <div class="heading2">
            <span>Customer Review</span>
            <h1>"Minh Nhua" AKA N0.1 VietNamese Exotic Car Collector</h1>
        </div>
        <div class="container3">
           
            <div class="review-text">
                <h2>Our customers feedback.</h2>
                <p>"This service is way too lit. I gotta invite my friends over to buy their cars!!!" Minh Nhua chua bao gio noi cau nay</p>
                
            </div>
            <div class="review-img">
                <img src={Img8} alt="" />
            </div>
        </div>

    </section>

    <secion class="about-section" >
        
        <div class="about-img" >
            <img src={Img9} alt="" />
        </div>
        <div class="about-text" id="about">
            <h2>20 years of serving customers.</h2>
            <p>For two decades, our automobile company has been at the forefront of innovation, excellence, and reliability in the automotive industry. 
                Since our inception twenty years ago, we've strived relentlessly to exceed expectations and set new standards for quality and performance. 
                Our commitment to cutting-edge technology, sustainable practices, and customer satisfaction has been unwavering throughout our journey.
              
                   As we celebrate two decades of success, we remain dedicated to pushing boundaries, shaping the future of mobility, and driving towards a brighter tomorrow.</p>
            <Link to="#" class="btn">Learn More</Link>
        </div>
    </secion>
        </>
    )
}

export default Home;