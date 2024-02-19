import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

import bannerImg1 from "../../../assets/Banner/banner (1).jpg";
import bannerImg2 from "../../../assets/Banner/banner (2).jpg";
import bannerImg3 from "../../../assets/Banner/banner (3).jpg";
import bannerImg4 from "../../../assets/Banner/banner (4).jpg";
import bannerImg5 from "../../../assets/Banner/banner (5).jpg";
import bannerImg6 from "../../../assets/Banner/banner (6).jpg";
import bannerImg7 from "../../../assets/Banner/banner (7).jpg";

const Banner = () => {
  return (
    <div className="mb-5 pb-20">
      <Carousel>
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
        <div>
          <img src={bannerImg4} />
        </div>
        <div>
          <img src={bannerImg5} />
        </div>
        <div>
          <img src={bannerImg6} />
        </div>
        <div>
          <img src={bannerImg7} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
