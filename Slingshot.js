// Slingshot Completo PRO C28 a C29
class SlingShot{                   
    constructor(bodyA, pointB){     
        var options = {
            bodyA: bodyA,
            pointB: pointB,                  
            stiffness: 0.04,
            length: 10
        }
        //A TA) Precarga las imágenes para la resotrera
        

        this.pointB = pointB;              
        this.sling = Constraint.create(options);     
        World.add(world, this.sling);        
    }

    fly(){
        this.sling.bodyA = null;            
    }

    display(){
        //B TA)) Agrega imágen para que se vea en sketch.js
        



        if(this.sling.bodyA){                   
            var pointA = this.sling.bodyA.position;     
            var pointB = this.pointB;   
            
            
            push();     
            // A SA) Agrega color RGB
            stroke(48,22,8);  
            
            
            if(pointA.x < 220) { 
                strokeWeight(7); 
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                
                //Bd SA) Agrega la imágen de la Liga Base a una distancia del punto A.x-30, puntoA.y-10, con 15 de ancho y 30 de alto)
                


            }
            else{
                 
                strokeWeight(7);   
                line(pointA.x +25, pointA.y, pointB.x, pointB.y); 
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3); 

                //Cd SA) Agrega la imágen de la Liga Base a una distancia del punto A.x + 25, puntoA.y-10, con 15 de ancho y 30 de alto)
                

                
            }
            pop();           
        }
    }
    
}
