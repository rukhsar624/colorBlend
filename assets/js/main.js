var fullOne = false
var fullTwo = false
var fullThree = false
var colorOne = ''
var colorTwo = ''
var colorThree = ''
var firstRun = 0
var secondRun = 0
var thirdRun = 0
var fullOne1 = false
var fullTwo1 = false
var fullThree1 = false
var colorOne1 = ''
var colorTwo1 = ''
var colorThree1 = ''
var firstRun1 = 0
var secondRun1 = 0
var thirdRun1 = 0
let mixArray = []
let hexArray = []
let selectedArray = []
let RGB = []
let Slider1 = document.getElementById('4')
let Slider2 = document.getElementById('5')
let Slider3 = document.getElementById('6')
let weight = [1, 1, 1];
document.getElementById('range1').innerHTML = 100 + '%'
document.getElementById('range2').innerHTML = 100 + '%'
document.getElementById('range3').innerHTML = 100 + '%'
Slider1.addEventListener('input', () => {
  if (Slider1.value == '0') {
    document.getElementById('range1').innerHTML = Slider1.value + '%'
    console.log('range1', Slider1.value)
    weight[0] = Number(Slider1.value) / 100
    getAvg1(RGB)

  } else {
    document.getElementById('range1').innerHTML = Slider1.value + '%'
    console.log('range1', Slider1.value)
    console.log(Number(Slider1.value) / 100)
    weight[0] = Number(Slider1.value) / 100;
    getAvg1(RGB)
  }
})
Slider2.addEventListener('input', () => {
  if (Slider2.value == '0') {
    document.getElementById('range2').innerHTML = Slider2.value + '%'
    console.log('range2', Slider2.value)
    weight[1] = Number(Slider1.value) / 100
    getAvg1(RGB)
  } else {
    document.getElementById('range2').innerHTML = Slider2.value + '%'
    console.log('range2', Slider2.value)
    console.log(Number(Slider2.value) / 100)
    weight[1] = Number(Slider2.value) / 100;
    getAvg1(RGB)
  }
})
Slider3.addEventListener('input', () => {
  if (Slider3.value == '0') {
    document.getElementById('range3').innerHTML = Slider3.value + '%'
    console.log('range3', Slider3.value)
    weight[2] = Number(Slider3.value) / 100
    getAvg1(RGB)
  } else {
    document.getElementById('range3').innerHTML = Slider3.value + '%'
    console.log('range3', Slider3.value)
    console.log(Number(Slider3.value) / 100)
    weight[2] = Number(Slider3.value) / 100;
    getAvg1(RGB)
  }
})

// range slider avgvalue
var getAvg1 = function (list) {
  var rgb_total = { r: 0, g: 0, b: 0 }
  var weight_total = 0;
  console.log(list,"listprint");
  list.map((elem, i) => {
    rgb_total.r = rgb_total.r + Number(elem.r) * weight[i]
    rgb_total.g = rgb_total.g + Number(elem.g) * weight[i]
    rgb_total.b = rgb_total.b + Number(elem.b) * weight[i]
    weight_total = weight_total + weight[i]
    console.log(weight[i], 'color weight')
    console.log(weight_total, 'weight_total')
    console.log(elem, 'color')
    console.log(rgb_total, 'rgb_total')

    //  console.log(l.weight, 'color weight');
    //     console.log(weight_total, 'weight_total');
    //     console.log(hexToR(l.color),hexToG(l.color),hexToB(l.color), 'color');
    //     console.log(rgb_total, 'rgb_total')
  })

  var rgbMix = {
    r: ~~(rgb_total.r / weight_total),
    g: ~~(rgb_total.g / weight_total),
    b: ~~(rgb_total.b / weight_total),
  }
  // console.log(rgbMix, 'rgbMix')
  setElem(rgbMix)
}

