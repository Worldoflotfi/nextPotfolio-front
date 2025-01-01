// app/loading.tsx
import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-teal-400"></div>
            <span className="ml-3 text-teal-400 font-medium">Loading...</span>
        </div>
    );
};

export default Loading;
