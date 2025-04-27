import Image from "next/image";
import Link from "next/link";
import React from "react"

export default function Home() {
  return (
    <section className="relative bg-gray-100">
    
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full z-10 h-20">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="/IMAS LOGO.jpg" 
              alt="afyaclini Logo"
              width={40}
              height={40}
            />
            
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link href="/home" className="text-gray-900 hover:underline">Home</Link>
                       

            <a href="/home" className="text-gray-900 hover:underline">
              About
            </a>
                        
            <Link href="/login" className="text-gray-900 hover:underline">
                Login
            </Link>

            <Link href="/register" className="px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-gray-800">
                Register Now            
            </Link>
          </nav>
          
              
      </div>
      <div className="text-center mb-6 bg-white">
            <h1 className="text-3xl font-bold text-gray-800">
                Smart Health. Simple Access.
            </h1>
            </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-white mt-4 h-[700px] w-full">
        {/* Background Image */}
        <div className="relative bg-white h-[600px] w-full">
          <Image
            src="/bg1.avif"
            alt="Afyaclin Health Centre"
            layout="fill"
            
           
            quality={100}
            className="rounded-l-lg"
          />
        </div>

        {/* Hero Content */}
        <div className="items-start-4 absolute inset-0 flex flex-col justify-center   text-white px-6">
          <h2 className="items-start text-3xl font-bold md:text-4xl ">
          WELCOME TO AFYACLIN  <br />
          — your all-in-one healthcare platform —
          </h2>
          <hr className="my-4 w-1/2 border-gray-300" />
          <div className="flex flex-col items-start space-y-4">
            <div className="text-lg font-semibold">
              <p></p>
              <p className="flex items-start space-x-2">
                <span className="material-icons"></span>
                <span></span>
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="/login">
                <button className="px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-500">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section> 
  );
}