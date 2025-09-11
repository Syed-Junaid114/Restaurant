import NavBar from './NavBar'

const HeroSec = () => {
    return (
        <section>
            <div className="heroSection" id='heroSection'>
                <NavBar />
                <div className="container">
                    <div className="banner">
                        <div className="largeBox">
                            <h1 className='title'>Delicious</h1></div>
                        <div className="combined_boxes">
                            <div className="imageBox">
                                <img src="/hero1.png" alt="Hero1" />
                            </div>
                            <div className="textAndLogo">
                                <div className="textWithSvg">
                                    <h1 className="title">Food</h1>
                                    <h1 className="title dishes_title">Dishes</h1>
                                    <img src="/threelines.svg" alt="three" />
                                </div>
                                <img src="/logo.svg" alt="Logo" className='logo' />
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="imageBox">
                            <img src="/hero2.png" alt="Hero2" />
                        </div>
                        <h1 className='title dishes_title'>Dishes</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSec