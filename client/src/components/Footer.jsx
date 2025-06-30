import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3 ">Prestige Enclave</h2>
                    <p className="text-sm text-gray-400">
                        Find your dream home with ease. Explore the best properties in town with us.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link to="/search" className="hover:text-blue-400">Search</Link></li>
                        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
                    
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
                    <p className="text-sm text-gray-400">Kanpur, Uttar Pradesh, India</p>
                    <p className="text-sm text-gray-400">mohdshariq8589@gmail.com</p>
                    <p className="text-sm text-gray-400">Phone: +91 9453218589</p>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link to="https://github.com/mohdshariq-8589" className="text-gray-400 hover:text-blue-400 text-xl"><FaGithub /></Link>
                        <Link to="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaTwitter /></Link>
                        <Link to="https://www.instagram.com/_shariq______/?hl=en" className="text-gray-400 hover:text-blue-400 text-xl"><FaInstagram /></Link>
                        <Link to="https://www.linkedin.com/in/mohdshariq01/" className="text-gray-400 hover:text-blue-400 text-xl"><FaLinkedin /></Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Prestige Enclave. All rights reserved.
            </div>
        </footer>
    );
}
