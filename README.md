<div align="center">

# Password Generator

Simple, responsive password generator built with HTML, CSS, and JavaScript.

<a href="#">![status](https://img.shields.io/badge/status-active-brightgreen)</a>
<a href="LICENSE">![license](https://img.shields.io/badge/license-MIT-blue)</a>

</div>

## Table of Contents

- Overview
- Features
- Tech Stack
- Getting Started
- Usage
- Options & Behavior
- Accessibility
- Mobile & Responsiveness
- Project Structure
- Roadmap
- Contributing
- License

## Overview

This lightweight web app generates passwords based on your selected criteria (length and character sets). It runs entirely in the browser — no server, no dependencies. Open `index.html` and you’re ready.

## Features

- Choose length between 4 and 50 characters
- Toggle lowercase, uppercase, numbers, and symbols
- Responsive layout that works well on phones and desktops
- Long passwords wrap inside the display — no horizontal scrolling
- Smooth button hover animation and subtle background gradient

## Tech Stack

- HTML5
- CSS3 (responsive, mobile-friendly tweaks)
- Vanilla JavaScript (no external libraries)

## Getting Started

Open the page directly in your browser.

```powershell
Start-Process .\index.html
```

No build step required.

## Usage

1. Set the desired password length.
2. Check the character types to include.
3. Click “GENERATE PASSWORD”.
4. Your password appears in the display box.

Tip: You can increase the length for stronger passwords. Consider adding a copy-to-clipboard button in a future enhancement.

## Options & Behavior

- Length validation: must be between 4 and 50.
- At least one character type is required.
- Notes:
	- Numbers currently exclude `0`. If you prefer to include it, change the `numbers` string in `script.js` to `"0123456789"`.
	- Randomness uses `Math.random()`, which is fine for casual use but not cryptographically strong. For high-security scenarios, consider `crypto.getRandomValues`.

## Accessibility

- Clear labels for inputs and checkboxes.
- Recommended follow-ups:
	- Announce generated passwords with `aria-live="polite"` on the display area.
	- Add a visible focus state on interactive elements.
	- Larger tap targets for mobile checkboxes.

## Mobile & Responsiveness

- Container uses fluid width with a sensible max to avoid overflow on small screens.
- Buttons are full-width on mobile and capped on larger screens.
- Display area wraps long passwords to stay readable.

## Project Structure

```
Password Generator/
├── index.html    # Markup
├── style.css     # Styles and responsive tweaks
├── script.js     # Password generation logic
├── README.md     # This documentation
└── LICENSE       # MIT license
```

## Roadmap

- [ ] Copy-to-clipboard button with feedback
- [ ] Include `0` in numbers by default (optional setting)
- [ ] `aria-live` updates for screen readers
- [ ] Input and checkbox UI refinements for mobile
- [ ] Basic unit tests for generator logic

## Contributing

Contributions are welcome. Please keep PRs focused (accessibility, UX, tests, or small features). Describe the change and include screenshots when UI is affected.

## License

MIT © 2025 Safraeel — see `LICENSE` for details.
