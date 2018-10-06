export class Agefinder {
  // const earthSolarYearMS = 3155695200000;
  constructor(birthDate, today){
    this.bDate = birthDate;
    this.todayDate = today;
  }

  lifeSpan(){
    let temp = Math.round((this.todayDate - this.bDate) / 86400000);
    this.earthDayAge= temp;
    return temp;
  }

  lifeSpanYears(){
    let temp = Math.round(this.earthDayAge/ 365);
    this.lifeSpanYears = temp;
    return temp;
  }

  mercuryAge(){
    let temp = Math.round(this.earthDayAge/ 87.6);
    this.mercurialYears = temp;
    return temp;
  }

  venutianAge(){
    let temp = Math.round(this.earthDayAge/ 226.3);
    this.venutianYears = temp;
    return temp;
  }

  martianAge(){
    let temp = Math.round(this.earthDayAge/ 686.2);
    this.martianYears = temp;
    return temp;
  }

  jupiterAge(){
    let temp = Math.round(this.earthDayAge/ 4328.9);
    this.jupiterYears = temp;
    if (temp > 10){
      alert(`at your age, on jupiter, you should be really dead`);
    }
      return temp;
  }

}
