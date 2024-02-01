import "../styles/components/contact.scss";

export default function Contact() {
  return (
    <div className="contact-component">
      <div className="layout">
        <p className="heading">Contact</p>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input />
          </div>
          <div className="form-group">
            <label>Topic</label>
            <input />
          </div>
          <div className="form-group">
            <label>
              Message<span>*</span>
            </label>
            <textarea></textarea>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
