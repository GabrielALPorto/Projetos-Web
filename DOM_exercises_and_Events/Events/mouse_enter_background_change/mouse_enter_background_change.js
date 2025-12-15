const changeBackground = function changeBackgroundColor (myDiv) {
  const getContainer = document.getElementById(myDiv)
  getContainer.addEventListener('mouseenter', changeBackground)
  myDiv.style.backgroundColor = 'blue'
}
