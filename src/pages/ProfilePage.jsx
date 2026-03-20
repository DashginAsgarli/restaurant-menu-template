import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUser, FiMail, FiLogOut, FiEdit2, FiCheck } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

function ProfilePage() {
    const { user, logout } = useAuth()
    const { totalCount } = useCart()
    const { wishlist } = useWishlist()
    const navigate = useNavigate()

    const [editMode, setEditMode] = useState(false)
    const [displayName, setDisplayName] = useState(user?.name || '')

    function handleLogout() {
        logout()
        navigate('/')
    }

    function saveEdit() { setEditMode(false) }

    return (
        <div className="bg-white min-h-screen pt-24 pb-20 font-sans">
            <div className="max-w-3xl mx-auto px-6 md:px-12">

                <h1 className="text-3xl font-black tracking-tight mb-10">My Profile</h1>
                <div className="flex items-center gap-6 mb-10 p-6 bg-gray-50 rounded-3xl">
                    <div className="w-20 h-20 bg-[#ff3131] rounded-full flex items-center justify-center text-white font-black text-3xl shrink-0">
                        {user?.name?.[0]?.toUpperCase()}
                    </div>
                    <div className="flex-1">
                        {editMode ? (
                            <div className="flex items-center gap-3">
                                <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} className="border-2 border-[#ff3131] rounded-xl px-3 py-2 font-bold text-sm outline-none" />
                                <button onClick={saveEdit} className="w-9 h-9 bg-green-500 text-white rounded-xl flex items-center justify-center">
                                    <FiCheck size={16} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <h2 className="font-black text-xl">{displayName}</h2>
                                <button onClick={() => setEditMode(true)} className="text-gray-400 hover:text-[#ff3131] transition">
                                    <FiEdit2 size={14} />
                                </button>
                            </div>
                        )}
                        <p className="text-gray-400 text-sm mt-1">{user?.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    {[
                        { label: 'Total Orders', value: '12', color: 'text-[#ff3131]' },
                        { label: 'Wishlist', value: wishlist.length, color: 'text-pink-500' },
                        { label: 'In Cart', value: totalCount, color: 'text-[#fdb714]' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-5 text-center">
                            <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                            <p className="text-gray-400 text-xs font-bold mt-1 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="border-2 border-gray-100 rounded-3xl p-6 space-y-4 mb-8">
                    <h3 className="font-black text-lg mb-4">Account Information</h3>

                    <div className="flex items-center gap-4 py-3 border-b border-gray-50">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                            <FiUser size={16} className="text-gray-500" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium">Name</p>
                            <p className="font-bold text-gray-800">{displayName}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 py-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                            <FiMail size={16} className="text-gray-500" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium">Email</p>
                            <p className="font-bold text-gray-800">{user?.email}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="font-black text-lg mb-4">Recent Orders</h3>
                    <div className="space-y-3">
                        {[
                            { id: '#1042', date: 'March 18, 2026', total: '$34.00', status: 'Delivered' },
                            { id: '#1041', date: 'March 15, 2026', total: '$22.50', status: 'Delivered' },
                            { id: '#1040', date: 'March 10, 2026', total: '$18.00', status: 'Delivered' },
                        ].map(order => (
                            <div key={order.id} className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition cursor-default">
                                <div>
                                    <p className="font-bold text-sm">{order.id}</p>
                                    <p className="text-gray-400 text-xs">{order.date}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-[#ff3131]">{order.total}</p>
                                    <span className="text-[10px] bg-green-100 text-green-600 font-black px-2 py-0.5 rounded-full uppercase">
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#ff3131] hover:text-[#ff3131] text-gray-500 py-4 rounded-2xl font-black transition">
                    <FiLogOut size={18} /> Logout
                </button>
            </div>
        </div>
    )
}

export default ProfilePage