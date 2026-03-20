import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-24 font-sans text-center px-6">
            <p className="text-9xl font-black text-gray-100">404</p>
            <h2 className="text-3xl font-black mt-4 mb-3">Page Not Found</h2>
            <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
            <Link to="/" className="bg-[#ff3131] text-white px-10 py-4 rounded-xl font-black hover:bg-red-700 transition shadow-lg">
                Back to Home
            </Link>
        </div>
    )
}

export default NotFoundPage