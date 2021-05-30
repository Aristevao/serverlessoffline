import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tutor {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

    @Column()
    public lastName: string

    @Column()
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