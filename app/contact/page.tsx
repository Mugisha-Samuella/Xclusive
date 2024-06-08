import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div>
            <div>

          <Image src={"/Assets/Icons/icons-phone.svg"} width={50} height={50} alt="phone" />
          <div>
            <h1>Call to Us</h1>
            <h2>We are available 24/7, 7 days a week.</h2>
            <h2>Phone: +8801611112222</h2>
            </div>
          </div>
          <hr />
          <Image src={"/Assets/Icons/icons-mail.svg"} width={50} height={50} alt="mail" />
          <h1>Write To Us</h1>
          <h2>Fill out our form and we will contact you within 24 hours.</h2>
          <h2>Emails: customer@xclusive.com</h2>
          <h2>Emails: support@xclusive.com</h2>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <input type="text" placeholder="Your Name*" />
            <input type="email" placeholder="Your Email*" />
            <input type="tel" placeholder="Your Phone" />
          </div>
          <div>
            <textarea
              name="message"
              id=""
              placeholder="Your Message*"
            ></textarea>
            <div className="p-6">
              <button className="bg-primary text-white p-4 px-8 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
