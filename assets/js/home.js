const btnShowSidebar = document.getElementById('btnShowSidebar')
const boxSidebarMobile = document.getElementById('sidebarMobile')
const closeBoxSidebar = document.getElementById('closeSidebar')
const overlayMobile = document.getElementById('overlayMobile')

function showSidebar() {
    boxSidebarMobile.style.display = 'block';
    overlayMobile.style.display = 'block';
}
btnShowSidebar.addEventListener('click', showSidebar);

function hiddenSidebar() {
    boxSidebarMobile.style.display = 'none';
    overlayMobile.style.display = 'none';
}
closeBoxSidebar.addEventListener('click', hiddenSidebar);
