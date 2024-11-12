import React from 'react';

const ServerBusyPage = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 relative">
            <div className="max-w-md w-full space-y-12 text-center">
                {/* Dynamic gradient spinning ring */}
                <div className="flex justify-center">
                    <div
                        className="w-20 h-20 rounded-full animate-spin"
                        style={{
                            background: 'linear-gradient(to right, #3B82F6, #A855F7, #3B82F6)',
                            maskImage: 'linear-gradient(transparent 50%, black 50%)',
                            WebkitMaskImage: 'linear-gradient(transparent 50%, black 50%)',
                            padding: '8px',
                            backgroundSize: '200% 100%',
                            animation: 'spin 1s linear infinite, gradient 3s ease infinite'
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-gray-900"/>
                    </div>
                </div>

                {/* Main message */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-100 animate-pulse">
                        Server Under High Demand
                    </h1>

                    <p className="text-lg text-gray-300 leading-relaxed px-4">
                        We're scaling our systems. Please check back later.
                    </p>
                </div>

                {/* Try again button with gradient animation */}
                <button
                    onClick={handleRefresh}
                    className="mt-8 px-8 py-3 rounded-lg text-white font-medium
                   bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500
                   bg-size-200 animate-gradient
                   transform transition-all duration-200
                   hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20
                   cursor-pointer active:scale-95"
                >
                    Try Again
                </button>
            </div>

            {/* Copyright notice */}
            <div className="absolute bottom-4 text-gray-500 text-sm">
                © {new Date().getFullYear()} bettertext.cn All rights reserved.
            </div>
        </div>
    );
};

// Add custom animation to the global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-gradient {
    animation: gradient 3s ease infinite;
    background-size: 200% 200%;
  }
  
  .bg-size-200 {
    background-size: 200% 200%;
  }
`;
document.head.appendChild(style);

export default ServerBusyPage;