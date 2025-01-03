/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	'./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)', 
			  gradientStart: "#0f172a",
			  gradientEnd: "#1e293b",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  backgroundImage: {
			'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
