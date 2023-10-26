let sprite: game.LedSprite = null
let Bomb: game.LedSprite = null
let Jimmy: game.LedSprite = null
input.onGesture(Gesture.LogoUp, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
basic.forever(function () {
	
})
loops.everyInterval(7000, function () {
    Bomb = game.createSprite(randint(0, 5), randint(0, 5))
    Jimmy = game.createSprite(2, 2)
})
