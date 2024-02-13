const patterns = document.getElementsByClassName('pattern')
const myDay = document.getElementsByClassName("pattern one")
const wrapper = document.getElementById('wrapper')
const currentDate = new Date()

document.addEventListener('DOMContentLoaded', function () {
    pushDataOfSelectedBtnInWrapper()
})


/**
 * onclick first left nav btn(My Day) --> display the related content
 */

function pushDataOfSelectedBtnInWrapper() {

    Array.prototype.forEach.call(patterns, pattern => {
        pattern.addEventListener('click', () => {

            //remove the class selectedBtn to any btn before assign it to a current selected btn
            Array.prototype.forEach.call(patterns, ptrn => {
                ptrn.classList.remove('selectedBtn')
            })
            pattern.classList.add('selectedBtn')
            Array.prototype.forEach.call(pattern.classList, p =>{
                switch (p) {
                    case 'one':
                        console.log('one')
                        MyDayContentHTML()
                        break;
                    case 'two':
                        console.log('two')
                        break;
                    case 'three':
                        console.log('three')
                        break;
                    case 'four':
                        console.log('four')
                        break;
                    case 'five':
                        console.log('five')
                        break;
                    case 'six':
                        console.log('six')
                        break;
                    case 'seven':
                        console.log('seven')
                        break;
                    case 'eight':
                        console.log('eight')
                        break;
                    default:
                        console.log('nothing')
                        break;
                }

            })
        })

    })

}

function MyDayContentHTML(){
    resetWrapperContainer()
    const myDayContent = document.createElement('div');
    wrapper.style.background = 'url(renderer/images/bg-3.jpg) no-repeat center/cover';
    //appends myDayContent in Wrapper container
    myDayContent.innerHTML =
        `
                <div class="content-header">
                    <div class="left-head">
                        <div class="title">My Date</div>
                        <div id="date"></div>
                    </div>
                    <div class="btn">
                        <div class="reduceBtn">
                            <svg class="reduceBtnSVG" width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M17 7L12 12M12 12H15.75M12 12V8.25" stroke="#ffffff" stroke-width="1.272" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 18C2 16.1144 2 15.1716 2.58579 14.5858C3.17157 14 4.11438 14 6 14C7.88562 14 8.82843 14 9.41421 14.5858C10 15.1716 10 16.1144 10 18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18Z" stroke="#ffffff" stroke-width="1.272"></path> <path d="M11.9999 2C16.714 2 19.071 2 20.5354 3.46447C21.9999 4.92893 21.9999 7.28595 21.9999 12C21.9999 16.714 21.9999 19.0711 20.5354 20.5355C19.1784 21.8926 17.055 21.9921 12.9999 21.9994M2.00049 11C2.00779 6.94493 2.10734 4.8215 3.46438 3.46447C4.43813 2.49071 5.8065 2.16443 8 2.0551" stroke="#ffffff" stroke-width="1.272" stroke-linecap="round"></path> </g>
                            </svg>
                        </div>
                        <div class="rightDrawerBtn">
                            <svg class="reduceBtnSVG" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C8.97834 3.53846 6.4931 5.96125 6.55645 8.90671C6.57371 9.7088 6.87531 10.6295 7.26658 11.4799C7.65191 12.3175 8.09318 13.0214 8.32703 13.3731C8.47203 13.5911 8.59914 13.8339 8.68953 14.1022L9.45 16.359H14.55L15.3105 14.1022C15.4009 13.8339 15.528 13.5911 15.673 13.3731C15.9068 13.0214 16.3481 12.3176 16.7334 11.4799C17.1247 10.6295 17.4263 9.7088 17.4435 8.90672C17.5069 5.96125 15.0217 3.53846 12 3.53846ZM14.3329 17.8974H9.66715V18.1538C9.66715 19.4284 10.7116 20.4615 12 20.4615C13.2884 20.4615 14.3329 19.4283 14.3329 18.1537V17.8974ZM8.1119 17.253L7.21409 14.5887C7.17307 14.4669 7.11104 14.3439 7.02767 14.2185C6.7687 13.8291 6.28136 13.0526 5.85102 12.1172C5.4266 11.1946 5.02543 10.0495 5.00156 8.93944C4.91874 5.08909 8.15014 2 12 2C15.8499 2 19.0813 5.0891 18.9984 8.93944C18.9746 10.0495 18.5734 11.1946 18.149 12.1172C17.7187 13.0526 17.2313 13.8291 16.9724 14.2185C16.889 14.3439 16.827 14.4669 16.786 14.5887L15.8881 17.253V18.1537C15.8881 20.2778 14.1474 22 12 22C9.85267 22 8.1119 20.278 8.1119 18.1538V17.253Z" fill="#ffffff"></path> </g>
                            </svg>
                        </div>
                        <div class="themeBtn">
                            <svg class="reduceBtnSVG" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#ffffff"></circle> <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#ffffff"></circle> <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#ffffff"></circle> </g>
                            </svg>
                        </div>
                    </div>
                </div>
            `
    myDayContent.className = 'my-day-content';
    wrapper.appendChild(myDayContent)
    const dateID = document.getElementById('date')
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    dateID.textContent = currentDate.toLocaleDateString('en-US', options)
}

function resetWrapperContainer(){
    wrapper.style.background = "#171616FF";
    wrapper.innerText = "";
}

