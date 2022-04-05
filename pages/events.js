import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutEgg from "../public/svgs/about_egg.svg";
import TopBar from "../public/svgs/top_bar_header.svg";

const events = () => {
	return (
		<div>
			<Navbar />

			<div className="h-full flex flex-col-reverse md:flex-row items-center w-screen bg-contain bg-center bg-[url(/misc/leaves.png)]">
				<div className="w-[100%] md:w-[55%] mx-auto ">
					<div className="text-center text-6xl pb-6 bg-no-repeat bg-bottom bg-[url(/yellow_title.svg)]">
						Events
					</div>
					<div className="mt-[2rem] text-lg mx-4 leading-7 p-3 md:text-xl md:mx-[4rem] md:leading-9 md:p-6 md:bg-[#28315A]/[0.1] rounded-3xl">
						<p>
							VandyHacks isnt just an annual event, its a way of
							life. In addition to our hackathon VandyHacks holds
							mentorship programs, programming workshops, and
							community events throughout the academic year!
						</p>
					</div>
				</div>
				<div className="mx-auto w-[100%] h-[100%] md:w-[45%] relative center">
					<AboutEgg />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default events;
