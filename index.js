
function getFirstSelector(selector) {
  var sel = document.querySelectorAll(selector)
  return sel[0]
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  document.querySelectorAll('#ranked-list')
  return parseInt(n) + 1
}

function deepestChild() {
  
}