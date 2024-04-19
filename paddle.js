

export default class Paddle{
    constructor(paddleElem){
        this.paddleElem = paddleElem
        this.reset()
        this.SPEED = .02 
    }
    
    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue('--position'))
    }

    set position(value){
        return this.paddleElem.style.setProperty('--position', value)
    }

    reset(){
        this.postion = 50
    }

    rect(){
        return this.paddleElem.getBoundingClientRect()
    }

    update(delta, ballHeight){
        this.position += this.SPEED  * delta * (ballHeight - this.position)
    }

}