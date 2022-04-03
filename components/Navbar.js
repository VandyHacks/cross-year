import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="bg-[#28315a] sticky flex justify-end shadow-sm ">
			<div className="inline-block mr-auto w-[40px] h-[40px]">
				<Link href="/">
					<div className="m-2 w-[30px] h-[30px]">
						<Image
							alt="Logo"
							src="/logo.png"
							width={100}
							height={100}
						/>
					</div>
				</Link>
			</div>
			<div className="text-white m-[20px] hover:underline" id="about">
				<Link href="/about">
					<a>About Us</a>
				</Link>
			</div>
			<div className="text-white m-[20px] hover:underline" id="events">
				<Link href="/events">
					<a>Events</a>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
