import { useEffect } from "react";

export default function Presentation() {
  useEffect(() => {
    // Redirect to the static HTML presentation
    window.location.href = "/presentation.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <div className="mb-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <p className="text-lg">Loading AI Tools Presentation...</p>
        <p className="text-sm text-gray-400 mt-2">Redirecting to full presentation...</p>
      </div>
    </div>
  );
}
