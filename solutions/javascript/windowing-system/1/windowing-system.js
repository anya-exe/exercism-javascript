export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.height = newHeight;
  this.width = newWidth;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move =  function(newX, newY){
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow{
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(size) {
       const minWidth = 1;
       const minHeight = 1;
       
       const maxWidth = this.screenSize.width - this.position.x;
       const maxHeight = this.screenSize.height - this.position.y;
       
       this.size.width = Math.max(minWidth, Math.min(size.width, maxWidth));
       this.size.height = Math.max(minHeight, Math.min(size.height, maxHeight));
}


    move(position){
        const X = this.screenSize.width - this.size.width;
        const Y = this.screenSize.height - this.size.height;

        this.position.x = Math.max(0, Math.min(position.x, X));
        this.position.y = Math.max(0, Math.min(position.y, Y));

    }
}
    
export function changeWindow(programWindow) {
        const newSize = new Size(400, 300);
        const newPosition = new Position(100, 150);
        programWindow.resize(newSize);
        programWindow.move(newPosition);
        return programWindow;
}
