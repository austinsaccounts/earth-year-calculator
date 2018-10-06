# Project Title
Earth Year Calculator

## Description
this program will calculate your age based on the solar years of various planets
(A Mercury year is .24 earthYears, approx 87.6 earth days)
(A Venus year is .62 Earth years, approx 226.3  earth days)
(A Mars year is 1.88 Earth years approx 686.2  earth days)
(A Jupiter year is 11.86 Earth years, aprrox 4328.9  earth days)

## Getting Started and Prerequisites

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. As it appears you have already downloaded, check that you have the proper prereqs. You will need npm node, a clone and a terminal as well as a chrome browser2.0 or higher

### Installing

```
cd ~
$ git clone https://github.com/austinsaccounts/earth-year-calculator.git
$ cd earth-year-calculator
$ npm Install
$ npm run test

```

## Running the tests

once you have run the
````
$ npm run tests
````
a browser should appear telling you the test results. the tests themselves reside at /spec/earthyear-spec.js and the logic used can be found at /src/earth-year-calc.js

### Break down into end to end tests

Currently these tests are based on someone 100 years of age, this was simply because it was the easiest way to track the math, most of the results are given in whole numbers representing years and rounded to the nearest whole number.

```
$ let results = new Agefinder(birthDate, today);
````
 instantiates the agefinder, then various "classes" will manipulate that information to achieve the results.


### And coding style tests

Example below

```
it('should return age on earth in days', function() {
  let birthDate = new Date('1917-10-05');
  let today = new Date('2017-10-05');
  let results = new Agefinder(birthDate, today);
  let earthDayAge = results.lifeSpan(birthDate, today);
  expect(earthDayAge).toEqual(36525);
})
```
where (earthDayAge) = (*365*) * (*100*)
days in year * 100 years

## Bugs
  Date entry values before 1970-01-01 have not been accounted for.


## Built With
https://github.com/austinsaccounts/earth-year-calculator.git
node, js, html, css
and many plugins and webpacks, along with bbel, jasmine and karma

## Edits
In original version when working with the ClassAgeFinder "Constructor", I was encountering difficulties applying mathmatical operations to apply them as key:pair; values, so began using functions to assign them, this took up alot of space, and has subsequently been rectified.

## Contributing
Austin Cummings, and many webpacks as listed in package.json and webpack.config.js

## Author

* **Austin Cummings** - *solo work* -
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
