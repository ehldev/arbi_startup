// Navbar

const hamburger = document.getElementById('hamburger')
const navbar = document.getElementById('navbar')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active')
	navbar.classList.toggle('d-inline-block')
})

// Controla si la barra de navegación debe ser fija
const header = document.getElementById('header')

window.onscroll = function () {
	if (window.scrollY >= 200) {
		header.style.background = '#fff'
		header.style.borderBottom = '1px solid rgba(79,83,86,0.1)'
	} else {
		header.style.background = '#FAFAFC'
		header.style.border = 'none'
	}
}

// Sweetbox

const gallery_container = document.getElementById('projects-list')

sweetbox(gallery_container, {
	descriptionImage: true
})