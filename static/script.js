let curPage;

function setPage() {
    curPage = document.getElementById('title').innerHTML;
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

        document.getElementById('contactMeBtn').addEventListener("click", () => {
            document.getElementById('topWrapper').className='blurring';
            document.getElementById('contactMeContainer').style.display='flex';
            document.getElementById('overlay').style.display='block';

            document.getElementById('closeBtn').addEventListener("click", () => closeForm());

            //reloads on this click, which i dont want
            document.getElementById('submitForm').addEventListener("click", () => {
                sendMessage();
                closeForm();
            });
        });
        
}

function closeForm() {
    console.log('closing form');
    document.getElementById('topWrapper').classList.remove('blurring');
    document.getElementById('contactMeContainer').style.display='none';
    document.getElementById('overlay').style.display='none';
    document.getElementById('topWrapper').classList='unblurring';
    setTimeout(() => {document.getElementById('topWrapper').classList.remove('unblurring');}, 250);
    
}

function sendMessage() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const msg = document.getElementById('msgInput').value;
    
    fetch("/newMessage", {
        method: "post",
		headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
		body: `name=${name}&email=${email}&msg=${msg}`
    })
    .then((response) => {
        clearInput();
    })
    .catch(() => {
        console.log("Error sending message!");
    });
}

function clearInput() {
	document.getElementById("nameInput").value = "";
	document.getElementById("emailInput").value = "";
	document.getElementById("msgInput").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
    // Add event listeners for page buttons
    document.getElementById('aboutMeBtn').addEventListener('click', () => setPage());
    document.getElementById('educationBtn').addEventListener('click', () => setPage());
    document.getElementById('experienceBtn').addEventListener('click', () => setPage());
    document.getElementById('projectsBtn').addEventListener('click', () => setPage());

    setPage();
});