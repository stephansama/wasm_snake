import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

export default {
	darkMode: ["selector", ".mocha"],
	content: ["./client/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		debugScreens: {
			style: {
				color: "whitesmoke",
				padding: "10px",
				backdropFilter: "blur(8px)",
				backgroundColor: "rgba(0,0,0,.4)",
			},
		},
	},
	plugins: [
		// https://github.com/catppuccin/tailwindcss
		catppuccin({ defaultFlavour: "latte" }),
		// https://github.com/jorenvanhee/tailwindcss-debug-screens
		require("tailwindcss-debug-screens"),
	],
} satisfies Config;
