# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop-photo](solutions/Desk-main.png)
![Mobile-photo](solutions/Mobile-main.png)

### Links

- Solution URL: (https://github.com/hassanmoaa/faq-accordion-main.git)
- Live Site URL: (https://thunderous-bienenstitch-128f7f.netlify.app)

### Built with

[![My Skills](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev)

### What I learned

- Manipulating the DOM in JS and handling eventListeners.

```
const showBtnEl = document.querySelectorAll('#showBtn');
const hideBtnEl = document.querySelectorAll('#hideBtn');
const paragraphEl = document.querySelectorAll('p');

showBtnEl.forEach((button) => {
	button.addEventListener('click', () => {
		const paragraphEl = document.getElementById(
			`${button.dataset.paragraphRefference}`
		);
		const hideButton = button.parentElement.querySelector('.hide-btn');
		paragraphEl.style.display = 'block';
		button.style.display = 'none';
		hideButton.style.display = 'block';
	});
});

hideBtnEl.forEach((button) => {
	button.addEventListener('click', () => {
		const paragraphEl = document.getElementById(
			button.dataset.paragraphRefference
		);
		const showButton = button.parentElement.querySelector('.show-btn');
		paragraphEl.style.display = 'none';
		button.style.display = 'none';
		showButton.style.display = 'block';
	});
});

```

### Continued development

- Full Stack Development

### Useful resources

- (https://developer.mozilla.org/)
- (https://www.w3schools.com)

## Author

- Frontend Mentor - [@hassanmoaa](https://www.frontendmentor.io/profile/hassanmoaa)
