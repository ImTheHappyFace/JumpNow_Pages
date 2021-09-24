

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




var tabs = document.querySelectorAll('[data-set-tab]')
var tabContents = document.querySelectorAll('[data-set-target]')
var socialContent = document.getElementById('social_icons')

tabs.forEach(function(tab){
    tab.addEventListener('click' , function(){
        const target = document.querySelector(tab.dataset.setTab)
            if(target.id == "dashboard"){
               socialContent.classList.remove('not_active_social') 
            }
            else{
                socialContent.classList.add('not_active_social')
            }
        tabContents.forEach(function(tabContent){
            tabContent.classList.remove('active')
        })
        tabs.forEach(function(tab){
            tab.classList.remove('active')
        })
        tab.classList.add('active')

        target.classList.add('active')
    })
})