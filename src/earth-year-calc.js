export class ageFinder{
  // const earthSolarYearMS = 3155695200000;
    constructor (birthDate, today) {
       this.bDate = birthDate;
       this.todayDate = today;
}

    lifeSpan () {
      this.lifeSpan = (this.todayDate - this.bDate) / 86400000;
    }

  };
