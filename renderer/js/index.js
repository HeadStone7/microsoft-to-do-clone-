const pattern1 = document.getElementsByClassName("pattern one")
const wrapper = document.getElementById('wrapper')

const currentDate = new Date()

document.addEventListener('DOMContentLoaded', () =>{
const myDayContent = document.createElement('div');
    for (let i = 0; i < pattern1.length; i++) {
        pattern1[i].addEventListener('click', () =>{
            wrapper.style.background = 'url(renderer/images/bg-1.jpg) no-repeat center/cover';
            //appends myDayContent in Wrapper container
            myDayContent.innerHTML =
            `
                <div class="content-header">
                    <div class="left-head">
                        <div class="title">My Date</div>
                        <div id="date"></div>
                    </div>
                    <div class="btn">
                        <div class="reduceBtn"></div>
                        <div class="rightDrawerBtn"></div>
                        <div class="themeBtn"></div>
                    </div>
                </div>
            `
            myDayContent.className = 'my-day-content';
            wrapper.appendChild(myDayContent)
            const dateID = document.getElementById('date')
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            dateID.textContent = currentDate.toLocaleDateString('en-US', options)
        })
        
    }
})
