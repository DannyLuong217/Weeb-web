
import './styles/Home.css';
import Navbar from './component/Navbar';
import Slider2Bar from './component/Slider2Bar';
import SliderPartner from './component/SliderPartner';
import React from 'react';
import ImageBanner from './asset/ab.svg';
import ImageProject from './asset/demo-project.png';

function Home() {
  return (
    <div>
      <Navbar />
      <body>
        <div className="BANNER">
          <div className="Bannerdetail">
            <div className="BannerItem">
              <img src={ImageBanner}alt="ImageTitle" />
            </div>
            <div className="BannerItem ">
              <div className="FormBanner">
                <div className="MarginCenterProp">
                  <h2>Xây dựng website của bạn</h2>
                  <p>Cùng chúng tôi tạo ra website như ý muốn của bạn Lorem ipsum dolor sit aa. Ut enim ad minim veniam,</p>
                  <button className="ButtonContactBanner abx">
                    Liên hệ
                  </button>
                  <button className="ButtonContactBanner aby">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ABOUTWEEB">
          <div className="Aboutdetail">
            <div className="AboutItem01 boxLeft">
              <img src={ImageProject}alt="ImageTitle" />
            </div>
            <div className="AboutItem02 boxRight">
              <div className="MarginCenterProp">
                <h2 id="brand">WEEB</h2>
                <p>uptat labore voluptate. Trải nghiệm dịch vụ website hàng đầu Việt Nam</p>
                <button className="ButtonContactBanner abtw">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
        </div>
        <h2>Công nghệ WEEB sử dụng</h2>
        <Slider2Bar/>
        <div className="ABOUTSERVICES">
          <div className="Aboutservicesdetail">
            <div className="AboutservicesItem01">
              <div className="MarginCenterProp ahu">
                <h3>EXCELLENT DESIGN</h3>
                <h3>ALL OPTIMIZING</h3>
                <h3>CUSTOMER - ORIENDRED</h3>
                <h3>AGILE & LEARN</h3>
              </div>
            
            </div>
            <div className="AboutservicesItem02">
              <img src={ImageProject} alt="Image"/>
            </div>
          </div>
        </div>
        <h2>Đồng hành cùng 20+ đối tác xây dựng và phát triển</h2>
        <SliderPartner/>
        <div class="projects">
          <h2>Du An cua bon tao</h2>
          <div class="projectShowcase">
            
          </div>
        </div>
        <h2>Khach hang noi nham</h2>
        <sliderFeedback/>
      </body>
      <footer>
        <p>copyright</p>
      </footer>
    </div>
  );
}

export default Home;
