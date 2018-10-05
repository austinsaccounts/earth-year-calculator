export class ageFinder{
    constructor (birthDate) {
       this.birthday = birthDate;
       console.log("this is fired birthday" + this.birthday);
       this.returns = Date.now();
       return this.birthday;
}
    }
