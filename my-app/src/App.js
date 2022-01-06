import {Link} from 'react-router-dom'
import Contact from './Contact'

// import  "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"

 function App() {
  return (
    <>

<header className="ud-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand" href="/">
                <img src="assets/images/logo/bbwflogo.png" alt="Logo" />
              </a>
              <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
              <span class="toggler-icon"> </span>
                <span class="toggler-icon"> </span>
                
               
              </button>
             <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#home">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#pricing">Pricing</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="ud-menu-scroll" href="#team">Team</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#contact">Contact</a>
                  </li>
                  
                  <li className="nav-item">
                <Link className="ud-menu-scroll"  to="/Dashboard"> Dashboard 
                </Link>
                </li>
              
 
                <li className="nav-item">
                <Link className="ud-menu-scroll"  to="/login"> Login 
                </Link>
                </li>
                {/* <a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
                  Sign Up
                </a> */}


                {/* <li className="nav-item">
                <Link className="ud-menu-scroll"  to="/signup"> Signup 
                </Link>
                </li> */}


              </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    
    <section className="ud-hero" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
              <h1 className="ud-hero-title">
                Bhaskar Bharti Welfare Foundation
              </h1>
              <p className="ud-hero-desc">
              "None of us, including me, ever do great things.
               But we can all do small things, with great love, and together we can do something wonderful."
              </p>
              <p className="ud-hero-desc">
              "None of us, including me, ever do great things.
               But we can all do small things, with great love, and together we can do something wonderful."
              </p>
             
            </div>
            <div
              className="ud-hero-brands-wrapper wow fadeInUp"
              
            >
              {/* <img src="assets/images/hero/brand.svg" alt="brand" /> */}
            </div>
            {/* <div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
              <img src="assets/images/hero/hero-image.svg" alt="hero-image" />
              <img
                src="assets/images/hero/dotted-shape.svg"
                alt="shape"
                className="shape shape-1"
              />
              <img
                src="assets/images/hero/dotted-shape.svg"
                alt="shape"
                className="shape shape-2"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
    
    
    <section id="features" className="ud-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title">
              <span>Values</span>
              <h2>Main Values of Bhaskar Bharti Welfare Foundation </h2>
              <p>
                
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".1s">
              <div className="ud-feature-icon">
                <i className="lni lni-rocket"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Vision</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
               
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".15s">
              <div className="ud-feature-icon">
                <i className="lni lni-world"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Goal</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
               
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-feature-icon">
                <i className="lni lni-grow"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Purpose</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
               
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="ud-single-feature wow fadeInUp" data-wow-delay=".25s">
              <div className="ud-feature-icon">
                <i className="lni lni-protection"></i>
              </div>
              <div className="ud-feature-content">
                <h3 className="ud-feature-title">Trust</h3>
                <p className="ud-feature-desc">
                Bhaskar Bharti welfare foundation vision is to create a just and equitable society by transforming individuals from socially and economically excluded communities into agents of change.                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

    <section id="about" className="ud-about">
      <div className="container">
        <div className="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
          <div className="ud-about-content-wrapper">
            <div className="ud-about-content">
              <span className="hello">About Us</span>
              <h2>Bhaskar Bharti welfare foundation</h2>
              <p>
              Bhaskar Bharti welfare foundation is unique because there is huge respect for Diversity. You are not judged because of your gender, caste, religion, sexuality, your physical appearance, marital status etc. 
              You can BE WHO YOU ARE at BBWF. Most people or organisations just talk about diversity and inclusion, it is actually lived at BBWF. It is the BBWF way. BBWF also believes in the potential of people. We bring change in the lives of people and the BBWF staff is its greatest strength!”
              </p>

              <p>
              Education empowers an individual to earn their livelihood and also increases one's awareness on a range of issues.
               From healthcare, to appropriate social behavior, to understanding one's rights – Bhaskar Bharti welfare foundation seeks to educate, empower and cultivate better citizens.
              </p>
              {/* <a href="javascript:void(0)" className="ud-main-btn">Learn More</a> */}
            </div>
          </div>
          <div className="ud-about-image">
            <img src="assets/images/about/about-image.svg" alt="about-image" />
          </div>
        </div>
      </div>
    </section>
  

    <section id="pricing" className="ud-pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title mx-auto text-center">
              <span>Pricing</span>
              <h2>Our Pricing Plans</h2>
            </div>
          </div>
        </div>

        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing first-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>YOU PAY</h3>
                <h4>&#8377; 321 </h4>
                <ul> 
                  <li>STARTING PLAN </li><br/>
                  <li> TO JOIN OUR COMPANY</li>
                  
                 </ul>
              </div>
              <div className="ud-pricing-body">
                <ul>
                 
                 
                </ul>
              </div>
              <div className="ud-pricing-footer">
                <a href="/login" className="ud-main-btn ud-border-btn">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing active wow fadeInUp"
              data-wow-delay=".1s"
            >
              <span className="ud-popular-tag">WHAT WE PAY</span>
              <div className="ud-pricing-header">
                <h3></h3> 
                <br></br>
                {/* <h4>$ 30.99/mo</h4> */}
              </div>
              <div className="ud-pricing-body">
                <ul> 
                  <li>&#8377; 100 per 100 users</li>
                  <li>&#8377; 200 per 200 users</li>
                  <li>&#8377; 300 per 300 users</li>
                  <li>&#8377; 400 per 400 users</li>
                  <li> upto 1000 users</li>
                </ul>
              </div>
              <div className="ud-pricing-footer">
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="ud-single-pricing last-item wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-pricing-header">
                <h3>AFTER 1 YEAR</h3>
               <br></br>
              </div>
              <div className="ud-pricing-body">
                <ul>
                  <li>2 YEAR - &#8377; 2000</li>
                  <li>3 YEAR - &#8377; 3000</li>
                  <li>4 YEAR - &#8377; 4000</li>
                  <li>5 YEAR - &#8377; 5000</li>
                  <li> Upto 10 YEARs </li>
                  
                </ul>
              </div>
              <div className="ud-pricing-footer">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   

    {/* <section id="faq" className="ud-faq">
      <div className="shape">
        <img src="assets/images/faq/shape.svg" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-section-title text-center mx-auto">
              <span>FAQ</span>
              <h2>Any Questions? Answered</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>How to use UIdeck?</span>
                </button>
                <div id="collapseOne" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>How to download icons from Lineicons?</span>
                </button>
                <div id="collapseTwo" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Is GrayGrids part of UIdeck?</span>
                </button>
                <div id="collapseThree" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".1s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Can I use this template for commercial project?</span>
                </button>
                <div id="collapseFour" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".15s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Do you have plan releasing Play Pro?</span>
                </button>
                <div id="collapseFive" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
            <div className="ud-single-faq wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion">
                <button
                  className="ud-faq-btn collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  <span className="icon flex-shrink-0">
                    <i className="lni lni-chevron-down"></i>
                  </span>
                  <span>Where and how to host this template?</span>
                </button>
                <div id="collapseSix" className="accordion-collapse collapse">
                  <div className="ud-faq-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  
      

    <Contact/>


  
    <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
      <div className="shape shape-1">
        <img src="assets/images/footer/shape-1.svg" alt="shape" />
      </div>
      <div className="shape shape-2">
        <img src="assets/images/footer/shape-2.svg" alt="shape" />
      </div>
      <div className="shape shape-3">
        <img src="assets/images/footer/shape-3.svg" alt="shape" />
      </div>
      <div className="ud-footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-md-6">
              <div className="ud-widget">
                <a href="/" className="ud-footer-logo">
                  <img src="assets/images/logo/bbwflogo.png" alt="logo" />
                </a>
                <p className="ud-widget-desc">
                  We create digital experiences for brands and companies by
                  using technology.
                </p>
                <ul className="ud-widget-socials">
                  <li>
                    <a href="  ">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <i className="lni lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <i className="lni lni-instagram-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Quick links</h5>
                <ul className="ud-widget-links">
                  <li>
                    <a href="#home">&#8226;  Home</a>
                  </li>
                  <li>
                    <a href="#about">&#8226;  About</a>
                  </li>
                  <li>
                    <a href="#pricing">&#8226;  Pricing</a>
                  </li>
                  <li>
                    <a href="#contact">&#8226;  Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="ud-widget">
                <h5 className="ud-widget-title">Features</h5>
                <ul className="ud-widget-links">
                  <li>
                    <a href="javascript:void(0)">&#8226; How it works</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">&#8226; Privacy policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">&#8226; Terms of service</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">&#8226; Refund policy</a>
                  </li>
                </ul>
              </div>
            </div>

          
          </div>
        </div>
      </div>
      <div className="ud-footer-bottom">
        <div className="container">
          <div className="row">
            
            <div className="col-md-4-lg-0 ">
              <p className="ud-footer-bottom-right" >
                <center>Designed and Developed by &nbsp; 
                <a href="https://www.appformers.com" rel="nofollow">Appformers </a>
              </center>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <a href="#home" class="back-to-top">
      <i class="lni lni-chevron-up"> </i>
    </a>

    </>
  );
}

export default App;
