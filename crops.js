class Crop {
    constructor(acres) {
      this.acres = acres
    }
  }
  

class Wheat {
    constructor(acres) {
      this.acres = acres
    }
  
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }

  class Sugarcane {
      constructor(acres) {
          this.acres = acres
      }
      getYieldInKg() {
          return Math.pow(this.acres * 2.6, 1.1)
      }
  }
  module.exports = {Crop, Wheat, Sugarcane}