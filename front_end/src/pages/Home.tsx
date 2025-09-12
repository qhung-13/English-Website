import "../assets/styles/Home.css";

import pic1 from "../assets/img/pic_1.jpg";
import pic2 from "../assets/img/pic_2.jpg";
import pic3 from "../assets/img/pic_3.jpg";

const Home = () => {
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
                <div className="home__swiper swiper">
                    <div>
                        <article className="home__article">
                            <img src={pic1} alt="images" className="home__img" />
                        </article>
                        <article className="home__article">
                            <img src={pic2} alt="" className="home__img"/>
                        </article>
                        <article className="home__article">
                            <img src={pic3} alt="" className="home__img"/>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;