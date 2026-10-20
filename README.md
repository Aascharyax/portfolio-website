# Aascharya Paudel Portfolio Website

A personal portfolio website built as a static single-page site to showcase projects, skills, and contact details in a unique terminal-inspired UI.

## Preview

The site includes:
- a classic portfolio layout with sections for Work, About, Skills, and Contact
- a terminal-like interactive section with commands such as `help`, `projects`, `skills`, `contact`, and `snake`
- a custom music player and themed light/dark toggle
- responsive styling for different screen sizes

## Tech Stack

- HTML
- CSS
- JavaScript
- Static assets for the portfolio and audio

## Project Structure

- `index.html` — main portfolio page
- `assets/` — media files and other static assets
- `CNAME` — custom domain configuration
- `Aascharya Paudel.zip` — downloadable resume or archive

## Run Locally

Because this is a static website, you can run it in either of these ways:

### Option 1: Open directly
Open `index.html` in a browser.

### Option 2: Serve locally
From the project root:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

- The site is designed to be easy to customize by editing the content in `index.html`.
- If you want to add a custom song, place the audio file in `assets/` and update the song metadata in the script at the bottom of the page.
- The portfolio content, project list, and contact info are all embedded in the HTML and can be edited directly.

## Deployment

This repository is configured for static hosting. If you are deploying to GitHub Pages or another static host, upload the repository contents as-is.

## License

This project is currently unlicensed unless otherwise specified by the repository owner.
