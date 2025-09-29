import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import pic1 from "../../assets/img/pic_1.jpg";
import pic2 from "../../assets/img/pic_2.jpg";
import pic3 from "../../assets/img/pic_3.jpg";

const HomeSection = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">
                    Browse & <br />
                    Select E-Books
                    </h1>

                    <p className="home__description">
                        Find the best e-book from your favorite
                        writers, explore hundreds of books with all
                        possible categories, take advantage of the 
                        50% discount and much more.
                    </p>

                    <a href="/" className="button">Explore Now</a>
                </div>
            </div>

            <div className="home__images">
                <Swiper
                    className= "home__swiper"
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={15}
                    grabCursor={true}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1220: {
                            spaceBetween: 0,
                        }
                    }}
                >
                    <SwiperSlide>
                        <article className="home__article">
                            <img src={pic1} alt="images" className="home__img" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className="home__article">
                            <img src={pic2} alt="images" className="home__img" />
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article className="home__article">
                            <img src={pic3} alt="images" className="home__img" />
                        </article>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default HomeSection;