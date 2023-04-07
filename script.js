const openNav = document.querySelector('.openNav')
const closeNav = document.querySelector('.closeNav')
const nav = document.querySelector('.navBar')
const body = document.querySelector('body')
const advanceCalcBtn = document.querySelector('.levelCalc')
const simpleCalcBtn = document.querySelector('.simpleCalc')
const proCalcBtn = document.querySelector('.proCalc')
const board = document.querySelector('.down')
// const buttons = querySelectorAll("")
const upward = document.querySelector('.up')

const openNavigation = () => {
	nav.style.left = '10px'
	openNav.style.left = '-80px'
}
const closeNavigation = () => {
	nav.style.left = '-175px'
	openNav.style.left = '-20px'
}

const chooseAdvanced = () => {
	//hover na .down
	//rotateY (180 deg)
	board.classList.add('active')
	upward.classList.remove('activeResult')
	board.classList.remove('activeProgramistic')
}
const chooseSimple = () => {
	board.classList.remove('active')
	board.classList.remove('activeProgramistic')
	upward.classList.remove('activeResult')
}

const chooseProgramistic = () => {
	board.classList.add('activeProgramistic')
	upward.classList.add('activeResult')
}

document.onkeydown = function (evt) {
	evt = evt || window.event
	if (evt.key === 'Escape' || evt.key === 'Esc') {
		nav.style.left = '-175px'
		openNav.style.left = '-20px'
	}
}

openNav.addEventListener('click', openNavigation)
closeNav.addEventListener('click', closeNavigation)
advanceCalcBtn.addEventListener('click', chooseAdvanced)
simpleCalcBtn.addEventListener('click', chooseSimple)
proCalcBtn.addEventListener('click', chooseProgramistic)
