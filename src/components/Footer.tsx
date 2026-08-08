import { CONSTANTS } from '@/lib/constants';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Address</h3>
                        <ul className="space-y-3 text-light/80">
                            <li className='flex items-center gap-2'>
                                <FaMapMarkerAlt className="text-primary size-7" />
                                <p>{CONSTANTS.COLLAGE_ADDRESS}</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaWhatsapp className="text-primary" />
                                <a href={`https://wa.me/${CONSTANTS.SUPPORT_PHONE_1}`} target="_blank" rel="noopener noreferrer">
                                    <span>(WhatsApp) {CONSTANTS.SUPPORT_PHONE_1}</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaWhatsapp className="text-primary" />
                                <a href={`https://wa.me/${CONSTANTS.SUPPORT_PHONE_2}`} target="_blank" rel="noopener noreferrer">
                                    <span>(WhatsApp) {CONSTANTS.SUPPORT_PHONE_2}</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-primary" />
                                <span><a href={`mailto:${CONSTANTS.SUPPORT_EMAIL}`}> {CONSTANTS.SUPPORT_EMAIL}</a></span>
                            </li>
                            <div className="flex space-x-4 pt-2">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-primary transition-colors">
                                    <FaYoutube size={20} />
                                </a>
                            </div>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">About</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about/about-college" className="text-light/80 hover:text-primary transition-colors block">
                                    {CONSTANTS.COLLAGE_NAME}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/important-dates" className="text-light/80 hover:text-primary transition-colors block">
                                    Important Dates
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/programme" className="text-light/80 hover:text-primary transition-colors block">
                                    Programme
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/login" className="text-light/80 hover:text-primary transition-colors block">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/upload-paper" className="text-light/80 hover:text-primary transition-colors block">
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <Link href="/downloads" className="text-light/80 hover:text-primary transition-colors block">
                                    Downloads
                                </Link>
                            </li>
                            <li>
                                <Link href="/upload-payment-proof" className="text-light/80 hover:text-primary transition-colors block">
                                    Upload Payment Proof
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="text-light/80 hover:text-primary transition-colors block">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin" className="text-light/80 hover:text-primary transition-colors block">
                                    Administrator
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about/privacy-policy" className="text-light/80 hover:text-primary transition-colors block">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/terms-and-conditions" className="text-light/80 hover:text-primary transition-colors block">
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/refund-and-cancellation-policy" className="text-light/80 hover:text-primary transition-colors block">
                                    Refund &amp; Cancellation Policy
                                </Link>
                            </li>
                        </ul>
                        <h3 className="text-xl font-bold text-white pt-2">Conference Venue</h3>
                        <div className="aspect-w-16 aspect-h-9 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.183520391772!2d79.00091537503361!3d21.105248380563285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4954f412ca411%3A0x4fd4cb2d05b49c7d!2sG.%20H.%20Raisoni%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1784876969666!5m2!1sen!2sin"
                                width="100%"
                                height="160"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-primary text-white text-center text-lg font-bold py-2 rounded-t-md">
                        Academic Partner
                    </div>
                    <div className="border border-light/20 border-t-0 rounded-b-md px-4 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
                        <a
                            href="https://abhijournals.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light/80 hover:text-primary transition-colors"
                        >
                            abhijournals.com
                        </a>
                        <a
                            href="https://janolijaournals.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light/80 hover:text-primary transition-colors"
                        >
                            janolijaournals.org
                        </a>
                    </div>
                </div>
                <div className="border-t border-light/20 mt-8 pt-8 text-center text-light/80 space-y-3">
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                        <Link href="/about/privacy-policy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="opacity-40">|</span>
                        <Link href="/about/terms-and-conditions" className="hover:text-primary transition-colors">
                            Terms &amp; Conditions
                        </Link>
                        <span className="opacity-40">|</span>
                        <Link href="/about/refund-and-cancellation-policy" className="hover:text-primary transition-colors">
                            Refund &amp; Cancellation
                        </Link>
                    </div>
                    <p className="text-sm">{CONSTANTS.CONFERENCE_ABBR} &copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;