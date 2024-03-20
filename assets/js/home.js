const btnShowSidebar = document.getElementById('btnShowSidebar')
const boxSidebarMobile = document.getElementById('sidebarMobile')
const closeBoxSidebar = document.getElementById('closeSidebar')
const overlay = document.getElementById('overlay')

btnShowSidebar.addEventListener('click', function () {
    boxSidebarMobile.style.display = 'block'
})

showSidebar = () => {

    btnShowSidebar.onclick = () => {
        boxSidebarMobile.style.display = 'block';
        overlay.style.display = 'block';
    }
}

hiddenSidebar = () => {

    closeBoxSidebar.onclick = () => {
        boxSidebarMobile.style.display = 'none';
        overlay.style.display = 'none';
    }
}
