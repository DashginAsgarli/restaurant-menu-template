import React from 'react';
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

function CartDrawer({ onClose }) {
    const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart, totalPrice } = useCart();

    return (
        <>
            <div className="fixed inset-0 z-200 bg-black/50" onClick={onClose} />

            <div className="fixed top-0 right-0 h-full w-full max-w-104 bg-white z-210 shadow-2xl flex flex-col">

                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <FiShoppingBag size={22} className="text-[#ff3131]" />
                        <h2 className="font-black text-lg tracking-tight">My Cart</h2>
                        {cartItems.length > 0 && (
                            <span className="bg-[#ff3131] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700 transition">
                        <FiX size={20} />
                    </button>
                </div>

                {cartItems.length === 0 && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <FiShoppingBag size={32} className="text-gray-300" />
                        </div>
                        <h3 className="font-black text-gray-800 mb-2">Your cart is empty</h3>
                        <p className="text-gray-400 text-sm">Add some delicious items from the menu</p>
                        <button onClick={onClose} className="mt-6 bg-[#ff3131] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition">
                            View Menu
                        </button>
                    </div>
                )}

                {cartItems.length > 0 && (
                    <>
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-3">

                                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />

                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-sm text-gray-800 truncate">{item.title}</h4>
                                        <p className="text-[#ff3131] font-black text-sm">${item.price.toFixed(2)}</p>

                                        <div className="flex items-center gap-2 mt-2">
                                            <button onClick={() => decreaseQty(item.id)} className="w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#ff3131] hover:text-[#ff3131] transition">
                                                <FiMinus size={12} />
                                            </button>
                                            <span className="font-black text-sm w-5 text-center">{item.quantity}</span>
                                            <button onClick={() => increaseQty(item.id)} className="w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#ff3131] hover:text-[#ff3131] transition">
                                                <FiPlus size={12} />
                                            </button>
                                        </div>
                                    </div>

                                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-300 hover:text-[#ff3131] transition shrink-0">
                                        <FiTrash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 border-t border-gray-100 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 font-medium">Total</span>
                                <span className="font-black text-xl text-[#ff3131]">${totalPrice.toFixed(2)}</span>
                            </div>

                            <button onClick={() => { alert('Order received! 🎉\nWe will contact you shortly.'); clearCart(); onClose(); }} className="w-full bg-[#ff3131] hover:bg-red-700 text-white py-4 rounded-xl font-black text-sm transition-all shadow-lg">
                                Checkout • ${totalPrice.toFixed(2)}
                            </button>

                            <button onClick={clearCart} className="w-full text-gray-400 hover:text-gray-600 text-xs font-bold transition">
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default CartDrawer;