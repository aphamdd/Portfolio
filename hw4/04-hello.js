// Add your code here
let div = document.createElement('div');
div.id = 'content';
div.style.width = "600px";
div.style.margin = '0 auto';

let img = document.createElement('img');
img.src = "../images/me.jpg";
img.width = "300";
img.height = "300";
img.style.borderRadius = '50%';
img.style.display = "block";
img.style.margin = '0 auto';

let boldText = document.createElement('p');
let text = document.createElement('p');
boldText.innerText = "Hello! My name is Anthony Pham. I am a 4th year student at Portland State.";
text.innerText = "I am currently pursuing a Bachelors in Computer Science. I like to play games or read in my free time and I enjoy going on hikes from time to time.";
boldText.style.fontSize = "20px";
boldText.style.fontWeight = "900";

document.body.appendChild(div);
div.appendChild(img);
div.appendChild(boldText);
div.appendChild(text);