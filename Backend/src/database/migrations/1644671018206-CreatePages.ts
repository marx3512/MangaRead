import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePages1644671018206 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pages",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "image",
                        type: "varchar",
                    },
                    {
                        name: "chapterID",
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
                        name: "fkPagesChapters",
                        columnNames: ["chapterID"],
                        referencedTableName: "chapters",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pages")

    }

}
