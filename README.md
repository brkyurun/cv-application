# Create-Curriculum-Vitae

A simple React application to create a very basic CV for your next job application! (please do not use for production, i.e. real life).

## About

I've been missing working through the Odin Project curriculum, and since I've been learning React lately, I wanted to work on a larger project rather than small components like cards to get more experience in React.
While building the project, the biggest hardship I faced was trying to come up with
a scalable state and props methodology to stay consistent across the three different
sections of the app. I decided to store each data as an object in the state, and an array
of objects for the "education" and "experience" sections, as they could include
more than one item.

Besides that, I also wanted to be terse and tried to define a single handler function
for each section to minimize the state-management related code footprint and complexity
(by complexity, I mean a lot of functions that are very similar in function to each
other, resulting in code that is non-DRY compliant). Initially, I solved this by
getting the "id" attributes from the input elements, but that quickly got derailed
when I got to the education section as "id" attributes have to be unique. After some
thought I used "name" instead to get the target element and its value, which worked
quite well.

## Technologies and Resources Used

The project is built with Vite, React, and TailwindCSS as the main tech stack. I used React-Icons for the SVG icons used in throughout the app (i.e. the lightbulb at the top left, the icons before section titles).

TL;DR:

- React
- TailwindCSS
- Vite
- React-Icons
- Google Fonts Library

## Features

- Built using React, TailwindCSS, Vite, and React-Icons.
- Just fill out the fields and the CV preview on the right will be updated real-time!
- Click on the lightbulb at the left side of the header to toggle between dummy data and empty fields.
