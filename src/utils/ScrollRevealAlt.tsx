'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealRightProps {
    children: React.ReactNode;
    className?: string; // Optional for custom styles
    threshold?: number; // Percentage of element visibility before triggering
}

const ScrollRevealAlt: React.FC<ScrollRevealRightProps> = ({ children, className = '', threshold = 0.2 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollRevealAlt;
