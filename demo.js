
function arrayToList(ary) {
  var i = 0
  var List = {}
  if (ary[i])
  List[0] = i
  List[1] = List[0]
  return
}


function listToArray1(list) {
  var array = []
  while(list != null){
    array.push(list.value)
    list = list.next
  }
  return array
}

function listToArray2(list) {
  if (list==null) {
    return []
  }
  var tail = list.next
  return [list.value, ...listToArray2(tail)]
}

function size(list) {
  var c = 0
  while (list != null){

  }
}

function insert(list, index, value) {
  var idx = 0
  while (list) {
    
  }
}

function nth(list, index) {
  var i = 0
  if (i == index){
    return list.value
  }
  i++
  return nth(list.next, i)
}


function random() {
  var twoNum = '' + rand(0.2) + rand(0.2)
  if(twoNum == '10'){
    return 1
  }
  if(twoNum == '01'){
    return 0
  }
}
function rand(p){
  if (Math.random < p) {
    return 1
  }else{
    return false
  }
}
function sumri() {
  var sum = {1:0,0:0}
  for (let i = 0; i < 100; i++) {
    var j = random()
    sum[j]++
  }
}
// 1 和 0 的概率还是50%

// 冒泡排序
function bubbleSort(ary) {
  for (let i = 0; i < ary.length - 1; i++) {
    for (let j = 0; j < ary.length - 1 - i; j++) {
      var left = 0
      var right = 1
      var temp = 0
      if (ary[left] > ary [right]) {
        temp = 
      }
    }
  }
}

// 老师冒泡
function swap(ary, i, j) {
  if (i != j) {
    var t = ary[i]
    ary[i] = ary[j]
    ary[j] = t
  }
}
function bubbleSort(ary) {
  for(var j = ary.length - 2; j >= 0; j--) {
    var swapped = false
    for(var i = 0; i <= j; i++) {
      if (ary[i] > ary[i + 1]) {
        swap(ary, i, i + 1)
        swapped = true
      }
    }
    if (!swapped) {
      break
    }
  }
  return ary
}
// 

// 归并排序 Merge Sort
function mergeSort(ary) {
  var i = 0
  var newAry = []
  while (x) {
    if ary1[i] >
  }
}

function mergeSort(ary) {
  if (ary.length < 2) {
    return ary.slice()
  }
  var mid = ary.length >> 1
  var left = ary.slice(0, mid)
  var right = ary.slice(mid)

  mergeSort(left)
  mergeSort(right)

  var i = 0
  var j = 0
  var k = 0

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      ary[k++] = left[i++]
    } else {
      ary[k++] = right[j++]
    }
  }
  while (i < left.length) {
    ary[k++] = left[i++]
  }
  while (j < right.length) {
    ary[k++] = right[j++]
  }
  return ary
}