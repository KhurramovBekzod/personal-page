# MercyMed Website: First Draft

A one-page website prototype for **MercyMed**, a private family medical centre in the Tunguch microdistrict of Bishkek, Kyrgyzstan.
It's a group assignment for COM 360 at the American University of Central Asia (AUCA), built from our team's PRD.

> **Student prototype, not the official MercyMed website.** Some details (opening hours, phone line, e-mail, staff bios) are placeholders until the clinic confirms them. They're marked on the page as "awaiting client confirmation".

## Sections

| Section | Contents |
|---|---|
| **Home** | Full-width photo banner with the tagline and a "Meet our doctors" button, plus key facts (10+ years of mobile clinics, opened in 2023, 6 consultation languages, 30% lab discount) and "How we work" |
| **About** | Clinic history, what evidence-based medicine means for patients, mobile clinics, medical education, organisations |
| **Medical Services** | Consultations, preventive check-ups, medical documents, additional services, a block for schools, companies and embassies |
| **Team** | All 10 staff members with photo, name and position |
| **Contact** | Address, WhatsApp number (with copy button), 2GIS location, Instagram |

## Features

- **Three languages:** English, Russian and Kyrgyz, switched from the header. The Russian and Kyrgyz texts are marked "Translation awaiting clinic review".
- **Booking via WhatsApp:** booking buttons open a pop-up showing a ready-made message (name and surname, date of birth, contact number), then open WhatsApp. Nothing is sent until the visitor presses send in WhatsApp.
- **Works on phones:** collapsible menu and a fixed "Book an appointment" bar at the bottom of the screen.
- **Animations:** banner load animation, cards that pop in on scroll, hover lift on photos. All of them turn off when the device is set to reduce motion.
- **Light and dark mode:** follows the visitor's system setting.
- **No build step:** plain HTML, CSS and JavaScript, with no frameworks.

## Project structure

```
mercymed-website/
├── index.html               page structure and English text
├── css/styles.css           colors, layout, animations
├── js/main.js               language switch, team list, menu, booking pop-up, scroll animations
└── images/
    ├── mercymed-logo.svg     logo (vector, from the MercyMed logo guidelines)
    ├── hero-jonathan-williams.jpg
    └── team/                 10 staff photos (4:5 portrait)
```

## How to view it

**On your computer:** download the folder and open `index.html` in a browser.

**On GitHub Pages:**
1. Push this folder to a GitHub repository, with `index.html` at the top level of the repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`, and click **Save**.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.

## How to update the content

- **Team members and positions:** edit the `TEAM` list and the `r_…` position texts near the top of `js/main.js`. Put new photos in `images/team/` and add them to the `PH` list in the same file.
- **English text:** edit it directly in `index.html`.
- **Russian and Kyrgyz text:** edit the `ru` and `ky` sections in `js/main.js`. They use the same keys as the `data-i18n` attributes in `index.html`.
- **Colors:** all colors are variables at the top of `css/styles.css`.

## Still to confirm with the clinic

- Opening hours, phone line for calls, e-mail address
- Short bios for each staff member
- Final tagline and banner photo (a wide, high-quality clinic photo would work best)
- Wording for the laboratory and its 30% discount
- O-Doctor profile link
- Review of the Russian and Kyrgyz translations by MercyMed staff

## Credits

- Content, logo and photos: MercyMed (client materials shared for this course)
- Fonts: [Onest](https://fonts.google.com/specimen/Onest) and [Unbounded](https://fonts.google.com/specimen/Unbounded) from Google Fonts
- Built with the help of Claude (AI assistant)
- Team: _[team number and member names]_
