namespace Validations {
	export const validateText = (text: string): boolean => {
		return text.length > 3 ? true : false;
	};

	export const validateDate = (myDate: Date): boolean => {
		return isNaN(myDate.valueOf()) ? false : true;
	};
	export class Person {
		constructor(public name: string, public age: number) {}
	}
}

console.log(Validations.validateText("Hello"));

const person = new Validations.Person("John", 20);
console.log(person);
