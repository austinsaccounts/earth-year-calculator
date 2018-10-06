import { Agefinder } from './../src/earth-year-calc.js';
describe('Agefinder', function() {
  let birthDate = new Date('1917-10-05');
  let today = new Date('2017-10-05');
  let results = new Agefinder(birthDate, today);

  it('should return age on earth in days', function() {
  expect(results.earthDayAge).toEqual(36525);
  })

  it('should return age on earth in years', function() {
    expect(results.lifeSpanYears).toEqual(100);
  })

  it('should return age in mercurial years', function() {
    expect(results.mercurialYears).toEqual(417)
  })

  it('should return age in venutian years', function() {
    expect(results.venutianYears).toEqual(161)
  })

  it('should return age in martian years', function() {
    expect(results.martianYears).toEqual(53);
  })

  it('should return age in jupiterran years', function() {
    expect(results.jupiterYears).toEqual(8);
  })

  it('should return the date in milliseconds since utc', function() {
    let today = Date.now();
    let specDate = Date.now();
    let tests = new Agefinder(specDate, today);
    let todayDate = tests.todayDate;
    expect(todayDate).toEqual(today);
  })

});
