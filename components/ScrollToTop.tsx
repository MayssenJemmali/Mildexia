import { type FC, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling past the first viewport
            setVisible(window.scrollY > window.innerHeight * 0.8);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-8 end-8 z-50 w-12 h-12 rounded-full bg-mildexia-primary text-white shadow-lg shadow-mildexia-primary/30 flex items-center justify-center transition-all duration-300 hover:bg-mildexia-darkPrimary hover:scale-110 hover:-translate-y-0.5 active:scale-95 ${visible
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
        >
            <ArrowUp size={20} strokeWidth={2.5} />
        </button>
    );
};

export default ScrollToTop;
