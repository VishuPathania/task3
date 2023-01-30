document.all[10].textContent= 'Hello';
var headerTitle= document.getElementById('header-title');

//Make the title have a black border as the youtuber does

headerTitle.style.border = 'solid 3px #000';
var items= document.getElementsByClassName('title');
console.log(items);

  // Now make ADD ITEM bold and chage the font color to greeen
  // no need to iterate as single element 
    items[0].style.fontWeight = 'bold';
    items[0].style.color = 'green';








