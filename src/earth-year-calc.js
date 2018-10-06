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
    let temp = Math.round(this.earthDayAge / 365);
    this.lifeSpanYears = temp;
    return temp;
  }

    mercuryAge(){
      let temp = Math.round(this.lifeSpanYears *.24);
      this.mercurialYears = temp;
      return temp;
    }

    venutianAge(){
      let temp = this.lifeSpanYears *.62;
      this.venutianYears = temp;
      return temp;
    }

    martianAge(){
      let temp = Math.round(this.lifeSpanYears *1.88);
      this.martianYears = temp;
      return temp;
    }

    jupiterAge(){
      let temp = Math.round(this.lifeSpanYears *11.86);
      this.jupiterYears = temp;
      if (temp > 80){
        alert(`at your age, on jupiter, you should be really dead`);
      }
      return temp;
    }

  }
