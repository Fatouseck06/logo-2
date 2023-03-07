let Start = 0
let Time = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Start = input.runningTime()
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    Time = input.runningTime() - Start
    basic.showNumber(Math.idiv(Time, 1000))
    basic.pause(100)
    basic.clearScreen()
    basic.showNumber(Time % 1000)
})
