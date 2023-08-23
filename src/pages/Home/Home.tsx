import '../Home/home.css'
import { Illustration, User, Location, Server } from '../../utils/SVGS';

export const Home = () => {
  return (
    <>
      <main className="hero">
        <div className="hero-middle-content">
          <div className="hero-left-side">
            <h1 className='text-4xl font-bold'>Want anything to be easy with<span>LaslesVPN.</span></h1>
            <p>Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <button className="button-red-primary">Get Started</button>
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
    </>
  )
}
