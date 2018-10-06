import { Agefinder } from './../src/earth-year-calc.js';

  describe('Agefinder', function() {

    it('should return the date in milliseconds', function() {
      let today = Date.now();
      let specDate = Date.now();
      let results = new Agefinder(specDate, today);
      let todayDate = results.todayDate;
      expect(todayDate).toEqual(today);
    })

    it('should return age on earth in days', function() {
      let birthDate = new Date('1917-10-05');
      let today = new Date('2017-10-05');
      let results = new Agefinder(birthDate, today);
      let earthDayAge = results.lifeSpan(birthDate, today);
      expect(earthDayAge).toEqual(36525);
    })

    it('should return age on earth in years', function() {
      let birthDate = new Date('1917-10-05');
      let today = new Date('2017-10-05');
      let results = new Agefinder(birthDate, today);
      let earthDayAge = results.lifeSpan(birthDate, today);
      let earthYearAge = results.lifeSpanYears();
      expect(earthYearAge).toEqual(100);
    })

    it('should return age in mercurial years', function() {
      let birthDate = new Date('1917-10-05');
      let today = new Date('2017-10-05');
      let results = new Agefinder(birthDate, today);
      let earthDayAge = results.lifeSpan(birthDate, today);
      let earthYearAge = results.lifeSpanYears();
      let mercurialResult = results.mercuryAge();
      expect(mercurialResult).toEqual(416)
    })
    it('should return age in venutian years', function() {
      let birthDate = new Date('1917-10-05');
      let today = new Date('2017-10-05');
      let results = new Agefinder(birthDate, today);
      let earthDayAge = results.lifeSpan(birthDate, today);
      let earthYearAge = results.lifeSpanYears();
      let mercurialResult = results.mercuryAge();
      let venutianResult = results.venutianAge();
      expect(venutianResult).toEqual(161)
    })

    it('should return age in martian years', function() {
      let birthDate = new Date('1917-10-05');
      let today = new Date('2017-10-05');
      let results = new Agefinder(birthDate, today);
      let earthDayAge = results.lifeSpan(birthDate, today);
      let earthYearAge = results.lifeSpanYears();
      let mercurialResult = results.mercuryAge();
      let venutianResult = results.venutianAge();
      let martianResult = results.martianAge();
      expect(martianResult).toEqual(53);
    })

    it('should return age in jupiterian years', function() {
      let birthDate = new Date('1917-10-05');
      let today = new Date('2017-10-05');
      let results = new Agefinder(birthDate, today);
      let earthDayAge = results.lifeSpan(birthDate, today);
      let earthYearAge = results.lifeSpanYears();
      let mercurialResult = results.mercuryAge();
      let venutianResult = results.venutianAge();
      let jupiterResult = results.jupiterAge();
      expect(jupiterResult).toEqual(8);
    })

});
