import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AboutEgg from "../public/svgs/about_egg.svg";
import TopBar from "../public/svgs/top_bar_header.svg";

const about = () => {
	return (
		<div className="text-[#28315A]">
			<Navbar />

			<div className="h-full flex flex-col-reverse md:flex-row items-center w-screen bg-[url(/misc/leaves.png)]">
				<div className="w-[100%] md:w-[55%] mx-auto ">
					<div className="text-center text-6xl pb-6 bg-no-repeat bg-bottom bg-[url(/yellow_title.svg)]">
						About
					</div>
					<div className="mt-[2rem] text-lg mx-4 leading-7 p-3 md:text-xl md:mx-[4rem] md:leading-9 md:p-6 bg-[#28315A]/[0.1] rounded-3xl">
						<p>
							We are an organization dedicated to fostering hacker
							culture and building a computer science community at
							Vanderbilt University! We accomplish this by hosting
							an annual hackathon - a 36 hour software development
							marathon during which attendees think of an idea and
							build it - alongside regular hack nights and study
							nights!
						</p>
					</div>
				</div>
				<div className="mx-auto w-[100%] h-[100%] md:w-[45%] relative center">
					<AboutEgg />
				</div>
			</div>

			<TopBar className="w-screen" />

			<div className="h-full text-center">
				<div className="text-6xl py-5">Meet the Board</div>
				<div className="w-screen">
					<div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] mx-auto pt-10">
						<Image
							className="rounded-[75px] md:w-[40%] max-w-6xl"
							src="/misc/meet_the_board.jpeg"
							alt="VandyHacks Org"
							width={750}
							height={500}
						/>
						<div className="text-2xl text-left font-normal pt-10 md:pt-0 md:pl-20 leading-10 w-[80%] md:w-[60%]">
							<p>
								The VandyHacks Board consists of 40+ organizers
								who are committed to creating learning
								experiences that are accessible and applicable
								to all. Meet the team below!
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default about;
