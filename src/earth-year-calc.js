export class Agefinder{
  // const earthSolarYearMS = 3155695200000;
      constructor(birthDate, today){
       this.bDate = birthDate;
       this.todayDate = today;
       lifeSpan(bDate, todayDate);
     }

      lifeSpan(){

      let temp = parseInt((todayDate - bDate) / 86400000);
      alert(temp);
      this.lifeSpan = temp;
      return temp;
    }
    lifeSpan()

  }
