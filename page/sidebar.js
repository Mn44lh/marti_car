
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.sidebar');
    const check = document.getElementById('check');
    const checkbtn = document.querySelector('.checkbtn img');
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnCheckBtn = checkbtn.contains(event.target);


    if (!isClickInsideSidebar && !isClickOnCheckBtn) {
        check.checked = false;
    }
});