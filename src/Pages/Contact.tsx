function Contact(){
    return(
        <main>
            <div className="contactInfo">
                <h3>Contact Information</h3>
                <p>If you have any questions, feel free to get in touch with us</p><br /><br />
                <p>0703400059</p>
                <p>stephenthiongo77@gmail.com</p>
                <p>kutus,Kirinyaga county</p>

                <h6>Monday-Friday</h6>
                <p>9:00am - 6:00pm</p>
            </div>
            
            <div className="contactForm">
                <label htmlFor="firstname">First name</label>
                <input type="text" name="firstname"id="firstname" placeholder="first name"/>

                <label htmlFor="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" /><br />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" /><br />

                <label htmlFor="phonenumber">Phone Number</label>
                <input type="phone" name="phonenumber" id="phonenumber" /><br />

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Your message"></textarea><br />


                <button>Send Message</button>
            </div>
        </main>
    )
    
}
export default Contact