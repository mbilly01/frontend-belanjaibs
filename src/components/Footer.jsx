import logo from '../logo.svg';
import yticon from '../assets/Vector.svg';
import teleicon from '../assets/phone-solid.svg';
import fbicon from '../assets/Vector-1.svg';
import igicon from '../assets/Vector-2.svg';
import twiticon from '../assets/Vector-3.svg';
const Footer = () => {
  return (
    <footer>
      <section className="footer-up">
        <section className="footer-up-left">
          <h4>Links</h4>
          <p>Product Lainnya</p>
          <p>Lokasi</p>
          <p>Karir</p>
        </section>
        <section className="footer-up-middle">
          <h4>Social Media</h4>
          <a href="https://www.whatsapp.com"><img src={teleicon} alt="" /></a>
          <a href="https://www.facebook.com"><img src={fbicon}alt="" /></a>
          <a href="https://www.twitter.com"><img src={twiticon} alt="" /></a>
          <a href="https://www.instagram.com"><img src={igicon} alt="" /></a>
          <a href="https://www.youtube.com"><img src={yticon} alt="" /></a>
        </section>
          <img src={logo} alt="" />
      </section>
      <section className="footer-down">
        <p>Copyrighted By BelanjaIBS</p>
        <hr />
        <p>Designed By <strong><a href="https://www.github.com/mbilly01">Muhammad Jibril Salsabilly</a></strong></p>
      </section>
    </footer>
  );
}

export default Footer;