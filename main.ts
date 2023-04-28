namespace SpriteKind {
    export const flower = SpriteKind.create()
    export const coim = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const character = SpriteKind.create()
    export const arrow = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hops_and_paws.vy == 0) {
        hops_and_paws.setVelocity(0, -210)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
    pause(5000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`flag`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    beee = sprites.create(img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    beee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . . 1 1 f 1 1 . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    beee.setPosition(hops_and_paws.x + 60, hops_and_paws.y + 60)
    beee.follow(hops_and_paws)
})
function intro_cutscene () {
    story.startCutscene(function () {
        for (let index = 0; index < 1; index++) {
            pause(2000)
            scene.setBackgroundImage(assets.image`school front`)
            headmaster = sprites.create(assets.image`headmaster`, SpriteKind.character)
            game.setDialogFrame(img`
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                `)
            game.setDialogTextColor(6)
            game.showLongText("\"Welcome to Josington School of Magic, Witch Trainees!\"", DialogLayout.Bottom)
            game.showLongText("\"I am your headmaster, Countess Marianna!\"", DialogLayout.Bottom)
            game.showLongText("\"Your classes will consist of simulations\"", DialogLayout.Bottom)
            game.showLongText("\"to hone and test your witch skills,\"", DialogLayout.Bottom)
            game.showLongText("\"but first we have a test course right outside!\"", DialogLayout.Bottom)
            game.showLongText("\"Good Luck!\"", DialogLayout.Bottom)
            sprites.destroy(headmaster)
        }
    })
    story.cancelCurrentCutscene()
}
function startgame () {
    scene.setBackgroundImage(img`
        7777777777777777777777777777779999955555555555555555555555599999999999999999999999999999999999999999999777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777999555555555555555555555555555555559999999999999999999999999999999999999999799977777777777777777777777777777777777777777777777777777
        7777777777777777777777777779995555555555555555555555555555555555999999999999999999999999999999999999997999999999977999777777777777777777777777777777777777777777
        77777777777777777777777999995555555555555d5555555555555555555555559999999999999999999999999999999999999999999999999999777777777777777777777777777777777777777777
        7777777777777777777777779995555555555555555555555555555555555555599999999999999999999999999999999999999999999999999997779977777777777777777777777777777777777777
        7777777777777777777777779555555555555555555555555555555555555555555599991999999999999999999999999999999999999999999977999979997779977777777777777777777777777777
        77e77777777e7777777779997755555555555555555555555555555555555555555d5599999999999999999999999999999999999999999999999999999997997999999977779997777777777777eee7
        77777e777777e77777797777555555555555555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999779999999777ee7e7e7eeee7e
        77777ee777777777777799555555555555555555cc555555555d555555555555555d5559999999999999999999999999999999999999999999999999999999999999999999999999ceeeeeee77eeee7e
        e7e77e7e7777e77c97795555555555555555555cccc555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999eceeee7eeeeeeee
        e7e77e7ee77ee77b99955555555555555555555cccc5555555555555555d5555555555559999199999999999999999999999999999999999999999999999999999999999999999999ceeeeeeeeeeeeee
        e777e77eeceee97999955555555555555555555ccccc555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeeeee
        eee7e77eeebeeb799555555555555555555555cccccc5555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999bceeeceeeeeeeeee
        eee7ee7beccc99999555555555555555555555ccccccc5555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999cceeeeeeeeeeeee
        eee7eeeeecf999995555555555555555555555ccccccc555555555555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999ceeeeeeeeeeee
        eeeeeeeeefc99995555555d55555d555555555cccccccc5555555555555555555555555555555555599999999999999999999999999999999999999999999999999999999999999999cfbeeeceeeeeee
        eeeeeeeecfb99955555555555555555555555ccccccccc5555555555555555555555555555555555d199999999999999999999999999999999999999999999999999999999999999999beeeeeeeeeeee
        eeeeeeecec999955555555555555555555555cccccccccc5555555ccc555555555ccc5555555555559999999999999999999999999999999999999999999999999999999999999999999eeeeeeeeeeee
        eeeeebeeec99955555555555555555555555ccccccccccc5555555cccc555c5555ccc55555555555555999999999999999999999999999999999999999999999999999999999999999bceeeeeeeeeeee
        ecceeecbeb99955555555555555555555555cccccccccccc555555cccc55ccc555ccc55555555555559999999999999999999999999999999999999999999999999999999999999999bceeeeeeeeeeee
        eeeceeceeb9955555555555555555555555ccccccccccccccc5555cc1c55ccc55cccc55555555555555599999999999999999999999999999999999999999999999999999999999999bceeeeeeeeeeee
        eeeeeeebbb995555555555555555555555cccccccccccccccc5555cc1c55ccc55c11c555555555555555999999999999999999999999999999999999999999999999999999999999999ceceeeeeeeeee
        ceeeeeebc995555555555555555d555555cccccccccccccccc5555ccccccccccccccc555555555555555599999999999999999999999999999999999999999999999999999999999999beceeeeeeeeee
        eeeeeecc99555555555555555555555555cccccccccccccccc5555ccccccccccccccc555555555555555599999999999999999999999999999999999999999999999999999999999999cceeeeeeeeeee
        eeceeeb9b555555555555555555555555555cccccccccccc555555ccccccccccccccc5555555555555555999999999999999999999999999999999999999999977777779999999999999ceebeeeeeeee
        eeeeec999995555555555555555555555555cc1cc1ccd1cc555555ccccccccccccccc5555555555555555999999999999999999999999999999999999999999977777779999999999999beeeeeeeeeee
        eeeeeb999955555555555555555555555555cc1cc1ccc1cc5555555ccccccccccccc55555555555555559999999999999999999999999999999999999999999977777779979999999999ceceeeeeeeee
        eeeecb999995555555555555555555555555cccccccccccc55555555ccccccccccc55555555555555555919999999999999999999999999999999999999999777777477777799977999bceeeeeeeeeee
        eeecc9999955555555555555555555555555cccccccccccc555555555cccccccccc5555555555555555599999999999999999999999999999999999999999777777777777777777799bbeeeeeeeeeeee
        eeecb9999955555555555555555555555555cccccccccccc555555555ccccccccc555555555555555555999999999999999999999999999999999999999997777777777777777777999beeeeeeeeeece
        eecc99999995555555d555555555555555555cccccccccc5555555555ccccccccc55555555555555555559999999999999999999999999999999999999997774777777474777777799bceeeeeeeeeeee
        eecb9999995555555555555555555555555555cccccccc55b55555555ccccccccc55555555555555555599999999999999999999999999999999999999977777777777777777777999bcceeeeeeeeeee
        eecb99999555555555555555555555555555555cccccccbccccccc555ccccccccc555555555555555555999999999999999999999999799999999999999977777477777777777799999eeeeeeeeeeeee
        ecbb9999995555555555cccb5ccc5555cccc555ccccccccccccccccc5ccccccccc555555555555555555999999999999999999999777777799999999999797777777777779e9e9999eeeceeeeeeeeeee
        ec99999995555555555ccccb5cccc55ccccc555cccccccccbbccbbbccccccccccc555555555575777759999999999999999999997777777779999999999777777777779999eee99eeeceeeeeeeeeeeee
        cc99999995555555555cccccbcccc55ccccc555cccccccccbbcccbbccccccccccc5555555577777777759999999999999999997777777777779999999999777977777e9999ee99eeeeeeeeeeeeeeeeee
        9999999995555555555ccc1ccccccccc1ccc555ccccccccccccccccccccccccccc5555555577777777779999999999999999977777777a77777999999999999997777e9999e99eeeecceeeeeeeeeeeee
        9999999955555555555cc11ccc11cccc1ccc555ccccccccc5555cccccccccccccc555555577777777777799199999999999977777777777777779999999999999977ee9999eeeeeeecceeeeeeeeeeeee
        9999999955555555555cccccccbcccccccccc55cccccccc5555555cccccccccccc55555577777777777779919999999999777777777777777777999999999999999eee999eeeeeeeecceeeeeeeeeeeee
        9999999955555555555ccccccccccccccccc555ccccccc5555b5555ccccccccccc555555777377777737799999999999977777a77777777777779999999999999999ee999eeeeeeecceeeeeeeeeeeeee
        9999999999555555555cccccccccccccccc5bb5ccccccc5555bb555ccccccccccc555557777777777777799999999999777777777777777777799999999999999999ee99eeeeeeeecbeeeeeeeeeeeeee
        99999999995555555555cccccccccccccccccccccccccc555555555ccccccccccc555557777773777777799999999999777777777a77777777799999999999999999ee9eeeeeeeecceeeeeeeeeeeecec
        999999999955555555555cccccccccccccbccbbccccccc5555555b5ccccccccccc5555557777777777777991999999997777777777777a777779999997779999999eeeeeeeeeeecbbceeeeeeeeeeeccc
        9999999991955555555555ccccccccccccbbcbbccccccc5555555b5cccccccccccc5555577777777777779919999999977777777777777777779999977779977799eeeeeeeeeeccbceeeeeeeeeeeeccc
        9999999991955755555555ccccccccccccbccbcccccccc555555bb5cccccccccccc5555577777777377779999999999997777777777777779779999777777777779eeeeeeeeeeeeceeeeeeeeeeeeeccc
        9999999991955775777555cccccccccccccccccccccccc5555555bbcccccccccccc555557773777777739999999999999997797777ee7777977999777777777777eeeeeeeeeeecceeeeeeeeeeeeecccb
        9999999999997777777755cccccccccccc555d5cccccccd5d5555bbcccccccccccc555555777777777779999999999999997997777ee7777977999997777777779eeeeeeeeeeeecceeeeeeeeeeeecccb
        99999999999977d7777755ccccccccccccddbcccccccccccbddddbccccccccccccc555555577777777779e999979997999999999e7ee979999799999e779999e9eeeeeeeeeeeeceeeeeeeeeeeeeecccb
        99999999999977777d7777ccccccccccccccccccccccccccbcccccccccccccccccb5d55555777777779977777777777999999999eeee979999999999ee99999e9eeeeeeeeeeeeceeeeeeeeeeeeeecccb
        999999999999977d7777d7ccccccccccccccccccccccccccccccccccccccccccccd5555b55577775599977277727777999999999eeee999999999999ee99999eeeeeeeeeeeeeeceeeeeeeeeeeeeecccb
        9999999999999777777777ccccccccccccccccccccccccccccccccccccccccccccc55555555577e5599977777777777999999999eeeee999999999999e99999eeeeeeeeeeeeeeeceeeeeeeeeeeeecccb
        9999999999999999777e77ccccccccccccccccccccccccccccccccccccccccccccb555555555eee5999997772777277999999999eeeee999999999999ee999eeeeeeeeeeeeeeeceeeeeeeeeeeeeecccb
        9999999999999999ee5eedccccccccccccccccccccccccccccccccccccccccccccb777755555eee9999997777777777799999999eeeee999999999999ee99eeeeeeeeeeeeeeececeeeeeeeeeeeeecccb
        9999999999999999ee5e55ccccccccccccccccccccccccccccccccccccccccccccc727777555eee9999997777779779999ee9999eeeee99999999999eeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeecccb
        9999999999999999edded5cccccccccccccccccccccccccccccccccccccccccccc7777727555eeee19999999eee9999999ee9999eeeee99999999e9eeeeeeeeeeeeeeeeeeeececeeeeeeeeeeeeeecccb
        9999999999999999eee555cccccccccccccccccccccccccccccccccccccccccccc7772777555eeee99999999eee9999999e99999eeeee9999e999e9eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccb
        9999999999999999eed555ccccccccccccccccccccccccccccccccccccccccccccd577775555eeee999999999ee999999ee99999eeeee999ee999eeeeeeeedeeeeeeeeeeeeceeeeeeeeeeeeeeeeccccb
        9999999999999999eedd5dcccccccccccccccccccccccccccccccccccccccccccc555ee55555eeee999919999ee999999ee99999eeeee999eeeeeeededddddddddeeeeeeeeceeeeeeeceeeeeeeeccccb
        9999999bb99999eeeeddddcccccccccccccccccccccccccccccccccccccccccccc555ee5555eeeee999999999eee99999ee99999eeeee99eeeeedddddddddddddddddddddddeeeeeeeeeeeeeeeeccccb
        9b99999999eeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccb55ee5555eeeee999999999eee99999ee99999eeeeeeeddddddddddddddbddddddddddbbceeeeeeeeeeeeeeeececcc
        99e99e99eeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccd55ee5555eeeeee99999999eee99999ee9999eeeeeedddddddddddddddddddddddddddbceeeeeeeeeeeeeeeeececcc
        9eeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccc555ee555eeeeeeee9999999eeee9999ee999eeeeeeddddddddddddddddddddddddddbbbceeeeeeeeeeeeeeeeeeeecc
        eeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccee5ee5eeeeeeeeeeee99999eeee9999ee99eeeeddeedddddddddddddddddddbddddbcceeeeeeeeeeeeeeeeeeeeeecb
        deeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddbdddfdddddddddbceeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeedeeededdddedddddddddddddddddddddddddddcceeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeddeeeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeddddddddddbddddddddddddddddddddddbdddddbbbeebeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeedddddeeeeeeeeeeccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeddddbddddddddbdddddddddddddddddddddddddddbeeecbeeeeeeeeeeeeeeeeeeeeeeee
        eeeeddddddddddddddeeeeccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddbeeeeeebeeeeeeeeeeeeeeeeeeeeee
        eeeddddddddddddeeeeeeeccccccccccccccccccccccccccccccccccccccccccccccccceeedeededddddddbddddbddddddddddddddddddddddddddddddddddddddceeceeeeeeeeeeeeeeeeeeceeeeeee
        eeddddddddfddddeeeeeeecccccccccccccccccccccccccccccccccccccccccccccbccceeeeeddeddddddddddddddddddddddddddddddddfdddddddddddfddddbceeeeeceeeeeeeeeeeeeeeeeeeeeeee
        eddddddddddddddedeeeeccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfceeeeceeeeeeeeeeeeeeeeeeeeeeee
        ddddddddddddddddedeeecccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbddddddfddddbfddddddddddddddddddbddddddddddddcbeeeeeeeeeeebeeeeeeeeeeeeeeeeee
        dbdbddddddddbdbdeeeeccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddceeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ddddddbddddddddeeeeecccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbdddddddddddddddddddddddddfddddddddddfdddddddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ddddddddddddbdeeeeeeccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        dddddddddddddeeeeeecccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddfdddcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        ddddddddddddeeeeeeecccccccccccccccccccccccccccbbddddddddbdbddddbddddddddfddddddddddddddddbbbdddddddddddddddddddddddddfddddddddceceeeeeeeeeeeeeeeeceeeeeeeeeeeeee
        bdbddddfdbddeeeeeeccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbddddddfddddddddddddddddbeeeeeeeeceeeeeeeeeeeeeeeececeeeeee
        dbddbdddddddeeeecccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbdddfddddddddddddddddddddddddddddddddddddddceeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeee
        dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddeeebeeeeeeeeeeeeeeeeeeeeeeeeeeceeee
        ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbddddddddfddddddddddddddddddddddceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddfdddddddddddbbdddddfddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbeeeeeeeeeeeeeceeeeeeeeeeeeeeeeccceee
        ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddceeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeec
        dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddceeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeee
        bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbb7bbbbcdbbddddbddbcddddddddddddddddbddfddddddddddddddddddddddceeeeeeeeeeeeeeeceeeeeeeeeeceeeeeeeee
        dddddddddddfdddddddddddddddbbdddddbcdddddddbddddcdbbdbbbb777bb7777b7b7bbbbbbbb77b7bbbdbbbbddddddddddddddddddddddddddbbbbdddceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbb7777777777777777777777777777b77b7bb77bdbbdddddddddddddddddddbbbbbbddbcceeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeee
        bbbdddddddbddddfdddddddbddcddbdddddbbddb77b777bb7bbb7b77777777777777777777777777b7777777777777bbbdddddddddddddbbbbccccbbddcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        777bddddddddddddddddddddddbdddddbbb7b77777b7777777777777777777777777777777777777c7777777777777b7777bdbdddbdbbb777bccbbbdddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        7777ddbddddddddddd7dddd77bbb77bb7bb777777b77777777777777777777777777777b77777777777777777777777777777777777777777bcccbdddddeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeee
        77bbbbbddddddddddb7ddd777777777b7777777777777777777777777777777777777777777777777777777777777777b77777777777777777bbddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        777777bcbbbdddddb777b7777777777777777777777777777777777777d777777777777777777777777777777777777777777777777777777bddddddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        7777777b77bbbcb7777777777777777777777777777777777777777777777777777c7777777777777777777777c777777777777777777b7bdddddddddbceeeeeeeeeeeeeeeecbeeeeeeeeeeeeeeeeeee
        77777777777b7b7777777777777777777d77777777777777777777777777777777777777777777777777d77777777b7777777777777777bbdddddbdddbceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b7bb7777777777777bbbbddddddbdddbceeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        7777777777777777777777777777777777777777c777777777777d77b7777777777777777777b777777777b777bb77777bb7777777bbbbdddddddddddbcceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        7777777777777777777777b777777777777777777777777777777777777777777777777777777777777b7bddddddbb7bbbdb7777bbdddddbdddddddddceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        77777b7777777777777777777777777bb7777777777777777777777777777777777777777b777bbbbbbddddddddddddddbbbbbbdddddcdddddddddddbceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeec
        77777777777777777777777777777bbdd7b7777b777777777777777777777777777777bdbbbbddddbdddddbdddddddddddddddddddddbccdddddddddceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        777777777777777777777777777bbbcddbb7bbbbb77bb777777777777777777777bbbddddbbdddddbdccddbdddddddddfdddddddddddbdddddddddbeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeee
        77777777777777777777777777bddddddbbbbddbbbbdb777777777777777777b7ddddddddddbddcbdccbddddddddbddddddddddbbddbddddddddcbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        777777777777777b77777777b7dddddddddbddddddbbbddbbbb777777777777dbdddddddddddbddddddddddddddbbddddddddddddbbddddddddceceeeeeeeeeeeeeeeeecbeeeeeeeeeeeeeeceeeeeeee
        77777777777777777777777777bddddddddddddddbcbcdddddbbb77777bbb7dddddddbddddddddddddddddddddbbdddddddddddddddddddddcdeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecbceeeeeeee
        777777777777777777777777777bdddddddddddddddbdbddddddcdb7bdddddddddddddddddddddddddddddddddbdddddddddddddddddddddbceeeeeeceeeeebeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeee
        777777777777777777777777777ccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        7777777777777777777777d77777cfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbceeeeeeeeeeeeeeeeeeeceeebbeeeeeeeeebeeeeeeeeeeeeee
        777777777777777777777777777cfccddddddddddbdcddddddddddddddfdddddddddddfddddddddddddddddddbccbbccbcbbbdbbbdb77bdeeeeffbbbbbbbeeeceeeefbb7bbbbbbbbbbbbbbbbbbbbeeee
        777777777777777b777777777777bc7cdddddddddccbdbddddddddddddddddddbddddddddddddddddddddbdd7ccccb7c77777cbc777c77fbbbb777777cc7fffbbbbbbb777777bbb77777777777fbbbbb
        7c77777777777777777777777777777bcbbdddddbcbcdbbbcbdbdddddddddddddbddddddddddddddddbbcc7777777777777777cb7777777777777777c7777777777777777777cc777777777777777777
        7777777777777777777777777777777c777cdc777cbcfcbcc7ccbdddddddddddddbbdddddddddddddbbbc7777777777777777777c7b777777777777c7777777777777777777777777777777777777777
        777777777777777777777777777777777777c777777dffdfc7777ccddddddddddddddddddddddddbdcc777777777777777777777c7777c77777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777b7b77777bcfb7777777ccbcbcbdddddddddddddcccc777777777777777777777777777777777777777777c7777777cc77777777777777777777777777777
        7777777777777777777777777777cc77777777777777d7dc77777d777c77cccc77bdbbbdddcfd777777777777777777777777777777777777777777777777777777777b7777777777777777777777777
        7777777777777777777c77777777777777777777777777777777777c7b77777777777777777c777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777c777777c777777777777777777777b7777cb7777777777c7777777777777777777777777777777777777777777777777777777777c77c77777
        77777777777777777777777777777777c7777777b7777777777d777777777777777777c77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b7777b7777d777c77777777777777777777
        777777777777777777777777777777777b777777b7777777777777777777777b7c7777c777777777777777c77777777777777777777777777777777777777777777777777777777777777777cc777777
        `)
    hops_and_paws = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(hops_and_paws, 100, 0)
    tiles.setCurrentTilemap(tilemap`level1`)
    hops_and_paws.ay = 500
    scene.cameraFollowSprite(hops_and_paws)
    info.setLife(3)
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        coin2 = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 f f f f f f f 1 1 1 1 
            1 1 1 1 f 5 5 5 5 5 5 5 f 1 1 1 
            1 1 1 f 5 5 5 5 5 5 5 5 5 f 1 1 
            1 1 f 5 5 5 5 5 5 5 5 5 5 5 f 1 
            1 1 f 5 5 5 5 5 5 5 5 5 5 5 f 1 
            1 1 f 5 5 5 5 5 5 5 5 5 5 5 f 1 
            1 1 f 5 5 5 5 5 5 5 5 5 5 5 f 1 
            1 1 f 5 5 5 5 5 5 5 5 5 5 5 f 1 
            1 1 f 5 5 5 5 5 5 5 5 5 5 5 f 1 
            1 1 f 5 5 5 5 5 5 5 5 5 5 5 f 1 
            1 1 1 f 5 5 5 5 5 5 5 5 5 f 1 1 
            1 1 1 1 f 5 5 5 5 5 5 5 f 1 1 1 
            1 1 1 1 1 f f f f f f f 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.coin)
        animation.runImageAnimation(
        coin2,
        [img`
            . . b b b b . . . . . . . . . . 
            . b 5 5 5 5 b . . . . . . . . . 
            b 5 d 3 3 d 5 b . . . . . . . . 
            b 5 3 5 5 1 5 b . . . . . . . . 
            c 5 3 5 5 1 d c . . . . . . . . 
            c d d 1 1 d d c . . . . . . . . 
            . f d d d d f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . b b b . . . . . . . . . . . 
            . b 5 5 5 b . . . . . . . . . . 
            b 5 d 3 d 5 b . . . . . . . . . 
            b 5 3 5 1 5 b . . . . . . . . . 
            c 5 3 5 1 d c . . . . . . . . . 
            c 5 d 1 d d c . . . . . . . . . 
            . f d d d f . . . . . . . . . . 
            . . f f f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . b b . . . . . . . . . . . 
            . . b 5 5 b . . . . . . . . . . 
            . b 5 d 1 5 b . . . . . . . . . 
            . b 5 3 1 5 b . . . . . . . . . 
            . c 5 3 1 d c . . . . . . . . . 
            . c 5 1 d d c . . . . . . . . . 
            . . f d d f . . . . . . . . . . 
            . . . f f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . b b . . . . . . . . . . . 
            . . b 5 5 b . . . . . . . . . . 
            . . b 1 1 b . . . . . . . . . . 
            . . b 5 5 b . . . . . . . . . . 
            . . b d d b . . . . . . . . . . 
            . . c d d c . . . . . . . . . . 
            . . c 3 3 c . . . . . . . . . . 
            . . . f f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . b b . . . . . . . . . . . 
            . . b 5 5 b . . . . . . . . . . 
            . b 5 1 d 5 b . . . . . . . . . 
            . b 5 1 3 5 b . . . . . . . . . 
            . c d 1 3 5 c . . . . . . . . . 
            . c d d 1 5 c . . . . . . . . . 
            . . f d d f . . . . . . . . . . 
            . . . f f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . b b b . . . . . . . . . . 
            . . b 5 5 5 b . . . . . . . . . 
            . b 5 d 3 d 5 b . . . . . . . . 
            . b 5 1 5 3 5 b . . . . . . . . 
            . c d 1 5 3 5 c . . . . . . . . 
            . c d d 1 d 5 c . . . . . . . . 
            . . f d d d f . . . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(coin2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        for (let value2 of tiles.getTilesByType(assets.tile`myTile3`)) {
            flower2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . a a a . . . a . . . . . . . 
                . . . a a a . . a a . . . . . . 
                . . . a . a a a a a a . . . . . 
                7 7 7 a a a 7 a a a . 7 7 . . . 
                . 7 7 7 7 a a a a a 7 7 7 . . . 
                . . 7 . 7 7 7 7 . . 7 7 7 . . . 
                . . 7 . . 7 7 7 7 7 7 . . . . . 
                . . 7 7 . 7 7 7 7 . . 7 . . . . 
                . . . 7 . 7 . 7 7 . 7 . . . . . 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.flower)
            tiles.placeOnTile(flower2, value2)
            tiles.setTileAt(value2, assets.tile`transparency16`)
        }
    }
    gamestarted = true
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (hops_and_paws.x < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let gamestarted = false
let flower2: Sprite = null
let coin2: Sprite = null
let headmaster: Sprite = null
let beee: Sprite = null
let hops_and_paws: Sprite = null
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d3333333333333333333333333
    33333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d33333333333333333333333
    3333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d3333333333333333333333
    3333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d3333333333333333
    333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333
    33333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d3333
    33d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d33
    3111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d3
    11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d
    1111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a111111111911111111
    111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111
    3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a
    a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5
    3a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a35
    55a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a555
    5a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a55
    5a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a53
    a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3
    1111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa11111111111
    111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111
    11111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a11
    111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a3111191111a5555533555555a11
    11a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a3111111111a3555555995555a11
    11a5555555553a111111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa11
    11aa5555555553a11111111aa55555555553a31111aa5555555553a11111111aa55555555553a11111aa5555555553a31111111aa55555555553a11111aa5555555553a11111111aa55555555553a111
    111aa5555555555a111111aa355555555553aa11113aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11
    111aa55555555555a1111aa55555555555553aa1113aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1
    11aa55555555555aaa11a35555555555555555a313aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a1
    11a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553311a555555555553a39aa35555555555555555533
    31a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a55555555555555555399
    3333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a35555555555555553399
    9333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa35555555553999
    9333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa5555533333999
    99999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a9999999
    999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999
    9993339999933999999999939335555a333999999993339999933999999999939335555a333999999993339999933999999999939335555a333999999993339999933999999999939335555a33399999
    9933399999933999999993339333553399339999993339999993399999999333933355339933999999333999999339999999933393335533993399999933399999933999999993339333553399339999
    9933999999939999999993399933333999339999993399999993999999999339993333399933999999339999999399999999933999333339993399999933999999939999999993399933333999339999
    9993999999939993399993999999339999399933999399999993999339999399999933999939993399939999999399933999939999993399993999339993999999939993399993999999339999399933
    3993999999939933339993999999999999399333399399999993993333999399999999999939933339939999999399333399939999999999993993333993999999939933339993999999999999399333
    3333999999933333333993999999999999333399333399999993333333399399999999999933339933339999999333333339939999999999993333993333999999933333333993999999999999333399
    3333999999933399933333999999999999333999333399999993339993333399999999999933399933339999999333999333339999999999993339993333999999933399933333999999999999333999
    9999999999999999993339999999999999999999999999999999999999333999999999999999999999999999999999999933399999999999999999999999999999999999993339999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991119999999999999999999999999999999999999111999999999999999999999999999999999999911199999999999999999999999999999999999991119999999999
    9999999999999999999999999111111199999999999999999999999999999999911111119999999999999999999999999999999991111111999999999999999999999999999999999111111199999999
    9999999999999999999999991111111119999999999999999999999999999999111111111999999999999999999999999999999911111111199999999999999999999999999999991111111119999999
    9999999999999999999999911111111111991119999999999999999999999991111111111199111999999999999999999999999111111111119911199999999999999999999999911111111111991119
    1999999999999999999999911111111111911111199999999999999999999991111111111191111119999999999999999999999111111111119111111999999999999999999999911111111111911111
    1999911111199999999999911111111111111111199991111119999999999991111111111111111119999111111999999999999111111111111111111999911111199999999999911111111111111111
    1991111111111999999119991111111111111111199111111111199999911999111111111111111119911111111119999991199911111111111111111991111111111999999119991111111111111111
    1911111111111199911111191111111111111111191111111111119991111119111111111111111119111111111111999111111911111111111111111911111111111199911111191111111111111111
    1111111111111119111111119111111111111111111111111111111911111111911111111111111111111111111111191111111191111111111111111111111111111119111111119111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
let tnotg = textsprite.create("Witchy Hour")
tnotg.setMaxFontHeight(10)
tnotg.setPosition(83, 70)
pause(5000)
sprites.destroy(tnotg, effects.bubbles, 1000)
intro_cutscene()
story.startCutscene(function () {
    startgame()
})
game.onUpdate(function () {
    if (gamestarted) {
        hops_and_paws.setImage(assets.image`myImage`)
        if (hops_and_paws.vx < 0) {
            hops_and_paws.image.flipX()
        }
    }
})
