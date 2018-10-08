import { lifeExpectancy } from './../src/expectancy-calc.js';
  describe('lifeExpectancy', function() {

    it('should return lifeExpectancy', function() {
      let marsLife = new lifeExpectancy('mars', 10);
      let exxs = tellme.mars();
      expect(tellme.lifeTime).toEqual(8);
    })
  })
