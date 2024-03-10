const showBtnEl = document.querySelectorAll('.show-btn');
const hideBtnEl = document.querySelectorAll('.hide-btn');
const paragraphEl = document.querySelectorAll('p');

showBtnEl.forEach((button) => {
	button.addEventListener('click', () => {
		const paragraphEl = document.getElementById(
			`${button.dataset.paragraphRefference}`
		);
		paragraphEl.style.display = 'block';

		button.style.display = 'none';
		hideBtnEl.style.display = 'block';
	});
});

hideBtnEl.forEach((button) => {
	button.addEventListener('click', () => {
		const paragraphEl = document.getElementById(
			button.dataset.paragraphRefference
		);
		paragraphEl.style.display = 'none';

		showBtnEl.style.display = 'block';
		button.style.display = 'none';
	});
});

// function toggleDisclosure() {
//     const isExpanded = this.getAttribute('aria-expanded') === 'true';
//     this.setAttribute('aria-expanded', !isExpanded);
//   }
