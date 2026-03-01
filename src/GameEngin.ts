/**
 * The Game Engine Class
 * 
 * @version 1.0.0
 */
export class GameEngine {

    /**
     * The Canvas Object.
     */
    canvas: HTMLCanvasElement;

    /**
     * The 2d Context.
     */
    context: CanvasRenderingContext2D|null;

    /**
     * Frames per second.
     */
    fps: number = 30;

    /**
     * Creates the Canvas Element.
     */
    prepareCanvas() {
        this.canvas.width = window.innerWidth - 20;
        this.canvas.height = window.innerHeight - 20;

        document.body.appendChild(this.canvas);
    }

    /**
     * The Game Engine.
     */
    constructor() {
        this.canvas = document.createElement('canvas');
        this.prepareCanvas();

        this.context = this.canvas.getContext('2d');

        this.animate();
    }

    /**
     * The Animation Method.
     */
    animate() {
        // First of all clear the canvas view.
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // This is just an example of a black filled rectangle.
        this.context?.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Last request the Animation Frame.
        setTimeout(() => {
            requestAnimationFrame(this.animate.bind(this));
        }, 1000 / this.fps);
    }
}
