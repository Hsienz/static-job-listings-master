/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,svelte}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Desaturated_Dark_Cyan: "hsl(180, 29%, 50%)",

				// Neutral

				Light_Grayish_Cyan_Background: "hsl(180, 52%, 96%)",
				Light_Grayish_Cyan_Filter_Tablets: "hsl(180, 31%, 95%)",
				Dark_Grayish_Cyan: "hsl(180, 8%, 52%)",
				Very_Dark_Grayish_Cyan: "hsl(180, 14%, 20%)",
			},
      fontFamily:{
        sans: ['League Spartan', 'sans-serif']
      }
		},
    
	},
	plugins: [],
};
