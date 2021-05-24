import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import "reflect-metadata";
@Entity()
export class Pet {
    
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public age: number;

    @Column()
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