class ElectricalAppliance {
    constructor () {
    this.condition = false,
    this.typeConect = 'wire'
    }
    turnOn() {
     return this.condition = !this.condition
   }
  }
  
  class Thermopot extends ElectricalAppliance {
     constructor (brand, color, wattPower){
       super();
       this.color = color
       this.brand = brand
       this.wattPower = wattPower
     }
    }
  const thermopot = new Thermopot ('LG','brown','2000' )
  
  console.log(thermopot)
  
class Lamp extends ElectricalAppliance{
    constructor (brand, color, wattPower){
       super();
       this.color = color
       this.brand = brand
       this.wattPower = wattPower
       this.bright = 0
    }
    setBright (bright){
        return this.bright = bright
    }
}
  const lamp = new Lamp('luxe','white','90')
  lamp.turnOn()
  lamp.setBright(50)
  console.log(lamp)