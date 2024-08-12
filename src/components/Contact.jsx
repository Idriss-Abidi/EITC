import { FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMove = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
});

const ContactUs = () => {
  return (
    <div className="m-8" id="CONTACT">
      {/* Contact Form */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-white mb-6">Contact Us</h2>
        <form className="w-full max-w-md text-black/80 bg-white/10 p-6 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Name</label>
            <input id="name" type="text" className="w-full p-2 mt-1 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email</label>
            <input id="email" type="email" className="w-full p-2 mt-1 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 mt-1 rounded" required></textarea>
          </div>
          <button type="submit" className="w-full hover:bg-cyan-700 bg-gray-800 text-white hover:text-cyan-200 p-2 rounded">Send Message</button>
        </form>
      </div>
      
      {/* Get in Touch Section */}
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-3xl text-white mb-4">Get in Touch</h2>
        <div className="flex items-center justify-center gap-4 text-2xl text-white">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center"
            style={{ width: '50px', height: '50px' }}
          >
            <a href="https://www.linkedin.com/company/ensias-it-club/" target="_blank" rel="noopener noreferrer">
              <motion.div variants={iconMove(2.5)} initial="initial" animate="animate">
                <FaLinkedin />
              </motion.div>
            </a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center"
            style={{ width: '50px', height: '50px' }}
          >
            <a href="https://www.instagram.com/ensias_it_club/" target="_blank" rel="noopener noreferrer">
              <motion.div variants={iconMove(3)} initial="initial" animate="animate">
                <FaInstagram />
              </motion.div>
            </a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center"
            style={{ width: '50px', height: '50px' }}
          >
            <a href="https://www.facebook.com/ensiasitclub" target="_blank" rel="noopener noreferrer">
              <motion.div variants={iconMove(4)} initial="initial" animate="animate">
                <FaFacebookF />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