const setElem = (rgbMix) => {
  let rgbMix1 = `rgb(${rgbMix.r}, ${rgbMix.g}, ${rgbMix.b})`
  // console.log(rgbMix1, 'Mixed Color')
  document.getElementById('rgbResult').style.backgroundColor = rgbMix1
}
$('button').on('click', function () {
  if (fullOne && colorOne == this.value) {
    document.getElementById('1').style.background = '#fff'
    fullOne = false
    colorOne = ''
    firstRun++
  } else if (fullTwo && colorTwo == this.value) {
    document.getElementById('2').style.background = '#fff'
    fullTwo = false
    colorTwo = ''
    secondRun++
  } else if (fullThree && colorThree == this.value) {
    document.getElementById('3').style.background = '#fff'
    fullThree = false
    colorThree = ''
    thirdRun++
  } else if (!fullOne && colorOne == '') {
    document.getElementById('1').style.background = this.value
    colorOne = this.value
    fullOne = true
  } else if (!fullTwo && colorTwo == '') {
    document.getElementById('2').style.background = this.value
    colorTwo = this.value
    fullTwo = true
  } else if (!fullThree && colorThree == '') {
    document.getElementById('3').style.background = this.value
    colorThree = this.value
    fullThree = true
  }

  console.log(fullOne, colorOne, fullTwo, colorTwo, fullThree, colorThree)
  if (fullOne1 && colorOne1 == this.value) {
    document.getElementById('4').style.background = '#fff'
    // document.getElementById('5').style.display = 'none'
    // document.getElementById('range1').style.display = 'none'
    fullOne1 = false
    colorOne1 = ''
    firstRun1++
  } else if (fullTwo1 && colorTwo1 == this.value) {
    document.getElementById('5').style.background = '#fff'
    // document.getElementById('5').style.display = 'none'
    // document.getElementById('range2').style.display = 'none'
    fullTwo1 = false
    colorTwo1 = ''
    secondRun1++
  } else if (fullThree1 && colorThree1 == this.value) {
    document.getElementById('6').style.background = '#fff'
    // document.getElementById('5').style.display = 'none'
    // document.getElementById('range3').style.display = 'none'
    fullThree1 = false
    colorThree1 = ''
    thirdRun1++
  } else if (!fullOne1 && colorOne1 == '') {
    // document.getElementById('4').style.display = 'block'
    // document.getElementById('range1').style.display = 'block'
    document.getElementById('4').style.background = this.value
    colorOne1 = this.value
    fullOne1 = true
  } else if (!fullTwo1 && colorTwo1 == '') {
    // document.getElementById('5').style.display = 'block'
    // document.getElementById('range2').style.display = 'block'
    document.getElementById('5').style.background = this.value
    colorTwo1 = this.value
    fullTwo1 = true
  } else if (!fullThree1 && colorThree1 == '') {
    // document.getElementById('6').style.display = 'block'
    // document.getElementById('range3').style.display = 'block'
    document.getElementById('6').style.background = this.value
    colorThree1 = this.value
    fullThree1 = true
  }

  if (!colorOne && !colorTwo && !colorThree) {
    RGB = []
    weight=[1,1,1]
    document.getElementById('range1').innerHTML = 100 + '%'
    document.getElementById('range2').innerHTML = 100 + '%'
    document.getElementById('range3').innerHTML = 100 + '%'
    document.getElementById('rgbResult').style.backgroundColor = '#fff'
  } else if (colorOne && !colorTwo && !colorThree) {
    hexArray = []
    weight=[1,0,0]
    // document.getElementById('range1').innerHTML = 100 + '%'  //new code 
    document.getElementById('range2').innerHTML = 100 + '%'
    document.getElementById('range3').innerHTML = 100 + '%'
    RGB = []
    const rgb = colorOne
      .substring(4, colorOne.length - 1)
      .replace(/ /g, '')
      .split(',')

    console.log(rgb)
    const rgbObj = { r: rgb[0], g: rgb[1], b: rgb[2] }
    RGB.push(rgbObj)
    console.log(rgbObj)
    // const hex = rgbToHex(rgbObj)
    // console.log(hex)
    // hexArray.push(hex)
    console.log(RGB, 'Main Array1')
    getAvg1(RGB)
  } else if (colorOne && colorTwo && !colorThree) {
    RGB = []
    hexArray = []
    weight=[1,1,0]
    // document.getElementById('range1').innerHTML = 100 + '%'  //new code 
    // document.getElementById('range2').innerHTML = 100 + '%'  //new code 
    document.getElementById('range3').innerHTML = 100 + '%'
    const rgb1 = colorOne
      .substring(4, colorOne.length - 1)
      .replace(/ /g, '')
      .split(',')

    console.log(rgb1)
    const rgbObj1 = { r: rgb1[0], g: rgb1[1], b: rgb1[2] }
    RGB.push(rgbObj1)

    const rgb2 = colorTwo
      .substring(4, colorTwo.length - 1)
      .replace(/ /g, '')
      .split(',')

    console.log(rgb2)
    const rgbObj2 = { r: rgb2[0], g: rgb2[1], b: rgb2[2] }
    RGB.push(rgbObj2)
    console.log(RGB)
    console.log(RGB, 'Main Array2')
    getAvg1(RGB)
  } else {
    RGB = []
    hexArray = []
    weight=[1,1,1]
    document.getElementById('range1').innerHTML = 100 + '%'
    document.getElementById('range2').innerHTML = 100 + '%'
    document.getElementById('range3').innerHTML = 100 + '%'

    const rgb1 = colorOne
      .substring(4, colorOne.length - 1)
      .replace(/ /g, '')
      .split(',')

    console.log(rgb1)
    const rgbObj1 = { r: rgb1[0], g: rgb1[1], b: rgb1[2] }
    RGB.push(rgbObj1)

    const rgb2 = colorTwo
      .substring(4, colorTwo.length - 1)
      .replace(/ /g, '')
      .split(',')

    console.log(rgb2)
    const rgbObj2 = { r: rgb2[0], g: rgb2[1], b: rgb2[2] }
    RGB.push(rgbObj2)

    const rgb3 = colorThree
      .substring(4, colorThree.length - 1)
      .replace(/ /g, '')
      .split(',')

    console.log(rgb3)
    const rgbObj3 = { r: rgb3[0], g: rgb3[1], b: rgb3[2] }
    RGB.push(rgbObj3)
    console.log(RGB)
    console.log(RGB, 'Main Array3')
    getAvg1(RGB)
  }
  console.log('hexARray', hexArray)
})

// const getAvg = (array) => {
//   let tempR, tempB, tempG
//   if (array.length == 1) {
//     tempR = array[0].r
//     tempG = array[0].g //g
//     tempB = array[0].b //g
//   } else if (array.length == 2) {
//     tempR = (Number(array[0].r) + Number(array[1].r)) / 2
//     tempG = (Number(array[0].g) + Number(array[1].g)) / 2 //g
//     tempB = (Number(array[0].b) + Number(array[1].b)) / 2 //g
//   } else {
//     tempR = (Number(array[0].r) + Number(array[1].r) + Number(array[2].r)) / 3
//     tempG = (Number(array[0].g) + Number(array[1].g) + Number(array[2].g)) / 3 //g
//     tempB = (Number(array[0].b) + Number(array[1].b) + Number(array[2].b)) / 3 //g
//   }

//   let rgbMix = `rgb(${tempR}, ${tempG}, ${tempB})`
//   console.log(rgbMix, 'klkl')
//   document.getElementById('rgbResult').style.backgroundColor = rgbMix
// }

