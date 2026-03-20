import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiShoppingBag, FiMenu, FiX, FiUser, FiLogOut, FiHeart, FiChevronRight } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import AuthModal from '../auth/AuthModal'
import CartDrawer from '../cart/CartDrawer'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showAuth, setShowAuth] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showUserMenu, setShowUserMenu] = useState(false)

    const { user, logout } = useAuth()
    const { totalCount } = useCart()
    const { wishlist } = useWishlist()
    const navigate = useNavigate()

    const NAV_LINKS = [
        { label: 'Home', path: '/' },
        { label: 'Shop', path: '/shop' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ]

    function handleLogout() {
        logout()
        setShowUserMenu(false)
        navigate('/')
    }

    const activeCls = 'text-orange-500'
    const baseCls = 'hover:text-orange-500 transition-colors cursor-pointer uppercase tracking-wider text-[14px] font-bold text-gray-700'

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white py-3 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b border-gray-100 z-100 shadow-sm">

                <NavLink to="/">
                    <img src={logo} alt="logo" className="h-12 md:h-15 lg:h-18" />
                </NavLink>

                <ul className="hidden lg:flex space-x-8">
                    {NAV_LINKS.map(link => (
                        <li key={link.path}>
                            <NavLink to={link.path} className={({ isActive }) => `${baseCls} ${isActive ? activeCls : ''}`}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-4">

                    {user && (
                        <NavLink to="/wishlist" className="relative cursor-pointer">
                            <FiHeart size={22} className="text-gray-800 hover:text-pink-500 transition" />
                            {wishlist.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {wishlist.length}
                                </span>
                            )}
                        </NavLink>
                    )}

                    <button className="relative cursor-pointer" onClick={() => setShowCart(true)}>
                        <FiShoppingBag size={22} className="text-gray-800 hover:text-[#ff3131] transition" />
                        {totalCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                {totalCount}
                            </span>
                        )}
                    </button>

                    {!user ? (
                        <button onClick={() => setShowAuth(true)} className="hidden lg:flex items-center gap-2 bg-[#fdb714] hover:bg-orange-500 text-white px-6 py-2.5 rounded font-bold text-sm transition-all shadow-md">
                            <FiUser size={16} />
                            Login
                        </button>
                    ) : (
                        <div className="relative hidden lg:block">
                            <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full font-bold text-sm transition">
                                <div className="w-7 h-7 bg-[#ff3131] rounded-full flex items-center justify-center text-white font-black text-xs">
                                    {user.name[0].toUpperCase()}
                                </div>
                                {user.name}
                            </button>

                            {showUserMenu && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                                    <div className="absolute right-0 top-12 bg-white rounded-2xl shadow-xl border border-gray-100 w-48 py-2 z-50">
                                        <div className="px-4 py-2 border-b border-gray-50 mb-1">
                                            <p className="font-black text-sm">{user.name}</p>
                                            <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                        </div>
                                        <NavLink to="/profile" onClick={() => setShowUserMenu(false)} className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-600 hover:text-[#ff3131] hover:bg-gray-50 transition">
                                            <FiUser size={14} /> My Profile
                                        </NavLink>
                                        <NavLink to="/wishlist" onClick={() => setShowUserMenu(false)} className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-600 hover:text-[#ff3131] hover:bg-gray-50 transition">
                                            <FiHeart size={14} /> Wishlist
                                        </NavLink>
                                        <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-600 hover:text-[#ff3131] hover:bg-gray-50 transition">
                                            <FiLogOut size={14} /> Logout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <button className="lg:hidden p-1.5 text-gray-800 border border-gray-200 rounded-md" onClick={() => setIsMenuOpen(true)}>
                        <FiMenu size={24} />
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="fixed inset-0 z-105 lg:hidden" onClick={() => setIsMenuOpen(false)} />
                )}

                <div className={`fixed top-4 right-4 w-60 bg-white z-110 shadow-2xl rounded-2xl border border-gray-100 transition-all duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
                    <div className="flex items-center justify-between p-4 border-b border-gray-50">
                        <span className="font-black text-base">Menu</span>
                        <button onClick={() => setIsMenuOpen(false)} className="p-1 hover:bg-gray-50 rounded">
                            <FiX size={20} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="flex flex-col p-3">
                        {NAV_LINKS.map(link => (
                            <NavLink key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `flex items-center justify-between py-3 px-3 font-bold text-[13px] rounded-lg transition-all ${isActive ? 'text-orange-500 bg-orange-50' : 'text-gray-600 hover:bg-gray-50 hover:text-orange-500'}`}>
                                {link.label}
                                <FiChevronRight size={12} className="text-gray-300" />
                            </NavLink>
                        ))}

                        {user ? (
                            <>
                                <NavLink to="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-3 px-3 font-bold text-[13px] text-gray-600 hover:bg-gray-50 rounded-lg transition">
                                    My Profile <FiChevronRight size={12} className="text-gray-300" />
                                </NavLink>
                                <button onClick={() => { handleLogout(); setIsMenuOpen(false) }} className="flex items-center gap-2 py-3 px-3 font-bold text-[13px] text-[#ff3131] hover:bg-red-50 rounded-lg transition">
                                    <FiLogOut size={14} /> Logout
                                </button>
                            </>
                        ) : (
                            <button onClick={() => { setShowAuth(true); setIsMenuOpen(false) }} className="w-full bg-[#fdb714] text-white py-2.5 rounded-lg font-bold text-xs shadow-sm mt-2 active:scale-95 transition">
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
            {showCart && <CartDrawer onClose={() => setShowCart(false)} />}
        </>
    )
}

export default Navbar