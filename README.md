## Data-Grabber

Data-Grabber is a fun, fake-hacking website created for a technical test for a frontend internship position at CrescentRating & HalalTrip. Built using Next.js and TailwindCSS, this project showcases a playful simulation of a hacking sequence and data breach.
Open [https://data-grabber.vercel.app/](https://data-grabber.vercel.app/) with your browser to see the demo.


## Project Overview

Data-Grabber simulates a fictional hacking scenario where users input their data, which then gets displayed in a stylized "hacked" output. The project includes a form for users to submit their data and a CLI-like interface to display the hacking process and results.


## Features

- Form Submission: Collects user data including name, phone number, email, mother's name, date of birth, and SSN.
- Fake Hacking Sequence: Displays a fake CLI output that simulates a data breach and hacking process.
- Results Display: Shows fabricated sensitive information in a CLI format to enhance the illusion of a data breach.
- Styling: Utilizes TailwindCSS for modern and responsive design.


## Relevant Codes

- /app/page.js - Contains the main form where users can input their data.
This file defines the main form page. It handles user input, validates form fields, and manages state for form data and validation errors. The form includes fields for name, phone number, email, mother's name, date of birth, and SSN. Validation logic ensures that inputs conform to expected formats before allowing form submission. Upon successful submission, the form data is sent to the results page via URL query parameters.

- /app/result/page.js - Displays the simulated hacking sequence and results.
This file manages the results page, where the simulated hacking process and results are displayed. It handles different phases of the simulation, including the hacking sequence, an intermission with a visual representation, and the final results. The page parses query parameters to extract the form data and uses timers to transition between simulation phases. It also listens for the Escape key to allow users to exit the simulation and return to the form page.

- /components/CLI.jsx - Component responsible for rendering the CLI output with a typing animation.
The CLI component displays the simulated hacking output with a typing animation. It receives an array of text blocks and progressively renders each line with delays to mimic a command-line interface. The component manages the timing of text display and transitions between blocks, creating a dynamic and engaging user experience.


## Styling

The project uses TailwindCSS for efficient, utility-first styling that streamline layout and design process. Flexbox is extensively utilized to ensure responsive and adaptable layouts across various screen sizes. The homepage features modern styling with gradient backgrounds and sleek form elements, while the results page adopts a CLI-like aesthetic with monospaced fonts, blinking cursors, and animated text blocks to simulate a terminal environment, enhancing the immersive experience of the fake hacking simulation.


# data-grabber
