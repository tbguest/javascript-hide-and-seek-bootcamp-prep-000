
function getFirstSelector(selector) {
  var sel = document.querySelectorAll(selector)
  return sel[0]
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  let rlist = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rlist.length; i++) {
    rlist[i] = parseInt(rlist[i].innerHTML) + 1
  }
  return upRank
}

function deepestChild() {
  
}