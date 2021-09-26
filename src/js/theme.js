const chektBt = document.querySelector('#theme-switch-toggle');
const bodyClass = document.querySelector('body');
bodyClass.classList.add(localStorage.getItem('theme'));
// if (localStorage.getItem('theme') === 'dark-theme') {
//     chektBt.target.checked = true;
// }

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

chektBt.addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        bodyClass.classList.replace('light-theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        bodyClass.classList.replace('dark-theme', 'light-theme');
     
    }
});


