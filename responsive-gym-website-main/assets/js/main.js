/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data')
sr.reveal('.home__img', {delay: 700, origin: 'bottom'})
.sr.reveal('.logos__img, .program__card', {interval: 100})





















/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMerssage = document.getElementById('calculate-message')


const calculateBmi = (e) =>{
    e.preventDefault()

    //check if the fields have a value

    if(calculateCm.value === '' || calculateKg.value === ''){
        //add and remove color
        calculateMerssage.classList.remove('color-green')
        calculateMerssage.classList.add('color-red')

        //show message
        calculateMerssage.textContent = 'Fill In The Fields'

         //Remove message three seconds
         setTimeout(()  => {
            calculateMerssage.textContent = ''
         }, 3000)

    } else{
        //BMI Formula
        const cm = calculateCm.value / 100,
        kg = calculateKg.value,
        bmi = Math.round(kg / (cm * cm))

        //show your health status
        if(bmi < 18.5){
            //add a color and display message
            calculateMerssage.classList.add('color-green')
            calculateMerssage.textContent = `Your BMI is ${bmi} and you are skinny`
        } else if(bmi < 25){
            calculateMerssage.classList.add('color-green')
            calculateMerssage.textContent = `Your BMI is ${bmi} and you are Healthy`
        }else{
            calculateMerssage.classList.add('color-green')
            calculateMerssage.textContent = `Your BMI is ${bmi} and you are fat`
        }

        //to clear the input field
        calculateCm.value = ''
        calculateKg.value = ''
        
        setTimeout(()  => {
            calculateMerssage.textContent = ''
        }, 4000)
        //remove message four seconds
    }
}    

calculateForm.addEventListener('submit', calculateBmi)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    //check if the field has a value
    if(contactUser.value === ''){
        // add and remove color

        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
    //show message
    contactMessage.textContent = 'You must enter your email'

    //remove the message after threee seconds
    setTimeout(() => {
        contactMessage.textContent = ''
    }, 3000)
    } else{
        //serviceID - templateID - #form - piblickey
        emailjs.sendForm('', '', '', '')


    }
}

contactForm.addEventListener('submit', sendEmail)

