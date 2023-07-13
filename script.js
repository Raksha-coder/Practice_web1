const panels = document.querySelectorAll('.panel')

panels.forEach(p => {
    p.addEventListener('click', () => {
        //call back function 
        removeActiveClasses()
        p.classList.add('active')
        //adding class from css
    })
})

function removeActiveClasses() {
    panels.forEach(p => {
        p.classList.remove('active')
    })
}