export class Agefinder {
  constructor(birthDate, today){
    this.bDate = birthDate;
    this.todayDate = today;
    this.earthDayAge = Math.round((this.todayDate - this.bDate) / 86400000);
    this.lifeSpanYears = Math.round(this.earthDayAge/ 365);
    this.mercurialYears = Math.round(this.earthDayAge/ 87.6);
    this.venutianYears = Math.round(this.earthDayAge/ 226.3);
    this.martianYears = Math.round(this.earthDayAge/ 686.2);
    this.jupiterYears = Math.round(this.earthDayAge/ 4328.9);
  }

}
