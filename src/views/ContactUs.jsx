import React from 'react';

const ContactUs = () => {
  return (
    <section className="container mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div
        className="contact-form-wrapper mx-auto"
        style={{
          border: '2px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '600px',
          backgroundColor: '#fdfdfd',
        }}
      >
        <h2 className="text-center" style={{ fontFamily: 'Comic Sans MS, cursive', fontSize: '24px' }}>
          Purrfect Adoption
        </h2>
        <h3 className="text-center mt-4 mb-3" style={{ fontFamily: 'Comic Sans MS, cursive', fontSize: '20px' }}>
          Contact us
        </h3>
        <p className="text-center" style={{ fontSize: '14px', color: '#555' }}>
          "Get in touch with us for inquiries, support, or feedback. We're here to help and look forward to hearing from you!"
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" style={{ borderRadius: '5px' }} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" style={{ borderRadius: '5px' }} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ borderRadius: '5px' }} required />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: '#5bc0de',
                borderColor: '#46b8da',
                borderRadius: '5px',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
