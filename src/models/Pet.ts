export class Pet {
    public id: number;
    public name: string;
    public age: number;
    public specie: string;

    constructor (
        id: number,
        name: string,
        age: number,
        specie: string,
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.specie = specie;
    }
}