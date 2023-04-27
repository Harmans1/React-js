import styles from '../css/contact.module.css'
function Contact() {
    return (
        <div className="container">
        <h3>Contact Form</h3>
        <form action="#" name="contact_form">
          <label htmlFor="first_name">First Name</label>
          <input name="first_name" type="text" required="" placeholder="John" />
          <br />
          <label htmlFor="last_name">Last Name</label>
          <input name="last_name" type="text" required="" placeholder="Doe" />
          <br />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required="" placeholder="you@domain.com" />
          <br />
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Enter your message here ..."
            required=""
            defaultValue={" "}
          />
          <div className="center">
            <input type="submit" defaultValue="Submit" />
          </div>
        </form>
      </div>
      
    )
}
export default Contact;