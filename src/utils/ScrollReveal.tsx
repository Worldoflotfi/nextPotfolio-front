'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string; // Optional for custom styles
    threshold?: number; // Percentage of element visibility before triggering
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', threshold = 0.2 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Animate only once
        threshold, // Adjust sensitivity
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
