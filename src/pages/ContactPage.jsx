import React, { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi'

function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)
    const [error, setError] = useState('')

    function handleChange(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!form.name || !form.email || !form.message) {
            return setError('Name, email, and message are required')
        }
        setError('')
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-20 font-sans">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <span className="text-[#ff3131] font-bold text-xs uppercase tracking-widest">Get in touch</span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3">Contact Us</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-6">
                        <h2 className="text-2xl font-black">Find Us</h2>

                        {[
                            { icon: <FiMapPin size={20} />, label: 'Address', val: '45 Nizami Street, Baku, Azerbaijan' },
                            { icon: <FiPhone size={20} />, label: 'Phone', val: '+994 12 345 67 89' },
                            { icon: <FiMail size={20} />, label: 'Email', val: 'info@tastenest.az' },
                            { icon: <FiClock size={20} />, label: 'Working Hours', val: 'Monday – Saturday: 10:00 – 23:00' },
                        ].map(item => (
                            <div key={item.label} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
                                <div className="w-12 h-12 bg-[#ff3131] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{item.label}</p>
                                    <p className="font-bold text-gray-800">{item.val}</p>
                                </div>
                            </div>
                        ))}

                        <div className="bg-gray-100 rounded-3xl overflow-hidden h-52 flex items-center justify-center">
                            <div className="text-center text-gray-400">
                                <FiMapPin size={32} className="mx-auto mb-2" />
                                <p className="font-bold text-sm">45 Nizami Street, Baku</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black mb-6">Send a Message</h2>

                        {sent ? (
                            <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-10 text-center">
                                <div className="text-4xl mb-4">✅</div>
                                <h3 className="font-black text-green-700 text-lg mb-2">Message Sent!</h3>
                                <p className="text-green-600 text-sm">We will get back to you as soon as possible.</p>
                                <button onClick={() => setSent(false)} className="mt-6 text-green-700 font-bold text-sm hover:underline">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 block mb-1">Name *</label>
                                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:border-[#ff3131] outline-none transition" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 block mb-1">Email *</label>
                                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:border-[#ff3131] outline-none transition" />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500 block mb-1">Subject</label>
                                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Message Subject" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:border-[#ff3131] outline-none transition" />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-500 block mb-1">Message *</label>
                                    <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Write your message here..." className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-medium focus:border-[#ff3131] outline-none transition resize-none" />
                                </div>

                                {error && <p className="text-[#ff3131] text-xs font-bold">{error}</p>}

                                <button type="submit" className="w-full bg-[#ff3131] hover:bg-red-700 text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 transition shadow-lg">
                                    <FiSend size={16} /> Send
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage