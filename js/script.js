
document.addEventListener('DOMContentLoaded', function() {
    
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    initialSlide: 1,
    speed: 3000,
    simulateTouch: false,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

// Smooth scrolling
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

// Delete <br>
window.addEventListener('scroll', () => {
  const scrollingElements = document.querySelectorAll('.how-carousel');
  const scrollSpeeds = [0.5, -0.5]; // Швидкості крутіння для кожного елемента

  for (let i = 0; i < scrollingElements.length; i++) {
    const scrollingElement = scrollingElements[i];
    const elementTop = scrollingElement.getBoundingClientRect().top;
    const elementBottom = scrollingElement.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

    if (isVisible) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPositionX = scrollTop * scrollSpeeds[i];
      scrollingElement.style.backgroundPositionX = `${scrollPositionX}px`;
    }
  }
});
// Функція для перевірки розширення екрана та видалення тегу <br> з класом "why__br"
function checkScreenSize() {
  if (window.matchMedia('(max-width: 1400px)').matches) {
    var brElements = document.getElementsByClassName('why__br');
    while (brElements.length > 0) {
      brElements[0].parentNode.removeChild(brElements[0]);
    }
  }
}

// Виклик функції при завантаженні сторінки та при зміні розміру вікна
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

// Hamburger
  const menu = document.querySelector('.nav'),
    body = document.querySelector("body"),
    links = document.querySelectorAll(".nav__link"),
  menuItem = document.querySelectorAll('.nav_item'),
  hamburger = document.querySelector('.hamburger');

  links.forEach(link =>{
    link.addEventListener('click', () => {
      menu.classList.remove('nav_active');
      hamburger.classList.remove('hamburger_active');
    })
  })

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('nav_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    })
  })
// Slicky blocks
  document.querySelectorAll('.block').forEach((block, index) => {
    const blockHeight = block.getBoundingClientRect().height;
    const blockPosition = block.offsetTop;
    const windowHeight = window.innerHeight

    const blockBottomPosition = blockPosition + blockHeight - windowHeight;

    block.setAttribute('data-position', blockBottomPosition)
    block.setAttribute('data-height', blockHeight)
  })

  document.addEventListener('scroll', () => {
    const blocks = document.querySelectorAll('.block')
    let bodyHeight = 0;

    blocks.forEach(block => {
      if(window.scrollY >= +block.getAttribute('data-position')) {
        bodyHeight += +block.getAttribute('data-height')
        block.classList.add('done')
      } else {
        block.classList.remove('done')
      }

    })

    document.querySelector('body').style.paddingTop = bodyHeight + "px"
  })
  
  new WOW().init();
  const cardshow = document.querySelectorAll('.how__cards_img');
let sectionOffset = 150; // Інтервал зсуву відносно верху секції
const section = document.querySelector('.how');
let sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - sectionOffset; // Початкове значення sectionPosition
let initialSectionPosition = sectionPosition;

function handleScroll() {
  const section = document.querySelector('.how');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Поточна позиція прокрутки
  const windowWidth = window.innerWidth;
  let sectionOffset;

  if (windowWidth <= 450) {
    sectionOffset = 280; // Інтервал зсуву для ширини вікна менше або дорівнює 450
  } else if (windowWidth <= 576) {
    sectionOffset = 260; // Інтервал зсуву для ширини вікна між 450 і 576
  }  else {
    sectionOffset = 330; // Інтервал зсуву за замовчуванням для ширини вікна більше 744
  }

  sectionPosition = initialSectionPosition - sectionOffset;

  cardshow.forEach((card, index) => {
    const cardOffset = sectionPosition + (index * 150); // Зсув для кожної карти з додатковим зсувом 20 пікселів

    
    if (windowWidth <= 744) {
      if (scrollPosition >= cardOffset + 500) {
        card.classList.add('animate__fadeOutUpBig');
        card.classList.remove('animate__fadeInDown');
      } else {
        card.classList.add('animate__fadeInDown');
        card.classList.remove('animate__fadeOutUpBig');
      }
    } else {
      if (scrollPosition >= cardOffset + 500) {
        card.classList.add('animate__fadeOutUpBig');
        card.classList.remove('animate__fadeInUpBig', 'rotate-style');
      } else {
        card.classList.add('animate__fadeInUpBig', 'rotate-style');
        card.classList.remove('animate__fadeOutUpBig');
      } // Інтервал зсуву за замовчуванням
    }
  });
}

