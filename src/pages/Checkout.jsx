import React, { useState } from 'react';

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
    }
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }
    if (!name.trim()) {
      newErrors.name = 'Cardholder name is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      // Simulate payment gateway API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Payment successful!');
    } catch (error) {
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
      <form className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded" onSubmit={handlePayment}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Cardholder Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Card Number</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Expiry Date</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
          {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">CVV</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full hover:bg-black"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
