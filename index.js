
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
  let gNode = document.querySelector('#grand-node')
  
  let current = gNode
  let last
  
  while (current) {
    last = current
    current = current.querySelector('div')
  }
  
  return last.innerHTML
  
}