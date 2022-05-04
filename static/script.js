let curPage = 'about'; //about page loaded on site open

// Add event listeners for page buttons
    document.getElementById('aboutMeBtn').addEventListener('click', () => setPage('about'));
    document.getElementById('educationBtn').addEventListener('click', () => setPage('education'));
    document.getElementById('experienceBtn').addEventListener('click', () => setPage('experience'));
    document.getElementById('projectsBtn').addEventListener('click', () => setPage('projects'));

function setPage(page) {
    curPage = page;
    
    if(curPage.localeCompare('experience') == 0)
    {
        window.onload = scrollAnimations()
    }
}

function scrollAnimations() {
    //Scroll triggered animations
    const obs = new IntersectionObserver(entries => {
        entries.foreach(entry => {
            console.log(entry);
            if(entry.isIntersecting) {
                entry.target.classList.add('divider-animation');
            }
        });
    });

    console.log(document.querySelectorAll(".divider"));

    const dividerList = document.querySelectorAll(".divider");

    dividerList.foreach(divider => {
        obs.observe(divider);
    })
}

