input.onButtonPressed(Button.A, function () {
    you.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    you.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    you.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    you.change(LedSpriteProperty.Y, -1)
})
let you: game.LedSprite = null
game.setScore(0)
you = game.createSprite(2, 2)
let sb = game.createSprite(randint(0, 5), randint(0, 5))
basic.forever(function () {
    if (you.isTouching(sb)) {
        game.addScore(1)
        you.set(LedSpriteProperty.X, 2)
        you.set(LedSpriteProperty.Y, 2)
        sb.set(LedSpriteProperty.X, randint(0, 5))
        sb.set(LedSpriteProperty.Y, randint(0, 5))
    }
})