window.addEventListener('scroll', handleScroll);
const controller = new ScrollMagic.Controller();


window.addEventListener('scroll', () => {
  const section = document.querySelector('.why');
  const sectionPosition = section.getBoundingClientRect().top;

  if (sectionPosition < window.innerHeight) {
    document.body.style.backgroundColor = '#000'; // Задаємо чорний фон для <body>
  }
});
window.addEventListener('scroll', () => {
  const section = document.querySelector('.how');
  const sectionPosition = section.getBoundingClientRect().top;

  if (sectionPosition < window.innerHeight) {
    document.body.style.backgroundColor = '#fff'; // Задаємо чорний фон для <body>
    document.body.classList.add('black-bg'); // Додаємо клас для подальшої перевірки
  }
  
});
window.addEventListener('scroll', () => {
  const section = document.querySelector('.what');
  const sectionhow = document.querySelector('.how');
  const sectionHeight = section.offsetHeight; // Висота секції .what
  const sectionPosition = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Визначаємо 80% від висоти секції .what
  const eightyPercentOfSection = sectionHeight * 0.8;

  // Перевіряємо, чи користувач прогортав 80% секції .what
  if (sectionPosition < windowHeight - eightyPercentOfSection) {
    document.body.style.backgroundColor = '#000'; // Задаємо чорний фон для <body>
    document.body.classList.add('black-bg');
    sectionhow.classList.add("black-bg");
  }else{
    sectionhow.classList.remove("black-bg");
  }
});

const sections = document.querySelectorAll('section');
  firstsection = document.querySelector(".promo")
  // Функція, яка буде перевіряти ширину екрана та видаляти клас "block"
  function checkScreenWidthAndRemoveClass() {
    if (window.innerWidth < 744) {
      sections.forEach(section => {
        section.classList.remove('block');
        section.style.position = 'static'; // Додати стиль position: static до кожної секції
      });
      firstsection.style.position = "relative";

    } else {
      
    }
  }

  // Викликаємо функцію при завантаженні сторінки
  checkScreenWidthAndRemoveClass();

  // Слідкуємо за зміною розміру вікна та викликаємо функцію при необхідності
  window.addEventListener('resize', checkScreenWidthAndRemoveClass);

  


  
  
// Вибираємо секцію, яку потрібно закріпити


  // Створюємо сцену для закріплення секції
  // const scene = new ScrollMagic.Scene({
  //   triggerElement: section,
  //   duration: "120%",
  //   triggerHook: 'onLeave', // або 'onCenter' або 'onLeave', залежно від вашого бажаного ефекту
  // })
  // .on('enter', () => {
  //   const body = document.querySelector('body');
  //   body.classList.add('section-fixed'); // Додаємо клас 'section-fixed' до body при закріпленні секції
  // })
  // .on('leave', () => {
  //   const body = document.querySelector('body');
  //   body.classList.remove('section-fixed'); // Видаляємо клас 'section-fixed' з body при відкріпленні секції
  // })
  // .setPin(section) // Закріплюємо секцію
  // .addTo(controller);

  const elements = document.querySelector('.how');
  const almostSection = document.querySelector('.scrollmagic-pin-spacer');
  // elements.innerHTML = '';  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    // Отримати відносну позицію секції від верху сторінки
    const sectionOffsetTop = elements.offsetTop;
  
    // Перевірити, чи досягнуто необхідного прокручування відносно секції

  });


});
