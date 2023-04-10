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

//programistic calculator buttons
const decimalBtn = document.querySelector('.dec')
const binaryBtn = document.querySelector('.bin')
const octagonalBtn = document.querySelector('.oct')
const hexagonalBtn = document.querySelector('.hex')
//programistic calculator text variables
const choiceText = document.querySelector('.option')
const result1 = document.querySelector('.result1')
const result2 = document.querySelector('.result2')
const result3 = document.querySelector('.result3')
//programistic calculator input value
const inputProgramistic = document.querySelector('.value input')

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
				answer = ''
				i += 1
			}
		} else {
			if (i != 0) {
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
				answer = ''
				i += 1
			}
		} else {
			if (i != 0) {
				result.textContent = button.textContent
				i = 0
			} else {
				result.textContent += button.textContent
			}
		}
	})
}
const convertToDec = (liczba, system) => {
	if (parseInt(liczba.toString()) == 0) {
		return 0
	}

	if (!Number.isInteger(system) && (system != 2 || system != 8 || system != 10 || system != 16)) {
		return ''
	}

	if (!Number.isInteger(liczba)) {
		return ''
	}

	var liczba_system = ''

	var cyfry_hex = {
		10: 'A',
		11: 'B',
		12: 'C',
		13: 'D',
		14: 'E',
		15: 'F',
	}

	while (liczba > 0) {
		var reszta = liczba % system
		if (system == 16 && reszta > 9) {
			reszta = cyfry_hex[reszta]
		}
		liczba_system = reszta.toString() + liczba_system
		liczba = Math.floor(liczba / system)
	}

	return liczba_system
}
decimalBtn.addEventListener('click', () => {
	inputProgramistic.value = ''
	choiceText.textContent = 'DEC: '
	result1.textContent = 'BIN: '
	result2.textContent = 'OCT: '
	result3.textContent = 'HEX: '
})
binaryBtn.addEventListener('click', () => {
	inputProgramistic.value = ''
	choiceText.textContent = 'BIN: '
	result1.textContent = 'DEC: '
	result2.textContent = 'OCT: '
	result3.textContent = 'HEX: '
})
octagonalBtn.addEventListener('click', () => {
	inputProgramistic.value = ''
	choiceText.textContent = 'OCT: '
	result1.textContent = 'DEC: '
	result2.textContent = 'BIN: '
	result3.textContent = 'HEX: '
})
hexagonalBtn.addEventListener('click', () => {
	inputProgramistic.value = ''
	choiceText.textContent = 'HEX: '
	result1.textContent = 'DEC: '
	result2.textContent = 'BIN: '
	result3.textContent = 'OCT: '
})

inputProgramistic.addEventListener('keyup', () => {
	const content = choiceText.textContent
	if (content.includes('DEC')) {
		result1.textContent = 'BIN: ' + convertToDec(parseInt(inputProgramistic.value), 2)
		result2.textContent = 'OCT: ' + convertToDec(parseInt(inputProgramistic.value), 8)
		result3.textContent = 'HEX: ' + convertToDec(parseInt(inputProgramistic.value), 16)
	} else if (content.includes('BIN')) {
		const dec = parseInt(inputProgramistic.value, 2)
		result1.textContent = 'DEC: ' + dec
		result2.textContent = 'OCT: ' + convertToDec(parseInt(dec), 8)
		result3.textContent = 'HEX: ' + convertToDec(parseInt(dec), 16)
	} else if (content.includes('OCT')) {
		const dec = parseInt(inputProgramistic.value, 8)
		result1.textContent = 'DEC: ' + dec
		result2.textContent = 'BIN: ' + convertToDec(parseInt(dec), 2)
		result3.textContent = 'HEX: ' + convertToDec(parseInt(dec), 16)
	} else {
		const dec = parseInt(inputProgramistic.value, 16)
		result1.textContent = 'DEC: ' + dec
		result2.textContent = 'BIN: ' + convertToDec(parseInt(dec), 2)
		result3.textContent = 'OCT: ' + convertToDec(parseInt(dec), 8)
	}
})
