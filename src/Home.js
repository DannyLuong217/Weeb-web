
import './styles/Home.css';
import Navbar from './component/Navbar';
import Slider2Bar from './component/Slider2Bar';
import SliderPartner from './component/SliderPartner';
import React from 'react';
import ImageBanner from './asset/ab.svg';
import ImageProject from './asset/demo-project.png';
function Home() {
  return (
    <div >
      <Navbar />
      <div className="BANNER">
        <div className="Bannerdetail">
          <div className="BannerItem">
            <img src={ImageBanner}alt="ImageTitle" />
          </div>
          <div className="BannerItem ">
            <div className="FormBanner">
              <div className="MarginCenterProp">
                <h2>Xây dựng website của bạn</h2>
                <p>Magna anim aliquip ipsum elit quis temporlit quis tempor sinlit quis tempor sinlit quis tempor sin sint consequat.</p>
                <button className="ButtonContactBanner abx">
                  BTN A
                </button>
                <button className="ButtonContactBanner aby">
                  BTN B
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ABOUTWEEB">
        <div className="Aboutdetail">
          <div className="AboutItem01">
            <img src={ImageProject}alt="ImageTitle" />
          </div>
          <div className="AboutItem02">
            <dic className="MarginCenterProp">
              <h2>WEEB</h2>
              <p>Nisi ipsum aliquip ea sit utt ut labore voluptatt ut labore voluptat labore voluptate.</p>
              <button className="btn-ramdom">Tìm hiểu thêm</button>
            </dic>
          </div>
        </div>
      </div>
      <h2 style={{textAlign:"center"}}>Công nghệ WEEB sử dụng</h2>
      <Slider2Bar/>
      <div className="ABOUTSERVICES">
        <div className="Aboutservicesdetail">
          <div className="AboutservicesItem01">
            <div className="MarginCenterProp ahu" style={{borderRight:"1px solid gray"}}>
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
      <h2 style={{textAlign:"center"}}>Đồng hành cùng 20+ đối tác xây dựng và phát triển</h2>
      <SliderPartner/>
    </div>
  );
}

export default Home;
