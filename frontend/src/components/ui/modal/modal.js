window.addEventListener('DOMContentLoaded', () =>{
	const overlay = document.querySelector('#overlay')
	const editBtn = document.querySelector('#edit-btn')
	const closeBtn = document.querySelector('#close-modal')

	const toggleModal = () => {
		overlay.classList.toggle('hidden')
		overlay.classList.toggle('flex')
	}

	editBtn.addEventListener('click', toggleModal)

	closeBtn.addEventListener('click', toggleModal)
})