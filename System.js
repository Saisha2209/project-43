class System{
 constructor(){
 
}
hide(){
    this.input.hide();
    this.input2.hide();
    this.input3.hide();
}


authenticate(actualCode,enterCode){
textSize(12)
fill("black")
text("code",300,300)
if (actualCode===enterCode.toUpperCase()){
 return true;
}else 
return false;
}
}