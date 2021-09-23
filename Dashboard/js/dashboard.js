

function closeMenu() {  
    var menu = document.getElementById("menu_box")
    var closeBtn = document.getElementById("btn_close")
    menu.setAttribute('style','display:none')
    closeBtn.setAttribute('style', 'visibility:hidden')

    
   }

   function openMenu(){
    var menu = document.getElementById("menu_box")
    var closeBtn = document.getElementById("btn_close")
    menu.setAttribute('style','visibility:visible')
    closeBtn.setAttribute('style', 'visibility:visible')
   }


