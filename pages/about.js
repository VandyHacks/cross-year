import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const about = () => {
	return (
		<div>
			<Navbar />

			<div className="h-[40rem] flex flex-col-reverse md:flex-row justify-center w-screen bg-[#b0cee3]">
				<div className="w-[100%] md:w-[55%] mx-auto text-[#28315A]">
					<div className="text-center text-6xl py-10 bg-no-repeat bg-bottom bg-[url(/yellow_title.svg)]">
						About
					</div>
					<div className="mt-[2rem] mx-[4rem] p-6 bg-[#28315A]/[0.1] rounded-3xl">
						<p>
							VandyHacks is an organization dedicated to fostering
							hacker culture and building a computer science
							community at Vanderbilt University! We accomplish
							this by hosting an annual hackathon - a 36 hour
							software development marathon during which attendees
							think of an idea and build it - alongside regular
							hack nights and study nights. The VandyHacks board
							consists of organizers who spend months planning
							these events in several different areas: Content,
							Design, Development, Hacker Experience, Marketing,
							Operations, and Sponsorship.
						</p>
					</div>
				</div>
				<div className="mx-auto w-[500px] h-[500px] md:w-[45%] md:h-full relative">
					<Image
						alt="About Us"
						src="/svgs/about_egg.svg"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default about;
