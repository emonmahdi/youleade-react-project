import React from 'react';


import videoImg from './../../../assets/banner/video-img.png'
import bannerCss from './banner.module.css';

const Banner = () => {
    return (
        <div className={bannerCss.you_lead_banner}>
             <div className="container">
                <div className="banner-section">
                    <div className={bannerCss.banner_img}>
                        <img src={videoImg} className='img-fluid' alt="" />
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Banner;