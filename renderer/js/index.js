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
                        resetWrapperContainer()
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
                            <div class="btn-hover">Keep on top</div>
                            <svg class="reduceBtnSVG" width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M17 7L12 12M12 12H15.75M12 12V8.25" stroke="#ffffff" stroke-width="1.272" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 18C2 16.1144 2 15.1716 2.58579 14.5858C3.17157 14 4.11438 14 6 14C7.88562 14 8.82843 14 9.41421 14.5858C10 15.1716 10 16.1144 10 18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18Z" stroke="#ffffff" stroke-width="1.272"></path> <path d="M11.9999 2C16.714 2 19.071 2 20.5354 3.46447C21.9999 4.92893 21.9999 7.28595 21.9999 12C21.9999 16.714 21.9999 19.0711 20.5354 20.5355C19.1784 21.8926 17.055 21.9921 12.9999 21.9994M2.00049 11C2.00779 6.94493 2.10734 4.8215 3.46438 3.46447C4.43813 2.49071 5.8065 2.16443 8 2.0551" stroke="#ffffff" stroke-width="1.272" stroke-linecap="round"></path> </g>
                            </svg>
                        </div>
                        <div class="rightDrawerBtn">
                            <div class="btn-hover">Suggestions</div>
                            <svg class="optionBtnSVG" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C8.97834 3.53846 6.4931 5.96125 6.55645 8.90671C6.57371 9.7088 6.87531 10.6295 7.26658 11.4799C7.65191 12.3175 8.09318 13.0214 8.32703 13.3731C8.47203 13.5911 8.59914 13.8339 8.68953 14.1022L9.45 16.359H14.55L15.3105 14.1022C15.4009 13.8339 15.528 13.5911 15.673 13.3731C15.9068 13.0214 16.3481 12.3176 16.7334 11.4799C17.1247 10.6295 17.4263 9.7088 17.4435 8.90672C17.5069 5.96125 15.0217 3.53846 12 3.53846ZM14.3329 17.8974H9.66715V18.1538C9.66715 19.4284 10.7116 20.4615 12 20.4615C13.2884 20.4615 14.3329 19.4283 14.3329 18.1537V17.8974ZM8.1119 17.253L7.21409 14.5887C7.17307 14.4669 7.11104 14.3439 7.02767 14.2185C6.7687 13.8291 6.28136 13.0526 5.85102 12.1172C5.4266 11.1946 5.02543 10.0495 5.00156 8.93944C4.91874 5.08909 8.15014 2 12 2C15.8499 2 19.0813 5.0891 18.9984 8.93944C18.9746 10.0495 18.5734 11.1946 18.149 12.1172C17.7187 13.0526 17.2313 13.8291 16.9724 14.2185C16.889 14.3439 16.827 14.4669 16.786 14.5887L15.8881 17.253V18.1537C15.8881 20.2778 14.1474 22 12 22C9.85267 22 8.1119 20.278 8.1119 18.1538V17.253Z" fill="#ffffff"></path> </g>
                            </svg>
                        </div>
                        <div class="themeBtn">
                            <div class="btn-hover">List options</div>
                            <svg class="themeBtnSVG" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#ffffff"></circle> <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#ffffff"></circle> <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#ffffff"></circle> </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="my-day-content-body">
                    <div class="my-day-content-hint">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#EFF2FA;" d="M485.517,441.379H26.483c-9.751,0-17.655-7.904-17.655-17.655V88.276h494.345v335.448 C503.172,433.475,495.268,441.379,485.517,441.379z"></path> <g> <path style="fill:#D7DEED;" d="M256,220.69c-82.748,0-150.069,67.316-150.069,150.069c0,25.523,6.442,49.557,17.727,70.621h264.683 c11.286-21.064,17.728-45.098,17.728-70.621C406.069,288.006,338.748,220.69,256,220.69z"></path> <rect x="8.828" y="88.276" style="fill:#D7DEED;" width="494.345" height="35.31"></rect> </g> <path style="fill:#FF6464;" d="M503.172,105.931H8.828c-4.875,0-8.828-3.953-8.828-8.828V44.138c0-4.875,3.953-8.828,8.828-8.828 h494.345c4.875,0,8.828,3.953,8.828,8.828v52.966C512,101.978,508.047,105.931,503.172,105.931z"></path> <path style="fill:#D2555A;" d="M503.172,105.931H8.828c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h494.345c4.875,0,8.828,3.953,8.828,8.828l0,0C512,101.978,508.047,105.931,503.172,105.931z"></path> <g> <path style="fill:#C7CFE2;" d="M432.552,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 s8.828,3.948,8.828,8.828v35.31C441.379,57.845,437.427,61.793,432.552,61.793z"></path> <path style="fill:#C7CFE2;" d="M476.69,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 c4.875,0,8.828,3.948,8.828,8.828v35.31C485.517,57.845,481.565,61.793,476.69,61.793z"></path> <path style="fill:#C7CFE2;" d="M35.31,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 s8.828,3.948,8.828,8.828v35.31C44.138,57.845,40.185,61.793,35.31,61.793z"></path> <path style="fill:#C7CFE2;" d="M388.414,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 s8.828,3.948,8.828,8.828v35.31C397.241,57.845,393.289,61.793,388.414,61.793z"></path> <path style="fill:#C7CFE2;" d="M344.276,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 c4.875,0,8.828,3.948,8.828,8.828v35.31C353.103,57.845,349.151,61.793,344.276,61.793z"></path> <path style="fill:#C7CFE2;" d="M300.138,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 s8.828,3.948,8.828,8.828v35.31C308.966,57.845,305.013,61.793,300.138,61.793z"></path> <path style="fill:#C7CFE2;" d="M256,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 s8.828,3.948,8.828,8.828v35.31C264.828,57.845,260.875,61.793,256,61.793z"></path> <path style="fill:#C7CFE2;" d="M211.862,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 c4.875,0,8.828,3.948,8.828,8.828v35.31C220.69,57.845,216.737,61.793,211.862,61.793z"></path> <path style="fill:#C7CFE2;" d="M167.724,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 s8.828,3.948,8.828,8.828v35.31C176.552,57.845,172.599,61.793,167.724,61.793z"></path> <path style="fill:#C7CFE2;" d="M123.586,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 c4.875,0,8.828,3.948,8.828,8.828v35.31C132.414,57.845,128.461,61.793,123.586,61.793z"></path> <path style="fill:#C7CFE2;" d="M79.448,61.793c-4.875,0-8.828-3.948-8.828-8.828v-35.31c0-4.879,3.953-8.828,8.828-8.828 c4.875,0,8.828,3.948,8.828,8.828v35.31C88.276,57.845,84.323,61.793,79.448,61.793z"></path> </g> <g> <path style="fill:#D7DEED;" d="M97.103,229.517h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C105.931,225.565,101.978,229.517,97.103,229.517z"></path> <path style="fill:#D7DEED;" d="M97.103,335.448h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C105.931,331.496,101.978,335.448,97.103,335.448z"></path> <path style="fill:#D7DEED;" d="M97.103,282.483h-35.31c-4.875,0-8.828-3.953-8.828-8.828V256c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C105.931,278.53,101.978,282.483,97.103,282.483z"></path> <path style="fill:#D7DEED;" d="M97.103,388.414h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C105.931,384.461,101.978,388.414,97.103,388.414z"></path> <path style="fill:#D7DEED;" d="M167.724,229.517h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C176.552,225.565,172.599,229.517,167.724,229.517z"></path> <path style="fill:#D7DEED;" d="M167.724,282.483h-35.31c-4.875,0-8.828-3.953-8.828-8.828V256c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C176.552,278.53,172.599,282.483,167.724,282.483z"></path> <path style="fill:#D7DEED;" d="M238.345,229.517h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C247.172,225.565,243.22,229.517,238.345,229.517z"></path> <path style="fill:#D7DEED;" d="M308.966,229.517h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C317.793,225.565,313.841,229.517,308.966,229.517z"></path> <path style="fill:#D7DEED;" d="M379.586,229.517h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C388.414,225.565,384.461,229.517,379.586,229.517z"></path> <path style="fill:#D7DEED;" d="M379.586,282.483h-35.31c-4.875,0-8.828-3.953-8.828-8.828V256c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C388.414,278.53,384.461,282.483,379.586,282.483z"></path> <path style="fill:#D7DEED;" d="M450.207,229.517h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C459.034,225.565,455.082,229.517,450.207,229.517z"></path> <path style="fill:#D7DEED;" d="M450.207,335.448h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C459.034,331.496,455.082,335.448,450.207,335.448z"></path> <path style="fill:#D7DEED;" d="M450.207,282.483h-35.31c-4.875,0-8.828-3.953-8.828-8.828V256c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C459.034,278.53,455.082,282.483,450.207,282.483z"></path> <path style="fill:#D7DEED;" d="M450.207,388.414h-35.31c-4.875,0-8.828-3.953-8.828-8.828v-17.655c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828v17.655C459.034,384.461,455.082,388.414,450.207,388.414z"></path> </g> <g> <path style="fill:#C7CFE2;" d="M97.103,176.552h-35.31c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828l0,0C105.931,172.599,101.978,176.552,97.103,176.552z"></path> <path style="fill:#C7CFE2;" d="M167.724,176.552h-35.31c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828l0,0C176.552,172.599,172.599,176.552,167.724,176.552z"></path> <path style="fill:#C7CFE2;" d="M238.345,176.552h-35.31c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828l0,0C247.172,172.599,243.22,176.552,238.345,176.552z"></path> <path style="fill:#C7CFE2;" d="M308.966,176.552h-35.31c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828l0,0C317.793,172.599,313.841,176.552,308.966,176.552z"></path> </g> <g> <path style="fill:#FF6464;" d="M379.586,176.552h-35.31c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828l0,0C388.414,172.599,384.461,176.552,379.586,176.552z"></path> <path style="fill:#FF6464;" d="M450.207,176.552h-35.31c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828 h35.31c4.875,0,8.828,3.953,8.828,8.828l0,0C459.034,172.599,455.082,176.552,450.207,176.552z"></path> <circle style="fill:#FF6464;" cx="361.931" cy="211.862" r="8.828"></circle> <circle style="fill:#FF6464;" cx="432.552" cy="211.862" r="8.828"></circle> <circle style="fill:#FF6464;" cx="361.931" cy="264.828" r="8.828"></circle> <circle style="fill:#FF6464;" cx="432.552" cy="264.828" r="8.828"></circle> <circle style="fill:#FF6464;" cx="432.552" cy="317.793" r="8.828"></circle> <circle style="fill:#FF6464;" cx="432.552" cy="370.759" r="8.828"></circle> </g> <circle style="fill:#FFF0E6;" cx="256" cy="370.759" r="123.586"></circle> <circle style="fill:#FFE2C7;" cx="256" cy="370.759" r="61.793"></circle> <path style="fill:#707487;" d="M233.931,401.655c-2.259,0-4.518-0.862-6.241-2.586c-3.448-3.448-3.448-9.035,0-12.483l83.862-83.862 c3.448-3.448,9.035-3.448,12.483,0s3.448,9.035,0,12.483l-83.862,83.862C238.449,400.793,236.19,401.655,233.931,401.655z"></path> <path style="fill:#464655;" d="M317.793,379.586h-88.276c-4.875,0-8.828-3.948-8.828-8.828c0-4.879,3.953-8.828,8.828-8.828h88.276 c4.875,0,8.828,3.948,8.828,8.828C326.621,375.638,322.668,379.586,317.793,379.586z"></path> <circle style="fill:#5B5D6E;" cx="256" cy="370.759" r="17.655"></circle> <path style="fill:#FFDCB9;" d="M256,503.172c-73.013,0-132.414-59.396-132.414-132.414S182.987,238.345,256,238.345 s132.414,59.396,132.414,132.414S329.013,503.172,256,503.172z M256,256c-63.281,0-114.759,51.482-114.759,114.759 S192.719,485.517,256,485.517s114.759-51.482,114.759-114.759S319.281,256,256,256z"></path> <g> <path style="fill:#E1BE91;" d="M158.897,361.931h-17.655c-4.875,0-8.828,3.953-8.828,8.828l0,0c0,4.875,3.953,8.828,8.828,8.828 h17.655c4.875,0,8.828-3.948,8.828-8.828C167.724,365.879,163.772,361.931,158.897,361.931z"></path> <path style="fill:#E1BE91;" d="M370.759,361.931h-17.655c-4.875,0-8.828,3.953-8.828,8.828l0,0c0,4.875,3.953,8.828,8.828,8.828 h17.655c4.875,0,8.828-3.948,8.828-8.828C379.586,365.879,375.634,361.931,370.759,361.931z"></path> <path style="fill:#E1BE91;" d="M264.828,273.655V256c0-4.875-3.953-8.828-8.828-8.828l0,0c-4.875,0-8.828,3.953-8.828,8.828v17.655 c0,4.875,3.948,8.828,8.828,8.828C260.879,282.483,264.828,278.53,264.828,273.655z"></path> <path style="fill:#E1BE91;" d="M264.828,485.517v-17.655c0-4.875-3.953-8.828-8.828-8.828l0,0c-4.875,0-8.828,3.953-8.828,8.828 v17.655c0,4.875,3.948,8.828,8.828,8.828C260.879,494.345,264.828,490.392,264.828,485.517z"></path> </g> </g>
                        </svg>
                        <h3>Wondering where your tasks are?</h3>
                        <p>Any tasks you didn't complete in My</p>
                        <p>Day last time show up in the</p>
                        <p>suggestions pane.</p>
                       
                    </div>
                </div>
                <div class="my-day-footer">
                    <svg class="add-task-icon add-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17" stroke="#ffffff" stroke-width="0.8399999999999999" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                    </svg>
                    <svg class="add-task-icon circle1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                    </svg>
                    <input  placeholder="Add a task" class="my-day-footer-input" type="text">
                </div>   
            `
    myDayContent.className = 'my-day-content';
    wrapper.appendChild(myDayContent)
    const dateID = document.getElementById('date')
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    dateID.textContent = currentDate.toLocaleDateString('en-US', options)
    myDayPushTaskInWrapper()
}

function resetWrapperContainer(){
    wrapper.style.background = "#171616FF";
    wrapper.innerText = "";
}

function myDayPushTaskInWrapper(){
    const crossIcon = document.getElementsByClassName('add-icon')
    const circleIcon = document.getElementsByClassName('circle1')
    const myDayInput = document.getElementsByClassName('my-day-footer-input')
    Array.prototype.forEach.call(myDayInput, task => {
        task.addEventListener('focusin', () =>{
            sortCollectionClassNameToHideShowIcon(circleIcon, crossIcon)
            task.placeholder = 'Try typing "Pay utilities bill by by Friday 6pm" '
        })
    })
    Array.prototype.forEach.call(myDayInput, task =>{
        task.addEventListener('focusout', () =>{
           sortCollectionClassNameToHideShowIcon(crossIcon, circleIcon)
            task.placeholder = 'Add a task'
        })
    })
}
function sortCollectionClassNameToHideShowIcon(classNameToShow, classNameToHide){
    Array.prototype.forEach.call(classNameToShow, icon =>{
        icon.style.visibility = 'visible'
        Array.prototype.forEach.call(classNameToHide, cross =>{
            cross.style.visibility = 'hidden'
        })
    })
}

