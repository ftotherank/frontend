import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";
import Navbar from "../Components/Navbar"; // Adjust the import path if necessary
import BookCards from "../Components/BookCards"; // Import BookCards component

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState(() => {
    // Retrieve cart from localStorage or initialize as an empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [expandedBookId, setExpandedBookId] = useState(null); // State to track expanded description

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      // Check if the book already exists in the cart
      const existingBook = prevCart.find((item) => item._id === book._id);
      if (existingBook) {
        // If the book exists, increase its quantity
        return prevCart.map((item) =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the book does not exist, add it as a new entry
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  const toggleDescription = (bookId) => {
    setExpandedBookId((prevId) => (prevId === bookId ? null : bookId));
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <Navbar cart={cart} setCart={setCart} />
      <h1 className='text-5xl my-12 font-bold text-center'>All Books are here</h1>
      <BookCards books={books} headline="Featured Books" addToCart={addToCart} />
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map(book => (
          <Card className='shadow-2xl' key={book._id}>
            <img src={book.image_url} alt="" className='h-96 my-5 mx-5' />
            <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white mx-3">
              <p>{book.book_title}</p>
            </h5>
            <p
              className="font-normal text-gray-500 dark:text-gray-400 mx-3"
              style={{ height: expandedBookId === book._id ? 'auto' : '4rem', overflow: 'hidden' }}
            >
              {book.book_description}
            </p>
            <button
              className='text-blue-700 font-semibold mx-3 my-2'
              onClick={() => toggleDescription(book._id)}
            >
              {expandedBookId === book._id ? 'Read Less' : 'Read More'}
            </button>
            <button
              className='bg-blue-700 font-semibold text-white py-2 rounded mx-3 my-3 hover:bg-black'
              onClick={() => addToCart(book)}
            >
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;