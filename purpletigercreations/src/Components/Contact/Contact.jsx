import React from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4b1d2393-2faa-4563-b086-02da5a3f9cc9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact' name='contact'>
        <div className='contact-col'>
           <h3> Send a message</h3>
           <br />
           <p>Please feel free to reach out regarding commissions, questions or anything else!</p>
           <ul>
            <li>purpletigerofficial@gmail.com</li>
            <li>07387 076 782</li>
            <li>@purpletigercreations</li>
           </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your name</label>
                <input id='name' type="text" name="name" placeholder='Enter your name' required/>
                <label htmlFor="phone">Phone Number</label>
                <input id="email" type="email" name='email' placeholder='Enter your email' required/>
                <label htmlFor="message">Write your message here</label>
                <textarea id='message' name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button className='btn' type="submit">Submit</button>
            </form>
            <span>{result}</span>
            </div>

      
    </div>
  )
}

export default Contact
