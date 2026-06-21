import './HeroStyle.css'
import homeImg from '../assets/homeImg.jpg'

function Hero() {
    return (
        <>
            <div className='hero'>
                <img src={homeImg} alt="HeroImg" />
                <div className='hero-text'>
                    <h1>Your Journey Your Story</h1>
                    <p>Choose Your Favourite Destination.</p>
                    <a href="/">Travel Plan</a>
                </div>
            </div>
        </>
    );
}

export default Hero;