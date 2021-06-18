const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var snow = [];
var bg;
var a=100;
var TF=0;

function preload(){
    bg = loadImage("BG.jpg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(1200,568);
    
    //if(frameCount % 600 === 0){
        for(var i=0; i<a; i++){
            snow.push(new createDrop(random(0,1200),random(0,1200)));
        }
    //}    
}

function draw(){
    Engine.update(engine);
    background(bg);

    for(var i = 0; i<a; i=i+1){
        snow[i].a();
    }

    for(var i = 0; i<a; i=i+2){
    snow[i].b();
    }
}