const sidebarMenuButton = document.querySelector('.gnb-icon-button');
console.log(sidebarMenuButton)

const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');
console.log(sidebar)
console.log(sidebarOverlay)

function openSidebar() {
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click', closeSidebar);