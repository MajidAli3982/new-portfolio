import React from 'react'

const contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or opportunities, feel free to reach out! 😊</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  )
}

export default contact