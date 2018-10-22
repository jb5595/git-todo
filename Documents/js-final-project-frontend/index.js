$("body").click(function(event){
  var windowWidth = document.documentElement.clientWidth;
  let elementOffsetX = event.clientX;
  let  elementOffsetY = event.clientY
  var viewportConverter = 100/windowWidth;
  console.log(`left: ${elementOffsetX*viewportConverter}Vw, Top: ${elementOffsetY*viewportConverter}`)
  



 })
