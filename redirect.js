        const urls = [
            "003.html",
            "002.html",
            "001.html"
        ];

        const randomUrl = urls[Math.floor(Math.random() * urls.length)];

        window.location.href = randomUrl;