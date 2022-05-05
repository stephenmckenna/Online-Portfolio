let curPage;

function setPage() {
    curPage = document.getElementById('title').innerHTML;
    console.log(curPage);
        if(curPage.localeCompare('Experience') == 0)
        {
            console.log('experience page');
            const divObs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('divider-animation');
                    }
                });
            });
            const itemObs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('item-animation');
                    }
                });
            });
        
            const dividerList = document.querySelectorAll(".divider");
            const itemList = document.querySelectorAll(".item");
        
            dividerList.forEach(divider => {
                divObs.observe(divider);
            })
            itemList.forEach(item => {
                itemObs.observe(item);
            })
        }    
}

window.addEventListener("DOMContentLoaded", () => {
    // Add event listeners for page buttons
    document.getElementById('aboutMeBtn').addEventListener('click', () => setPage());
    document.getElementById('educationBtn').addEventListener('click', () => setPage());
    document.getElementById('experienceBtn').addEventListener('click', () => setPage());
    document.getElementById('projectsBtn').addEventListener('click', () => setPage());

    setPage();
});