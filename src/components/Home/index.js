import LogoTitle from '../../assets/images/wtitle.jpg'
import { Link } from 'react-router-dom'
import './index.scss'


const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="hero" />
                ill Jaramillo
                <br/>
                Web Developer</h1>
<h2>
    Frontend Developer / JavaScript / Hot Sauce
</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>


    );
}

export default Home