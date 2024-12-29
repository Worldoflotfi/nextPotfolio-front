'use client';
import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
    texts: string[]; // Array of strings to type
    typingSpeed?: number; // Speed for typing (ms per character)
    deletingSpeed?: number; // Speed for deleting (ms per character)
    pauseTime?: number; // Pause time between texts (ms)
    className?: string; //new type for className
}

const TypingEffect: React.FC<TypingEffectProps> = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000,
    // className = ''
}) => {
    const [currentText, setCurrentText] = useState(''); // The text being displayed
    const [index, setIndex] = useState(0); // Current index in the texts array
    const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting text

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[index]; // Get the current string to type
            const isComplete = currentText === fullText && !isDeleting;

            if (!isDeleting && currentText !== fullText) {
                // Type next character
                setCurrentText(fullText.slice(0, currentText.length + 1));
            } else if (isComplete) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && currentText !== '') {
                // Delete character
                setCurrentText(currentText.slice(0, -1));
            } else if (isDeleting && currentText === '') {
                // Move to the next string after deleting
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop to the start
            }
        };

        const typingInterval = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        // setCurrentText(currentText.slice(0,-1));  added 

        return () => clearTimeout(typingInterval); // Cleanup interval
    }, [currentText, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <h3 className="text-2xl font-semibold text-tale-400 mb-4">
            {currentText}
            <span className="text-teal-400">|</span>
        </h3>
    );
};

export default TypingEffect;
