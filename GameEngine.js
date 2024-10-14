/**
 * The Game Engine Class
 * 
 * @version 1.0.0
 */
class GameEngine {

    /**
     * The Canvas Object.
     * 
     * @type {HTMLCanvasElement}
     */
    canvas;

    /**
     * The 2d Context.
     * 
     * @type {CanvasRenderingContext2D|null}
     */
    context;

    /**
     * Frames per second.
     * 
     * @type {number}
     */
    fps = 30;

    /**
     * Creates the Canvas Element.
     */
    createCanvas() {
        this.canvas = document.createElement('canvas');

        this.canvas.width = window.innerWidth - 20;
        this.canvas.height = window.innerHeight - 20;

        document.body.appendChild(this.canvas);
    }

    /**
     * The Game Engine.
     */
    constructor() {
        this.createCanvas();

        this.context = this.canvas.getContext('2d');

        this.animate();
    }

    /**
     * The Animation Method.
     */
    animate() {
        // First of all clear the canvas view.
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // This is just an example of a black filled rectangle.
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Last request the Animation Frame.
        setTimeout(() => {
            requestAnimationFrame(this.animate.bind(this));
        }, 1000 / this.fps);
    }
}
