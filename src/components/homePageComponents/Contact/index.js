import React, { useState } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import axios from "axios";

const base_url = process.env.REACT_APP_MY_VARIABLE;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isContactDataSubmitted, setIsSubmitted] = useState(false)
  const [userContactDetails, setDetailsContact] = useState([]);

  // handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("sss");
    emailjs
      .send(
        "service_z7tdo8f",
        "template_gjb2rse",
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "LvzftvoEA40InWmzI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const url = `${base_url}/userContact`;
    axios
      .post(url, {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        mobile: formData.phone,
        message: formData.message,
      })
      .then((res) => setDetailsContact(res.data));

    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitted(true)
  };

  return (
    <>
      <div className="contact-page-main-main-div">
        <div className="contact-images-container">
          <div className="contact-card-user-box">
            <div className="contact-images-div">
              <img
                alt="user about imag"
                className="contact-user-image-person"
                src="/images/about-user-image.png"
              />
            </div>
            <div className="contact-about-images-container-content-div">
              <h2 className="contact-main-name-heading">Abhijeet Patil</h2>
              <div className="contact-icons-div">
                {/* email */}
                <a
                  className="about-link-a-item"
                  href="mailto:hi@abhijeet-patil.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                  >
                    <path
                      d="M20.1666 0.666748H3.83325C2.90499 0.666748 2.01476 1.0355 1.35838 1.69187C0.702001 2.34825 0.333252 3.23849 0.333252 4.16675V15.8334C0.333252 16.7617 0.702001 17.6519 1.35838 18.3083C2.01476 18.9647 2.90499 19.3334 3.83325 19.3334H20.1666C21.0948 19.3334 21.9851 18.9647 22.6415 18.3083C23.2978 17.6519 23.6666 16.7617 23.6666 15.8334V4.16675C23.6666 3.23849 23.2978 2.34825 22.6415 1.69187C21.9851 1.0355 21.0948 0.666748 20.1666 0.666748ZM20.1666 3.00008L12.5833 8.21508C12.4059 8.31748 12.2047 8.37138 11.9999 8.37138C11.7951 8.37138 11.5939 8.31748 11.4166 8.21508L3.83325 3.00008H20.1666Z"
                      fill="#8075A2"
                    />
                  </svg>
                </a>
                {/* facebook */}
                <a
                  className="about-link-a-item"
                  href="https://www.facebook.com/abhiiijeetpatil?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M16.3334 15.7499H19.2501L20.4167 11.0833H16.3334V8.74992C16.3334 7.54825 16.3334 6.41659 18.6667 6.41659H20.4167V2.49659C20.0364 2.44642 18.6002 2.33325 17.0836 2.33325C13.9161 2.33325 11.6667 4.26642 11.6667 7.81659V11.0833H8.16675V15.7499H11.6667V25.6666H16.3334V15.7499Z"
                      fill="#8075A2"
                    />
                  </svg>
                </a>
                {/* Linkedin */}
                <a
                  className="about-link-a-item"
                  href="https://www.linkedin.com/in/abhijeetpatil03/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M8.0966 5.83328C8.09629 6.45212 7.85016 7.04549 7.41236 7.48285C6.97455 7.92022 6.38094 8.16576 5.7621 8.16545C5.14326 8.16514 4.54989 7.91901 4.11252 7.4812C3.67516 7.0434 3.42962 6.44979 3.42993 5.83095C3.43024 5.21211 3.67637 4.61874 4.11417 4.18137C4.55198 3.74401 5.14559 3.49847 5.76443 3.49878C6.38327 3.49909 6.97664 3.74522 7.41401 4.18302C7.85137 4.62083 8.09691 5.21444 8.0966 5.83328ZM8.1666 9.89328H3.49993V24.5H8.1666V9.89328ZM15.5399 9.89328H10.8966V24.5H15.4933V16.835C15.4933 12.5649 21.0583 12.1683 21.0583 16.835V24.5H25.6666V15.2483C25.6666 8.04995 17.4299 8.31828 15.4933 11.8533L15.5399 9.89328Z"
                      fill="#8075A2"
                    />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  className="about-link-a-item"
                  href="https://www.instagram.com/abhiiijeetpatil/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M15.1994 2.33444C16.0508 2.33118 16.9022 2.33973 17.7533 2.36011L17.9796 2.36828C18.2409 2.37761 18.4988 2.38928 18.8103 2.40328C20.0516 2.46161 20.8986 2.65761 21.6418 2.94578C22.4118 3.24211 23.0604 3.64344 23.7091 4.29211C24.3022 4.87498 24.7612 5.58005 25.0543 6.35828C25.3424 7.10144 25.5384 7.94961 25.5968 9.19094C25.6108 9.50128 25.6224 9.76028 25.6318 10.0216L25.6388 10.2479C25.6595 11.0987 25.6684 11.9496 25.6656 12.8006L25.6668 13.6709V15.1993C25.6696 16.0506 25.6607 16.902 25.6399 17.7531L25.6329 17.9794C25.6236 18.2408 25.6119 18.4986 25.5979 18.8101C25.5396 20.0514 25.3413 20.8984 25.0543 21.6416C24.7622 22.4207 24.303 23.1263 23.7091 23.709C23.1257 24.302 22.4203 24.761 21.6418 25.0541C20.8986 25.3423 20.0516 25.5383 18.8103 25.5966C18.4988 25.6106 18.2409 25.6223 17.9796 25.6316L17.7533 25.6386C16.9022 25.6594 16.0508 25.6683 15.1994 25.6655L14.3291 25.6666H12.8019C11.9506 25.6695 11.0992 25.6605 10.2481 25.6398L10.0218 25.6328C9.74481 25.6227 9.46792 25.6111 9.1911 25.5978C7.94977 25.5394 7.10277 25.3411 6.35844 25.0541C5.5799 24.7617 4.87471 24.3026 4.29227 23.709C3.69849 23.1259 3.23903 22.4204 2.94594 21.6416C2.65777 20.8984 2.46177 20.0514 2.40344 18.8101C2.39044 18.5333 2.37878 18.2564 2.36844 17.9794L2.3626 17.7531C2.34109 16.902 2.33137 16.0507 2.33344 15.1993V12.8006C2.33018 11.9496 2.33874 11.0987 2.3591 10.2479L2.36727 10.0216C2.3766 9.76028 2.38827 9.50128 2.40227 9.19094C2.4606 7.94844 2.6566 7.10261 2.94477 6.35828C3.23804 5.57967 3.69839 4.8748 4.29344 4.29328C4.87548 3.69915 5.58022 3.23928 6.35844 2.94578C7.10277 2.65761 7.9486 2.46161 9.1911 2.40328L10.0218 2.36828L10.2481 2.36244C11.0988 2.34095 11.9498 2.33122 12.8008 2.33328L15.1994 2.33444ZM14.0001 8.16778C13.2272 8.15685 12.4598 8.29964 11.7426 8.58786C11.0253 8.87608 10.3725 9.30397 9.82209 9.84668C9.27165 10.3894 8.83457 11.0361 8.53624 11.7492C8.23791 12.4623 8.08428 13.2275 8.08428 14.0005C8.08428 14.7735 8.23791 15.5388 8.53624 16.2519C8.83457 16.965 9.27165 17.6117 9.82209 18.1544C10.3725 18.6971 11.0253 19.125 11.7426 19.4132C12.4598 19.7014 13.2272 19.8442 14.0001 19.8333C15.5472 19.8333 17.0309 19.2187 18.1249 18.1247C19.2189 17.0308 19.8334 15.547 19.8334 13.9999C19.8334 12.4529 19.2189 10.9691 18.1249 9.87516C17.0309 8.78119 15.5472 8.16778 14.0001 8.16778ZM14.0001 10.5011C14.465 10.4925 14.927 10.5767 15.359 10.7487C15.7911 10.9207 16.1845 11.177 16.5163 11.5027C16.8482 11.8285 17.1118 12.2171 17.2918 12.6458C17.4718 13.0746 17.5645 13.5349 17.5646 13.9999C17.5647 14.4649 17.4721 14.9253 17.2922 15.3541C17.1124 15.7829 16.8489 16.1716 16.5172 16.4975C16.1854 16.8233 15.7921 17.0798 15.3601 17.2519C14.9281 17.424 14.4662 17.5084 14.0013 17.4999C13.073 17.4999 12.1828 17.1312 11.5264 16.4748C10.87 15.8184 10.5013 14.9282 10.5013 13.9999C10.5013 13.0717 10.87 12.1814 11.5264 11.5251C12.1828 10.8687 13.073 10.4999 14.0013 10.4999L14.0001 10.5011ZM20.1251 6.41778C19.7487 6.43284 19.3928 6.59295 19.1318 6.86458C18.8708 7.1362 18.7251 7.49827 18.7251 7.87494C18.7251 8.25162 18.8708 8.61369 19.1318 8.88531C19.3928 9.15694 19.7487 9.31705 20.1251 9.33211C20.5119 9.33211 20.8828 9.17847 21.1563 8.90498C21.4298 8.63148 21.5834 8.26055 21.5834 7.87378C21.5834 7.487 21.4298 7.11607 21.1563 6.84258C20.8828 6.56909 20.5119 6.41544 20.1251 6.41544V6.41778Z"
                      fill="#8075A2"
                    />
                  </svg>
                </a>
              </div>
              <p className="contact-card-para">
                Don’t be shy, say hi! I’d love to hear from you.😊
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmitForm} className="contacte-data-div">
          <div className="contact-input-divs">
            <div>
              <label className="contact-laber-text">First Name <span className="contact-section-require">*</span></label>
              <input
                className="contact-input-feild"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="contact-laber-text">Last Name  <span className="contact-section-require">*</span></label>
              <input
                className="contact-input-feild"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact-input-divs">
            <div>
              <label className="contact-laber-text">Email  <span className="contact-section-require">*</span></label>
              <input
                className="contact-input-feild"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="contact-laber-text">Phone</label>
              <input
                className="contact-input-feild"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="contact-laber-text">Message  <span className="contact-section-require">*</span></label>
            <input
              className="contact-input-feild"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button className=" hover-button">
              {isContactDataSubmitted === false ? <><span class="old-content">Hit me up! 😎</span>
              <span class="new-content">I’m Waiting 🥺</span></> : <span>Message Sent 😌</span>}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
