import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
         <div className="newsletter-content">
            <div className="newsletter-text">
                <h2>Subscribe to our Newsletter</h2>
                <p>& Never miss latest updates</p>
            </div>
            <form className="newsletter-form"
            action="https://formsubmit.co/riddhima.singh1510@gmail.com" 
            method="POST">
              <input 
              type="email" 
              name="email"
              required 
              placeholder="Email Address"  />
             <button type="submit">Submit</button>
            </form>

        </div>
    </div>

  );
};

export default Newsletter;
