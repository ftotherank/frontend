import React, { useContext, useEffect, useState } from 'react';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa"; // Import FaShoppingCart separately
import { Link } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProider';

const Navbar = ({ cart = [], setCart }) => { // Accept setCart as a prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to toggle cart dropdown

  const { user } = useContext(AuthContext);
  console.log(user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: '/' },
    { link: "About", path: '/about' },
    { link: "Shop", path: '/shop' },
    { link: "Sell Your Book", path: '/admin/dashboard' },
    { link: "Blog", path: '/blog' }
  ];

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate total items in the cart
  const totalPrice = cart.reduce((sum, item) => sum + item.book_price * item.quantity, 0); // Calculate total price

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-purple-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          {/* Logo */}
          <Link to="/" className='text-2xl font-bold text-black-700 flex items-center gap-2'>
            <FaBlog className='inline-block' />BookHaven
          </Link>

          {/* Nav items for large devices */}
          <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({ link, path }) => (
                <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                  {link}
                </Link>
              ))
            }
          </ul>

          {/* Shopping cart icon */}
          <div className="relative hidden md:block">
            <FaShoppingCart
              className="text-2xl cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            />
            {totalItems > 0 && ( // Display total items in the cart
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
            {showCart && (
              <div className="absolute right-0 top-10 bg-white shadow-lg p-4 rounded w-64">
                <h2 className="text-lg font-bold mb-2">Cart Items</h2>
                {cart.length === 0 ? (
                  <p className="text-gray-500">No items in the cart</p>
                ) : (
                  <ul>
                    {cart.map((item) => (
                      <li key={item._id} className="border-b py-2 flex justify-between items-center">
                        <div className="flex-1">
                          <p className="font-semibold">{item.book_title}</p>
                          <p className="text-sm text-gray-500">Ksh{item.book_price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            className="bg-gray-200 px-2 rounded"
                            onClick={() => decreaseQuantity(item._id)}
                          >
                            -
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button
                            className="bg-gray-200 px-2 rounded"
                            onClick={() => increaseQuantity(item._id)}
                          >
                            +
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {cart.length > 0 && (
                  <div className="mt-4">
                    <p className="font-bold">Total Price: Ksh{totalPrice.toFixed(2)}</p>
                    <Link to="/checkout">
                      <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-2 w-full hover:bg-black">
                        Checkout
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Menu button for mobile devices */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {
                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
              }
            </button>
          </div>
        </div>

        {/* Nav items for small devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {
            navItems.map(({ link, path }) => (
              <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>
                {link}
              </Link>
            ))
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;