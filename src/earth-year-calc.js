export class Agefinder {
  // const earthSolarYearMS = 3155695200000;
      constructor(birthDate, today){
       this.bDate = birthDate;
       this.todayDate = today;
     }

      lifeSpan(){
      let temp = ((this.todayDate - this.bDate) / 86400000);
      this.lifeSpan = temp;
      return temp;
    }

  }
