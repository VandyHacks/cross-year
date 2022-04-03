import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Logo */}
      <div className="h-[100vh] bg-[url('../images/landing_section_one.svg')] text-blue-600"></div>

      <Footer />
    </div>
  );
};

export default Home;
