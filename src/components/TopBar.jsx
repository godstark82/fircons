import { CONSTANTS } from '@/lib/constants';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaClock, FaWhatsapp } from 'react-icons/fa';

const TopBar = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="hidden sm:block bg-bg-gray text-light py-0.5 w-full">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-sm flex items-center">
                        <FaClock className="inline-block mr-2 bg-primary text-white rounded h-5 w-5 p-1" />
                        <span className="text-black">{dateString}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-sm flex items-center">
                            <FaWhatsapp className='inline-block mr-2 text-primary' />
                            <span className='text-black font-bold'>
                                <a href={`https://wa.me/${CONSTANTS.SUPPORT_PHONE_1}`} target="_blank" rel="noopener noreferrer">
                                    (WhatsApp) {CONSTANTS.SUPPORT_PHONE_1}
                                </a>
                            </span>
                        </div>
                        <div className="text-sm flex items-center">
                            <FaWhatsapp className='inline-block mr-2 text-primary' />
                            <span className='text-black font-bold'>
                                <a href={`https://wa.me/${CONSTANTS.SUPPORT_PHONE_2}`} target="_blank" rel="noopener noreferrer">
                                    (WhatsApp) {CONSTANTS.SUPPORT_PHONE_2}
                                </a>
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            <a href="https://www.facebook.com/ghrce/" target='_blank' className="hover:text-secondary transition-colors" aria-label="Facebook">
                                <FaFacebook className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                            <a href="https://x.com/iilm" target='_blank' className="hover:text-secondary transition-colors" aria-label="Twitter">
                                <FaTwitter className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                            <a href="https://www.instagram.com/ghrce/" className="hover:text-secondary transition-colors" aria-label="Instagram">
                                <FaInstagram className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                            <a href="https://in.linkedin.com/school/ghrce/" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                                <FaLinkedin className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                            <a href="https://www.youtube.com/user/iilm" className="hover:text-secondary transition-colors" aria-label="YouTube">
                                <FaYoutube className='inline-block bg-primary text-white rounded h-6 w-6 p-1' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
