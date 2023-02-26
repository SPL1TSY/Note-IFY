//Hash router to change content for the app to be a SPA 
const router = {
    pages: [],
    show: new Event('show'),
    init: function(){
        router.pages = document.querySelectorAll('.page');
        router.pages.forEach((page)=>{
            page.addEventListener('show', router.pageShown);
        })

        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', router.nav);
        })

        history.replaceState({}, 'Notes', '#notes');
        window.addEventListener('popstate', router.poppin);

    },
    nav: function(event){
        event.preventDefault();
        let currentPage = event.target.getAttribute('data-target');
        const activePage = document.querySelector('.active');
        if (activePage) {
            activePage.classList.remove('active');
        }
        const currentPageElement = document.getElementById(currentPage);
        if (currentPageElement) {
            currentPageElement.classList.add('active');
            history.pushState({}, currentPage, `#${currentPage}`);
            currentPageElement.dispatchEvent(router.show);
        } else {
            console.log(`Element with id ${currentPage} not found`);
        }
    },
    pageShown: function (event){
       console.log('Page', event.target.id, 'just shown');
    },
    poppin: function (event){
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#', '');

        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.getElementById(hash).dispatchEvent(router.show);
    
    },
}

document.addEventListener('DOMContentLoaded', router.init);