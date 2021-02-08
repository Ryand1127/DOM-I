const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Title
document.title = 'Great Idea!';

//A Tag Stylings
let aTag = document.querySelectorAll('a');
console.log(aTag);
aTag[0].textContent = siteContent.nav['nav-item-1'];
aTag[1].textContent = siteContent.nav['nav-item-2'];
aTag[2].textContent = siteContent.nav['nav-item-3'];
aTag[3].textContent = siteContent.nav['nav-item-4'];
aTag[4].textContent = siteContent.nav['nav-item-5'];
aTag[5].textContent = siteContent.nav['nav-item-6'];

aTag.forEach(cColor => cColor.style.color = 'green');

//New Nav Items Below
let nav = document.querySelector('nav');
let newElement = document.createElement('a');
newElement.textContent = 'New';
nav.prepend(newElement);
newElement.style.color = "green";

let newElement2 = document.createElement('a');
newElement2.textContent = 'New2';
nav.appendChild(newElement2);
newElement2.style.color = "green";

//CTA Stylings
let ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent['cta']['h1'].split(" ").join("<br>");

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);

//Main-Contact-Footer Content Stylings

let h4Tags = document.querySelectorAll('h4');
console.log(h4Tags);

h4Tags[0].innerText = siteContent["main-content"]["features-h4"];
h4Tags[1].innerText = siteContent["main-content"]["about-h4"];
h4Tags[2].innerText = siteContent["main-content"]["services-h4"];
h4Tags[3].innerText = siteContent["main-content"]["product-h4"];
h4Tags[4].innerText = siteContent["main-content"]["vision-h4"];
//Contact h4 below
h4Tags[5].innerText = siteContent["contact"]["contact-h4"];

let pTags = document.querySelectorAll('p');
console.log(pTags);

pTags[0].innerText = siteContent["main-content"]["features-content"];
pTags[1].innerText = siteContent["main-content"]["about-content"];
pTags[2].innerText = siteContent["main-content"]["services-content"];
pTags[3].innerText = siteContent["main-content"]["product-content"];
pTags[4].innerText = siteContent["main-content"]["vision-content"];
//Contact <p> below
pTags[5].innerText = siteContent["contact"]["address"];
pTags[6].innerText = siteContent["contact"]["phone"];
pTags[7].innerText = siteContent["contact"]["email"];
//Footer <p> below
pTags[8].innerText = siteContent["footer"]["copyright"];

let mainLogo = document.querySelector('.middle-img');
mainLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


