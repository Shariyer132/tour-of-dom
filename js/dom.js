// give us every the every same tags
const allLi = document.getElementsByTagName("li");

// give us these tags which has the same class
const allTitles = document.getElementsByClassName('section-title');

// give us only the spacific tag 
const secondSection = document.getElementById("second-section");

// give the section styles 
secondSection.style.color = 'violet';

// add an new list item 
const secondList = document.getElementById('second-list');
// create the list item 
const li = document.createElement('li');
li.innerText = 'new list';
// add to the ul list 
secondList.appendChild(li);

// .innerHtml 
const main = document.getElementById('main-container');
const section = document.createElement("section");
section.innerHTML = `
   <h1> My dynamic section </h1>
   <p> Extra text added inside paragraph </p>
   <ul>
   <li> first item </li>
   <li> first item </li>
   <li> first item </li>
   <li> first item </li>
   <li> first item </li>
   </ul>
`
main.appendChild(section);