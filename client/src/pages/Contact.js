import React from "react";
import ContactLinks from "../components/ContactLinks";

export default function Contact() {

    return (
        <>
            <section className="contact flex justify-evenly">
                <div className="contact-container flex justify-center">
                    <form className="contact-form mt-20">
                        <div className="contact-form-header text-white text-center text-3xl">
                            <h2 className="contact-form-title">Contact Me</h2>
                        </div>
                        <div className="contact-form-body">
                            <div className="contact-form-group m-2">
                                <input className="contact-form-input w-full h-10" type="text" name="name" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="contact-form-group m-2">
                                <input className="contact-form-input w-full h-10" type="email" name="email" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="contact-form-group m-2">
                                <textarea className="contact-form-input" name="message" id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                        <div className="contact-form-footer m-2">
                            <button className="border-4 text-blue-900 w-full bg-blue-300 hover:bg-blue-900 hover:text-blue-300" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="mt-32">
                <ContactLinks />
                </div>
            </section>
            
        </>
    );

};


