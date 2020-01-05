class House {
    constructor(doorColour) {
      this.doorColour = doorColour
    }
    displayDoorColour = () => {
      console.log(`The door colour is ${this.doorColour}`)
    }
  }
  
  class NewHouse extends House {
    changeDoorColour = (newDoorColur) => {
      this.doorColour = newDoorColur
      console.log(`The door colour has been set to ${newDoorColur}`)
    }
  }
  
  const house1 = new NewHouse("brown")
  
  console.log(house1.changeDoorColour("black"))