player_x = 10;
player_y = 10;
block_width = 30;
block_height = 30;
var canvas = new fabric.Canvas('my_canvas');
var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(100);
        player_object.set({
            top:player_y ,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(image_block) {
    fabric.Image.fromURL(image_block , function(Img){
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y - 10,
            left:player_x - 10
        });
        canvas.add(block_object);
    })
}