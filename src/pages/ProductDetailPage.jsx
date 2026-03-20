import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiShoppingBag, FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

const ALL_PRODUCTS = [
    { id: 1, title: 'PASTA', price: 20, oldPrice: 26, discount: '-23%', category: 'Dinner', rating: 5, desc: 'Classic Italian pasta prepared with a special sauce. Ingredients: pasta, tomato, olive oil, garlic, lemon.', image: 'https://images.unsplash.com/photo-1551183053-bf91798d555e?w=600&fit=crop' },
    { id: 2, title: 'Butter Chicken', price: 18, category: 'Dinner', rating: 4, desc: 'Tender chicken in a rich, buttery tomato sauce. The most famous dish of Indian cuisine.', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&fit=crop' },
    { id: 3, title: 'Biryani', price: 11, oldPrice: 13, discount: '-12%', category: 'Lunch', rating: 5, desc: 'Fragrant rice with meat and special Indian spices. Basmati rice, saffron, and fried onions.', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&fit=crop' },
    { id: 4, title: 'BBQ Chicken & Pork', price: 15, oldPrice: 19, discount: '-21%', category: 'Dinner', rating: 5, desc: 'Chicken and pork prepared with a special BBQ sauce. Cooked over an open flame.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&fit=crop' },
    { id: 5, title: 'Nuggets', price: 8, category: 'Lunch', rating: 4, desc: 'Crispy breaded chicken nuggets. A favorite for both children and adults.', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&fit=crop' },
    { id: 6, title: 'Burgers', price: 12, category: 'Lunch', rating: 5, desc: 'Handcrafted 200g beef patty with fresh vegetables and our signature sauce.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&fit=crop' },
    { id: 7, title: 'Seekh Kebab', price: 14, category: 'Breakfast', rating: 4, desc: 'Aromatic minced meat prepared with special spices on a skewer.', image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&fit=crop' },
    { id: 8, title: 'Caesar Salad', price: 9, category: 'Lunch', rating: 4, desc: 'Classic Caesar salad - romaine lettuce, parmesan, croutons, and Caesar dressing.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&fit=crop' },
    { id: 9, title: 'Pancakes', price: 7, oldPrice: 9, discount: '-22%', category: 'Breakfast', rating: 5, desc: 'Fluffy, thick pancakes served with maple syrup and fresh berries. The best breakfast choice.', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&fit=crop' },
    { id: 10, title: 'Beef Steak', price: 28, category: 'Dinner', rating: 5, desc: 'Premium beef steak cooked medium-rare, served with a side of mashed potatoes.', image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&fit=crop' },
    { id: 11, title: 'Sushi Platter', price: 22, category: 'Lunch', rating: 5, desc: 'A variety of 12 fresh sushi pieces including salmon, tuna, and avocado.', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&fit=crop' },
    { id: 12, title: 'Waffles', price: 8, category: 'Breakfast', rating: 4, desc: 'Crispy Belgian waffles topped with cream, chocolate sauce, and fruit.', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&fit=crop' },
]

function ProductDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [qty, setQty] = useState(1)
    const [added, setAdded] = useState(false)

    const { addToCart } = useCart()
    const { toggleWishlist, isWishlisted } = useWishlist()

    const product = ALL_PRODUCTS.find(p => p.id === Number(id))

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-24 font-sans">
                <h2 className="text-2xl font-black mb-4">Product not found</h2>
                <Link to="/shop" className="text-[#ff3131] font-bold hover:underline">← Back to Shop</Link>
            </div>
        )
    }

    function handleAddToCart() {
        for (let i = 0; i < qty; i++) addToCart(product)
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    const related = ALL_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)

    return (
        <div className="bg-white min-h-screen pt-24 pb-20 font-sans">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-[#ff3131] font-bold text-sm mb-8 transition">
                    <FiArrowLeft size={16} /> Back
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    <div className="relative rounded-3xl overflow-hidden bg-gray-50 h-80 md:h-[450px]">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                        {product.discount && (
                            <span className="absolute top-4 left-4 bg-[#FFE100] text-black text-xs font-extrabold px-3 py-1.5 rounded-lg">
                                ⚡ {product.discount}
                            </span>
                        )}
                    </div>

                    <div className="space-y-5">
                        <span className="text-[#ff3131] text-xs font-bold uppercase tracking-widest">{product.category}</span>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight">{product.title}</h1>

                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={14} className={i < product.rating ? 'text-[#fdb714]' : 'text-gray-200'} />
                                ))}
                            </div>
                            <span className="text-gray-400 text-sm font-medium">({product.rating}.0)</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-[#ff3131] font-black text-3xl">${product.price}</span>
                            {product.oldPrice && (
                                <span className="text-gray-300 line-through text-lg">${product.oldPrice}</span>
                            )}
                        </div>

                        <p className="text-gray-500 leading-relaxed text-sm">{product.desc}</p>

                        <div className="flex items-center gap-4">
                            <span className="font-bold text-sm text-gray-600">Quantity:</span>
                            <div className="flex items-center gap-3 border-2 border-gray-100 rounded-xl px-3 py-2">
                                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="text-gray-400 hover:text-[#ff3131] transition">
                                    <FiMinus size={16} />
                                </button>
                                <span className="font-black text-lg w-6 text-center">{qty}</span>
                                <button onClick={() => setQty(q => q + 1)} className="text-gray-400 hover:text-[#ff3131] transition">
                                    <FiPlus size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button onClick={handleAddToCart} className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm transition-all shadow-lg ${added ? 'bg-green-500 text-white' : 'bg-[#ff3131] hover:bg-red-700 text-white'}`}>
                                <FiShoppingBag size={18} />
                                {added ? 'Added! ✓' : `Add to Cart • $${(product.price * qty).toFixed(2)}`}
                            </button>

                            <button onClick={() => toggleWishlist(product)} className="w-14 h-14 border-2 border-gray-100 rounded-2xl flex items-center justify-center hover:border-[#ff3131] transition">
                                <FiHeart size={20} className={isWishlisted(product.id) ? 'text-[#ff3131]' : 'text-gray-400'} style={{ fill: isWishlisted(product.id) ? '#ff3131' : 'none' }} />
                            </button>
                        </div>
                    </div>
                </div>

                {related.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-2xl font-black mb-8">Related Dishes</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {related.map(p => (
                                <Link key={p.id} to={`/shop/${p.id}`} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition">
                                    <img src={p.image} alt={p.title} className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" />
                                    <div className="p-4">
                                        <h4 className="font-bold text-sm uppercase group-hover:text-[#ff3131] transition">{p.title}</h4>
                                        <p className="text-[#ff3131] font-black mt-1">${p.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetailPage