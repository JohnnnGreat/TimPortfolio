import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <form action="">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
