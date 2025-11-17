import React, { useState } from 'react'

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
    <section id="tickets" className="bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tickets — $10</h2>
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
              className="mt-2 inline-flex justify-center items-center rounded-lg bg-red-600 text-white px-6 py-3 font-semibold shadow hover:bg-red-700 disabled:opacity-60"
            >
              {loading ? 'Processing…' : `Buy ${quantity} ticket${quantity>1?'s':''} – $${total}`}
            </button>

            {success && (
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                Thank you! Your order is confirmed. Reference: <span className="font-mono">{success.order_id}</span>. Total paid: ${'{'}success.total_amount{'}'} AUD.
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
