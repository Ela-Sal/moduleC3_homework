class ElectricalAppliances{
  constructor(name, power){
  this.name = name;
  this.power = power;
  this.turn = false
}
  plugged(){
  this.turn = true;
  console.log(`${this.name} is turn on`)
}
  unplugged(){
  this.turn = false;
  console.log(`${this.name} is turn of`)
}
}

class Lamp extends ElectricalAppliances{
  constructor(name, power, bulbtypes, type, height){
  super(name, power);
  this.bulbtypes = bulbtypes;
  this.type = type;
  this.getheight = function(){
    console.log(`Высота лампы составляет ${height} см`)
  };
  this.turn = false 
  }
  
}
  
class Computer extends ElectricalAppliances{
  constructor(name, power, brand, type, weight){
  super(name, power);
  this.brand = brand;
  this.type = type;
  this.getweight = function(){
    console.log(`Вес: ${weight} г`)
  };
  this.turn = true 
  }
  
}

const floorlamp = new Lamp("Floor lamp", 150, "Led", "Floor", 110);

const laptop = new Computer("Laptop", 60, "Lenovo", "Laptop", 900);


floorlamp.plugged();
laptop.unplugged();

console.log(floorlamp)

console.log(laptop)
 