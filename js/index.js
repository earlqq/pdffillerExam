//splitting screen into equal parts and getting line height
function getLineHeight(count) {
  return 100 / count;
}

//creating lines and elements inside
function addItemsToHtml (array) {
  var lineHeight = getLineHeight(array.lines.length);
  for (var i = 0; i < array.lines.length; i++) {
    var line = document.createElement('div');
    line.className = "line";
    line.style.height = lineHeight +"vh";
    line.style.width = "100%"; //as this value is static for all lines due to the task - it would be better to set it in css
    line.style.background = array.lines[i].background;
    document.body.appendChild(line);
    for (var j = 0; j < array.lines[i].elements.length; j++) { //creating elements inside of the line
      var element = document.createElement('div');
      element.className = "element";
      element.style.height = lineHeight + "vh";
      element.style.width = array.lines[i].elements[j].width + "%";
      element.style.background = array.lines[i].elements[j].background;
      element.style.display = "inline-block"; //tihs one is also static - it would be better to set it in css
      element.style.opacity = 0.7; //opacity is used here to see color switch if u don't use dev tools
      document.getElementsByClassName("line")[i].appendChild(element);
    }
  }
  startColorSwitch(array); //starting to switch line background colors
}

//getting random color
function getRandomColor () {
  return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
}

//setting color to class background
function setColorToClass (className, count) {
  document.getElementsByClassName(className)[count].style.background = getRandomColor();
}

//looping color switch, update time is takken from array
function startColorSwitch (array) {
  for (var i = 0; i < array.lines.length; i++) {
    setInterval("setColorToClass('line'," + i + ")", array.lines[i].updateTime);
  }
}

//array of items,
var params = {
  lines: [
    {
      background: 'blue',
      updateTime: 2000,
      elements: [{
        background: 'red',
        width: 50
      },
      {
        background: 'green',
        width: 50
      }]
    },
    {
      background: 'yellow',
      updateTime: 1000,
      elements: [{
        background: 'white',
        width: 20
      },
      {
        background: 'orange',
        width: 60
      },
      {
        background: 'purple',
        width: 20
      }]
    },
    {
      background: 'blue',
      updateTime: 500,
      elements: [{
        background: 'red',
        width: 25
      },
      {
        background: 'green',
        width: 25
      },
      {
        background: 'black',
        width: 40
      },
      {
        background: 'grey',
        width: 10
      }]
    }
  ]
}
