import React, {useEffect} from 'react';
import '../styles/Slider2Bar.css';
import Swiper from "swiper";
// Import Swiper styles


function Slider2Bar() {
    useEffect(() => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        
        spaceBetween: 6,
    });
    const swiper01 = new Swiper('.swiper01', {
        // Optional parameters
      
        spaceBetween: 6,
      
    });
   
    swiper.init();
    swiper01.init();
});
    return (
        <>
            <div class="SLIDER2BAR">
                <div class="swiper">
                    <div class="swiper-wrapper ">
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/ruby-programming-language.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/c-programming.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/sql.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/kotlin.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/perl.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/python--v1.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/java-coffee-cup-logo--v2.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/javascript--v1.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/typescript.png"/></div>
                    </div>
                </div>
                <div class="swiper01">
                    <div class="swiper-wrapper slider02">
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/webpack.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/golang.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/fluency/55/000000/language-skill.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/cute-clipart/55/000000/react-native.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/cute-clipart/55/000000/react-native.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/css3.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/ios-filled/55/000000/jquery.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/ios-filled/55/000000/php-server.png"/></div>
                        <div class="swiper-slide"><img src="https://img.icons8.com/color/55/000000/firebase.png"/></div>
                    </div>
                </div>
            </div>
            
        </>

    );
};
export default Slider2Bar;