export class ageFinder{
    constructor (birthDate, today) {
      const earthSolarYearMS = 3155695200000
      const earthDayms = 86400000;
      alert(earthSolarYearMS);
       this.bDate = birthDate;
       this.todayDate = today;
       this.lifeTime = ((today.getFullYear()) - (birthDate.getFullYear()));
       return lifeTime;

}
    }
