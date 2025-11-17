import React, { useState } from 'react'
import { CreditCard, CheckCircle2, Loader2 } from 'lucide-react'

const TicketForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const price = 10
  const total = (price * quantity).toFixed(2)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, quantity, notes })
      })

      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d.detail || 'Failed to create order')
      }
      const data = await res.json()
      setSuccess(data)
      setName('')
      setEmail('')
      setQuantity(1)
      setNotes('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="tickets" className="relative bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      <div className="relative max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white/90 backdrop-blur border rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-3">
            <CreditCard className="text-red-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tickets — $10</h2>
          </div>
          <p className="mt-2 text-gray-600">Secure your spot. Limited capacity for an intimate tasting experience.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
                <p className="mt-1 text-xs text-gray-500">Max 10 per order</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total (AUD)</label>
                <input
                  readOnly
                  value={total}
                  className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Notes (optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                placeholder="Let us know dietary needs or anything else"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex justify-center items-center gap-2 rounded-lg bg-red-600 text-white px-6 py-3 font-semibold shadow hover:bg-red-700 disabled:opacity-60"
            >
              {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Processing…</>) : `Buy ${quantity} ticket${quantity>1?'s':''} – $${total}`}
            </button>

            {success && (
              <div className="mt-4 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                <CheckCircle2 className="mt-0.5" />
                <div>
                  <div className="font-semibold">Thank you! Your order is confirmed.</div>
                  <div className="text-sm">Reference: <span className="font-mono">{success.order_id}</span>. Total paid: ${'{'}success.total_amount{'}'} AUD.</div>
                </div>
              </div>
            )}
            {error && (
              <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default TicketForm
