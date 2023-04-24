import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoWJ from '../../assets/images/wj-logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram,} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoWJ} alt="logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
         
            <NavLink
                target="_blank"
                rel="noreferrer"
                exact="true"
                activeclassname="active"
                className="github-link"
                to="https://www.github.com/willj30"
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </NavLink>
            <NavLink
                target="_blank"
                rel="noreferrer"
                exact="true"
                activeclassname="active"
                className="linkedin-link"
                to="https://www.linkedin.com/in/will-jaramillo/"
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </NavLink>

            <NavLink
                target="_blank"
                rel="noreferrer"
                exact="true"
                activeclassname="active"
                className="instagram-link"
                to="https://www.instagram.com/willys_world_famous/"
            >
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </NavLink>
           
        </nav>
    </div>
)

export default Sidebar
