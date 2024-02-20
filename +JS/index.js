window.onload = function() {

const welcomeText = document.querySelector('.welcome-text');

const navArea = document.querySelector('.nav-area');
const navLinks = navArea.querySelectorAll('a');
navLinks.forEach(link => {
  link.style.color = 'blue';
});

const newElement = document.createElement('p');
newElement.textContent = 'Hai Rapid';
welcomeText.appendChild(newElement);

const youtubeLink = document.querySelector('a[href="https://www.youtube.com/@FCRapid1923"]');
youtubeLink.addEventListener('mouseover', () => {
  youtubeLink.style.fontSize = '20px';
});

youtubeLink.addEventListener('mouseout', () => {
  youtubeLink.style.fontSize = 'inherit';
});


const audio = document.querySelector('audio');
audio.volume = 0.5;

const h1 = document.querySelector('h1');

setInterval(() => {
  h1.style.color = getRandomColor();
}, 1000);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

if (localStorage.getItem('numar_accesari')) {
  let numarAccesari = parseInt(localStorage.getItem('numar_accesari'));
  numarAccesari++;
  localStorage.setItem('numar_accesari', numarAccesari);
} else {
  localStorage.setItem('numar_accesari', 1);
}

console.log('Numărul de accesări:', localStorage.getItem('numar_accesari'));

const elementToChange = document.querySelector('.welcome-text');

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeProperties() {
  const color = `rgb(${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, ${getRandomValue(0, 255)})`;
  const fontSize = `${getRandomValue(16, 32)}px`;
  const top = `${getRandomValue(-10, 10)}px`;
  const left = `${getRandomValue(-10, 10)}px`;

  elementToChange.style.color = color;
  elementToChange.style.fontSize = fontSize;
  elementToChange.style.top = top;
  elementToChange.style.left = left;
}

setInterval(changeProperties, 1000);

const logo = document.querySelector('.logo');

if ('Notification' in window) {
  if (Notification.permission === 'granted') {
    setupNotification();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function(permission) {
      if (permission === 'granted') {
        setupNotification();
      }
    });
  }
}

function showNotification() {
  if ('Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification('Mesaj de notificare', {
      body: 'Ai apăsat pe logo!',
      icon: 'path/to/notification-icon.png'
    });
     notification.onclick = function(event) {
      window.open('https://www.exemplu.com');
      notification.close();
    };
  }
}

function setupNotification() {
  logo.addEventListener('click', function() {
    showNotification();
  });
}

}