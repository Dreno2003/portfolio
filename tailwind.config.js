module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': {
                    100: '#0FA5E9',
                    200: '#0B1120', //bg color
                    300: '#1e293b', //card color    
                    400: '#10172a'
                },
                'deviconcolor': {
                    100: 'rgba(227, 31, 113, 0.2)',
                    200: 'rgba(136, 56, 180, 0.2)',
                    300: '#e0e016',
                    400: 'rgb(172 187 48 / 20%)',
                },
                'navbg': {
                    100: '#011e2bd1'
                },
            },

            'width': {
                '910': '21.8rem',
                '920': '44%',
                '930': '49%',
                '940': '27.6%',
                '950': '25.8em',
                '960': '46em'
            },

            'height': {
                '888': '35.8em',
                '889': '20em'
            },

            'borderColor': {
                'primary': '#0FA5E9',
            },

            screens: {
                '4lg': '1230px',
                '5lg': '900px',
                '6lg': '820px',
                '7lg': '1240px',
                '8lg': '455px'
            },

            fontSize: {
                // sm: ['14px', '20px'],
                // base: ['16px', '24px'],
                // lg: ['20px', '28px'],
                // xl: ['24px', '32px'],

            }

        },
    },
    plugins: [],
}