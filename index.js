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
