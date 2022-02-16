import { Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v4 } from "uuid";

@Entity("mangas")
export class Manga {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) this.id = v4()
    }
}