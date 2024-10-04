import React from "react";
import "./Navbar.css";
import dashbaord from "../assets/chat-dashboard.png";
import desktopMobile from "../assets/responsive.png";
import round from "../assets/round.jpg";
import interview from "../assets/interview.jpg";
import glass from "../assets/box-glass.jpg";
import person from "../assets/message-logo.jpg";
import logoFirst from "../assets/logo-1.jpg";
import logoSecond from "../assets/logo-2.jpg";
import logoThird from "../assets/logo-3.jpg";
function Navbar() {
  return (
    <>
    {/* -------------------------Navbar----------------------------- */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow sticky">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            United UI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  
                >
                  Products
                </a>
               
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                 
                >
                  Resource
                </a>
              
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <form classname="d-flex" role="search">
              <span className="navbar-nav ms-auto">
                <img
                  src={logoThird}
                  alt="logo"
                  className="img-fluid logo-img-1"
                />
              </span>
            </form>
          </div>
        </div>
      </nav>
      {/* ------------------------navbar end-------------------------------------------- */}
      {/* ----------------------------header----------------------------------- */}
      <section id="header">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-12">
            
              <span className="board"> <span className="border m-2 px-2 rounded-5"> New features</span>Check of the out team dashboard <i className="bi bi-arrow-right"></i></span>
              <h1 className="mt-4">Beautifull analystics to grow smarter</h1>
              <p>
                Powerful, self-serve product and growth analytics to help you
                convert, engage,{" "}
              </p>
              <p>and retain more users. Trusted by over 4,000 startups.</p>
              <span className="demo">
                <i className="bi bi-play-circle"></i> Demo
              </span>
              <span className="signup"> Sign up</span>
            </div>
            <div className="col-lg-12 mt-5">
              <img src={dashbaord} alt="" className="img-fluid" />
              <p className="mt-5 fs-5">Join 4,000+ companies already growing</p>
            </div>
            <div className="col-md-2 mt-4">
              <h4>BoldShift</h4>
            </div>
            <div className="col-md-2 mt-4">
              <h4>LightBox</h4>
            </div>
            <div className="col-md-2 mt-4">
              <h4>FeatherDev</h4>
            </div>
            <div className="col-md-2 mt-4">
              <h4>Spherule</h4>
            </div>
            <div className="col-md-2 mt-4">
              <h4>GlobalBank</h4>
            </div>
            <div className="col-md-2 mt-4">
              <h4>Nietzsche</h4>
            </div>
          </div>
          <hr />
          {/* --------------------------header end-------------------------------------- */}
          {/* --------------------------card section-------------------------------------- */}
          <div className="row mt-5 p-5">
            <div className="col-lg-12 mt-4">
              <p className="boards">Features</p>
              <h2>Analytics that feels like it's from the future</h2>
              <p>
                Powerful, self-serve product and growth analytics to help you
                convert, engage,{" "}
              </p>
              <p>and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-wechat"></i>
                  <h5 className="card-title mt-4">Share team inboxes</h5>
                  <p className="card-text mt-2">
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-lightning-charge"></i>
                  <h5 className="card-title mt-4">Deliver instant answers</h5>
                  <p className="card-text mt-2">
                    An all-in-one customer service platform that helps you
                    balance everything your customers need to be happy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-app-indicator"></i>
                  <h5 className="card-title mt-4">
                    Manage your team with reports
                  </h5>
                  <p className="card-text mt-2">
                    Measure what matters with Untitled’s easy-to-use reports.
                    You can filter, export, and drilldown on the data in a
                    couple clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-emoji-smile-fill"></i>
                  <h5 className="card-title mt-4">Connect with customers</h5>
                  <p className="card-text mt-2">
                    Solve a problem or close a sale in real-time with chat. If
                    no one is available, customers are seamlessly routed to
                    email without confusion.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-command"></i>
                  <h5 className="card-title mt-4">
                    Connect the tools you already use
                  </h5>
                  <p className="card-text mt-2">
                    Explore 100+ integrations that make your day-to-day workflow
                    more efficient and familiar. Plus, our extensive developer
                    tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-chat-heart-fill"></i>
                  <h5 className="card-title mt-4">
                    Our people make the difference
                  </h5>
                  <p className="card-text mt-2">
                    We’re an extension of your customer service team, and all of
                    our resources are free. Chat to our friendly team 24/7 when
                    you need help.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------card section end------------------------ */}
          <div className="row mt-5 bg-body-tertiary p-5">
            <div className="col-lg-12 mt-4">
              <h4> <i className="bi bi-lightning-charge-fill"></i> Sisyphus</h4>
              <h2>
                We’ve been using Untitled to kick start every new project and
                can’t imagine working without it.
              </h2>
              <img src={logoFirst} alt="logo" className="img-fluid logo-img" />
              <h5>Candice Wu</h5>
              <p>Product Manager, Sisyphus</p>
            </div>
          </div>
          <div className="row mt-5 p-5">
            <div className="col-lg-12 mt-4">
              <span className="features">Features</span>
              <h2 className="mt-3">
                Cutting-edge features for advanced analytics
              </h2>
              <p className="mt-2">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
              <img src={desktopMobile} alt="" className="img-fluid mt-5" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 mt-4">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-wechat"></i>
                  <h5 className="card-title mt-4">Share team inboxes</h5>
                  <p className="card-text mt-2">
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                  </p>
                  <a href="#" className="item">
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-lightning-charge"></i>
                  <h5 className="card-title mt-4">Deliver instant answers</h5>
                  <p className="card-text mt-2">
                    An all-in-one customer service platform that helps you
                    balance everything your customers need to be happy.
                  </p>
                  <a href="#" className="item">
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div className="text-center mb-3">
                <div className="card-body">
                  <i className="bi bi-app-indicator"></i>
                  <h5 className="card-title mt-4">
                    Manage your team with reports
                  </h5>
                  <p className="card-text mt-2">
                    Measure what matters with Untitled’s easy-to-use reports.
                    You can filter, export, and drilldown on the data in a
                    couple clicks.
                  </p>
                  <a href="#" className="item">
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 p-5">
            <div className="col-lg-12 ">
              <h2>Frequently asked questions</h2>
              <p>Everything you need to know about the product and billing.</p>
              <div className="accordion mt-5">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Is there a free trial available?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Can I change my plan later?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is your cancellation policy?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can other info be added to an invoice?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How does billing work?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I change my account email?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 bg-body-tertiary p-5">
            <div className="col-lg-12 mt-4">
              <img src={logoFirst} alt="logo" className="img-fluid logo-img" />
              <img src={logoSecond} alt="logo" className="img-fluid logo-img" />
              <img src={logoThird} alt="logo" className="img-fluid logo-img" />
              <h4>Still have questions?</h4>
              <p>
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
              <button className="button">Get in touch</button>
            </div>
          </div>
          <div className="row mt-5 p-5">
            <div className="col-lg-2">
              <p>Our blog</p>
            </div>
            <div className="col-lg-2">
            </div>
            <div className="col-lg-2">
            </div>
            <div className="col-lg-2">
            </div>
            <div className="col-lg-2">
            </div>
            <div className="col-lg-2">
            <button className="button">View all post</button>
            </div>
            <div className="col-lg-2">
            <h4>Lastest blog posts</h4>
            </div>
            <div className="col-lg-2 ">
            </div>
            <div className="col-lg-2">
            </div>
            <div className="col-lg-2">  
            </div>
            <div className="col-lg-2"> 
            </div>
            <div className="col-lg-2">  
            </div>
          
            <div className="col-lg-6 ">
              <p>
                Tool and strategies modern teams need to help their companies
                grow.
              </p>
            </div>
            <div className="col-lg-2">     
            </div>
            <div className="col-lg-2">     
            </div>
            <div className="col-lg-2">     
            </div>
            
           
          </div>
    {/* ------------------------card img ------------------------------ */}

          <div className="row g-3">
            <div className="col-lg-4">
              <div class="card">
                <img
                  src={round}
                  className="card-img-top img-card img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Design</h5>
                  <h3>UX review presentations</h3>
                  <p class="card-text">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card">
                <img
                  src={interview}
                  class="card-img-top img-card img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Product</h5>
                  <h3>Migrating to Linear 101</h3>
                  <p class="card-text">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get started.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card">
                <img
                  src={glass}
                  class="card-img-top img-card img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Software Engineering</h5>
                  <h3>Building your API stack</h3>
                  <p class="card-text">
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and managing them.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
         {/* ------------------------card img end------------------------------ */}

          <div className="row mt-5 bg-body-tertiary p-5">
            <div className="col-lg-12 mt-4">
              <h3>Start your free trial</h3>
              <p className="mt-2 ">
                Join over 4,000+ startups already growing with Untitled.
              </p>
              <span className="demo mt-3">Learn more</span>
              <span className="signup mt-3">Get Started</span>
            </div>
          </div>
          {/* --------------foooter ---------------------------------- */}
          <div className="row mt-5 p-5">
            <div className="col-lg-2 mt-4">
              <h6 className="title">Product</h6>
              <h6>Overview</h6>
              <h6>Features</h6>
              <h6>Solutions</h6>
              <h6>Tutorials</h6>
              <h6>Pricing</h6>
              <h6>Releases</h6>
            </div>
            <div className="col-lg-2 mt-4">
              <h6 className="title">Company</h6>
              <h6>About us</h6>
              <h6>Careers</h6>
              <h6>Press</h6>
              <h6>News</h6>
              <h6>Media kit</h6>
              <h6>Contact</h6>
            </div>
            <div className="col-lg-2 mt-4">
              <h6 className="title">Resources</h6>
              <h6>Blog</h6>
              <h6>Newsletter</h6>
              <h6>Events</h6>
              <h6>Help centre</h6>
              <h6>Tutorials</h6>
              <h6>Support</h6>
            </div>
            <div className="col-lg-2 mt-4">
              <h6 className="title">Use cases</h6>
              <h6>Startups</h6>
              <h6>Enterprise</h6>
              <h6>Government</h6>
              <h6>SaaS centre</h6>
              <h6>Marketplaces</h6>
              <h6>Ecommerce</h6>
            </div>
            <div className="col-lg-2 mt-4">
              <h6 className="title">Social</h6>
              <h6>Twitter</h6>
              <h6>LinkedIn</h6>
              <h6>Facebook</h6>
              <h6>GitHub</h6>
              <h6>AngelList</h6>
              <h6>Dribbble</h6>
            </div>
            <div className="col-lg-2 mt-4">
              <h6 className="title">Legal</h6>
              <h6>Terms</h6>
              <h6>Privacy</h6>
              <h6>Cookies</h6>
              <h6>Licenses</h6>
              <h6>Settings</h6>
              <h6>Contact</h6>
            </div>
            
          </div>
          <div className="row p-5">
            <div className="col-lg-3">
             <h5>United UI</h5>
            </div>
            <div className="col-lg-3">
            </div>
            <div className="col-lg-3">
            </div>
            <div className="col-lg-3">
                <p>© 2077 Untitled UI. All rights reserved.</p>
            </div>
          </div>
        </div>
        {/* -----------------------footer end-------------------------- */}
      </section>

     
    </>
  );
}

export default Navbar;
