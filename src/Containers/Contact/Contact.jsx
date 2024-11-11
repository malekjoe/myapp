import React, { useState } from "react";
import Header from "../../Components/PageHeaderContent/Header.jsx";
import { MdEmail } from "react-icons/md";
import { Animate } from "react-simple-animate";
import "./Contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.length > 50) {
      newErrors.name = "Name must be less than 50 characters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    
    const templateParams = {
      to_name: "Malek Jokhadar",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.description,
    };

    emailjs.send(
      "service_ty34poo",
      "template_gudq234",
      templateParams,
      "0lwgC0EFnsqYUShA4"
    ).then((response) => {
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", description: "" });
    }).catch((error) => {
      console.error("Failed to send email", error);
      alert("Failed to send email.");
    });
  };

  return (
    <section id="contact" className="contact">
      <Header header="My Contact" icon={<MdEmail size={40} />} />
      <div className="contact__content">
        <Animate play duration={1} delay={0} start={{ transform: "translateX(-200px)" }} end={{ transform: "translateX(0px)" }}>
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate play duration={1} delay={0} start={{ transform: "translateX(200px)" }} end={{ transform: "translateX(0px)" }}>
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">Name</label>
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">Email</label>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">Description</label>
                {errors.description && <p className="error">{errors.description}</p>}
              </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
