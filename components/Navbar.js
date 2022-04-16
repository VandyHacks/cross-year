import React from "react";
import Image from "next/image";
import Link from "next/link";
import CollapsingNav from "./CollapsingNav";

const Navbar = () => {
	// TODO Make text color #FBF1BC and underlined when selected
	return (
		<div className="sticky top-0 z-50 bg-[#28315a] border-b-2 border-black drop-shadow-xl filter shadow-md flex justify-end text-xl px-3  font-semibold text-white">
			<div className="inline-block ml-[40px] mr-auto mt-3 w-[40px] h-[40px]">
				<Link href="/">
					<Image
						className="hover:cursor-pointer"
						alt="Logo"
						src="/logos/small_logo.png"
						width={100}
						height={100}
					/>
				</Link>
			</div>
			<div
				className="invisible sm:visible text-base m-[20px] hover:underline"
				id="about"
			>
				<Link href="/about">
					<a>About Us</a>
				</Link>
			</div>
			<div
				className="invisible sm:visible text-base m-[20px] hover:underline"
				id="events"
			>
				<Link href="/events">
					<a>Events</a>
				</Link>
			</div>
			<CollapsingNav />
		</div>
	);
};

export default Navbar;
