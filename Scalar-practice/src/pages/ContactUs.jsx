import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsThreads } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router";

function ContactUs() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "#",
    },
    {
      icon: <FaInstagram />,
      link: "#",
    },
    {
      icon: <BsThreads />,
      link: "#",
    },
    {
      icon: <FaWhatsapp />,
      link: "#",
    },
  ];

  const [contact,setContact] = useState({
    fullName:"",
    email:"",
    phone:"",
    query:""
  })

  const handleChamge = (e)=>{
    const name = e.target.name;
    setContact({
        ...contact,[name]:e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(contact)
  }

  return (
    <div className="flex gap-15 py-8 px-15">
      <section className="flex flex-col gap-10 px-10 py-5 w-[45%] h-fit bg-amber-100">
        <div className="flex items-center gap-10">
          {socialLinks.map((elem,ind) => {
            return (
              <Link
                className="border-2 rounded-full p-3.5 text-xl bg-blue-500 text-white" key={ind}
                onClick={elem.link}
              >
                {elem.icon}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="text-5xl font-semibold">Let’s Get In Touch.</h1>
          <p className="text-xl">
            Or just reach out manually to{" "}
            <a href="mailto:mortenconnect@gmail.com" className="text-blue-500">
              mortenconnect@gmail.com
            </a>
          </p>
        </div>
      </section>
      <section className="w-[40%] bg-amber-100 py-5 px-10">
        <form action="" method="post" className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-lg font-semibold">Full Name</label>
            <input type="text" className="border-2 py-2 px-3 rounded-xl" placeholder="Full Name" value={contact.fullName} onChange={handleChamge} name="fullName"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-lg font-semibold">Email Address</label>
            <input type="email"  className="border-2 py-2 px-3 rounded-xl" placeholder="Email Address" value={contact.email} onChange={handleChamge} name="email"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-lg font-semibold">Phone Number</label>
            <input type="text" className="border-2 py-2 px-3 rounded-xl" placeholder="Phone Number" value={contact.phone} onChange={handleChamge} name="phone"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-lg font-semibold">Message</label>
            <textarea type="text" className="border-2 py-2 px-3 rounded-xl" placeholder="Share your quries..." value={contact.query} onChange={handleChamge} name="query"/>
          </div>
          <input className="bg-blue-500 py-2.5 rounded-xl" type="submit"/>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
