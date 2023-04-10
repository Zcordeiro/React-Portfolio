import React from "react";
import LinkedinImage from "../assets/images/linkedin.png";
import EmailImage from "../assets/images/email.png";
import GithubImage from "../assets/images/github.png";
import RedditImage from "../assets/images/reddit.png";


function ContactLinks() {
    return (
        <>
            <div className="w-2/3 m-2">
                <div className="flex justify-evenly flex-wrap">
                    <div className="m-5 flex items-center">
                        <span className="text-md text-blue-200 m-2 italic">Linked</span>
                        <div className="bg-blue-800/50 rounded-lg shadow-md w-14 h-14 flex items-center justify-center">
                            <a targer="_blank" href="https://www.linkedin.com/in/zeus-cordeiro/">
                                <img className="" src={LinkedinImage} />
                            </a>
                        </div>
                    </div>
                    <div className="m-5 m-5 flex items-center">
                        <p className="text-md text-blue-200 m-3 italic">Email</p>
                        <div className="bg-blue-800/50 rounded-lg shadow-md w-14 h-14 flex items-center justify-center">
                            <a targer="_blank" href="mailto:zeus.cordeiro@gmail.com">
                                <img className="" src={EmailImage} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly flex-wrap">
                    <div className="m-5 flex items-center">
                        <span className="text-md text-blue-200 m-3 italic">Github</span>
                        <div className="bg-blue-800 rounded-lg shadow-md w-14 h-14 flex items-center justify-center">
                            <a targer="_blank" href="https://github.com/Zcordeiro">
                                <img className="" src={GithubImage} />
                            </a>

                        </div>
                    </div>
                    <div className="m-5 flex items-center">
                        <span className="text-md text-blue-200 m-3 italic">Reddit</span>
                    <div className="bg-blue-600 rounded-lg shadow-md w-14 h-14 flex items-center justify-center">
                        <a targer="_blank" href="https://www.reddit.com/user/zeus_codes/">
                            <img className="" src={RedditImage} />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactLinks;
