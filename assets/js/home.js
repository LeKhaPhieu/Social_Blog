const btnShowSidebar = document.getElementById('btnShowSidebar');
const boxSidebarMobile = document.getElementById('sidebarMobile');
const closeBoxSidebar = document.getElementById('closeSidebar');
const overlayMobile = document.getElementById('overlayMobile');

function showSidebar() {
    boxSidebarMobile.classList.add('show');
    overlayMobile.classList.add('show');
}

function hiddenSidebar() {
    boxSidebarMobile.classList.remove('show');
    overlayMobile.classList.remove('show');
}

btnShowSidebar.addEventListener('click', showSidebar);
closeBoxSidebar.addEventListener('click', hiddenSidebar);

overlayMobile.addEventListener('click', function(event) {
    if (event.target === overlayMobile) {
        hiddenSidebar();
    }
});

