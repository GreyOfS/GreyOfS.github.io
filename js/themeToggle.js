const themeMode = {
    current: null,
    
    set: (theme) => {
        if (theme ===  'dark_mode') {
            $('body').addClass('dark_mode');
            cookie.set('themeMode', 'dark_mode')
            themeMode.setLogoAt('light');
        } else if (theme === 'light_mode') {
            $('body').removeClass('dark_mode');
            cookie.set('themeMode', 'light_mode')
            themeMode.setLogoAt('dark');
        }
        themeMode.current = theme;
    },

    toggle: () => {
        if (themeMode.current === 'dark_mode') {
            themeMode.set('light_mode');
        } else if (themeMode.current === 'light_mode') {
            themeMode.set('dark_mode');
        }
    },

    setLogoAt: (mode) => {
        const logo = document.querySelector('#theme > span');
        if (mode === 'dark') {
            logo.classList.remove('mdi-weather-sunny');
            logo.classList.add('mdi-weather-night');
        } else if (mode === 'light') {
            logo.classList.remove('mdi-weather-night');
            logo.classList.add('mdi-weather-sunny');
        }
    },

    init: () => {
        if (!cookie.isSet('themeMode')){
            cookie.set('themeMode', 'dark_mode');
            themeMode.current = 'dark_mode';
        } else {
            themeMode.current = cookie.get('themeMode');
        }
        themeMode.set(themeMode.current)
    }
    
}

document.addEventListener('DOMContentLoaded', themeMode.init);