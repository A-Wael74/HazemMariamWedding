document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* =============================================
           INITIALIZE WEBSITE
           ============================================= */

        applyTheme();

        applyGlobalStyle();
        setupMainBackground();

        loadContent();

        setupAllSections();

        setupGalleryStyle();

        setupEnvelope();

        setupCountdown();
    }
);


/* =====================================================
   APPLY MAIN COLORS
   ===================================================== */

function applyTheme() {

    const theme =
        weddingConfig.theme;


    document.documentElement.style.setProperty(
        "--ivory",
        theme.ivory
    );


    document.documentElement.style.setProperty(
        "--beige",
        theme.beige
    );


    document.documentElement.style.setProperty(
        "--gold",
        theme.gold
    );


    document.documentElement.style.setProperty(
        "--dark-gold",
        theme.darkGold
    );


    document.documentElement.style.setProperty(
        "--text",
        theme.text
    );
}


/* =====================================================
   GLOBAL FONT / SIZES
   ===================================================== */

function applyGlobalStyle() {

    const global =
        weddingConfig.ui.global;


    document.documentElement.style.setProperty(
        "--global-font",
        global.fontFamily
    );


    document.documentElement.style.setProperty(
        "--global-paragraph-size",
        global.paragraphFontSize
    );


    document.documentElement.style.setProperty(
        "--global-title-size",
        global.titleFontSize
    );
}


/* =====================================================
   LOAD TEXT AND CONTENT
   ===================================================== */

function loadContent() {

    const config =
        weddingConfig;


    /* =============================================
       Browser title
       ============================================= */

    document.title =
        `${config.couple.bride} و ${config.couple.groom}`;


    /* =============================================
       Envelope
       ============================================= */
const envelopeImage =
    document.getElementById(
        "envelope-image"
    );


if (envelopeImage) {

    envelopeImage.src =
        config.envelope.closedImage;

    envelopeImage.style.width =
        config.envelope.width;
}


    setText(
        "openInvitation",
        config.text.openButton
    );


    /* =============================================
       Hero
       ============================================= */

    setText(
        "hero-opening",
        config.text.opening
    );


    const heroNamesImage =
        document.getElementById(
            "hero-names-image"
        );

    if (heroNamesImage) {

        heroNamesImage.src =
            config.images.heroNames;
    }

    setText(
        "wedding-date",
        config.wedding.displayDate
    );


    /* =============================================
       Welcome
       ============================================= */

    setText(
        "welcome-title",
        config.text.welcomeTitle
    );


    setText(
        "welcome-message",
        config.text.welcome
    );


    /* =============================================
       Story
       ============================================= */



    /* =============================================
       Details
       ============================================= */

    setText(
        "details-title",
        config.text.detailsTitle
    );

setText(
    "wedding-time-text",
    config.wedding.time
);


setText(
    "details-venue",
    config.wedding.venue
);


buildWeddingCalendar();


    /* =============================================
       Countdown
       ============================================= */

    setText(
        "countdown-title",
        config.text.countdownTitle
    );


    /* =============================================
       Gallery
       ============================================= */

    setText(
        "gallery-title",
        config.text.galleryTitle
    );


    loadGallery();


    /* =============================================
       Location
       ============================================= */

    setText(
        "location-title",
        config.text.locationTitle
    );


    setText(
        "location-name",
        config.wedding.venue
    );


    setText(
        "location-button",
        config.text.locationButton
    );


    setupLocationButton();


    /* =============================================
       Closing
       ============================================= */

    setText(
        "closing-message",
        config.text.closing
    );
}

function buildWeddingCalendar() {

    const dateString =
        weddingConfig.wedding.date;


    /* Convert YYYY-MM-DD */

    const [
        year,
        month,
        weddingDay
    ] =
        dateString
            .split("-")
            .map(Number);


    const monthIndex =
        month - 1;


    const monthTitle =
        document.getElementById(
            "calendar-month"
        );


    const calendarDays =
        document.getElementById(
            "calendar-days"
        );


    if (
        !monthTitle ||
        !calendarDays
    ) {

        return;
    }


    /* Month name */

    const weddingDate =
        new Date(
            year,
            monthIndex,
            weddingDay
        );


    monthTitle.textContent =
        weddingDate.toLocaleDateString(
            "en-US",
            {
                month: "long",
                year: "numeric"
            }
        );


    /* Remove previous calendar */

    calendarDays.innerHTML =
        "";


    /* First weekday of month */

    const firstDay =
        new Date(
            year,
            monthIndex,
            1
        ).getDay();


    /* Days in month */

    const daysInMonth =
        new Date(
            year,
            month,
            0
        ).getDate();


    /* Empty cells before day 1 */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement(
                "div"
            );


        calendarDays.appendChild(
            empty
        );
    }


    /* Actual days */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayElement =
            document.createElement(
                "div"
            );


        dayElement.className =
            "calendar-day";


        dayElement.textContent =
            day;


        if (
            day === weddingDay
        ) {

            dayElement.classList.add(
                "wedding-day"
            );
        }


        calendarDays.appendChild(
            dayElement
        );
    }
}
/* =====================================================
   HELPER FOR TEXT
   ===================================================== */

