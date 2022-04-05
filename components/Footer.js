import React from "react";
import Image from "next/image";
import FooterSquiggle from "../public/svgs/footer_squiggle.svg";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitchIcon from "./icons/TwitchIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";

const Footer = () => {
	return (
		<div className="w-full mt-10">
			<FooterSquiggle className="mb-[-5px]" />
			<div className="flex flex-row-reverse md:flex-row justify-center content-center md:justify-between px-[2rem] pt-[2rem] pb-[3rem] text-white bg-[#28315A]">
				<div className="flex flex-col">
					<p className="text-[3rem]">Contact Us</p>
					<p>info [at] vandyhacks.org</p>
					<p>sponsorship [at] vandyhacks.org</p>
					<div className="flex flex-row pt-3">
						<FacebookIcon />
						<InstagramIcon />
						<TwitchIcon />
						<YoutubeIcon />
						<GithubIcon />
						<TwitterIcon />
					</div>
				</div>
				<div className="flex flex-col justify-center items-center pr-5">
					<Image
						src="/logos/medium_logo.png"
						alt="Logo"
						width={150}
						height={140}
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
