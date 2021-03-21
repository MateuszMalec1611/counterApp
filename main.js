'use scrict';
const settings = document.querySelector('.settings');
const saveBtn = document.querySelector('.save');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.image-section');

const imageInput = document.querySelector('#event-image');
const nameInput = document.querySelector('#event-name');
const dayInput = document.querySelector('#event-day');
const monthInput = document.querySelector('#event-month');
const yearInput = document.querySelector('#event-year');

const eventName = document.querySelector('.event');
const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');
let userTimes;

const setTime = () => {
    const currentTime = new Date();
    const result = userTimes - currentTime;

    const days = Math.floor(result / 1000 / 60 / 60 / 24);
    const hours = Math.floor(result / 1000 / 60 / 60 % 24);
    const minutes = Math.floor(result / 1000 / 60 % 60);
    const seconds = Math.floor(result / 1000 % 60);

    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;
}

const appUpdate = () => {
    eventName.textContent = nameInput.value;
    userTimes = new Date(`${monthInput.value} ${dayInput.value} ${yearInput.value}`);
    imageSection.style.backgroundImage = `url(${imageInput.value})`;
    setTime();
}

const handleMenu = () => {
    settings.classList.toggle('active');
}

settingsBtn.addEventListener('click', handleMenu);
saveBtn.addEventListener('click', appUpdate);
appUpdate();
setInterval(appUpdate, 1000);