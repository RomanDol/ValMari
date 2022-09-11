// Tabs
function tabs(headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
    display = 'flex') {

    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => item.style.display = 'none');
        tab.forEach(item => item.classList.remove(activeClass));
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {

            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

// 1-й аргумунт - класс всего нашего хедера табов
// 2-й аргумунт - класс конкретного элемента, при клике на который будет переключаться таб
// 3-й аргумунт - класс того блока, который будет переключаться
// 4-й аргумунт - классактивности, который будет добавляться для таба, который сейчас активен

tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');