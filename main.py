@namespace
class SpriteKind:
    Item = SpriteKind.create()
    balls = SpriteKind.create()
    gros_rat = SpriteKind.create()
    jtaime_pas = SpriteKind.create()

def on_up_pressed():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    animation.run_image_animation(mySprite,
        assets.animation("""
            player_back_moving
        """),
        200,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite2, otherSprite2):
    global timer_touched
    info.change_countdown_by(10)
    sprites.destroy(timer)
    timer_touched = 1
    pause(2000)
sprites.on_overlap(SpriteKind.player, SpriteKind.Item, on_on_overlap)

def on_on_overlap2(sprite22, otherSprite22):
    global food_dispawn
    info.change_score_by(1)
    food_randomizer()
    foodies.set_position(randint(0, 160), randint(0, 120))
    food_dispawn = 0
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def food_randomizer():
    global randomizer_picture
    randomizer_picture = randint(1, 4)
    if randomizer_picture == 1:
        foodies.set_image(assets.image("""
            apple
        """))
    elif randomizer_picture == 2:
        foodies.set_image(assets.image("""
            lemon
        """))
    elif randomizer_picture == 3:
        foodies.set_image(assets.image("""
            strawberry
        """))
    elif randomizer_picture == 4:
        foodies.set_image(assets.image("""
            cherries
        """))

def on_on_overlap3(sprite32, otherSprite32):
    deduct_point_enemy()
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap3)

def on_down_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    mySprite.set_image(assets.image("""
        player_front
    """))
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_pressed():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    animation.run_image_animation(mySprite,
        assets.animation("""
            player_left_moving
        """),
        200,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    mySprite.set_image(assets.image("""
        player_right
    """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    mySprite.set_image(assets.image("""
        player_left
    """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_countdown_end():
    if info.score() >= 5:
        game.game_over(True)
    else:
        game.game_over(False)
info.on_countdown_end(on_countdown_end)

def on_on_overlap4(sprite322, otherSprite322):
    deduct_point_enemy()
sprites.on_overlap(SpriteKind.player, SpriteKind.jtaime_pas, on_on_overlap4)

def on_on_overlap5(sprite3, otherSprite3):
    deduct_point_enemy()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap5)

def on_right_pressed():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    animation.run_image_animation(mySprite,
        assets.animation("""
            player_right_moving
        """),
        200,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_up_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    mySprite.set_image(assets.image("""
        player_back
    """))
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_down_pressed():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    animation.run_image_animation(mySprite,
        assets.animation("""
            player_front_moving
        """),
        200,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def deduct_point_enemy():
    if info.score() > 0:
        info.change_score_by(-1)
    pause(1000)
fireball_y: Sprite = None
fireball_x: Sprite = None
countdown_inverse = 0
timer_created = 0
randomizer_picture = 0
timer: Sprite = None
foodies: Sprite = None
mySprite: Sprite = None
food_dispawn = 0
timer_touched = 0
scene.set_background_image(assets.image("""
    moon
"""))
timer_touched = 0
food_dispawn = 0
mySprite = sprites.create(assets.image("""
    player_front_2
"""), SpriteKind.player)
foodies = sprites.create(assets.image("""
    apple
"""), SpriteKind.food)
_2 = sprites.create(assets.image("""
    snake
"""), SpriteKind.enemy)
_3 = sprites.create(assets.image("""
    bat
"""), SpriteKind.jtaime_pas)
info.set_score(0)
info.start_countdown(30)
mySprite.set_stay_in_screen(True)
mySprite.set_position(20, 100)
_3.set_stay_in_screen(True)
_3.set_bounce_on_wall(True)
foodies.set_stay_in_screen(True)
controller.move_sprite(mySprite)
game.splash("Press A to play")
foodies.set_position(randint(0, 160), randint(0, 120))
_3.set_position(randint(0, 160), randint(0, 120))
_2.follow(mySprite, 60)
_3.set_velocity(30, 30)

def on_forever():
    global timer_created
    if timer_created == 1:
        pause(5000)
        if timer_touched < 1:
            sprites.destroy(timer, effects.fire, 500)
            timer_created = 0
        timer_created = 0
forever(on_forever)

def on_forever2():
    global timer, timer_created
    pause(10000)
    timer = sprites.create(assets.image("""
        hourglass_png
    """), SpriteKind.Item)
    timer_created = 1
    timer.set_stay_in_screen(True)
    timer.set_position(randint(0, 160), randint(0, 120))
forever(on_forever2)

def on_forever3():
    global fireball_x, fireball_y
    if countdown_inverse > 0:
        fireball_x = sprites.create_projectile_from_side(assets.image("""
            fireball
        """), 60, 0)
        fireball_x.y = randint(0, 120)
        pause(50)
        fireball_y = sprites.create_projectile_from_side(assets.image("""
            fireball
        """), 0, 60)
        fireball_y.x = randint(0, 160)
        pause(2000 - countdown_inverse)
forever(on_forever3)

def on_forever4():
    global food_dispawn
    if food_dispawn == 1:
        food_randomizer()
        foodies.set_position(randint(0, 160), randint(0, 120))
        food_dispawn = 0
    else:
        food_dispawn += 1
    pause(1500)
forever(on_forever4)

def on_forever5():
    global countdown_inverse
    pause(10000)
    if countdown_inverse != 1000:
        for index in range(8):
            countdown_inverse += 125
            pause(2500)
forever(on_forever5)
