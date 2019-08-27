
function initSectionActive () {
  const link = document.querySelectorAll('.item-link')
  const sections = document.querySelectorAll('.menu-section')

  let y = 0

  link.forEach((itens) => {
      itens.addEventListener("click", linkActive)
  })
    

  function linkActive(item) {
    
    let x = 1
    link.forEach((links) => {
      links.classList.remove('item-active')
      if(links.getAttribute('href') === item.currentTarget.getAttribute('href')) {
        links.classList.add('item-active')
        if(x > y) {
          y = x
          sections.forEach((elements) => {
            elements.classList.remove('section-active-right')
            elements.classList.remove('section-active-left')
            if(elements.id === item.currentTarget.getAttribute('href').split('#')[1]) {
              elements.classList.add('section-active-right')
              
            } 
          })
        }  else {
          y = x
          sections.forEach((elements) => {
            elements.classList.remove('section-active-right')
            elements.classList.remove('section-active-left')
            if(elements.id === item.currentTarget.getAttribute('href').split('#')[1]) {
              elements.classList.add('section-active-left')
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
      menu.classList.add('menu-mobile-active')
  }

  function desativarMenuMobile() {
    menu.classList.remove('menu-mobile-active')
  }
}

initMenuMobile()