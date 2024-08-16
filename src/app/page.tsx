
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoanApplicationForm from "@/components/landingpage/loan";
import moneyboy from "../../public/images/moneyboy1.jpg";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 bg-opacity-80 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold">Bapele</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#how-it-works">
                  <span className="hover:text-gray-200">How It Works</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-gray-200">About</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-gray-200">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-gray-200">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Link href="/become-a-lender">
              <span className=" text-white-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                Become a Lender
              </span>
            </Link>
            <button
              className="text-white-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-900 transition duration-300 relative"
              onClick={() => setShowModal(true)}
            >
              Become a Borrower
              <svg
                className="absolute right-2 top-2"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 6L0 0H10L5 6Z" fill="#1A1D23" />
              </svg>
            </button>
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white shadow-lg p-4 w-48 relative">
                  <ul className="text-gray-900">
                    <li>
                      <Link href="/borrower/schema-loan">
                        <span className="block py-2 hover:bg-gray-100">
                          Schema Loan
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/borrower/business-loan">
                        <span className="block py-2 hover:bg-gray-100">
                          Business Loan
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/borrower/civil-servant-loan">
                        <span className="block py-2 hover:bg-gray-100">
                          Civil Servant Loan
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <button
                    className="absolute top-2 right-2"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 10L15 15M10 10L5 15"
                        stroke="#1A1D23"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            <Link href="/invest">
              <span className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                Invest
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src={moneyboy}
              alt="Financial background"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
          </div>
          <div className="container mx-auto flex justify-between items-center relative z-10">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold mb-4">
                Smart Financial Solutions
              </h1>
              <p className="text-lg mb-8">
                Whether you're looking to borrow, lend, or invest, we provide
                tailored financial services to meet your goals.
              </p>
              <Link href="#how-it-works">
                <span className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                  Learn More
                </span>
              </Link>
            </div>
            <div className="w-1/2">
              <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                <LoanApplicationForm />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">1. Choose Your Path</h3>
                <p className="text-gray-700 mb-4">
                  Decide whether you want to borrow, lend, or invest. Our
                  platform caters to all financial needs.
                </p>
              </div>
              <div className="bg-white rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">2. Complete Your Profile</h3>
                <p className="text-gray-700 mb-4">
                  Provide necessary information and verify your identity to
                  ensure a secure and personalized experience.
                </p>
              </div>
              <div className="bg-white rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">3. Get Matched</h3>
                <p className="text-gray-700 mb-4">
                  Our algorithm matches borrowers with lenders or investors
                  based on your criteria and risk profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Borrowing</h3>
                <p className="text-gray-700 mb-4">
                  Access competitive rates for personal, business, or mortgage
                  loans tailored to your needs.
                </p>
                <Link href="/borrowing">
                  <span className="text-blue-600 hover:text-blue-700">
                    Learn More
                  </span>
                </Link>
              </div>
              <div className="bg-gray-100 rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Lending</h3>
                <p className="text-gray-700 mb-4">
                  Put your capital to work by lending to verified borrowers and
                  earn attractive returns.
                </p>
                <Link href="/lending">
                  <span className="text-blue-600 hover:text-blue-700">
                    Learn More
                  </span>
                </Link>
              </div>
              <div className="bg-gray-100 rounded-md shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Investing</h3>
                <p className="text-gray-700 mb-4">
                  Diversify your portfolio with our range of investment options,
                  from peer-to-peer lending to managed funds.
                </p>
                <Link href="/investing">
                  <span className="text-blue-600 hover:text-blue-700">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MoneyWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
