const showBtnEl = document.querySelectorAll('#showBtn');
const hideBtnEl = document.querySelectorAll('#hideBtn');
const paragraphEl = document.querySelectorAll('p');

showBtnEl.addEventListener('click', () => {
	paragraphEl.style.display =
		paragraphEl.style.display === 'none' ? 'block' : 'none';
});

hideBtnEl.addEventListener('click', () => {
	paragraphEl.style.display =
		paragraphEl.style.display === 'block' ? 'none' : 'block';
});

// function toggleDisclosure() {
//     const isExpanded = this.getAttribute('aria-expanded') === 'true';
//     this.setAttribute('aria-expanded', !isExpanded);
//   }
