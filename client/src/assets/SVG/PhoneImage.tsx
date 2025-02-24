const PhoneImage = () => {
	return (
		<svg
			width="680"
			height="956"
			viewBox="0 0 680 956"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="HeroVariant__StyledMobileImage-sc-1o7093z-6 kGJGpi"
		>
			<circle cx="340" cy="428" r="340" fill="#F1F5FE"></circle>
			<g filter="url(#prefix__filter0_dd)">
				<path
					d="M481 10H198c-32.032 0-58 25.968-58 58v720c0 32.032 25.968 58 58 58h283c32.032 0 58-25.968 58-58V68c0-32.032-25.968-58-58-58z"
					fill="url(#prefix__paint0_linear)"
				></path>
				<path
					d="M472.489 22H206.511C176.406 22 152 47.222 152 78.335v699.33C152 808.778 176.406 834 206.511 834h265.978C502.594 834 527 808.778 527 777.665V78.335C527 47.222 502.594 22 472.489 22z"
					fill="url(#prefix__img1)"
				></path>
				<g filter="url(#prefix__filter1_f)">
					<path
						d="M213.5 15.5c-38.883 0-67.5 23.943-67.5 61.343V783.5c0 20.5 11.5 57 65.5 57"
						stroke="url(#prefix__paint1_radial)"
					></path>
				</g>
				<g filter="url(#prefix__filter2_f)">
					<path
						d="M465.5 15c38.883 0 67.5 23.943 67.5 61.343V783c0 20.5-11.5 57-65.5 57"
						stroke="url(#prefix__paint2_radial)"
					></path>
				</g>
			</g>
			<defs>
				<filter
					id="prefix__filter0_dd"
					x="48"
					y="0"
					width="519"
					height="956"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
					<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
					<feOffset dx="-32" dy="50"></feOffset>
					<feGaussianBlur stdDeviation="30"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.25 0"></feColorMatrix>
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
					<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
					<feOffset dy="15"></feOffset>
					<feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0.1 0"></feColorMatrix>
					<feBlend in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
					<feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend>
				</filter>
				<filter
					id="prefix__filter1_f"
					x="143.5"
					y="13"
					width="72"
					height="830"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
					<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur"></feGaussianBlur>
				</filter>
				<filter
					id="prefix__filter2_f"
					x="463.5"
					y="12.5"
					width="72"
					height="830"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
					<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur"></feGaussianBlur>
				</filter>
				<radialGradient
					id="prefix__paint1_radial"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(286.75008 212.24974 -632.54832 854.57482 179.75 390.25)"
				>
					<stop stop-opacity="0.2"></stop>
					<stop offset="1" stop-opacity="0"></stop>
				</radialGradient>
				<radialGradient
					id="prefix__paint2_radial"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(0 756.5 -2254.52 0 499 131)"
				>
					<stop stop-opacity="0"></stop>
					<stop offset="0.453" stop-opacity="0.2"></stop>
					<stop offset="1" stop-opacity="0"></stop>
				</radialGradient>
				<linearGradient
					id="prefix__paint0_linear"
					x1="539"
					y1="654"
					x2="-169.5"
					y2="799.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F2F2F3"></stop>
					<stop offset="0.64" stop-color="#CACED2"></stop>
				</linearGradient>
				<pattern id="prefix__img1" patternUnits="objectBoundingBox" width="1" height="1" viewBox="0 0 375 812">
					<image
						href="https://assets.coinbase.com/assets/portfolio.352f1ebd5622fb93068757ca3a33b88b.svg"
						width="375"
						height="812"
					></image>
				</pattern>
			</defs>
		</svg>
	);
};

export default PhoneImage;
