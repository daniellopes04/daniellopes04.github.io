window.onload = function() {
    var selectedTheme = localStorage.getItem('selected-theme')

    const themeButton = document.getElementsByClassName('light-dark-switch');
    const themeButtonSelected = document.getElementsByClassName('light-dark-switch selected')[0]
    const themeButtonHidden = document.getElementsByClassName('light-dark-switch hidden')[0]
    const themeButtonDark = document.getElementById('dark-button')
    const themeButtonLight = document.getElementById('light-button')

    if (selectedTheme) {
        if (selectedTheme === 'dark') {
            themeButtonDark.classList.add('hidden')
            themeButtonDark.classList.remove('selected')
            themeButtonLight.classList.remove('hidden')
            themeButtonLight.classList.add('selected')
        } else {
            themeButtonDark.classList.remove('hidden')
            themeButtonDark.classList.add('selected')
            themeButtonLight.classList.add('hidden')
            themeButtonLight.classList.remove('selected')
        }

        document.documentElement.setAttribute('data-theme', selectedTheme)
    }
    

    for (const button of themeButton) {
        button.addEventListener('click', () => {
            if (button === themeButtonDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('selected-theme', 'dark')
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('selected-theme', 'light')
            }
        
            themeButtonSelected.classList.toggle('selected')
            themeButtonSelected.classList.toggle('hidden')
            themeButtonHidden.classList.toggle('selected')
            themeButtonHidden.classList.toggle('hidden')
            
        })
    }

    document.getElementById('scroll-up-button').addEventListener('click', scrollToTop)
}

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scroll-up-button').style.display = 'block'
    } else {
        document.getElementById('scroll-up-button').style.display = 'none'
    }
};

function scrollToTop() {
    // For Safari
    // document.body.scrollTop = 0

    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    }) 
}
