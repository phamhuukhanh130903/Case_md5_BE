import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUserEntity21673346376740 implements MigrationInterface {
    name = 'updateUserEntity21673346376740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`image\` \`image\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`image\` \`image\` varchar(255) NOT NULL`);
    }

}
