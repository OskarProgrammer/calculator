const openNav = document.querySelector('.openNav')
const closeNav = document.querySelector('.closeNav')
const nav = document.querySelector('.navBar')
const body = document.querySelector('body')
const advanceCalcBtn = document.querySelector('.levelCalc')
const simpleCalcBtn = document.querySelector('.simpleCalc')
const proCalcBtn = document.querySelector('.proCalc')
const board = document.querySelector('.down')
const buttonsAdvanced = document.querySelectorAll('.advanced button')
const buttonsSimple = document.querySelectorAll('.board button')
const upward = document.querySelector('.up')
let result = document.querySelector('.result')
let i = 0
let answer

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

const resultUpdate = e => {
	console.log('something')
	console.log(result)
	result.textContent += e.textContent
}
openNav.addEventListener('click', openNavigation)
closeNav.addEventListener('click', closeNavigation)
advanceCalcBtn.addEventListener('click', chooseAdvanced)
simpleCalcBtn.addEventListener('click', chooseSimple)
proCalcBtn.addEventListener('click', chooseProgramistic)
for (let button of buttonsAdvanced) {
	button.addEventListener('click', () => {
		if (button.value == 'clear') {
			result.textContent = ' '
		} else if (button.value == 'back') {
			let wartosc = result.textContent
			let arr = wartosc.split('')
			let wartosc1 = Array.from(arr)
			wartosc1.pop()
			result.textContent = wartosc1.join('')
		} else if (button.value == 'last') {
			result.textContent += answer
		} else if (button.value == 'equal') {
			try {
				result.textContent = eval(result.textContent)
				i += 1
				answer = result.textContent
			} catch (SyntaxError) {
				result.textContent = 'SYNTAX ERROR'
				i += 1
			}
			if (result.textContent == 'Infinity') {
				result.textContent = 'MATH ERROR'
				i += 1
			}
		} else {
			if (i == 1 || i == 2) {
				result.textContent = button.textContent
				i = 0
			} else {
				result.textContent += button.textContent
			}
		}
	})
}
for (let button of buttonsSimple) {
	button.addEventListener('click', () => {
		if (button.value == 'clear') {
			result.textContent = ' '
		} else if (button.value == 'back') {
			let wartosc = result.textContent
			let arr = wartosc.split('')
			let wartosc1 = Array.from(arr)
			wartosc1.pop()
			result.textContent = wartosc1.join('')
		} else if (button.value == 'last') {
			result.textContent += answer
		} else if (button.value == 'equal') {
			try {
				result.textContent = eval(result.textContent)
				i += 1
				answer = result.textContent
			} catch (SyntaxError) {
				result.textContent = 'SYNTAX ERROR'
				i += 1
			}
			if (result.textContent == 'Infinity') {
				result.textContent = 'MATH ERROR'
				i += 1
			}
		} else {
			if (i == 1 || i == 2) {
				result.textContent = button.textContent
				i = 0
			} else {
				result.textContent += button.textContent
			}
		}
	})
}
