const weddingConfig = {

    /* =====================================================
       COUPLE
       ===================================================== */

    couple: {
        bride: "Mariam",
        groom: "Hazem"
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
            "We Love You",


        // Story page
        storyTitle: "Our Story",

        story:
           "We Love You Story",


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
            "We're Waiting For You🤍"
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
            fontFamily: '"Great Vibes, serif',

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

            fontFamily:
                '"Great Vibes", serif',

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

    // Image before opening
    closedImage:
        "assets/images/envelope-closed.jpeg",

    // Image after clicking
    openImage:
        "assets/images/png-open-done.jpeg",

    // Envelope size
    width:
        "380px",

    // Opening animation duration
    animationDuration:
        2000,

    // Text shown above/below envelope
    buttonText:
        "افتح الدعوة"
}
};