class Form{
    constructor(){
        this.title = createElement('h1');
        this.instructions = createElement('h2');
        this.story = createElement('h2');
        this.button = createButton("Play");
    }
    display(){
    this.title.html("Save The Birds");
    this.title.position(displayWidth-1100,displayHeight-950);
    this.title.style('font-size', '100px');
    this.title.style('color', 'green');


    this.instructions.html("Instructions: 1.Use the up, down, left and right arrow keys to move the bird around, 2. Try not to go into the range of cell phone towers and stay away from the car smoke as well. Note: you only have three lives.");
    this.instructions.style('font-size', '42px');
    this.instructions.style('color', "black");
    this.instructions.position(displayWidth-1500, displayHeight-600);

    this.story.html("There is a bird who lives on a tree with its children. It went to get food for the children. It could not find any food so it decided to go home. On the way there are disasters, that it needs help to survive. Help the bird reach its home tree safely!");
    this.story.style('font-size', '40px');
    this.story.style('color', "red");
    this.story.position(displayWidth-1500, displayHeight-800);

    this.button.position(displayWidth-900, displayHeight-300);
    this.button.style('color', 'lightgreen');
    this.button.style('font-size', '30px');
    this.button.style('width', '200px');
    this.button.style('height', '50px');
    this.button.style('background', 'darkblue');

    this.button.mousePressed(()=>{
        hide();
        gameState = "play";
    });

    }
     
   

}