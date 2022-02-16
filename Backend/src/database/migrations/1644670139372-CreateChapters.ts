import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChapters1644670139372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "chapters",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "numberChapter",
                        type: "int",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "mangaID",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "fkChaptersMangas",
                        columnNames: ["mangaID"],
                        referencedTableName: "mangas",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("chapters")
    }

}
