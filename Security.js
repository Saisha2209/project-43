class Security{
    constructor(){
        this.button=createButton("Check");
        this.button2=createButton("Check");
        this.button3=createButton("Check")
        this.input=createInput("Enter answer")
        this.input2=createInput("Enter answer")
         this.input3=createInput("Enter answer")
    }

    display(){
        this.input.position(100,130)
        this.input2.position(400,250);
        this.input3.position(700,430)
        this.button.position(100,150);
        this.button2.position(400,270)
        this.button3.position(700,450)
        this.button.mousePressed(()=>{
        if(system.authenticate(answer1,this.input.value())){
         score=score+1
        }else {
            score=score+0
        }
        })
        this.button2.mousePressed(()=>{
            if(system.authenticate(answer2,this.input2.value())){
                score=score+1
            }else {
                score=score+0
            }
        })
        this.button3.mousePressed(()=>{
            if (system.authenticate(answer3,this.input3.value())){
                score=score+1
            }else {
                score=score+0
            }
        })
    }
    hide(){
        this.input.hide();
        this.input2.hide();
        this.input3.hide();
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
    }
}