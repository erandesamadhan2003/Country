export const Contact = () => {
    const handleFormSubmit = (formData) => {
        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <section className="contact-page">
            <h2>Contact Us</h2>

            <div className="form-section">
                <form action={handleFormSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        name="username"
                        required
                        autoComplete="off"
                    />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter you email"
                        name="email"
                        required
                        autoComplete="off"
                    />
                    <textarea
                        className="form-control"
                        rows="10"
                        placeholder="Enter your message"
                        name="message"
                        required
                        autoComplete="off"
                    ></textarea>
                    <button type="submit" value="send">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}