
function initSectionActive () {
  const link = document.querySelectorAll('[href^="#"]')
  const sections = document.querySelectorAll('[data-section="menu"]')
  
  let y = 0

  link.forEach((itens) => {
      itens.addEventListener("click", linkActive)
  })
    

  function linkActive(item) {
    
    let x = 1
    link.forEach((links) => {
      links.classList.remove('item-ativo')
      if(links.getAttribute('href') === item.currentTarget.getAttribute('href')) {
        links.classList.add('item-ativo')
        if(x > y) {
          y = x
          sections.forEach((elements) => {
            elements.classList.remove('section-ativo-right')
            elements.classList.remove('section-ativo-left')
            if(elements.id === item.currentTarget.getAttribute('href').split('#')[1]) {
              elements.classList.add('section-ativo-right')
              
            } 
          })
        }  else {
          y = x
          sections.forEach((elements) => {
            elements.classList.remove('section-ativo-right')
            elements.classList.remove('section-ativo-left')
            if(elements.id === item.currentTarget.getAttribute('href').split('#')[1]) {
              elements.classList.add('section-ativo-left')
            } 
          })
        }
      } 
      x += 1
    })
  }
}

initSectionActive ()


function initMenuMobile() {
  const menuMobile = document.querySelector('.menu-mobile')
  const menuMobileClose  = document.querySelector('.menu-mobile-close')
  const menu = document.querySelector('.list-menu')

  menuMobile.addEventListener('click', ativarMenuMobile)
  menuMobileClose.addEventListener('click', desativarMenuMobile)

  function ativarMenuMobile() {
      menu.classList.add('menu-mobile-ativo')
  }

  function desativarMenuMobile() {
    menu.classList.remove('menu-mobile-ativo')
  }
}

initMenuMobile()