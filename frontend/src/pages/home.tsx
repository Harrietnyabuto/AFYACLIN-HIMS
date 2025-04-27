import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../components/sidebar";
import Header from "../components/ui/header";
import styles from "../styles/home.module.css";

const patients = [
    { name: "Math Nash", gender: "Man" },
    { name: "Bert Kamau", gender: "Man" },
    { name: "Kemi Nandi", gender: "Woman" },
    { name: "Michael Obue", gender: "Man" },
    { name: "Sam Tom", gender: "Man" },
    { name: "Amina Ahmed", gender: "Woman" },
    { name: "Namaru Koi", gender: "Man" },
    { name: "Ayana Jack", gender: "Woman" },
  ];

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
        alt="Afyaclin Logo"
        width={40}
        height={40}
      />
    </div>

    {/* Navigation */}
    <nav className="flex space-x-6 ml-auto float-right"> 
      <a href="#" className="text-gray-700 hover:underline">
        Home
      </a>
      <a href="/home" className="text-gray-700 hover:underline">
        About
      </a>
      
      <a href="/home" className="text-gray-700 hover:underline">
        Contact
      </a>
      <Link
        href="/register"
        className="px-4 py-2 bg-cyan-800 text-white rounded-lg hover:bg-gray-800"
      >
        Register Now
      </Link>
    </nav>
  </div>
</header>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <main className={styles.content}>
          
          {/* Top Bar */}
          <div className={styles.topBar}>
            <input
              type="text"
              placeholder="Search services offered..."
              className={styles.searchInput}
            />
            <div className={styles.rightSection}>
              <span className={styles.doctorName}>Dr. New</span>
              <button className={styles.addPatientButton}>+ Add Patient</button>
            </div>
          </div>

          {/* Filters */}
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <input type="number" className={styles.showInput} placeholder="Show" />
              <select className={styles.statusSelect}>
                <option>Online</option>
                <option>Offline</option>
              </select>
              <input
                type="text"
                className={styles.patientSearch}
                placeholder="Search patient by name or gender"
              />
            </div>

            <div className={styles.genderFilter}>
              <button className={styles.activeFilter}>All</button>
              <button>Men</button>
              <button>Women</button>
              <button>Children</button>
            </div>
          </div>

          {/* Patient Cards */}
          <div className={styles.cardsGrid}>
            {patients.map((patient, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.avatar}></div>
                <h3 className={styles.name}>{patient.name}</h3>
                <p className={styles.gender}>{patient.gender}</p>
                <button className={styles.profileButton}>View Profile</button>
                
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}


export default Home;
