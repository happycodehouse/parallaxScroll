# 📜 Parallax page - scroll
As you move the mouse, you'll notice that the background image moves in the opposite direction of the mouse motion. <br />
You can also see that as you scroll, the background image layer stretches to give the impression of layers.

#### ✔️ Things to remember
```
let targetX = 0;
const speed = .1;

targetX += (x - targetX) * speed;
```
* targetX += (x - targetX) * speed; is a formula that updates the value of targetX by smoothing the difference between the X coordinate of the mouse (x) and the X coordinate of the moving target in the current image (targetX) at the rate of speed.

* This formula is used to smoothly follow the movement of the mouse. x - targetX is the calculated difference between the X coordinate of the mouse and the X coordinate of the current image. This difference is scaled by the speed ratio to calculate the amount of change, and this value is accumulated in targetX.

* In other words, this formula is responsible for updating the X coordinates of the current image to smoothly follow the X coordinates of the mouse. This creates the effect of the image smoothly following the mouse movement.
