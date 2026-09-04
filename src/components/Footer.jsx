import React from 'react';
import { MapPin, Clock, Phone, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="location">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-container">
            <div className="logo-badge">
              <span className="logo-text">BM</span>
            </div>
            <span className="logo-name">Body Mechanics</span>
          </div>
          <p className="footer-description">
            Elevating fitness standards in Anna Nagar East. Join the elite.
          </p>
          <div className="inclusive-badge">
            <Heart size={16} color="#FF6B6B" fill="#FF6B6B" />
            <span>LGBTQ+ Friendly</span>
          </div>
        </div>

        <div className="footer-info">
          <div className="info-item">
            <MapPin size={24} color="var(--accent-primary)" />
            <div>
              <h4 className="info-title">Location</h4>
              <p className="info-text">
                L-225, Groundfloor, L Block, No 48, 21st St, L Block,<br/>
                Annanagar East, Chennai, Tamil Nadu 600102
              </p>
            </div>
          </div>
          
          <div className="info-item">
            <Clock size={24} color="var(--accent-primary)" />
            <div>
              <h4 className="info-title">Hours</h4>
              <p className="info-text">Open Daily • Closes 9:30 PM</p>
            </div>
          </div>
          
          <div className="info-item">
            <Phone size={24} color="var(--accent-primary)" />
            <div>
              <h4 className="info-title">Contact</h4>
              <a href="https://wa.me/917810820005?text=Hi%20Body%20Mechanics%2C%20I%20am%20interested%20in%20joining%20the%20gym!" target="_blank" rel="noreferrer" className="info-link">
                +91 078108 20005 <br/>
                <span className="text-accent">(Tap to WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Body Mechanics Fitness Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
