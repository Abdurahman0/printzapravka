/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				glowScale: 'glowScale 2s infinite',
				'pulse-shadow': 'pulse-shadow 2s infinite',
				'scale-rotate': 'scale-rotate 2s infinite',
			},
			keyframes: {
				glowScale: {
					'0%, 100%': {
						transform: 'scale(1)',
						boxShadow: '0 0 10px rgba(0, 123, 255, 0.6)',
					},
					'50%': {
						transform: 'scale(1.1)',
						boxShadow: '0 0 30px rgba(0, 123, 255, 1)',
					},
					'pulse-shadow': {
						'0%, 100%': { boxShadow: '0 0 0 rgba(0, 0, 0, 0.5)' },
						'50%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' },
					},
					'scale-rotate': {
						'0%': { transform: 'scale(1) rotate(0deg)' },
						'50%': { transform: 'scale(1.2) rotate(180deg)' },
						'100%': { transform: 'scale(1) rotate(360deg)' },
					},
					textShadow: {
						custom:
							'1px 1px 2px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.8), 1px -1px 2px rgba(0, 0, 0, 0.8), -1px 1px 2px rgba(0, 0, 0, 0.8)',
					},
				},
			},
			plugins: [
				function ({ addUtilities }) {
					addUtilities({
						'.text-shadow-custom': {
							textShadow:
								'1px 1px 2px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.8), 1px -1px 2px rgba(0, 0, 0, 0.8), -1px 1px 2px rgba(0, 0, 0, 0.8)',
						},
					})
				},
			],
		},
	},
}
