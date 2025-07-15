"use strict";

const p = document.querySelectorAll('p');
console.log(p);

// const script = document.createElement('script');
// script.src = 'test.js';
// document.body.append(script); // этот код доказывает что по дефолту все работает асинхронно

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');

// изза того что бы в функции добавили async = false функции будут строго друг за другом работать