let div = document.querySelectorAll('[data-inputs]')
let caminho = 'http://127.0.0.1:5500/'

function icon(item) {
  if (item.firstElementChild.src === caminho + 'assets/mail.svg') {
    item.firstElementChild.src = './assets/mail-focus.svg'
  } else if (item.firstElementChild.src === caminho + 'assets/mail-focus.svg') {
    item.firstElementChild.src = './assets/mail.svg'
  } else if (item.firstElementChild.src === caminho + 'assets/lock.svg') {
    item.firstElementChild.src = './assets/lock-focus.svg'
  } else {
    item.firstElementChild.src = './assets/lock.svg'
  }
}

function form(item) {
  ''
  if (!item.classList.contains('data-input')) {
    item.classList.add('data-input')
    icon(item)
    // item.firstElementChild.src = './assets/mail-focus.svg'
  } else {
    item.classList.remove('data-input')
    icon(item)
  }
  console.log(item.firstElementChild.src)
}

for (const item of div) {
  item.addEventListener('click', () => {
    form(item)
  })
}
