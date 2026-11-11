

function Home(){
    return(
        <div className="HomePage">
            <div className="heroSection">
                <div className="description">
                    <h4>MEET STEPHEN THIONG'O</h4>
                    <h2>Virtualized Solutions for business Enhancements</h2>
                    <p>Stephen Thiong'o , knows and understands the plight of choosing enterpreneurship, whether it's building a brand, scaling a business, securing financing, effective marketing, or even hiring, Stephen has faced it all, with his experience and expertise he is able to provide an abundance of value to his clients and those seeking real knowledge in the enterprenuership space.</p>

                </div>
                
                <div className="Image">
                    <img src="" alt="" />
                </div>
            </div>
            <main>

                <section className="aboutMe">
                    <div className="myselfdescription">
                        <p>What we do</p>
                        <h2>Empower your business with <span>our Consulting</span></h2>
                        <p>Stephen is the cofounder and co-CEO of Veriheal</p>
                    </div>
                    <div className="workload">
                        <div className="personalConsulting">
                            <img src="" alt="" />
                            <p></p>

                        </div>
                        <div className="FinancialConsulting">
                            <img src="" alt="" />
                            <p></p>
                        </div>
                        <div className="businessConsulting">
                            <img src="" alt="" />
                            <p></p>
                        </div>
                    </div>
                </section>



                <section className="contact">
                    <div className="contactDescription">
                        <h2>Let's do something amazing <span>Together</span></h2>
                        <p>Complete the form below to get more information on how you can hire Stephen</p>
                    </div>
                    <div className="contactForm">
                        <label htmlFor="name">Your name</label>
                        <input type="text" name="name" id="name" /><br />
                        <label htmlFor="email">Your email</label>
                        <input type="text" name="email" id="email"/><br />
                        <label htmlFor="message">Your message(optional)</label>
                        <textarea name="message" id="message" placeholder="Enter your message"></textarea>

                        <button type="submit">Send Message</button>
                    </div>
                    
                </section>
            </main>
           
        </div>
        

    )
}
export default Home