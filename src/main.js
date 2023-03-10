import anime from "animejs";
import {text} from "./modules/module"

anime({
    targets: 'h1',
    rotate: 360,
    duration: 3000
})

console.log(text)

//images 

const img = document.createElement('img')
document.body.append(img)

console.log(import.meta)

const imgUrl = new URL('./media/fox.jpg', import.meta.url)
img.src = imgUrl


