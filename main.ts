input.onButtonPressed(Button.A, function () {
    cuteBot.moveTime(cuteBot.Direction.backward, 100, 10)
})
input.onButtonPressed(Button.B, function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 100, 10)
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . # . # .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # # # # #
        `)
})
