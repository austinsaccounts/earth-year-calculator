import { ageFinder } from './../src/earth-year-calc.js';

  describe('ageFinder', function() {

    // it('should return the date in milliseconds', function() {
    //   let specDate = Date.now();
    //   let results = new ageFinder("stuff");
    //   expect(results.todayDate).toEqual(specDate);
    // })

    it('should return age on earth', function() {
      let birthDate = new Date('1917-10-05');
      let today = new Date('2017-10-05');
      let results = new ageFinder(birthDate, today);
      expect(results.lifeTime).toEqual(solarYcontrol);
    })

    // it('should return age in earth years', function() {
    // alert(results.lifeTime);
    //
    //   let birthDate = new Date('1918-10-05');
    //   let earthResult = new ageFinder(birthDate);
    //   let control = 100;
    //   alert(earthResult);
    //   expect(earthResult).toEqual(control);
    // })

    // it('should return age in mercurial years', function() {
    //   let birthDate = new Date('1918-10-05');
    //   let earthResult = age-finder(birthDate);
    //   let control = 24;
    //   expect(mercurialResult).toEqual(control)
    // })
    //
    // it('should return age venutian years', function() {
    //   let birthDate = new Date('1918-10-05');
    //   let earthResult = age-finder(birthDate);
    //   let control = 62;
    //   expect(venutianResult).toEqual(control)
    // })
    //
    // it('should return age martian years', function() {
    //   let birthDate = new Date('1918-10-05');
    //   let earthResult = age-finder(birthDate);
    //   let control = 188;
    //   expect(martianResult).toEqual(control)
    // })
    //
    // it('should return age Jupiterian years', function() {
    //   let birthDate = new Date('1918-10-05');
    //   let jupiterianResult = age-finder(birthDate);
    //   let control = 1186;
    //   expect(jupiterianResult).toEqual(control)
    // })
    //
    // it('should return life expectancy on that planet', function() {
    //   let birthDate = new Date('1918-10-05');
    //   let expectancyResult = age-finder(birthDate);
    //   let control = "na";
    //   expect(expectancyResult).toEqual(control)
    // })
    //
    // it('should return if they are too old to live on that planet, and by how many years', function() {
    //   let birthDate = new Date('1918-10-05');
    //   let depressingResult = age-finder(birthDate);
    //   let control = "stuff";
    //   expect(depressingResult).toEqual(control)
    // })


})
