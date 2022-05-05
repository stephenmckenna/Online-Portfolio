let curPage;
// Add event listeners for page buttons
    document.getElementById('aboutMeBtn').addEventListener('click', () => setPage());
    document.getElementById('educationBtn').addEventListener('click', () => setPage());
    document.getElementById('experienceBtn').addEventListener('click', () => setPage());
    document.getElementById('projectsBtn').addEventListener('click', () => setPage());

function setPage() {
    window.addEventListener("DOMContentLoaded", function() {
    curPage = document.getElementById('title').innerHTML;
    console.log(curPage);
        if(curPage.localeCompare('Experience') == 0)
        {
            console.log('experience page');
            const obs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    console.log(entry);
                    if(entry.isIntersecting) {
                        entry.target.classList.add('divider-animation');
                    }
                });
            });
        
            console.log(document.querySelectorAll(".divider"));
        
            const dividerList = document.querySelectorAll(".divider");
        
            dividerList.forEach(divider => {
                obs.observe(divider);
            })
        }
    }, false);
    
}
