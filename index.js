
function getFirstSelector(selector) {
  var sel = document.querySelectorAll(selector)
  return sel[0]
}

function nestedTarget() {
  var targ = document.querySelector('#nested.target')
  return targ
}

function increaseRankBy(n) {
  return parseInt(n) + 1
}

function deepestChild() {
  
}