function setText(
    elementId,
    text
) {

    const element =
        document.getElementById(
            elementId
        );


    if (element) {

        element.textContent =
            text;
    }
}


/* =====================================================
   SETUP ALL SECTION BACKGROUNDS + UI
   ===================================================== */

function setupAllSections() {

    const ui =
        weddingConfig.ui;


    setupSection(
        "hero",
        ui.hero,
        "#hero-opening",
        ".wedding-date"
    );


    setupSection(
        "welcome-section",
        ui.welcome
    );


    setupSection(
        "details-section",
        ui.details
    );


    setupSection(
        "countdown-section",
        ui.countdown
    );


    setupSection(
        "gallery-section",
        ui.gallery
    );


    setupSection(
        "location-section",
        ui.location
    );


    /* Countdown number size */

    const countdown =
        document.getElementById(
            "countdown-section"
        );


    if (
        countdown &&
        ui.countdown.counterFontSize
    ) {

        countdown
            .querySelectorAll(
                ".countdown span"
            )
            .forEach(
                number => {

                    number.style.fontSize =
                        ui.countdown.counterFontSize;
                }
            );
    }
}


/* =====================================================
   CONFIGURE ONE SECTION
   ===================================================== */

function setupSection(
    sectionId,
    config,
    titleSelector = "h2",
    textSelector = "p"
) {

    const section =
        document.getElementById(
            sectionId
        );


    if (
        !section ||
        !config
    ) {

        return;
    }


    /* Section-specific font */

    /* Title */

    const title =
        section.querySelector(
            titleSelector
        );


    if (title) {

    


        if (config.titleColor) {

            title.style.color =
                config.titleColor;
        }
    }


    /* Text */

    section
        .querySelectorAll(
            textSelector
        )
        .forEach(
            text => {

                if (config.textColor) {

                    text.style.color =
                        config.textColor;
                }
            }
        );
}

/* =====================================================
   GALLERY
   ===================================================== */

function loadGallery() {

    const gallery =
        document.getElementById(
            "gallery"
        );


    if (!gallery) {

        return;
    }


    gallery.innerHTML =
        "";


    weddingConfig.images.gallery.forEach(
        (imagePath, index) => {

            const image =
                document.createElement(
                    "img"
                );


            image.src =
                imagePath;


            image.alt =
                `صورة ${index + 1}`;


            image.loading =
                "lazy";


            gallery.appendChild(
                image
            );
        }
    );
}


/* =====================================================
   GALLERY UI CONFIG
   ===================================================== */

function setupGalleryStyle() {

    const gallery =
        document.getElementById(
            "gallery"
        );


    const config =
        weddingConfig.ui.gallery;


    if (
        !gallery ||
        !config
    ) {

        return;
    }


    gallery.style.setProperty(
        "--gallery-columns",
        config.columns || 3
    );


    gallery.style.setProperty(
        "--gallery-gap",
        config.gap ||
        "15px"
    );


    gallery.style.setProperty(
        "--gallery-aspect-ratio",
        config.imageAspectRatio ||
        "1 / 1"
    );
}


/* =====================================================
   LOCATION BUTTON
   ===================================================== */

function setupLocationButton() {

    const button =
        document.getElementById(
            "location-button"
        );


    if (!button) {

        return;
    }


    if (
        weddingConfig.wedding.locationUrl
    ) {

        button.href =
            weddingConfig.wedding.locationUrl;


        button.style.display =
            "inline-block";
    }

    else {

        button.style.display =
            "none";
    }
}


/* =====================================================
   ENVELOPE OPENING
   ===================================================== */
function preloadImage(src) {

    return new Promise(
        (resolve, reject) => {

            const img =
                new Image();

            img.onload =
                async () => {

                    /*
                     * decode() makes sure the browser
                     * has actually prepared the image
                     * for display.
                     */

                    try {

                        if (img.decode) {
                            await img.decode();
                        }

                    } catch (error) {

                        // Image is already loaded,
                        // so decode failure is not fatal.
                    }

                    resolve(img);
                };


            img.onerror =
                reject;


            img.src =
                src;
        }
    );
}

