import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Manga } from "./Manga";

@Entity("chapters")
export class Chapter {
    @PrimaryColumn()
    id: string;

    @Column()
    numberChapter: number;

    @Column()
    description: string;

    @Column()
    mangaID: string;

    @ManyToOne(() => Manga)
    @JoinColumn({ name: "mangaID"})
    manga: Manga;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}