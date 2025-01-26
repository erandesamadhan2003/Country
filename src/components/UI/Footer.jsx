import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
export const Fooder = () => {
    return (
        <>
            <footer className="flex foot">
                <div className="flex upper-footer">
                    <div className="flex footer-component">
                        <div className="footer-icon">
                            <FaLocationDot />
                        </div>
                        <div className="flex personal-info">
                            <p>Find us</p>
                            <p>Nashik, Maharashtra</p>
                        </div>
                    </div>

                    <div className="flex footer-component">
                        <div className="footer-icon">
                            <IoCall />
                        </div>
                        <div className="flex personal-info">
                            <p>Contact us</p>
                            <p>9405652637</p>
                        </div>
                    </div>

                    <div className="flex footer-component">
                        <div className="footer-icon">
                            <IoMdMailUnread />
                        </div>
                        <div className="flex personal-info">
                            <p>Mail us</p>
                            <p>erandesamadhan2003@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="lower-footer">
                    Copyright © 2025. All Right Reserved <span>SamadhanErande</span>
                </div>
            </footer>
        </>
    )
}