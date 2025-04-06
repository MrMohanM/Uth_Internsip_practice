class Pet{
    constructor(name , sound){
        this.name=name;
        this.sound=sound;
    }
    confirm(){
        return this.name +"  has been Sucessfully registered under  "+ 
        this.constructor.name.toLowerCase() + "-" +this.sound;
    }
}
class Dog extends Pet{
    constructor(name){
        super(name,"woof! woof!")
    }
    confrim(){
        return super.confirm() ;
    }

}
class Cat extends Pet{
    constructor(name,trick){
        super(name,"meow! meow!");
        this.trick=trick;
    }
    confrim(){
        return super.confirm() + "<br>Favorite Trick:" + this.trick;
    }
}

function adjustForm(form){
    if(form.elements["type"].value == "cat")
    {
        document.getElementById("more-info").style.display="table-cell";
    }
    else
    {
        document.getElementById("more-info").style.display="none";
    }
}
function register(form){
    var name;
    var trick;
    var pet;
    if(!form.checkValidity()){
        document.getElementById("msg").innerHTML="you must enter value for all fields";
    }
    else{
        name=form.elements["name"].value;
        if(form.elements["type"].value == "cat")
        {
            trick=form.elements["trick"].value;
            pet=new Cat(name,trick);
        }
        else
        {
            pet=new Dog(name);
        }
        document.getElementById("msg").innerHTML=pet.confirm();
    }
    
}