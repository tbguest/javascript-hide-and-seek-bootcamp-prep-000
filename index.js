
function getFirstSelector(selector) {
  var sel = document.querySelectorAll(selector)
  return sel[0]
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
  // return targ
}

function increaseRankBy(n) {
  return parseInt(n) + 1
}

function deepestChild() {
  
}