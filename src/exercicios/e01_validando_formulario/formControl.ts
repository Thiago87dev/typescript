import isEmail from 'validator/lib/isEmail'

const SHOW_ERROR_MESSAGE = 'show-error-message'

const form = document.querySelector('.form') as HTMLFormElement | null
const userName = document.querySelector('.username') as HTMLInputElement | null
const email = document.querySelector('.email') as HTMLInputElement | null
const password = document.querySelector('.password') as HTMLInputElement | null
const password2 = document.querySelector(
  '.password2',
) as HTMLInputElement | null

if (form && userName && email && password && password2) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    hideErrorMessage(form)
    checkEmptyFields(userName, email, password, password2)
    checkEmail(email)
    checkEqualPasswords(password, password2)
    if (shouldSendFrom(form))
      /* form.submit() */ console.log('Formulario enviado')
  })
}

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Esse campo não pode ficar vazio')
  })
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido')
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password2, 'As senhas devem corresponder')
    showErrorMessage(password, 'As senhas devem corresponder')
  }
}

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach((i) => i.classList.remove(SHOW_ERROR_MESSAGE))
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formField = input.parentElement as HTMLDivElement
  const errorMessage = formField.querySelector(
    '.error-message',
  ) as HTMLSpanElement

  errorMessage.innerText = msg
  formField.classList.add(SHOW_ERROR_MESSAGE)
}

function shouldSendFrom(form: HTMLFormElement): boolean {
  let send = true
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false))
  return send
}
