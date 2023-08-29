import '../Home/home.css'
import { Illustration, User, Location, Server } from '../../utils/SVGS';
import { NavbarProps } from '../../interfaces/IsOpen';

export const Home: React.FC<NavbarProps> = ({ isMenuOpen }) => {
  
  return (
      <main className={`hero padding ${isMenuOpen ? "active" : ""}`}>
        <div className="hero-middle-content">
          <div className="hero-left-side">
            <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
            <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
            <button className="button-primary-solid"><span>Get Started</span></button>
          </div>
          <div className="hero-right-side">
            <img src={Illustration} alt="" />
          </div>
        </div>
        <div className="hero-icons">
          <div className="hero-icons-container">
            <img src={User} alt="" />
              <div className="hero-icons-information">
                <h2>90+</h2>
                <p>Users</p>
              </div>
          </div>
          <div className="vertical-line"></div>
          <div className="hero-icons-container">
            <img src={Location} alt="" />
              <div className="hero-icons-information">
                <h2>30+</h2>
                <p>Locations</p>
              </div>
          </div>
          <div className="vertical-line"></div>
          <div className="hero-icons-container">
            <img src={Server} alt="" />
              <div className="hero-icons-information">
                <h2>50+</h2>
                <p>Servers</p>
              </div>
          </div>
        </div>
      </main>
  )
}
