import { useEffect, useRef, useState } from "react";
import "../styles/components/contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  useEffect(() => emailjs.init("KAPbEgk8iqF5cPB2f"), []);

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_bjcd37o";
    const templateId = "template_e9vmutm";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current.value,
        from_email: emailRef.current.value,
        message: messageRef.current.value,
      });
      alert("email successfully sent");
      nameRef.current.value = ""
      emailRef.current.value = ""
      messageRef.current.value = ""
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-component">
      <div className="layout">
        <p className="heading">Contact</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input ref={nameRef} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input ref={emailRef} />
          </div>
          <div className="form-group">
            <label>
              Message<span>*</span>
            </label>
            <textarea ref={messageRef}></textarea>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
