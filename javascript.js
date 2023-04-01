let sideBar = document.getElementById('side-bar');
let icon = document.getElementById('icon');

icon.onclick = () => {
    sideBar.classList.toggle('toggle');
    icon.classList.toggle('rotate-icon');
}