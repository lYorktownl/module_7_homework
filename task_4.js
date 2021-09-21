function ElectricalAppliance(typeConect) {
    this.condition = false,
    this.typeConect = 'wire'
  }
  ElectricalAppliance.prototype.turnOn = function(){
     return this.condition = !this.condition
   }
  Thermopot.prototype = new ElectricalAppliance()
     function Thermopot (brand, color, wattPower){
       this.color = color
       this.brand = brand
       this.wattPower = wattPower
     }
   
  const thermopot = new Thermopot ('LG','brown','2000' )
  
  console.log(thermopot)
  
  Lamp.prototype = new ElectricalAppliance()
    function Lamp (brand, color, wattPower){
       this.color = color
       this.brand = brand
       this.wattPower = wattPower
      this.bright = 0
    }
      Lamp.prototype.setBright = function (bright){
        return this.bright = bright
      }
  const lamp = new Lamp('luxe','white','90')
  lamp.turnOn()
  lamp.setBright(50)
  console.log(lamp)