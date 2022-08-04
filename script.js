// const input = document.querySelector ('js-input')
// const nameLable = document.querySelector('js-button > span')
// const license = document.querySelector('js-licence')
// const btn = document.querySelector('js-button')

// const refs = {
//  input : document.querySelector ('.js-input'),
//  nameLable : document.querySelector('.js-button > span'),
//  license : document.querySelector('.js-licence'),
//  btn : document.querySelector('.js-button')
// };

// refs.input.addEventListener('focus' , onInputFocus)
// refs.input.addEventListener('blur' , onInputBlur)
// refs.input.addEventListener('input' , onInputChange)
// refs.license.addEventListener ('change', changeInput)


// function onInputFocus () {
//   console.log ('Поймал фокус')
// }

// function onInputBlur () {
//   console.log ('Потерял фокус')
// }

// function onInputChange (event) {
//   console.log (event.currentTarget.value)
//   refs.nameLable.textContent = event.currentTarget.value
// }

// function changeInput (event) {
//   console.log(event.currentTarget.checked)
// refs.btn.disabled = !event.currentTarget.checked
// }

// const refs = {
// output : document.querySelector ('.js-output'),
// clear : document.querySelector ('.js-clear')
// }

// window.addEventListener('keypress', onKeypress )

// function onKeypress (event) {
// console.log(event.key)
// refs.output.textContent += event.key
// }

// refs.clear.addEventListener('click', onClearButton)
// function onClearButton () {
//     refs.output.textContent = '';
// }
 

const tagsContainer = document.querySelector('.list-js')

tagsContainer.addEventListener('click', onTagsContainerClicks )

function onTagsContainerClicks (evt) {
  if ( evt.target.nodeName !== 'BUTTON'){
    return
  }
  
  const currentActive = document.querySelector('.tags__button--active') 
  evt.target.classList.toggle('.tags__button--active')
}
