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
			<div className="h-[100vh] -mt-12 md:mt-0 bg-[url('/svgs/landing_section_one.svg')]">
				<div className="mx-auto h-[200px] w-[250px] pt-64 md:w-[342px] md:h-[285px] md:pt-32">
					<Image
						src="/logos/full_logo.png"
						width={342}
						height={285}
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
