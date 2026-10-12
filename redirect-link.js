        const urls = [
            "003.html",
            "002.html",
            "001.html"
        ];

        const randomUrl = urls[Math.floor(Math.random() * urls.length)];

        document.getElementById("fallback-link").href = randomUrl;
        document.getElementById("fallback-link2").href = randomUrl;