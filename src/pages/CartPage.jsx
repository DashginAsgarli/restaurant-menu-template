import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

function CartPage() {
    const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart, totalPrice } = useCart()
    const [ordered, setOrdered] = useState(false)

    const delivery = totalPrice > 30 ? 0 : 5
    const total = totalPrice + delivery

    function handleOrder() {
        setOrdered(true)
        clearCart()
    }

    if (ordered) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-24 font-sans text-center px-6">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl">🎉</span>
                </div>
                <h2 className="text-3xl font-black mb-3">Order Received!</h2>
                <p className="text-gray-400 font-medium mb-8">We will contact you shortly regarding your order.</p>
                <Link to="/shop" className="bg-[#ff3131] text-white px-10 py-4 rounded-xl font-black hover:bg-red-700 transition">
                    Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-20 font-sans">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <div className="flex items-center gap-4 mb-10">
                    <Link to="/shop" className="flex items-center gap-2 text-gray-400 hover:text-[#ff3131] transition font-bold text-sm">
                        <FiArrowLeft size={16} /> Back to Shop
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight">My Cart</h1>
                    {cartItems.length > 0 && (
                        <span className="bg-gray-100 text-gray-600 font-bold text-sm px-3 py-1 rounded-full">
                            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                        </span>
                    )}
                </div>

                {cartItems.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <FiShoppingBag size={36} className="text-gray-300" />
                        </div>
                        <h3 className="text-xl font-black text-gray-800 mb-2">Your cart is empty</h3>
                        <p className="text-gray-400 text-sm mb-8">Explore our delicious menu items</p>
                        <Link to="/shop" className="bg-[#ff3131] text-white px-10 py-4 rounded-xl font-black hover:bg-red-700 transition">
                            Go to Shop
                        </Link>
                    </div>
                )}

                {cartItems.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4">
                                    <img src={item.image} alt={item.title} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />

                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-gray-800 truncate">{item.title}</h4>
                                        <p className="text-[#ff3131] font-black">${item.price.toFixed(2)}</p>
                                    </div>

                                    <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-3 py-2">
                                        <button onClick={() => decreaseQty(item.id)} className="text-gray-400 hover:text-[#ff3131] transition">
                                            <FiMinus size={14} />
                                        </button>
                                        <span className="font-black text-sm w-5 text-center">{item.quantity}</span>
                                        <button onClick={() => increaseQty(item.id)} className="text-gray-400 hover:text-[#ff3131] transition">
                                            <FiPlus size={14} />
                                        </button>
                                    </div>

                                    <div className="text-right min-w-[60px]">
                                        <span className="font-black text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>

                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-[#ff3131] transition p-1">
                                        <FiTrash2 size={16} />
                                    </button>
                                </div>
                            ))}

                            <button onClick={clearCart} className="text-gray-400 hover:text-[#ff3131] text-sm font-bold transition">
                                Clear Cart
                            </button>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-3xl p-6 sticky top-28 space-y-4">
                                <h3 className="font-black text-lg">Order Summary</h3>

                                <div className="space-y-3 border-b border-gray-200 pb-4">
                                    <div className="flex justify-between text-sm font-medium text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium text-gray-600">
                                        <span>Delivery</span>
                                        <span className={delivery === 0 ? 'text-green-500 font-bold' : ''}>
                                            {delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`}
                                        </span>
                                    </div>
                                    {delivery > 0 && (
                                        <p className="text-xs text-gray-400">Order over $30 for free delivery!</p>
                                    )}
                                </div>

                                <div className="flex justify-between font-black text-lg">
                                    <span>Total</span>
                                    <span className="text-[#ff3131]">${total.toFixed(2)}</span>
                                </div>

                                <div className="flex gap-2">
                                    <input type="text" placeholder="Promo code" className="flex-1 border-2 border-gray-200 rounded-xl px-3 py-2 text-sm font-medium focus:border-[#ff3131] outline-none" />
                                    <button className="bg-gray-800 text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-black transition">
                                        Apply
                                    </button>
                                </div>

                                <button onClick={handleOrder} className="w-full bg-[#ff3131] hover:bg-red-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg">
                                    Place Order • ${total.toFixed(2)}
                                </button>

                                <p className="text-center text-xs text-gray-400">
                                    🔒 Your order is securely encrypted
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage