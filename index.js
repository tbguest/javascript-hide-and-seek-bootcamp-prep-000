
function getFirstSelector(selector) {
  var sel = document.querySelectorAll(selector)
  return sel[0]
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  let rlist = document.querySelectorAll('.ranked-list li')
  return parseInt(n) + 1
}

function deepestChild() {
  
}