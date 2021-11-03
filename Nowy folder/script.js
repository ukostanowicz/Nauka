
function hideText() {
    var element = document.getElementById('title')
    element.style.display = 'none'
  };
  
  function showText() {
    var element = document.getElementById('title')
    element.style.display = 'flex';
  };
  
  function addStyle() {
    document.getElementById('jaguar').setAttribute("class", "newStyle");
  };
  
  function deleteStyle() {
    document.getElementById('jaguar').removeAttribute("class", "newStyle");
  };
  
  function addElement() {
    var ul = document.getElementById("myList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Kiwi"));
    ul.appendChild(li);
  
  }

  
  

  function deleteElement() {
    var ul = document.getElementById("myList");
    ul.removeChild(Array.from(ul.childNodes).find(v => v.innerHTML == 'Banana'));
  
  }