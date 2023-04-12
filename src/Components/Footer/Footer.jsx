import React from "react";
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";



const Footer = () => {
    return (
        <div className="bg-[#000000] text-white footer">
            <div className="flex flex-col justify-between py-5 px-2 mx-auto max-w-4xl md:flex-row xl:max-w-6xl xl:px-0">
                <div className="flex flex-col">
                    <p className="font-semibold text-white mb-2 text-lg">MOVIE HUB</p>
                    <p>Questions? Contact us</p>
                    <div className="flex gap-2 text-[20px] footer-icons">
                        <CiFacebook />
                        <CiInstagram />
                        <CiTwitter />
                        <CiLinkedin />
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <p >How it works</p>
                    <p>Our Package</p>
                    <p>Promotions</p>
                    <p>Refer a friend</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <p>Account </p>
                    <p>Redeem gift cards</p>
                    <p>Privacy</p>
                    <p>Speed test</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <p>Media centre</p>
                    <p>Buy Gift Cards</p>
                    <p>Cookie Prefrence</p>
                    <p>Legal Notices</p>
                </div>
            </div>
            <div className="mx-4">
                <p className="text-white-100">Copyright @ 2023 MOVIE-HUB</p>
            </div>
        </div>
    )

}
export default Footer;