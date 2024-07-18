function Contact() {
    return(
        <div>
            <h2>Contact Me</h2>
            <form>
                <label htmlFor="fname">Name:</label>
                <input type="text" id="fname" name="fname" />
                <label htmlFor="lname">Email:</label>
                <input type="text" id="lname" name="lname" />
                <label htmlFor="lname">Message:</label>
                <input type="text" id="lname" name="lname" />
            </form>
        </div>
    )
}

export default Contact;