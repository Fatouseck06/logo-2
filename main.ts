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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Time = input.runningTime() - Start
    basic.showNumber(Time / 1000)
})
