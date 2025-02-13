import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-gray-900">Taura Bags</h1>
    <br />
      <p className="text-lg text-gray-700 mt-4">Something amazing is coming soon!</p>
      <p className="text-md text-gray-500 mt-2">Stay tuned for updates.</p>
    </div>
  );
};

export default ComingSoon;