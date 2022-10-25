const themeMode = {
    current: null,
    
    set: (theme) => {
        if (theme ===  'dark_mode') {
            $('body').addClass('dark_mode');
            cookie.set('themeMode', 'dark_mode')
        } else if (theme === 'light_mode') {
            $('body').removeClass('dark_mode');
            cookie.set('themeMode', 'light_mode')
        }
        themeMode.current = theme;
    },

    toggle: () => {
        if (themeMode.current === 'dark_mode') {
            themeMode.set('light_mode');
        } else if (themeMode.current === 'light_mode') {
            themeMode.set('dark_mode');
        }
    }
}

if (!cookie.isSet('themeMode')){
    cookie.set('themeMode', 'dark_mode');
    themeMode.current = 'dark_mode';
} else {
    themeMode.current = cookie.get('themeMode');
}
setThemeMode(themeMode.current);