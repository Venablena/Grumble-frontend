document.addEventListener('DOMContentLoaded', () => {
  Login.activateLoginButton()
  Token.setButtonText()
  init()
})

  // const id = element.id.replace('more', '')
class Token{
  constructor(){
  }
  static check(){
    let data = { name : localStorage.getItem('userName'),
    admin : localStorage.getItem('admin'),
    token : localStorage.getItem('token'),
    userId : localStorage.getItem('userId') }
  return data
  }
  static setButtonText(){
    let data = this.check()
    if(data.token) {
      let logoutButton = document.querySelector('#login')
      logoutButton.innerHTML = `${data.name} <br> Log out`
      logoutButton.addEventListener('click', (e) => {
        e.preventDefault()
        Login.logout()
      })
    }
  }
}

function init(){
  let user = Token.check()
  console.log(user)
  if(user.admin === true) {
    console.log("admin")
  }
  else renderSnacks()
}

function render(){
  Login.activateLoginButton()
}
