import React from 'react';
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons library
import { useNavigate } from 'react-router';

const Footer = () => {

  const navigate= useNavigate()
  return (
    <div className="footer-container bg-gray-900 h-96 relative">
      <div className='footer-content'>
        <img src="https://assets-global.website-files.com/6571cd8955f9e7f772615980/6571cd8955f9e7f772615986_logo.svg" alt="yo" className="absolute left-32 top-20 text-white" width={210} />
        <p className="absolute left-32 top-40 text-white text-lg">A conversational Web3 Crypto AI <br />
          execution technology that provides <br />
          you with access to CeFi, DeFi, and NFT<br />
          crypto markets through an all-in-one <br />
          conversational AI interface.</p>
        <div className="footer-list absolute top-20 right-96 h-72 w-96">
          <h1 className="text-white text-2xl mb-6">Socials</h1>
          <ul>
            <li className="flex items-center text-white text-lg"><FaTelegram className="icon mr-2" /><a href="https://telegram.org/"className="contact-link">Telegram</a></li>
            <li className="flex items-center text-white text-lg"><FaTelegram className="icon mr-2" /><a href="https://twitter.com/"className="contact-link">Communitychannel</a></li>
            <li className="flex items-center text-white text-lg"><FaTwitter className="icon mr-2" /><a href='https://www.youtube.com/'className="contact-link">Twitter</a></li>
            <li className="flex items-center text-white text-lg"><FaLinkedin className="icon mr-2" /><a href='https://www.linkedin.com/'className="contact-link">LinkedIn</a></li>
            <li className="flex items-center text-white text-lg"><FaTwitter className="icon mr-2" /><a href='https://medium.com/'className="contact-link">Medium</a></li>
            <li className="flex items-center text-white text-lg"><FaYoutube className="icon mr-2" /><a href='https://www.youtube.com/'className="contact-link">YouTube</a></li>
          </ul>
        </div>

        <div className="footer-list1 absolute top-20 right-60 h-72 w-80">
          <h1 className="text-white text-2xl mb-6">Use cases</h1>
          <ul>
            <li className="text-white text-lg"><a href=''className="contact-link">Technology</a></li>
            <li className="text-white text-lg"><a href=''className="contact-link">Track Record</a></li>
            <li className="text-white text-lg"><a href=''className="contact-link">Partners</a></li>
            <li className="text-white text-lg"><a href=''className="contact-link">Team</a></li>
            <li className="text-white text-lg"><a href=''className="contact-link">Jobs</a></li>
          </ul>
        </div>
        <div className="footer-list2 absolute top-20 right-20 h-72 w-80">
          <h1 className="text-white text-2xl mb-6">Contact</h1>
          <ul>
            <li className="text-white text-lg"><a  onClick={() => navigate("/contatus")} className="contact-link">Contact Us</a></li>
            <li className="text-white text-lg"><a href=''className="contact-link">Track Record</a></li>
            <li className="text-white text-lg"><a href=''className="contact-link">Brand Kit</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
