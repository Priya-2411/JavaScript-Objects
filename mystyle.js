
const coffee1 = {
    name: "Priya",
    type: "Latte",
    size: "Grande",
    drizzel: true,
    whippedCream: true,
    sweetener: true,
    coldForm: false,
    dairy: "cream",

   cofeeOrder: function(name,type,size,drizzel,whippedCream,sweetener,coldForm,dairy){

    this.name = name;
    this.type = type;
    this.size = size;
    this.whippedCream = whippedCream;
    this.drizzel = drizzel;
    this.sweetener = sweetener;
    this.coldForm = coldForm;
    this.dairy = dairy;

       alert(this.name +" has order a " + this.size + " " + this.type + " with " +
       (this.drizzel? "Drizzel" : "No Drizzel") + ", " + 
       (this.whippedCream? "Whippedcream" : "No WhippedCream") + ", " +
       (this.sweetener? "A sweetener" : " No Sweetener") + ", " +
       (this.coldForm? "Cold From" : "No Cold Form") + ", and " +
       this.dairy

       
       );
   

   }



};
const coffee2 = {
    name: "Prachi",
    type: "Coffee",
    size: "Venti",
    drizzel: false,
    whippedCream: true,
    sweetener: false,
    coldForm: true,
    dairy: "2% Milk",

   cofeeOrder: function(){
     
       alert(this.name +" has order a " + this.size +" "+ this.type + " with " +
       (this.drizzel? "Drizzel" : "No Drizzel") + ", " + 
       (this.whippedCream? "Whippedcream" : "No WhippedCream") + ", " +
       (this.sweetener? "A sweetener" : " No Sweetener") + ", " +
       (this.coldForm? "Cold From" : "No Cold Form") + ", and " +
       this.dairy

       
       );
   

   }



};
coffee1.cofeeOrder("priyank","coffe","tall",false,true,false,true,"almond milk");
coffee2.cofeeOrder();
