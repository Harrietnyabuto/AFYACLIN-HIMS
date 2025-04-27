import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../components/sidebar";
import Header from "../components/ui/header";
import styles from "../styles/home.module.css"; 

function Home() {
  return (
    <div className={styles.homePageContainer}>
      {/* Header */}
      <header className={styles.header}>
  <div className="container mx-auto flex items-center justify-between px-6 py-4">
    {/* Logo */}
    <div className="flex float-left items-center space-x-4">
      <Image
        src="/images/IMAS LOGO.jpg" 
        alt="IMAS Logo"
        width={40}
        height={40}
      />
    </div>

    {/* Navigation */}
    <nav className="flex space-x-6 ml-auto float-right"> 
      <a href="#browse" className="text-gray-700 hover:underline">
        Home
      </a>
      <a href="#browse" className="text-gray-700 hover:underline">
        About
      </a>
      
      <a href="#browse" className="text-gray-700 hover:underline">
        Contact
      </a>
      <Link
        href="register"
        className="px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-gray-800"
      >
        Register Now
      </Link>
    </nav>
  </div>
</header>

      {/* Main Content */}
      <div className={styles.mainContent}>
        
        <div >
          <Sidebar />
        </div>

        
        <main className={styles.content}>
          <h1 className="text-2xl font-bold mb-4">Welcome to the New Page!</h1>
          <p>This is the main content area of the page.</p>
        </main>
      </div>
    </div>
  );
}

export default Home;
