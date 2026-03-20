import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingBag, FiTrash2 } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

function WishlistPage() {
    const { wishlist, toggleWishlist } = useWishlist()
    const { addToCart } = useCart()

    return (
        <div className="bg-white min-h-screen pt-24 pb-20 font-sans">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <div className="flex items-center gap-4 mb-10">
                    <h1 className="text-3xl font-black tracking-tight">Wishlist</h1>
                    {wishlist.length > 0 && (
                        <span className="bg-pink-100 text-pink-500 font-bold text-sm px-3 py-1 rounded-full">
                            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
                        </span>
                    )}
                </div>

                {wishlist.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-6">
                            <FiHeart size={36} className="text-pink-200" />
                        </div>
                        <h3 className="text-xl font-black text-gray-800 mb-2">Your wishlist is empty</h3>
                        <p className="text-gray-400 text-sm mb-8">Save the items you love to your wishlist</p>
                        <Link to="/shop" className="bg-[#ff3131] text-white px-10 py-4 rounded-xl font-black hover:bg-red-700 transition">
                            Go to Shop
                        </Link>
                    </div>
                )}

                {wishlist.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {wishlist.map(product => (
                            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group overflow-hidden">
                                <div className="relative overflow-hidden h-48">
                                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />

                                    <button onClick={() => toggleWishlist(product)} className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-pink-50 transition">
                                        <FiTrash2 size={14} className="text-[#ff3131]" />
                                    </button>
                                </div>

                                <div className="p-4">
                                    <div className="flex gap-0.5 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} size={10} className={i < product.rating ? 'text-[#fdb714]' : 'text-gray-200'} />
                                        ))}
                                    </div>

                                    <Link to={`/shop/${product.id}`}>
                                        <h3 className="font-bold text-gray-800 text-sm uppercase mb-1 hover:text-[#ff3131] transition truncate">
                                            {product.title}
                                        </h3>
                                    </Link>

                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-[#ff3131] font-black text-lg">${product.price}</span>
                                        <button onClick={() => addToCart(product)} className="flex items-center gap-1 bg-[#ff3131] text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-red-700 transition">
                                            <FiShoppingBag size={12} /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default WishlistPage