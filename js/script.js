let link = document.querySelectorAll('.gallery-link')
let body = document.querySelector('body')
let iconClose = document.querySelectorAll('.close')
let time = 1000

document.addEventListener('keydown', function(event) {
	if(event.which === 27) {
		let galleryActive = document.querySelector('.gallery-windows.open')
		galleryClose(galleryActive)
	}
})

iconClose.forEach((value)=> {
	value.addEventListener('click', function(event) {
		let galleryActive = value.closest('.gallery-windows.open')
		galleryClose(galleryActive)
		event.preventDefault();
	})
})


link.forEach((item)=> {
	item.addEventListener('click', function(event) {
		let linkName = item.getAttribute('href').replace('#','');
		let linkCurent = document.getElementById(linkName);
		galleryOpen(linkCurent)
		event.preventDefault();
	})
})

function galleryOpen(linkCurent) {
	if(linkCurent) {
		let galleryActive = document.querySelector('.gallery-windows.open');
		if(galleryActive) {
			galleryClose(galleryActive)
		} else {
			bodyLock();
		}

		linkCurent.classList.add('open')
		linkCurent.addEventListener('click', function(event) {
			if(!event.target.closest('.gallery-windows__content')) {
				galleryClose(event.target.closest('.gallery-windows'))		
			};
		})
	}
}

function bodyLock() {
	let paddingValue = window.innerWidth - document.querySelector('.gallery-windows').offsetWidth + 'px';
	body.style.paddingRight = paddingValue;
	body.classList.add('lock')
}

function galleryClose(galleryActive) {
	if(galleryActive) {
		galleryActive.classList.remove('open')
		setTimeout(function() {
			body.classList.remove('lock')
			body.style.paddingRight = 0 + 'px'
		}, time)
	}
}
