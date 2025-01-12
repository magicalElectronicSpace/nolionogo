input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        cuteBot.backforward()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        cuteBot.forward()
    }
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
