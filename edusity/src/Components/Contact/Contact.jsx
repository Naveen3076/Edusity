import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b4bcac1c-9587-4b70-ae3a-1d3e5d68e8d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to contact us if you have any questions or need assistance.
          We're here to help! Send us a message using the form below, and one of
          our team members will get back to you as soon as possible. Whether
          it's about our services, pricing, or technical support, we look
          forward to hearing from you.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />Contact@Naveen.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />+91 9020222410
          </li>
          <li>
            <img src={location_icon} alt="" />123 Main Street, Springfield, IL 62701, USA
          </li>
        </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enther your name"
              required
            />
            <label>Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enther your mobile number"
              required
            />
            <label>Your name</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enther your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now
              <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  );
};


export default Contact;
