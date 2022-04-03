import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const about = () => {
	return (
		<div>
			<Navbar />

			<div className="flex flex-col justify-center md:flex-row-reverse bg-[#b0cee3]">
				<div className="h-full w-[20rem] mx-auto">
					<Image
						className="mx-auto"
						alt="About Us"
						src="/about_egg.svg"
						height={400}
						width={400}
					/>
				</div>
				<div className="w-[80%] mx-auto">
					<div className="text-center text-5xl py-10 bg-no-repeat bg-bottom bg-[url(/yellow_title.svg)]">
						Our Story
					</div>
					<div
						className="pt-10"
						// style={{width: "65%", lineHeight: "170%", padding: "20px"}}
						// width: 65%; line-height: 170%; padding: 20px; background-color:rgba(40, 49, 90, 0.1); border-radius: 25px;
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed pharetra nulla ex, nec blandit sapien laoreet a.
						Mauris a tellus egestas lacus vulputate venenatis in et
						elit. Class aptent taciti sociosqu ad litora torquent
						per conubia nostra, per inceptos himenaeos. Cras
						pharetra vitae nisl vel varius. Pellentesque dapibus
						mollis nisi, vel egestas tortor aliquet id. Nunc a
						commodo elit. Etiam semper tellus ligula, eget
						sollicitudin neque egestas vitae.
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default about;