async function setupEnvelope() {

    const button =
        document.getElementById(
            "openInvitation"
        );

    const image =
        document.getElementById(
            "envelope-image"
        );

    const screen =
        document.getElementById(
            "envelope-screen"
        );


    if (!button || !image || !screen) {
        return;
    }


    const config =
        weddingConfig.envelope;


    /*
     * Don't allow opening until the
     * second image is completely ready.
     */

    button.disabled = true;

    button.style.opacity =
        "0.6";


    try {

        await preloadImage(
            config.openImage
        );


        /*
         * Open image is now downloaded
         * AND decoded.
         */

        button.disabled = false;

        button.style.opacity =
            "1";

    } catch (error) {

        console.error(
            "Failed to preload open envelope:",
            error
        );


        /*
         * Still allow the invitation
         * to open if loading failed.
         */

        button.disabled = false;

        button.style.opacity =
            "1";
    }


    button.addEventListener(
        "click",
        () => {

            button.disabled =
                true;

            button.style.opacity =
                "0";

            button.style.pointerEvents =
                "none";


            /* 1. Fade closed envelope */

            image.classList.add(
                "swap-out"
            );


            setTimeout(
                () => {

                    /*
                     * 2. Change image.
                     *
                     * It is already cached and decoded,
                     * so it appears immediately.
                     */

                    image.src =
                        config.openImage;


                    requestAnimationFrame(
                        () => {

                            requestAnimationFrame(
                                () => {

                                    /* 3. Fade open envelope in */

                                    image.classList.remove(
                                        "swap-out"
                                    );

                                    image.classList.add(
                                        "opening"
                                    );


                                    /* 4. Hold opened envelope */

                                    setTimeout(
                                        () => {

                                            image.classList.add(
                                                "disappear"
                                            );


                                            /* 5. Show hero */

                                            setTimeout(
                                                () => {

                                                    screen.classList.add(
                                                        "hide"
                                                    );


                                                    const hero =
                                                        document.getElementById(
                                                            "hero"
                                                        );


                                                    if (hero) {

                                                        hero.classList.add(
                                                            "in-view"
                                                        );
                                                    }

                                                },

                                                config.finalFadeDuration
                                            );

                                        },

                                        config.openHoldDuration
                                    );

                                }
                            );

                        }
                    );

                },

                config.swapFadeDuration
            );

        }
    );
}
/* =====================================================
   COUNTDOWN
   ===================================================== */

function setupCountdown() {

    const weddingDateString =
        weddingConfig.wedding.date +
        "T" +
        weddingConfig.wedding.countdownTime;


    const weddingDate =
        new Date(
            weddingDateString
        );


    function updateCountdown() {

        const now =
            new Date();


        let difference =
            weddingDate - now;


        if (
            difference < 0
        ) {

            difference = 0;
        }


        const days =
            Math.floor(
                difference /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        const hours =
            Math.floor(
                (
                    difference /
                    (
                        1000 *
                        60 *
                        60
                    )
                ) %
                24
            );


        const minutes =
            Math.floor(
                (
                    difference /
                    (
                        1000 *
                        60
                    )
                ) %
                60
            );


        const seconds =
            Math.floor(
                (
                    difference /
                    1000
                ) %
                60
            );


        setText(
            "days",
            days
        );


        setText(
            "hours",
            hours
        );


        setText(
            "minutes",
            minutes
        );


        setText(
            "seconds",
            seconds
        );
    }


    updateCountdown();


    setInterval(
        updateCountdown,
        1000
    );
}

function setupMainBackground() {

    const config =
        weddingConfig.ui.background;


    const background =
        document.getElementById(
            "invitation-background"
        );


    const overlay =
        document.getElementById(
            "invitation-background-overlay"
        );


    if (
        !config ||
        !background ||
        !overlay
    ) {

        return;
    }


    /* Background image */

    background.style.backgroundImage =
        `url("${config.image}")`;


    /* Image position */

    background.style.setProperty(
        "--main-bg-position",
        config.position || "center"
    );


    /* Blur */

    background.style.setProperty(
        "--main-bg-blur",
        config.blur || "0px"
    );


    /* Overlay darkness */

    overlay.style.setProperty(
        "--main-bg-overlay",
        config.overlayOpacity ?? 0.45
    );
}