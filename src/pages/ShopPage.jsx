import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiHeart, FiShoppingBag } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import FoodApp from '../components/main/FoodApp'

const ALL_PRODUCTS = [
    { id: 2, title: 'Butter Chicken', price: 18, category: 'Dinner', rating: 4, image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&fit=crop' },
    { id: 3, title: 'Biryani', price: 11, oldPrice: 13, discount: '-12%', category: 'Lunch', rating: 5, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&fit=crop' },
    { id: 4, title: 'BBQ Chicken & Pork', price: 15, oldPrice: 19, discount: '-21%', category: 'Dinner', rating: 5, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&fit=crop' },
    { id: 5, title: 'Nuggets', price: 8, category: 'Lunch', rating: 4, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&fit=crop' },
    { id: 6, title: 'Burgers', price: 12, category: 'Lunch', rating: 5, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&fit=crop' },
    { id: 7, title: 'Seekh Kebab', price: 14, category: 'Breakfast', rating: 4, image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&fit=crop' },
    { id: 8, title: 'Caesar Salad', price: 9, category: 'Lunch', rating: 4, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&fit=crop' },
    { id: 9, title: 'Pancakes', price: 7, oldPrice: 9, discount: '-22%', category: 'Breakfast', rating: 5, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&fit=crop' },
    { id: 10, title: 'Beef Steak', price: 28, category: 'Dinner', rating: 5, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&fit=crop' },
    { id: 11, title: 'Sushi Platter', price: 22, category: 'Lunch', rating: 5, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&fit=crop' },
    { id: 12, title: 'Waffles', price: 8, category: 'Breakfast', rating: 4, image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&fit=crop' },
]

const CATEGORIES = ['All', 'Breakfast', 'Lunch', 'Dinner']

function ShopPage() {
    const [search, setSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [sortBy, setSortBy] = useState('default')

    const { addToCart } = useCart()
    const { toggleWishlist, isWishlisted } = useWishlist()

    let filtered = ALL_PRODUCTS
        .filter(p => activeCategory === 'All' || p.category === activeCategory)
        .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))

    if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)

    return (
        <>
            <div className="bg-white min-h-screen pt-28 pb-20 px-6 md:px-10 lg:px-24 font-sans">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Our <span className="text-[#ff3131]">Menu</span></h1>
                    <p className="text-gray-400 font-medium">Discover the most delicious dishes</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between max-w-5xl mx-auto">

                    <div className="relative w-full md:w-72">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input type="text" placeholder="Search food..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-11 pr-4 py-3 border-2 border-gray-100 rounded-xl text-sm font-medium focus:border-[#ff3131] outline-none transition" />
                    </div>

                    <div className="flex gap-2 flex-wrap justify-center">
                        {CATEGORIES.map(cat => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#ff3131] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                   
                </div>

                {filtered.length === 0 ? (
                    <div className="text-center py-20 text-gray-400 font-bold">
                        No results found
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {filtered.map(product => (
                            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group overflow-hidden">

                                <div className="relative overflow-hidden h-48">
                                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    {product.discount && (
                                        <span className="absolute top-3 left-3 bg-[#FFE100] text-black text-[10px] font-extrabold px-2 py-1 rounded">
                                            ⚡ {product.discount}
                                        </span>
                                    )}
                                    <button onClick={() => toggleWishlist(product)} className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition">
                                        <FiHeart size={14} className={isWishlisted(product.id) ? 'text-[#ff3131] fill-[#ff3131]' : 'text-gray-400'} style={{ fill: isWishlisted(product.id) ? '#ff3131' : 'none' }} />
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

                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#ff3131] font-black text-lg">${product.price}</span>
                                            {product.oldPrice && (
                                                <span className="text-gray-300 line-through text-xs">${product.oldPrice}</span>
                                            )}
                                        </div>

                                        <button onClick={() => addToCart(product)} className="w-9 h-9 bg-gray-50 hover:bg-[#ff3131] hover:text-white text-gray-600 rounded-full flex items-center justify-center border border-gray-100 transition">
                                            <FiShoppingBag size={15} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <FoodApp/>
        </>
    )
}

export default ShopPage