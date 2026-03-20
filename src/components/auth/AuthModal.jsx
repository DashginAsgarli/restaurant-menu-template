import React, { useState } from 'react';
import { FiX, FiMail, FiLock, FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

function AuthModal({ onClose }) {
    const { login, register } = useAuth();

    const [tab, setTab] = useState('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setError('');

        if (!email || !password) return setError('Email and password are required');
        if (tab === 'register' && !name) return setError('Name is required');
        if (password.length < 4) return setError('Password must be at least 4 characters');

        if (tab === 'login') {
            login(email, password);
            setSuccess('Welcome back! 🎉');
        } else {
            register(name, email, password);
            setSuccess('Registration successful! 🎉');
        }
        setTimeout(() => onClose(), 800);
    }

    function switchTab(t) {
        setTab(t);
        setError('');
        setSuccess('');
    }

    return (
        <div className="fixed inset-0 z-300 bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-[30px] w-full max-w-md p-8 relative shadow-2xl" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 transition">
                    <FiX size={20} />
                </button>

                <h2 className="text-2xl font-black tracking-tighter mb-1">
                    Taste<span className="text-[#ff3131]">Nest</span>
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                    {tab === 'login' ? 'Log in to your account' : 'Create a new account'}
                </p>

                <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
                    <button onClick={() => switchTab('login')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${tab === 'login' ? 'bg-white text-black shadow-sm' : 'text-gray-400'}`}>
                        Login
                    </button>
                    <button onClick={() => switchTab('register')} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${tab === 'register' ? 'bg-white text-black shadow-sm' : 'text-gray-400'}`}>
                        Register
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {tab === 'register' && (
                        <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full pl-11 pr-4 py-3 border-2 border-gray-100 rounded-xl text-sm font-medium focus:border-[#ff3131] outline-none transition" />
                        </div>
                    )}

                    <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-11 pr-4 py-3 border-2 border-gray-100 rounded-xl text-sm font-medium focus:border-[#ff3131] outline-none transition" />
                    </div>

                    <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input type={showPw ? 'text' : 'password'} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-11 pr-12 py-3 border-2 border-gray-100 rounded-xl text-sm font-medium focus:border-[#ff3131] outline-none transition" />
                        <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
                            {showPw ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                        </button>
                    </div>

                    {error && <p className="text-[#ff3131] text-xs font-bold">{error}</p>}
                    {success && <p className="text-green-500 text-xs font-bold">{success}</p>}

                    <button type="submit" className="w-full bg-[#ff3131] hover:bg-red-700 text-white py-3 rounded-xl font-black text-sm transition-all shadow-md">
                        {tab === 'login' ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-center text-xs text-gray-400 mt-5">
                    {tab === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button onClick={() => switchTab(tab === 'login' ? 'register' : 'login')} className="text-[#ff3131] font-bold hover:underline">
                        {tab === 'login' ? 'Register' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthModal;