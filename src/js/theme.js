const chektBt = document.querySelector('#theme-switch-toggle');
const bodyClass = document.querySelector('body');
bodyClass.classList.add(localStorage.getItem('theme'));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

chektBt.addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        bodyClass.classList.replace(Theme.LIGHT, Theme.DARK);
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        bodyClass.classList.replace(Theme.DARK, Theme.LIGHT);
    }
});

if (localStorage.getItem('theme') === Theme.DARK) {
   chektBt.checked = true; 
};