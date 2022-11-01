const hamburger = (element) => {
    element.classList.toggle(`${element.classList[0]}--open`);
    const navigation = element.parentElement.getElementsByClassName('menu__navigation')[0];
    navigation.classList.toggle('menu__navigation--active');
    document.getElementsByTagName('body')[0].classList.toggle('hamburger-open');
}

const footerheight = () => {
    const value = document.getElementsByClassName('footer')[0].offsetHeight;
    document.documentElement.style.setProperty('--footerHeight', `${value}px`);
}
footerheight();