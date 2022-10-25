const cookie = {
    set: (cookieName, value, expires = 7300 /*expires = 20ans par défault*/) => {
        const expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + (expires*24*60*60*1000));
        document.cookie = `${cookieName}=${value};expires=${expireDate.toUTCString()};path=/`;
    },

    get: (cookieName) => {
        let name = `${cookieName}=`;
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookieArray = decodedCookie.split(';');
        for (c of cookieArray) {
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    },

    isSet: (cookieName) => {
        if (cookie.get(cookieName) != '') {
            return true;
        } else {
            return false;
        }
    }
}