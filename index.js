const showBtnEl = document.querySelectorAll('#showBtn');
const hideBtnEl = document.querySelectorAll('#hideBtn');
const paragraphEl = document.querySelectorAll('p');

showBtnEl.addEventListener('click', () => {
	if (paragraphEl.style.display === 'none') {
		paragraphEl.style.display = 'block';
	} else {
		paragraphEl.style.display = 'none';
	}
	showBtnEl.style.display = 'none';
	hideBtnEl.style.display = 'block';
});

hideBtnEl.addEventListener('click', () => {
	if (paragraphEl.style.display === 'block') {
		paragraphEl.style.display = 'none';
	} else {
		paragraphEl.style.display = 'block';
	}
	hideBtnEl.style.display = 'none';
	showBtnEl.style.display = 'block';
});

// function toggleDisclosure() {
//     const isExpanded = this.getAttribute('aria-expanded') === 'true';
//     this.setAttribute('aria-expanded', !isExpanded);
//   }
