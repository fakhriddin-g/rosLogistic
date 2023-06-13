let navbar = document.querySelector('.navbar')

function nav() {
  let navBox = document.createElement('div')
  let humburger = document.createElement('div')
  for (const item of [1,2,3]) {
    let span = document.createElement('span')

    span.classList.add('humburger-line')

    humburger.append(span)
  }
  let logoImg = document.createElement('img')
  let languages = document.createElement('div')
  for (const language of ['RU', 'EN', 'TJ']) {
    let span = document.createElement('span')

    span.classList.add('lenguage')
    span.innerHTML = language

    languages.append(span)
  }
  let numbers = document.createElement('div')
  for (const item of ['8 000 000 00 00', '8 000 000 00 00']) {
    let number = document.createElement('span')

    number.classList.add('number')
    number.innerHTML = item

    numbers.append(number)
  }
  let navBtn = document.createElement('button')
  let navBtnImg = document.createElement('img')

  navBox.classList.add('nav-box')
  humburger.classList.add('humburger')
  logoImg.classList.add('logo')
  languages.classList.add('languages')
  numbers.classList.add('numbers')
  navBtn.classList.add('nav-btn')
  navBtnImg.classList.add('nav-btn__img')

  logoImg.src = './src/public/img/logo.svg'
  navBtn.innerHTML = 'Рассчитать стоимость'
  navBtnImg.src = './src/public/icon/arrow-mini.svg'


  navBtn.append(navBtnImg)
  navBox.append(
    humburger,
    logoImg,
    languages,
    numbers,
    navBtn
    )
  navbar.append(navBox)
}
nav()