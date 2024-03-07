const showBtnEl = document.querySelector('#showBtn');
const hideBtnEl = document.querySelector('#hideBtn');
const paragraphEl = document.querySelector('p');

showBtnEl.addEventListener('click', () => {
	if (paragraphEl.style.display === 'none') {
		paragraphEl.style.display = 'block';
	} else {
		paragraphEl.style.display === 'none';
	}
	showBtnEl.style.display === 'none';
	hideBtnEl.style.display === 'block';
});

hideBtnEl.addEventListener('click', () => {
	if (paragraphEl.style.display === 'block') {
		paragraphEl.style.display = 'none';
	} else {
		paragraphEl.style.display === 'block';
	}
	hideBtnEl.style.display === 'none';
	showBtnEl.style.display === 'block';
});
