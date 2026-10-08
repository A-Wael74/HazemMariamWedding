const weddingConfig = {

    /* =====================================================
       COUPLE
       ===================================================== */

    couple: {
        bride: "مريم",
        groom: "حازم"
    },


    /* =====================================================
       WEDDING INFORMATION
       ===================================================== */

    wedding: {

        // Used internally for countdown
        // Format: YYYY-MM-DD
        date: "2026-11-06",

        // Time used internally for countdown
        // 20:00 = 8 PM
        countdownTime: "20:00:00",

        // What guests see
        displayDate: "٦ نوفمبر ٢٠٢٦",

        time: "٨:٠٠ مساءً",

        // Change later
        venue: "اكتب مكان الحفل هنا",

        // Paste Google Maps link here.
        // Leave "" to hide the location button.
        locationUrl: ""
    },


    /* =====================================================
       WEBSITE TEXT
       ===================================================== */

    text: {

        // Envelope + hero
        opening: "دعوة زفاف",

        openButton: "افتح الدعوة",


        // Welcome page
        welcomeTitle: "بكل الحب",

        welcome:
            "بكل الحب والسعادة، يسعدنا أن نشارككم أجمل لحظات حياتنا.",


        // Story page
        storyTitle: "حكايتنا",

        story:
            "هنا يمكنك كتابة قصة قصيرة أو بعض الكلمات المميزة عنكما.",


        // Wedding details
        detailsTitle: "موعدنا",


        // Countdown
        countdownTitle: "باقي على فرحتنا",


        // Gallery
        galleryTitle: "لحظاتنا",


        // Location
        locationTitle: "مكان الحفل",

        locationButton: "الموقع على الخريطة",


        // Final page
        closing:
            "وجودكم معنا يجعل فرحتنا أجمل 🤍"
    },


    /* =====================================================
       GALLERY PHOTOS
       ===================================================== */

    images: {

        gallery: [
            "assets/images/bckblur.jpeg",
            "assets/images/photo2.jpg",
            "assets/images/photo3.jpg",
            "assets/images/photo4.jpg",
            "assets/images/photo5.jpg",
            "assets/images/photo6.jpg",
            "assets/images/photo7.jpg",
            "assets/images/photo8.jpg",
            "assets/images/photo9.jpg",
            "assets/images/photo10.jpg"
        ]
    },


    /* =====================================================
       MAIN COLORS
       ===================================================== */

    theme: {

        ivory: "#F8F4EA",

        beige: "#E8DDC7",

        gold: "#B89B5E",

        darkGold: "#8C713C",

        text: "#51483A"
    },


    /* =====================================================
       UI CONFIGURATION

       Most visual customization can be done here.
       ===================================================== */

    ui: {


        /* =================================================
           GLOBAL WEBSITE STYLE
           ================================================= */

        global: {

            // Font used everywhere
            fontFamily: '"Aref Ruqaa", serif',

            // Default normal text
            paragraphFontSize:
                "clamp(1.2rem, 3vw, 1.5rem)",

            // Default titles
            titleFontSize:
                "clamp(2.8rem, 7vw, 4rem)"
        },


        /* =================================================
           HERO PAGE
           ================================================= */

        hero: {

            // Background photo
            backgroundImage:
                "assets/images/images.jpg",

            // center / top / bottom
            backgroundPosition:
                "center",

            // 0px = no blur
            // Higher number = more blurry
            backgroundBlur:
                "6px",

            // 0 = bright photo
            // 1 = completely dark
            overlayOpacity:
                0.35,

            // Couple names
            titleFontSize:
                "clamp(4rem, 12vw, 8rem)",

            textFontSize:
                "clamp(1.2rem, 3vw, 1.5rem)",

            titleColor:
                "#FFFFFF",

            textColor:
                "#FFFFFF"
        },


        /* =================================================
           بكل الحب
           ================================================= */

        welcome: {

            backgroundImage:
                "assets/images/bckblur.jpeg",

            backgroundPosition:
                "center",

            backgroundBlur:
                "6px",

            overlayOpacity:
                0.6,

            backgroundColor:
                "#c48d01",

            titleFontSize:
                "clamp(2.8rem, 7vw, 4rem)",

            textFontSize:
                "clamp(1.3rem, 3vw, 1.7rem)",

            titleColor:
                "#F3DFAD",

            textColor:
                "#FFFAF0"
        },


        /* =================================================
           STORY PAGE - حكايتنا
           ================================================= */

        story: {

            backgroundImage:
                "assets/images/bckblur.jpeg",

            backgroundPosition:
                "center",

            // Change this to control blur
            backgroundBlur:
                "6px",

            // Change this to control darkness
            overlayOpacity:
                0.6,

            backgroundColor:
                "#E8DDC7",

            // Size of حكايتنا
            titleFontSize:
                "clamp(3rem, 8vw, 4.5rem)",

            // Size of story text
            textFontSize:
                "clamp(1.3rem, 3vw, 1.7rem)",

            fontFamily:
                '"Aref Ruqaa", serif',

            titleColor:
                "#F3DFAD",

            textColor:
                "#FFFAF0"
        },


        /* =================================================
           WEDDING DETAILS PAGE
           ================================================= */

        details: {

            backgroundImage:
                "assets/images/ven.jpg",

            backgroundPosition:
                "center",

            backgroundBlur:
                "6px",

            overlayOpacity:
                0.6,

            backgroundColor:
                "#F8F4EA",

            titleFontSize:
                "clamp(2.8rem, 7vw, 4rem)",

            textFontSize:
                "clamp(1.2rem, 3vw, 1.5rem)",

            titleColor:
                "#F3DFAD",

            textColor:
                "#FFFFFF"
        },


        /* =================================================
           COUNTDOWN PAGE
           ================================================= */

        countdown: {

            backgroundImage:
                "assets/images/countdown.jpg",

            backgroundPosition:
                "center",

            backgroundBlur:
                "6px",

            overlayOpacity:
                0.6,

            backgroundColor:
                "#E8DDC7",

            titleFontSize:
                "clamp(2.8rem, 7vw, 4rem)",

            // Size of countdown numbers
            counterFontSize:
                "clamp(2rem, 7vw, 4rem)",

            titleColor:
                "#F3DFAD",

            textColor:
                "#FFFFFF"
        },


        /* =================================================
           GALLERY PAGE
           ================================================= */

        gallery: {

            backgroundImage:
                "assets/images/gallery-bg.jpg",

            backgroundPosition:
                "center",

            backgroundBlur:
                "6px",

            overlayOpacity:
                0.45,

            backgroundColor:
                "#F8F4EA",

            titleFontSize:
                "clamp(2.8rem, 7vw, 4rem)",

            titleColor:
                "#F3DFAD",

            // Desktop gallery columns
            columns:
                3,

            // Space between photos
            gap:
                "15px",

            // Examples:
            // "1 / 1" = square
            // "4 / 5" = portrait
            // "16 / 9" = landscape
            imageAspectRatio:
                "1 / 1"
        },


        /* =================================================
           LOCATION PAGE
           ================================================= */

        location: {

            backgroundImage:
                "assets/images/location-bg.jpg",

            backgroundPosition:
                "center",

            backgroundBlur:
                "6px",

            overlayOpacity:
                0.45,

            backgroundColor:
                "#F8F4EA",

            titleFontSize:
                "clamp(2.8rem, 7vw, 4rem)",

            textFontSize:
                "clamp(1.3rem, 3vw, 1.6rem)",

            titleColor:
                "#F3DFAD",

            textColor:
                "#FFFFFF"
        },


        /* =================================================
           FINAL PAGE
           ================================================= */

        closing: {

            backgroundImage:
                "assets/images/closing-bg.jpg",

            backgroundPosition:
                "center",

            backgroundBlur:
                "6px",

            overlayOpacity:
                0.45,

            backgroundColor:
                "#E8DDC7",

            titleFontSize:
                "clamp(3rem, 8vw, 4.5rem)",

            textFontSize:
                "clamp(1.3rem, 3vw, 1.7rem)",

            titleColor:
                "#F3DFAD",

            textColor:
                "#FFFFFF"
        }
    }
};