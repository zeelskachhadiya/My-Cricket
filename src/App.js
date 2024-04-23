import "./App.css";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle/SectionTitle.js";
import OnlineCoursesCard from "./components/OnlineCoursesCard/OnlineCoursesCard.js";
import WhyChoose from "./components/WhyChoose/WhyChoose.js";
import GroupCard from "./components/GroupCard/GroupCard.js";
import Testimonial from "./components/Testimonial/Testimonial.js";
import Footer from "./components/Footer/Footer.js"

function App() {
  return (
    <div id="dark-theme">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="hero-section" id="hero-section">
        <div className="container py-5">
          <div className="row align-items-center  justify-content-center">
            <div className="col-12 col-lg-6 hero_section-details justify-content-center">
              <div className="hero-section_content">
                <div className="hero-title">
                  Enroll Today & Transform Your <span>Cricket Game</span>
                  <br />
                </div>
                <i>Money-Back Guarantee for Course Satisfaction</i>
                <div className="hero-section_description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, arcu auctor euismod tristique, libero quam
                  dignissim urna, nec sagittis metus velit sit amet urna. Nunc
                  non feugiat velit.
                </div>
              </div>

              <button className="btn_enroll-now">Enroll Now</button>
            </div>
            <div className="col-12 col-lg-6 img-hero-section">
              <img src="./image/hero_section-image.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div id="courses" className="py-5">
        <div className="container">
          <SectionTitle title="Online Training Courses" />
          <div className="row">
            <OnlineCoursesCard />
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div id="why_choose-section" className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-6 img-why_chhose-section ">
              <img src="./image/why_choose-image.png" alt="" />
            </div>
            <div className="col-12 col-lg-6 why_choose-section justify-content-center">
              <div className="why_choose-section_content">
                <div className="why_choose-section-title text-center">
                  Why Choose Our <span>Cricket Courses</span> Online?
                  <br />
                </div>
                <WhyChoose />
              </div>
              <button className="btn_enroll-now">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Training Group Section */}
      <div id="training-groups" className="py-5">
        <div className="container">
          <SectionTitle title="Training Groups" />
          <div className="row">
            <GroupCard />
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div id="testimonial" className="py-5">
        <div className="container">
          <SectionTitle title="Our Players and Parents love us" />
          <div className="row">
            <Testimonial />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer" className="py-5">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
