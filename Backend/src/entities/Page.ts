import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Chapter } from "./Chapter";

@Entity("pages")
export class Page {
    @PrimaryColumn()
    id: string;

    @Column()
    image: string;

    @Column()
    chapterID: string;

    @ManyToOne(() => Chapter)
    @JoinColumn({ name: "chapterID"})
    chapter: Chapter;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}