function ElectricalAppliances(name, power){
  this.name = name,
  this.power = power,
  this.turn = false
}

ElectricalAppliances.prototype.plugged = function(){
  this.turn = true,
  console.log(`${this.name} is turn on`)
}

ElectricalAppliances.prototype.unplugged = function(){
  this.turn = false,
  console.log(`${this.name} is turn of`)
}


function Lamp(name, power, bulbtypes, type, height){
  this.name = name;
  this.power = power;
  this.bulbtypes = bulbtypes;
  this.type = type
  this.getheight = function(){
    console.log(`Высота лампы составляет ${height} см`)
  }
}

Lamp.prototype = new ElectricalAppliances();



function Computer(name, power, brand, type, weight){
  this.name = name;
  this.power = power;
  this.brand = brand;
  this.type = type
  this.getweight = function(){
    console.log(`Вес: ${weight} г`)
  }
}

Computer.prototype = new ElectricalAppliances();

const floorlamp = new Lamp("Floor lamp", 150, "Led", "Floor", 110);

const laptop = new Computer("Laptop", 60, "Lenovo", "Laptop", 900);

floorlamp.plugged();
laptop.unplugged();

console.log(floorlamp)
console.log(laptop)