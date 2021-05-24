export class Tutor {
    public id: number
    public name: string
    public lastName: string
    public age: number

    constructor(
        id: number,
        name: string,
        lastName: string,
        age: number
    ) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}