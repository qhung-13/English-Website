const HomeService = () => {
    return (
        <section className="service section">
            <div className="service__container container grid">
                <article className="service__card">
                    <i className="ri-brain-line"></i>
                    <h3 className="service__title">Smart Learning</h3>
                    <p className="service__description">Adaptive learning system that grows with your progress and provides personalized feedback</p>
                </article>

                 <article className="service__card">
                    <i className="ri-gamepad-line"></i>
                    <h3 className="service__title">Gamified Experience</h3>
                    <p className="service__description">Earn coins, complete with others, and unlock achievements as you learn</p>
                </article>

                 <article className="service__card">
                    <i className="ri-wechat-line"></i>
                    <h3 className="service__title">Instant Feedback</h3>
                    <p className="service__description">Get immediate corrections and suggestions to improve your translate</p>
                </article>
            </div>
        </section>
    );
}

export default HomeService;