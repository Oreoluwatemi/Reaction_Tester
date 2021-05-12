 let startTime = new Date().getTime()
 let shape = document.getElementById("shape")

 function shapeAppear() {
     const top = Math.random() * 400
     const width = Math.random() * 500
     const left = Math.random() * 300

     shape.style.width = width + 'px'
     shape.style.height = width + 'px'
     shape.style.top = top + 'px'
     shape.style.left = left + 'px'
     shape.style.display = 'block'
     shape.style.backgroundColor = 'red'
     if (Math.random() > 0.5) {
         shape.style.borderRadius = '50%'
     } else {
         shape.style.borderRadius = '0%'
     }
     startTime = new Date().getTime()
 }

 function appearAfterClick() {
     setTimeout(shapeAppear, 1000)
 }

 appearAfterClick()

 shape.onclick = function () {
     shape.style.display = 'none'
     let endTime = new Date().getTime()

     let diff = (endTime - startTime) / 1000
     document.getElementById("result").innerHTML = diff + ' seconds'
     appearAfterClick()

 }
