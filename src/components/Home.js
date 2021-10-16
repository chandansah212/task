import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import image from "./image/iskul.jpg"
import image1 from "./image/NEWS_2021.10.12_Some-disabgirl image1.jpg"
import image2 from "./image/images2.jpg"
import image3 from "./image/image3.jpg"
import image5 from "./image/image5.jpg"
const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <div className="header-left">
                    <i class="fas fa-phone-alt"></i>
                    <h4>+124 5678 91050</h4>
                    <i class="far fa-envelope"></i>
                    <h4>example@infox.com</h4>
                </div>
                <div className="header-right">
                    <Link to="/login" className="login-link">Login</Link>
                    <div className="seperator"></div>
                    <Link to="/register" className="login-link">Register</Link>
                    <div className="seperator"></div>
                    <h4>English</h4>
                    <i class="fas fa-caret-down"></i>
                </div>

            </div>
            <div className="navbar">
                <div className="navbar-left">
                    <img src={image} alt="logo" />
                    <h2>ISKUL</h2>
                </div>
                <div className="navbar-right">
                    <a href="#" >HOME</a>
                    <div className="seperato"></div>
                    <a href="#" >ABOUT</a>
                    <div className="seperato"></div>
                    <a href="#" >COURSES</a>
                    <div className="seperato"></div>
                    <a href="#" >EVENT</a>
                    <div className="seperato"></div>
                    <a href="#" >BLOG</a>
                    <div className="seperato"></div>
                    <a href="#" >CONTACT</a>
                    <div className="seperato"></div>
                    <a href="#" >SHOP</a>

                </div>
            </div>
            <div className="body">
                <div className="body-top-section">
                    <div className="path">
                        <h4>HOME</h4>
                        <i class="fas fa-caret-right"></i>
                        <h4>COURSES</h4>
                        <i class="fas fa-caret-right"></i>
                        <h4>DETAILS</h4>
                    </div>
                    <div className="details">
                        <h1>Course Details</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione atque accusantium sit. Consequuntur nihil consequatur totam id et nostrum cupiditate beatae sed, magnam illo expedita eveniet reiciendis perspiciatis modi?</h4>
                        <button>ADMISSION</button>
                    </div>
                </div>
                <div className="body-middle-section">
                    <div className="body-left">
                        <div className="body-left-info">
                            <div className="left-top-info">
                                <i class="far fa-calendar-alt"></i>
                                <div className="left-details">
                                    <h7>Admission Ends</h7>
                                    <h4>Jan 2019</h4>
                                </div>

                            </div>
                            <div className="left-top-info">
                                <i class="far fa-clock"></i>
                                <div className="left-details">
                                    <h7>Course Duration</h7>
                                    <h4>4 Years</h4>
                                </div>

                            </div>
                            <div className="left-top-info">
                                <i class="fas fa-graduation-cap"></i>
                                <div className="left-details">
                                    <h7>Total Credits</h7>
                                    <h4>148 Credits</h4>
                                </div>
                            </div>
                        </div>
                        <div className="body-left-details">
                            <div className="body-details-image">
                                <img src={image5} alt="learning" /></div>
                            <div className="body-text">
                                <h1>Multimedia and Creative Technology</h1>
                                <p>
                                    lorem jwehwp wfjjwh
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione atque accusantium sit. Consequuntur nihil consequatur totam id et nostrum cupiditate beatae sed, magnam illo expedita eveniet reiciendis perspiciatis modi?
                                </p>
                                <p>

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione atque accusantium sit. Consequuntur nihil consequatur totam id et nostrum cupiditate beatae sed, magnam illo expedita eveniet reiciendis perspiciatis modi?
                                </p>
                            </div>
                            <h1>Requirements</h1>
                            <div className="requirement">
                                <div className="requirement-left">
                                    <div className="requirement-icon"><i class="fas fa-caret-right"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">  <i class="fas fa-caret-right"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon"><i class="fas fa-caret-right"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">  <i class="fas fa-caret-right"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                </div>
                                <div className="requirement-right">
                                    <div className="requirement-icon"> <i class="fas fa-caret-right"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">  <i class="fas fa-caret-right"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">  <i class="fas fa-caret-right"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">    <i class="fas fa-caret-right"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                </div>
                            </div>
                            <h1>Course Benefit</h1>
                            <div className="course-benefit">
                                <div className="course-left">
                                    <div className="requirement-icon">    <i class="far fa-check-circle"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">    <i class="far fa-check-circle"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">     <i class="far fa-check-circle"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                </div>
                                <div className="course-right">
                                    <div className="requirement-icon">     <i class="far fa-check-circle"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">     <i class="far fa-check-circle"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                    <div className="requirement-icon">     <i class="far fa-check-circle"></i>
                                        <h4>Lorem ipsum dolor sit</h4></div>
                                </div>
                            </div>
                        </div>
                        <div className="body-button">  <button>Apply Now</button></div>

                    </div>
                    <div className="body-right">
                        <div className="body-right-top">
                            <h1>All Courses</h1>
                            <div className="courses">
                                <div className="courses-info">   <h4>Business Studies</h4></div>
                                <h4>03</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">   <h4>Multimedia and Technology</h4></div>
                                <h4>04</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">    <h4>Medicine and Health</h4></div>
                                <h4>03</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">    <h4>Artificial Intelligence</h4></div>
                                <h4>02</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">    <h4>Data Management</h4></div>
                                <h4>03</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">    <h4>Business Studies</h4></div>
                                <h4>01</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">    <h4>Language Development</h4></div>
                                <h4>08</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">   <h4>Computer Science</h4></div>
                                <h4>09</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">    <h4>Software Engineering</h4></div>
                                <h4>07</h4>
                            </div>
                            <div className="courses">
                                <div className="courses-info">    <h4>civil Engineering</h4></div>
                                <h4>05</h4>
                            </div>
                        </div>
                        <div className="body-left-middle">
                            <div className="body-left-middlebox">
                                <h3>Course Status:</h3>
                                <div className="course-status">
                                    <h4>Reviews</h4>
                                    <div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                </div>
                                <div className="course-status">
                                    <h4>Favourites</h4>
                                    <div className="like">
                                        <i class="far fa-heart"></i>
                                        <h4>450</h4>
                                    </div>
                                </div>
                                <div className="course-status">
                                    <h4>Total Admitted</h4>
                                    <div>
                                        <h4>615</h4>
                                    </div>
                                </div>
                                <div className="course-status">
                                    <h4>Semisters</h4>
                                    <div>
                                        <h4>15</h4>
                                    </div>
                                </div>
                                <div className="course-status">
                                    <h4>Credits</h4>
                                    <div>
                                        <h4>61</h4>
                                    </div>
                                </div>
                                <div className="course-status-bottom">
                                <h3>Need any help? <a href="#"> Contact Us</a></h3>
                            </div>
                            </div>
                            
                        </div>
                        
                        <div className="body-left-bottom">
                        
                            <h3>Course Tags:</h3>
                            <div className="course-tag">
                                <div className="tag-info">
                                <div><h4>MCT</h4></div>  
                              <div> <h4>TECH</h4></div> 
                              <div> <h4>MULTIMEDIA</h4></div> 
                                </div>
                              <div className="tag-info">
                              <div><h4>TECHNOLOGY</h4></div>   
                                <div><h4>STUDY</h4></div>  
                                <div><h4>MEDIA</h4></div> 
                              </div>
                              

                            </div>
                        </div>

                    </div>

                </div>
                <div className="body-bottom-section">

                        <h2>Our More Similar Courses</h2>
                        <h4>lorem gajf runff jfk ekwewek ewwejwej wejkwkj wj3r 4jmfwo wkjght jerjrnp ewfjo3fnwe fj3f3 j3j34 fj</h4>
                        <div className="body-bottom-section-block">
                            <div className="block">
                                <img src={image1} alt="reading" />
                                <h5>Jornalism and Media</h5>
                                <h7>orem gajf runff jfk ekwewek ewwejwej wejkwkj wj3r 4jmfwo wkjght jerjrnp ewfjo3fnwe fj3f3 j3j34 fj</h7>
                                <div className="icon">
                                    <a href="#"><h3>Course Detail
                                        <i class="fas fa-long-arrow-alt-right"></i> </h3>
                                        </a>
                                </div>

                                <div className="body-bottom-block">
                                    <div className="block-icon">

                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <h4>4.5(779)</h4>
                                    <div className="like">
                                        <i class="far fa-heart"></i>
                                        <h4>573</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <img src={image2} alt="reading" />
                                <h5>International and Communication</h5>
                                <h7>orem gajf runff jfk ekwewek ewwejwej wejkwkj wj3r 4jmfwo wkjght jerjrnp ewfjo3fnwe fj3f3 j3j34 fj</h7>
                                <div className="icon">
                                    <a href="#"><h3>Course Detail
                                        <i class="fas fa-long-arrow-alt-right"></i></h3> </a>
                                </div>

                                <div className="body-bottom-block">
                                    <div className="block-icon">

                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <h4>4.5(779)</h4>
                                    <div className="like">
                                        <i class="far fa-heart"></i>
                                        <h4>573</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <img src={image3} alt="reading" />
                                <h5>Principle of Accounting</h5>
                                <h7>orem gajf runff jfk ekwewek ewwejwej wejkwkj wj3r 4jmfwo wkjght jerjrnp ewfjo3fnwe fj3f3 j3j34 fj</h7>
                                <div className="icon">
                                    <a href="#"><h3>Course Detail
                                        <i class="fas fa-long-arrow-alt-right"></i></h3> </a>
                                </div>

                                <div className="body-bottom-block">
                                    <div className="block-icon">

                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <h4>5.0(79)</h4>
                                    <div className="like">
                                        <i class="far fa-heart"></i>
                                        <h4>573</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>

            </div>
            <div className="footer">
                    <div className="footer-container">
                        <div className="footer-left">
                            <h1>ISKUL</h1>
                            <h4>lorem gajf runff jfk ekwewek ewwejwej wejkwkj wj3r 4jmfwo wkjght jerjrnp ewfjo3fnwe fj3f3 j3j34 fj </h4>
                            <div className="footer-left-bottom">
                                <h3>Subscribe Us</h3>
                                <div className="footer-email">
                                <input placeholder="Your email address" type="email" />
                                <i class="far fa-caret-square-right"></i></div>
                            </div>
                        </div>
                        <div className="footer-middle">
                            <h3>Important Links</h3>
                            <div className="footer-info">
                            <div className="footer-middle-left">
                                <div className="footer-icon">
                            <i class="fas fa-angle-right"></i>
                                <a href="#"> <h4>Admission</h4></a></div>
                                <div className="footer-icon">
                                <i class="fas fa-angle-right"></i>
                               
                                <a href="#"> <h4>Support</h4></a></div>
                                <div className="footer-icon">
                                <i class="fas fa-angle-right"></i>
                                <a href="#">  <h4>Helpline</h4></a></div>
                                <div className="footer-icon">
                                <i class="fas fa-angle-right"></i>
                                <a href="#"> <h4>Information</h4></a></div>
                            </div>
                            <div className="footer-middle-right">
                            <div className="footer-icon">
                            <i class="fas fa-angle-right"> </i>
                                <a href="#"><h4>Library</h4></a></div>
                                <div className="footer-icon">
                                <i class="fas fa-angle-right"></i>
                                <a href="#">  <h4>Notice</h4></a></div>
                                <div className="footer-icon">
                                <i class="fas fa-angle-right"></i>
                                <a href="#"> <h4>Semisters</h4></a></div>
                                <div className="footer-icon">
                                <i class="fas fa-angle-right"></i>
                                <a href="#"> <h4>Subjects</h4></a></div>
                            </div>
                            </div>
                        </div>
                        <div className="footer-right">

                            <h3>Contact Us</h3>
                            <div className="footer-right-box">
                                <i class="far fa-envelope"></i>
                                <h4>example@infox.com</h4>
                            </div>
                            <div className="footer-right-box">
                                <i class="fas fa-phone-alt"></i>
                                <h4>+124 5678 91050</h4>
                            </div>
                            <div className="footer-right-box">
                                <i class="fas fa-map-marker-alt"></i>
                                <h4>123 New York City,US-PA 895 Dix 3,Level 5,NYC</h4>
                            </div>


                        </div>
                    </div>
                    
                </div>
            
                <div className="footer-bottom">
                        <h4>Copyright @ 2018</h4>
                      
                        <h4>All Right Reserved</h4>
                    </div>
        </div>
    )
}

export default Home
