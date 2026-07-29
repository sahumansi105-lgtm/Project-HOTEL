import React, { useState } from 'react';
import "../Styles/Contact.css";

  const Contact = () => {
  const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [PhoneNumber, setPhoneNumber] = useState();
    const [Message, setMessage] = useState();
    console.log(Name)

    const handleSubmit = (event) => {
      event.preventDefault();

      if (Name && Email && PhoneNumber && Message) {
          alert("Successfully submitted!")
        }else{
          alert("All fields are mandatory!")
        }
      };

  return (
      <div className='contact-page'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7115.449153628064!2d70.
        90581754220462!3d26.912234806589318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
        1!3m3!1m2!1s0x3947bc2890702d0f%3A0xa00a3faadc690b7d!2sHOTEL%20PARADISE%20PALACE!5e0!3m2!1sen!2sin!4v1764589135216!5m2!1sen!2sin" 
        width="1510" height="550" allowFullScreen="" 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className='form-box'>
          <div className="contact-text">
        <h1>Contact Paradise Hotel</h1>
        <p>Step into the peaceful world of Paradise Hotel, where every corner is wrapped in natural beauty. <br/>
          Wander through vibrant forest trails, listen to the soothing sounds of wildlife, and enjoy the refreshing calm of pure greenery.
       <br/>Experience a lifestyle surrounded by the magic of tropical nature. Contact Paradise Hotel now!</p>
        </div>
        
        <div className="contact-layout">
          <div className='text-footer'>
            <h3>Visit our Blogs</h3>
            <p>Visit our Blogs to Know more about Living in Nature.</p>
            <p>Check-out our accommodations!</p>
            <br/>
            <h3>Contact Information</h3>
            <p>HOTEL PARADISE PALACE
            inside Fort Road, Dhibba Para, Manak Chowk, Amar Sagar Pol, Jaisalmer, Rajasthan</p>
            <p>info@Paradisehotel.com</p>
          </div>
          
          <form onSubmit={handleSubmit}>
        <p className='heading'>Get in touch</p>
        <div>
          <p className='fieldName'>Name*</p>
          <input type='Name'  onChange={(event)=>setName(event.target.value)} />
          <p className={Name? "data" : "noData"}>{Name? "" : "Name is required"}</p> 
        </div>

        <div>
          <p className='fieldName'>Email*</p>
          <input type='Email' onChange={(event)=>setEmail(event.target.value)} />
          <p className={Email? "data" : "noData"}>{Email? "" : "Email is required"}</p>
        </div>

        <div>
        <p className='fieldName'>Phone Number*</p>
        <input type='Phone Number' onChange={(event)=>setPhoneNumber(event.target.value)} />
        <p className={PhoneNumber? "data" : "noData"}>{PhoneNumber? "" : "Phone Number is required"}</p>
        </div>

        <div>
        <p className='fieldName'>Message*</p>
        <input type='Message' onChange={(event)=>setMessage(event.target.value)} />
        <p className={Message? "data" : "noData"}>{Message? "" : "Message is required"}</p>
        </div>
        
        <div>
          <button>Submit</button>
        
        </div>
          </form>
        </div>
    </div>

     </div>
  )
}



export default Contact
