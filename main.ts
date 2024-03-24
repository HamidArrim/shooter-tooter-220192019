enum ActionKind {
    Walking,
    Idle,
    Jumping,
    ij
}
namespace SpriteKind {
    export const Item = SpriteKind.create()
    export const balls = SpriteKind.create()
    export const gros_rat = SpriteKind.create()
    export const jtaime_pas = SpriteKind.create()
    export const heart = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const boss_projectile_kind = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player_direction = 3
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    holding += 1
    if (shield == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f f 2 f e f . . . 
            . f f f 2 f e e 2 2 f f f . . . 
            . f e 2 f f e e 2 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 2 2 2 2 2 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 2 2 f f f f f . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f 2 f 2 e f . . . 
            . f f f 2 2 e e 2 2 f f f . . . 
            f f e f 2 f e e f 2 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 2 2 2 2 2 2 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e f 2 f f f 2 f 2 e f . . . 
            . f f f 2 2 e e f 2 f f f . . . 
            . f e e f 2 e e f f 2 e f . . . 
            . f e e e f e e e f f e f f . . 
            . f e e e e e e e e e e f f . . 
            . f f e e e e e e e e f . . . . 
            . f 4 f f f f f f f f e . . . . 
            . f d d e 2 2 2 2 2 f 4 . . . . 
            . f 4 e e f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f f 2 f e f . . . 
            . f f f 2 f e e 2 2 f f f . . . 
            . f e 2 f f e e 2 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 2 2 2 2 2 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `],
        350,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`player_back_moving`,
        200,
        true
        )
    }
})
function setghost () {
    ghost1 = sprites.create(assets.image`ghost_1_asset`, SpriteKind.Enemy)
    ghost2 = sprites.create(assets.image`ghost_1_asset`, SpriteKind.Enemy)
    ghost3 = sprites.create(assets.image`ghost_1_asset`, SpriteKind.Enemy)
    ghost4 = sprites.create(assets.image`ghost_1_asset`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(ghost1, sprites.dungeon.doorLockedWest)
    tiles.placeOnRandomTile(ghost2, sprites.dungeon.doorLockedEast)
    tiles.placeOnRandomTile(ghost3, sprites.dungeon.doorLockedSouth)
    tiles.placeOnRandomTile(ghost4, sprites.dungeon.doorLockedNorth)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    shield = 1
    if (player_direction == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `)
    } else if (player_direction == 2) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `)
    } else if (player_direction == 3) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f f 2 f e f . . . 
            . f f f 2 f e e 2 2 f f f . . . 
            . f e 2 f f e e 2 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 2 2 2 2 2 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `)
    } else if (player_direction == 4) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 2 2 2 f e f . . 
            . . f b b b b f 2 2 2 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `)
    }
    if (holding >= 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        if (player_direction == 1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f 2 f . . . . 
                . . f f e e e e f 2 2 2 f . . . 
                . . f e e e f f e e e e f . . . 
                . . f f f f e e 2 2 2 2 e f . . 
                . . f e 2 2 2 f f f f e 2 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f . . . 
                . . f e e e e e d d d f . . . . 
                . . . . f 4 d d e 4 e f . . . . 
                . . . . f e d d e 2 2 f . . . . 
                . . . f f f e e f 5 5 f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . f f . . . f f f . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f 2 f . . . . 
                . . f f e e e e f 2 2 2 f . . . 
                . . f e e e f f e e e e f . . . 
                . . f f f f e e 2 2 2 2 e f . . 
                . . f e 2 2 2 f f f f e 2 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f f . . 
                . . f e e e 4 d d d d f d d f . 
                . . . f f e e 4 e e e f b b f . 
                . . . . f 2 2 2 4 d d e b b f . 
                . . . . e 2 2 2 e d d e b f . . 
                . . . . f 4 4 4 f e e f f . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f 2 f . . . . 
                . . f f e e e e f 2 2 2 f . . . 
                . . f e e e f f e e e e f . . . 
                . . f f f f e e 2 2 2 2 e f . . 
                . . f e 2 2 2 f f f f e 2 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f . . . 
                . . f e e e e e d d d f . . . . 
                . . . . f 4 d d e 4 e f . . . . 
                . . . . f e d d e 2 2 f . . . . 
                . . . f f f e e f 5 5 f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . f f . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f 2 f . . . . 
                . . f f e e e e f 2 2 2 f . . . 
                . . f e e e f f e e e e f . . . 
                . . f f f f e e 2 2 2 2 e f . . 
                . . f e 2 2 2 f f f f e 2 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f f . . 
                . . f e e e 4 d d d d f d d f . 
                . . . . f e e 4 e e e f b b f . 
                . . . . f 2 2 2 4 d d e b b f . 
                . . . f f 4 4 4 e d d e b f . . 
                . . . f f f f f f e e f f . . . 
                . . . . f f . . . f f f . . . . 
                `],
            350,
            true
            )
        } else if (player_direction == 2) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f 2 f e e e e f f . . . 
                . . . f 2 2 2 f e e e e f f . . 
                . . . f e e e e f f e e e f . . 
                . . f e 2 2 2 2 e e f f f f . . 
                . . f 2 e f f f f 2 2 2 e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . f f e d d f 1 4 d 4 e e f . 
                . f d d f d d d d 4 e e e f . . 
                . f b b f e e e 4 e e f . . . . 
                . f b b e d d 4 2 2 2 f . . . . 
                . . f b e d d e 4 4 4 f f . . . 
                . . . f f e e f f f f f f . . . 
                . . . . f f f . . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f 2 f e e e e f f . . . 
                . . . f 2 2 2 f e e e e f f . . 
                . . . f e e e e f f e e e f . . 
                . . f e 2 2 2 2 e e f f f f . . 
                . . f 2 e f f f f 2 2 2 e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . . f e d d f 1 4 d 4 e e f . 
                . . . . f d d d e e e e e f . . 
                . . . . f e 4 e d d 4 f . . . . 
                . . . . f 2 2 e d d e f . . . . 
                . . . f f 5 5 f e e f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . f f f . . . f f . . . . 
                `,img`
                . . . . . f f f f f f . . . . . 
                . . . . f 2 f e e e e f f . . . 
                . . . f 2 2 2 f e e e e f f . . 
                . . . f e e e e f f e e e f . . 
                . . f e 2 2 2 2 e e f f f f . . 
                . . f 2 e f f f f 2 2 2 e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . f f e d d f 1 4 d 4 e e f . 
                . f d d f d d d d 4 e e e f . . 
                . f b b f e e e 4 e e f f . . . 
                . f b b e d d 4 2 2 2 f . . . . 
                . . f b e d d e 2 2 2 e . . . . 
                . . . f f e e f 4 4 4 f . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f 2 f e e e e f f . . . 
                . . . f 2 2 2 f e e e e f f . . 
                . . . f e e e e f f e e e f . . 
                . . f e 2 2 2 2 e e f f f f . . 
                . . f 2 e f f f f 2 2 2 e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . f f e d d f 1 4 d 4 e e f . 
                . f d d f d d d d 4 e e e f . . 
                . f b b f e e e 4 e e f . . . . 
                . f b b e d d 4 2 2 2 f . . . . 
                . . f b e d d e 4 4 4 f f . . . 
                . . . f f e e f f f f f f . . . 
                . . . . f f f . . . f f . . . . 
                `],
            350,
            true
            )
        } else if (player_direction == 3) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . . f f f f 2 2 f f f f . . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e 2 f 2 f f f 2 f e f . . . 
                . f f f 2 f e e 2 2 f f f . . . 
                . f e 2 f f e e 2 f e e f . . . 
                f f e f f e e e f e e e f f . . 
                f f e e e e e e e e e e f d f . 
                . . f e e e e e e e e f f b f . 
                . . e f f f f f f f f 4 f b f . 
                . . 4 f 2 2 2 2 2 e d d f c f . 
                . . e f f f f f f e e 4 f f . . 
                . . . f f f . . . . . . . . . . 
                `,img`
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . f f f f f 2 2 f f f f f . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e 2 f 2 f f 2 f 2 e f . . . 
                . f f f 2 2 e e 2 2 f f f . . . 
                f f e f 2 f e e f 2 f e f f . . 
                f e e f f e e e e f e e e f . . 
                . f e e e e e e e e e e f . . . 
                . . f e e e e e e e e f . . . . 
                . e 4 f f f f f f f f 4 e . . . 
                . 4 d f 2 2 2 2 2 2 f d 4 . . . 
                . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
                . . . . f f f f f f . . . . . . 
                . . . . f f . . f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . . f f f f 2 2 f f f f . . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e f 2 f f f 2 f 2 e f . . . 
                . f f f 2 2 e e f 2 f f f . . . 
                . f e e f 2 e e f f 2 e f . . . 
                . f e e e f e e e f f e f f . . 
                . f e e e e e e e e e e f f . . 
                . f f e e e e e e e e f . . . . 
                . f 4 f f f f f f f f e . . . . 
                . f d d e 2 2 2 2 2 f 4 . . . . 
                . f 4 e e f f f f f f e . . . . 
                . . . . . . . . f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . . f f f f 2 2 f f f f . . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e 2 f 2 f f f 2 f e f . . . 
                . f f f 2 f e e 2 2 f f f . . . 
                . f e 2 f f e e 2 f e e f . . . 
                f f e f f e e e f e e e f f . . 
                f f e e e e e e e e e e f d f . 
                . . f e e e e e e e e f f b f . 
                . . e f f f f f f f f 4 f b f . 
                . . 4 f 2 2 2 2 2 e d d f c f . 
                . . e f f f f f f e e 4 f f . . 
                . . . f f f . . . . . . . . . . 
                `],
            350,
            true
            )
        } else if (player_direction == 4) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f f f f d d d d d e e f . . 
                . f d d d d f 4 4 4 e e f . . . 
                . f b b b b f 2 2 2 2 f 4 e . . 
                . f b b b b f 2 2 2 2 f d 4 . . 
                . . f c c f 4 5 5 4 4 f 4 4 . . 
                . . . f f f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . f f e 4 1 f d d f 1 4 e f . . 
                f d f f e 4 d d d d 4 e f e . . 
                f b f e f 2 2 2 2 e d d 4 e . . 
                f b f 4 f 2 2 2 2 e d d e . . . 
                f c f . f 4 4 5 5 f e e . . . . 
                . f f . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f f f f d d d 4 e f . . . 
                . . f d d d d f 2 2 2 f e f . . 
                . . f b b b b f 2 2 2 f 4 e . . 
                . . f b b b b f 5 4 4 f . . . . 
                . . . f c c f f f f f f . . . . 
                . . . . f f . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f f . 
                . . e f e 4 d d d d 4 e f f d f 
                . . e 4 d d e 2 2 2 2 f e f b f 
                . . . e d d e 2 2 2 2 f 4 f b f 
                . . . . e e f 5 5 4 4 f . f c f 
                . . . . . f f f f f f f . f f . 
                . . . . . . . . . f f f . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f f f f d d d d d e e f . . 
                . f d d d d f 4 4 4 e e f . . . 
                . f b b b b f 2 2 2 2 f 4 e . . 
                . f b b b b f 2 2 2 2 f d 4 . . 
                . . f c c f 4 5 5 4 4 f 4 4 . . 
                . . . f f f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `],
            350,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level_1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    level = 2
    Spawning = 0
    game.splash("Level 2: kill 25 monsters")
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    pause(3000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shield == 0) {
        if (player_direction == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 80, 0)
            mySprite.setImage(img`
                ........................
                .......fff..............
                ....fffff2f.............
                ..ffeeeee22ff...........
                .ffeeeeee222ff..........
                .feeeefffeeeef..........
                .fffffeee2222ef.........
                fffe222fffffe2f.........
                fffffffffeeefff.....cc..
                fefe44ebbf44eef...ccdc..
                .fee4d4bbfddef..ccddcc..
                ..feee4dddddfeecdddc....
                ...f2222222eeddcdcc.....
                ...f444445e44ddccc......
                ...ffffffffeeee.........
                ...fff...ff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
            pause(100)
            mySprite.setImage(assets.image`player_right`)
        } else if (player_direction == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -80, 0)
            mySprite.setImage(img`
                ........................
                ..............fff.......
                .............f2fffff....
                ...........ff22eeeeeff..
                ..........ff222eeeeeeff.
                ..........feeeefffeeeef.
                .........fe2222eeefffff.
                .........f2efffff222efff
                ..cc.....fffeeefffffffff
                ..cdcc...fee44fbbe44efef
                ..ccddcc..feddfbb4d4eef.
                ....cdddceefddddd4eeef..
                .....ccdcddee2222222f...
                ......cccdd44e544444f...
                .........eeeeffffffff...
                .............ff...fff...
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
            pause(100)
            mySprite.setImage(assets.image`player_left`)
        } else if (player_direction == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -80)
            mySprite.setImage(img`
                ............c1c.........
                ............c1c.........
                ............c1c.........
                ............c1c.........
                ...........cc1cc........
                ............ccc.........
                ............ee..........
                ...........eddeffff.....
                ...........eddffffff....
                ...........e4f45544f4f..
                ...........e4f22222fef..
                ..........efe4dddd4eff..
                ..........fe41fddf14ef..
                .........ffefbf44fbfeff.
                .........fffffeeeefffff.
                .........ffe22222222eff.
                .........ffeeeeeeeeeeff.
                ..........fff222222fff..
                ..........fff222222fff..
                ...........fff2222fff...
                .............ff22ff.....
                ...............ff.......
                ........................
                ........................
                `)
            pause(100)
            mySprite.setImage(assets.image`player_back`)
        } else if (player_direction == 4) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 80)
            mySprite.setImage(img`
                ........................
                ........................
                .......ff...............
                .....ff22ff.............
                ...fff2222fff...........
                ..fff222222fff..........
                ..fff222222fff..........
                .ffeeeeeeeeeeff.........
                .ffe22222222eff.........
                .fffffeeeefffff.........
                .ffefbf44fbfeff.........
                ..fe41fddf14ef..........
                ..ffe4dddd4efe..........
                ...ef22222f4e...........
                ...4f44554f4e...........
                ....ffffffdde...........
                .....ffffedde...........
                ..........ee............
                .........ccc............
                ........cc1cc...........
                .........c1c............
                .........c1c............
                .........c1c............
                .........c1c............
                `)
            pause(100)
            mySprite.setImage(assets.image`player_front_2`)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    holding += -1
    if (holding == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        if (shield == 1) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f f f f d d d 4 e f . . . 
                . . f d d d d f 2 2 2 f e f . . 
                . . f b b b b f 2 2 2 f 4 e . . 
                . . f b b b b f 5 4 4 f . . . . 
                . . . f c c f f f f f f . . . . 
                . . . . f f . . . f f f . . . . 
                `)
        } else {
            mySprite.setImage(assets.image`player_front`)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    Boss_life += -1
})
info.onScore(15, function () {
    game.splash("A door has been opened.")
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`level_0_finished`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Spawning = 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player_direction = 2
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    holding += 1
    if (shield == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 2 2 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `],
        350,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`player_left_moving`,
        200,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    holding += -1
    if (holding == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        if (shield == 1) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e f 2 f . . . . 
                . . f f e e e e f 2 2 2 f . . . 
                . . f e e e f f e e e e f . . . 
                . . f f f f e e 2 2 2 2 e f . . 
                . . f e 2 2 2 f f f f e 2 f . . 
                . f f f f f f f e e e f f f . . 
                . f f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 1 f d d e f f . . 
                . . f e e e 4 d d d d f d d f . 
                . . . . f e e 4 e e e f b b f . 
                . . . . f 2 2 2 4 d d e b b f . 
                . . . f f 4 4 4 e d d e b f . . 
                . . . f f f f f f e e f f . . . 
                . . . . f f . . . f f f . . . . 
                `)
        } else {
            mySprite.setImage(assets.image`player_right`)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    holding += -1
    if (holding == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        if (shield == 1) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f 2 f e e e e f f . . . 
                . . . f 2 2 2 f e e e e f f . . 
                . . . f e e e e f f e e e f . . 
                . . f e 2 2 2 2 e e f f f f . . 
                . . f 2 e f f f f 2 2 2 e f . . 
                . . f f f e e e f f f f f f f . 
                . . f e e 4 4 f b e 4 4 e f f . 
                . . f f e d d f 1 4 d 4 e e f . 
                . f d d f d d d d 4 e e e f . . 
                . f b b f e e e 4 e e f . . . . 
                . f b b e d d 4 2 2 2 f . . . . 
                . . f b e d d e 4 4 4 f f . . . 
                . . . f f e e f f f f f f . . . 
                . . . . f f f . . . f f . . . . 
                `)
        } else {
            mySprite.setImage(assets.image`player_left`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    tiles.setCurrentTilemap(tilemap`level_3`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenWest)
    level = 3
    Spawning = 0
    game.splash("Level 3: kill the boss")
    Boss_Spawn = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player_direction = 1
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    holding += 1
    if (shield == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `],
        350,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`player_right_moving`,
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `],
    100,
    false
    )
    if (shield == 0) {
        info.changeLifeBy(-1)
        pause(200)
        sprites.destroy(sprite)
        pause(500)
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    holding += -1
    if (holding == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        if (shield == 1) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . . f f f f 2 2 f f f f . . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e 2 f 2 f f f 2 f e f . . . 
                . f f f 2 f e e 2 2 f f f . . . 
                . f e 2 f f e e 2 f e e f . . . 
                f f e f f e e e f e e e f f . . 
                f f e e e e e e e e e e f d f . 
                . . f e e e e e e e e f f b f . 
                . . e f f f f f f f f 4 f b f . 
                . . 4 f 2 2 2 2 2 e d d f c f . 
                . . e f f f f f f e e 4 f f . . 
                . . . f f f . . . . . . . . . . 
                `)
        } else {
            mySprite.setImage(assets.image`player_back`)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    player_direction = 4
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    holding += 1
    if (shield == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 2 2 2 2 e d d 4 e . . 
            f b f 4 f 2 2 2 2 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 2 2 2 f e f . . 
            . . f b b b b f 2 2 2 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 2 2 2 2 f e f b f 
            . . . e d d e 2 2 2 2 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `],
        350,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`player_front_moving`,
        200,
        true
        )
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    shield = 0
    if (player_direction == 1) {
        mySprite.setImage(assets.image`player_right`)
    } else if (player_direction == 2) {
        mySprite.setImage(assets.image`player_left`)
    } else if (player_direction == 3) {
        mySprite.setImage(assets.image`player_back`)
    } else if (player_direction == 4) {
        mySprite.setImage(assets.image`player_front`)
    }
    if (holding >= 1) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        if (player_direction == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`player_right_moving`,
            200,
            true
            )
        } else if (player_direction == 2) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`player_left_moving`,
            200,
            true
            )
        } else if (player_direction == 3) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . . f f f f 2 2 f f f f . . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e 2 f 2 f f f 2 f e f . . . 
                . f f f 2 f e e 2 2 f f f . . . 
                . f e 2 f f e e 2 f e e f . . . 
                f f e f f e e e f e e e f f . . 
                f f e e e e e e e e e e f d f . 
                . . f e e e e e e e e f f b f . 
                . . e f f f f f f f f 4 f b f . 
                . . 4 f 2 2 2 2 2 e d d f c f . 
                . . e f f f f f f e e 4 f f . . 
                . . . f f f . . . . . . . . . . 
                `,img`
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . f f f f f 2 2 f f f f f . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e 2 f 2 f f 2 f 2 e f . . . 
                . f f f 2 2 e e 2 2 f f f . . . 
                f f e f 2 f e e f 2 f e f f . . 
                f e e f f e e e e f e e e f . . 
                . f e e e e e e e e e e f . . . 
                . . f e e e e e e e e f . . . . 
                . e 4 f f f f f f f f 4 e . . . 
                . 4 d f 2 2 2 2 2 2 f d 4 . . . 
                . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
                . . . . f f f f f f . . . . . . 
                . . . . f f . . f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . . f f f f 2 2 f f f f . . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e f 2 f f f 2 f 2 e f . . . 
                . f f f 2 2 e e f 2 f f f . . . 
                . f e e f 2 e e f f 2 e f . . . 
                . f e e e f e e e f f e f f . . 
                . f e e e e e e e e e e f f . . 
                . f f e e e e e e e e f . . . . 
                . f 4 f f f f f f f f e . . . . 
                . f d d e 2 2 2 2 2 f 4 . . . . 
                . f 4 e e f f f f f f e . . . . 
                . . . . . . . . f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f . . . . . . . 
                . . . f f e e e e f f . . . . . 
                . . f e e e f f e e e f . . . . 
                . . f f f f 2 2 f f f f . . . . 
                . f f e 2 e 2 2 e 2 e f f . . . 
                . f e 2 f 2 f f f 2 f e f . . . 
                . f f f 2 f e e 2 2 f f f . . . 
                . f e 2 f f e e 2 f e e f . . . 
                f f e f f e e e f e e e f f . . 
                f f e e e e e e e e e e f d f . 
                . . f e e e e e e e e f f b f . 
                . . e f f f f f f f f 4 f b f . 
                . . 4 f 2 2 2 2 2 e d d f c f . 
                . . e f f f f f f e e 4 f f . . 
                . . . f f f . . . . . . . . . . 
                `],
            350,
            true
            )
        } else if (player_direction == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`player_front_moving`,
            200,
            true
            )
        }
    }
})
info.onScore(40, function () {
    game.splash("You hear a weird sound...")
    for (let index = 0; index < 3; index++) {
        music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
    tiles.setCurrentTilemap(tilemap`level_2_finished`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Spawning = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    heart_generator = randint(0, 20)
    if (heart_generator == 1) {
        info.changeLifeBy(1)
    }
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let Boss_variable: Sprite = null
let heart_generator = 0
let projectile: Sprite = null
let ghost4: Sprite = null
let ghost3: Sprite = null
let ghost2: Sprite = null
let ghost1: Sprite = null
let holding = 0
let player_direction = 0
let level = 0
let mySprite: Sprite = null
let Boss_Spawn = 0
let shield = 0
let Spawning = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
    9999999999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999dcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
    999999999999999999999999999999999999999ddcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
    999999999999999999999999999999999999999dbcbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
    999999999999999999999999666999999999999dcccc99999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
    99999999999999999999999996699999999999dbccccb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
    99999999999999999999999996699699999999dbbccbb9999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
    9999999999999999966999996699999999999ddcbcccbb999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
    9999999999999999969999999999999999999dbcccccbb999999999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
    699969999999999999999999999999666699cdccbcbcccc699999ddddd9969999dbbb9999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
    999999999999999999999999999999666696dcbbbcbbbccb99999dbbdb99dd999ddbb9999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
    696999999999999999969999999699999996dccccccccccb99969dcccb9ddcc9ddccb6696999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
    69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9dbcbb6699999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
    6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6dbbcc6699999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
    9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccbbccccc6669669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
    9999999999999999999699999999999999bcccccccccccccbb6666bcbbcccbbccbcbb6666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
    999999996699999699999669999999999999cccccccccccc666666bccbcccccccccbb66966666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
    999999999969999669966699999999999999ccbbbbbbcccc666666cccbbbbbbcccccc66966999996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
    999999999999669996966996699999999999bbcbbccbbbbb6666666bbbcbbbccbbbb66666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
    999996699696669996999999969999999999bbcbbbbbbbbb66666666bccccccccbb666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
    666996666666699966999999999699999999bbbbcccbbbbb66666666dccccccccc6666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
    666666666666999666696699999966999999bccccccccccb66666666dccbbbbbcc6666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
    6666666666666666666669699969999999999cccccccccc966666666dcbbbccbbc6666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
    66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbbcccc666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
    666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccbbbbcbb66666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
    666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbbbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
    b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbccbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
    b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
    bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
    444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
    44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
    444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
    4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
    4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444bdbbccbbcbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
    4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
    4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
    4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
    4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
    4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
    4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
    44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
    44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
    44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
    44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
    6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
    4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
    4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
    4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
    4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
    444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
    fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
    effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
    beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
    dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
    ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
    efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
    ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
    ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
    ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
    fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
    ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
    fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
    fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
    ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
    fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
    ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
    bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
    bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
    bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
    bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
    bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
    bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
    bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
    ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
    ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
    cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
    cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
    bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
    bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
    bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
    bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
    bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
    bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
    cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
    bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
    bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
    ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
    cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
    cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
    ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
    bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
    bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
    cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
    bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
    ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
    bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
    dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
    d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
    ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
    4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
    dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
    `)
Spawning = 0
shield = 0
let projectile_sent = 0
let Boss_attack = 0
Boss_Spawn = 0
let Boss_life = 25
mySprite = sprites.create(assets.image`player_front_2`, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(20, 60)
controller.moveSprite(mySprite)
game.splash("Press A to play")
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.InBackground)
level = 1
player_direction = 1
tiles.setCurrentTilemap(tilemap`level0`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight3)
scene.cameraFollowSprite(mySprite)
info.setLife(5)
mySprite.setStayInScreen(true)
game.splash("Level 1: kill 15 monsters", "")
forever(function () {
    if (Boss_life == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroy(Boss_variable, effects.fire, 500)
        music.play(music.stringPlayable("C B E B C E D F ", 90), music.PlaybackMode.InBackground)
        game.setGameOverMessage(true, "Congratulations! You have finally defeated the boss!")
        game.gameOver(true)
        Spawning = 1
        tiles.setCurrentTilemap(tilemap`level_3_finished`)
        Boss_life = -1
    }
})
forever(function () {
    if (Boss_Spawn == 1) {
        Boss_variable = sprites.create(assets.image`Boss image`, SpriteKind.Boss)
        Boss_variable.setPosition(80, 60)
        Boss_variable.follow(mySprite, 20)
        Boss_Spawn = 0
        Boss_attack = 1
        pause(5000)
    }
})
forever(function () {
    if (Spawning == 0) {
        if (level == 1) {
            setghost()
            ghost1.follow(mySprite, 40)
            ghost2.follow(mySprite, 40)
            ghost3.follow(mySprite, 40)
            ghost4.follow(mySprite, 40)
            pause(4000)
        }
        if (level >= 2) {
            setghost()
            ghost1.follow(mySprite, 50)
            ghost2.follow(mySprite, 50)
            ghost3.follow(mySprite, 50)
            ghost4.follow(mySprite, 50)
            pause(3000)
        }
    }
})
forever(function () {
    if (shield == 1) {
        controller.moveSprite(mySprite, 60, 60)
    } else {
        controller.moveSprite(mySprite, 100, 100)
    }
})
