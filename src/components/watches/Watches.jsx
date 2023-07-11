import React from 'react'
import "./Watches.css"

function Watches() {
  return (
    <div  name="watches" className='watches-container'>
      <div className="leftpart">
        <h2>Keep In Touch</h2>
        <p id="watches-containerleftparagragh">Our lab created diamonds are the
         eco-conscious choice, and exhibit
            the same sparkle as natural diamonds.</p>
            <form action="" onSubmit={()=> alert("Sign Up button clicked")}>
            <input type="email" placeholder='Enter your email Id to subscribe' className='signup-input'/><br />
            <button type="submit" className='signup-btn'>Sign Up</button>
            </form>
      </div>
      
  <div className='rightpart'>
  <div className="image-grid">
  <div className="image-box"><img src="https://www.dimendscaasi.com/wp-content/themes/dimendcaasi/images/pay-pal-trust.webp" alt="1 img not found" /></div>
  <div className="image-box"><img src="https://www.dimendscaasi.com/wp-content/uploads/2023/01/oval-diamond-ring-feature-image.webp" alt="2 img not found" /></div>
  <div className="image-box"><img src="https://www.dimendscaasi.com/wp-content/uploads/2022/08/home-wedding-1.webp" alt="3 img not found" /></div>
  <div className="image-box"><img src="https://www.dimendscaasi.com/wp-content/uploads/2022/08/home-engagement-1.webp" alt="4 img not found" /></div>
</div>


      
    </div>
    

      
    </div>
  )
}

export default Watches
