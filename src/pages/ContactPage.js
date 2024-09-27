// src/pages/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Victor Mmulah" />
        <input type="email" placeholder="mmulahvictor@gmail.com" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactPage;
