
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
    rlist[i].innerHTML = parseInt(rlist[i].innerHTML) + n
  }
  return rlist
}

function deepestChild() {
  gNode = document.querySelector('#grand-node')
  
  let current = gNode
  let next = []
  
  while (current.hasChildNodes()) {
    for (let i = 0; i < current.length; i++) {
      next.push(current[i])
    }
  }
  
}