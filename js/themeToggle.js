let themeMode = null;

function setThemeMode(theme) {
    if (theme ===  'dark_mode') {
        $('body').addClass('dark_mode');
    } else if (theme === 'light_mode') {
        $('body').removeClass('dark_mode');
    }
    themeMode = theme;
}

function toggleThemeMode() {
    if (themeMode === 'dark_mode') {
        setThemeMode('light_mode');
    } else if (themeMode === 'light_mode') {
        setThemeMode('dark_mode');
    }
}

if (!isCookieSet('themeMode')){
    setCookie('themeMode', 'dark_mode');
    themeMode = 'dark_mode';
} else {
    themeMode = getCookie('themeMode');
}
setThemeMode(themeMode);