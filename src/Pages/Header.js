// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
//import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>MySite</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #333;
          color: white;
        }
        .logo a {
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: bold;
        }
        nav ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        nav a {
          color: white;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};

export default Header;
