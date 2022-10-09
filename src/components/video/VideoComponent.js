import React from 'react';
import video1 from '../../assets/video/NN_Choco Chip EXP_V2.mp4'
import video2 from '../../assets/video/NN_OatmealRaisinCookie_V3.mp4'
import video3 from '../../assets/video/NN_SugarCookie_V3.mp4'
import labelInfo from '../../assets/img/label-info.png'



const VideoComponent = () => {
    return(
        <section class="videos-section">
        <div class="container">
            <div class="flex-video">
                <div class="video-block">
                    <video controls class="video">
                        <source src={video1} type="video/mp4" />
                    </video>
                    <div class="video-name">Chocolate Chip Cookies</div>
                    <a href="#" class="ingretients">SHOW INGREDIENTS</a>
                </div>
                <div class="video-block">
                    <video controls class="video">
                        <source src={video2} type="video/mp4" />
                    </video>
                    <div class="video-name">Oatmeal Raisin Cookiess</div>
                    <a href="#" class="ingretients">SHOW INGREDIENTS</a>
                </div>
                <div class="video-block">
                    <video controls class="video">
                        <source src={video3} type="video/mp4" />
                    </video>
                    <div class="video-name">Sugar Cookies</div>
                    <a href="#" class="ingretients">SHOW INGREDIENTS</a>
                </div>
            </div>
            <div class="label-block">
                <img src={labelInfo} class="label-info" alt="" />
            </div>
        </div>
    </section>
    )
}

export default VideoComponent;