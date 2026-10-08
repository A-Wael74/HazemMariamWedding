const weddingConfig = {

    /* =====================================================
       COUPLE
       ===================================================== */

    couple: {
        bride: "Mariam",
        groom: "Hazem"
    },
    /* =================================================
                AUDIO 
         ================================================= */
    audio: {

        // Enable / disable background music
        enabled: true,

        // Audio file
        src:
            "assets/audio/wedding2.mpeg",

        // 0.0 -> silent
        // 1.0 -> maximum
        volume:
            0.6,

        // Repeat music after it finishes
        loop:
            true
    },

    /* =====================================================
       WEDDING INFORMATION
       ===================================================== */

    wedding: {

        // Used internally for countdown
        // Format: YYYY-MM-DD
        date: "2026-11-06",

        // Time used internally for countdown
        // 18:00 = 6 PM
        countdownTime: "18:00:00",

        // What guests see
        displayDate: "6 november 2026",

        time: "6:00 PM",

        // Change later
        venue: "Nile Flori Hall, Corniche El- Maadi",

        // Paste Google Maps link here.
        // Leave "" to hide the location button.
        locationUrl: "https://maps.app.goo.gl/jiyKZWMcR37zHkSz8"
    },


    /* =====================================================
       WEBSITE TEXT
       ===================================================== */

    text: {

        // Envelope + hero
        opening: "Wedding Invitation",

        openButton: "Open Invitation",


        welcome:
            "Somehow, every little moment led us here. With full hearts and so much joy, we invite you to celebrate the beginning of our forever.",



        // Wedding details
        detailsTitle: "Date",


        // Countdown
        countdownTitle: "Countdown",


        // Gallery
        galleryTitle: "Our Moments",


        // Location
        locationTitle: "Location",

        locationButton: "Location On Maps",


        // Final page
        closing:
            "We’ll be waiting for you to make this night even more special. Send the sweetest bedtime wishes to your little ones.🤍"
    },


    /* =====================================================
       GALLERY PHOTOS
       ===================================================== */

    images: {
        heroNames:
            "assets/images/113.png",


        gallery: [
            "assets/images/4-.jpg.jpeg",
            "assets/images/3-.jpg.jpeg",
            "assets/images/2-.jpg.jpeg",
            "assets/images/5.jpeg",
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

         /* =========================================
       MAIN INVITATION BACKGROUND
       ========================================= */

    background: {

        // One image used behind all invitation content
        image:
            "assets/images/bck.jpg",

        // center / top / bottom
        position:
            "center",

        // Blur strength
        blur:
            "7px",

        // 0 = bright image
        // 1 = very dark
        overlayOpacity:
            0.45
    },

        /* =================================================
           GLOBAL WEBSITE STYLE
           ================================================= */

        global: {

            // Font used everywhere
           

            // Default normal text
            paragraphFontSize:
                "clamp(1.2rem, 3vw, 1.5rem)",

            // Default titles
         //   titleFontSize:
          //      "clamp(2.8rem, 7vw, 4rem)"
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
            fontFamily: '"Allura, serif',

           
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


            titleColor:
                "#F3DFAD",

            textColor:
                "#FFFAF0"
        },


        /* =================================================
           STORY PAGE - حكايتنا
           ================================================= */

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

            // Size of countdown numbers
         
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

            titleColor:
                "#F3DFAD",

            // Desktop gallery columns
            columns:
                2,

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

        

            titleColor:
                "#F3DFAD",

            textColor:
                "#FFFFFF"
        }
    },
    envelope: {

        closedImage:
            "assets/images/closedfinal.jpeg",

        openImage:
            "assets/images/png-open-done.jpeg",

        width:
            "380px",

        // Closed envelope fade-out
        swapFadeDuration:
            800,

        // How long opened envelope stays visible
        openHoldDuration:
           2000,

        // Open envelope fade-out before hero
        finalFadeDuration:
            800
    }
};