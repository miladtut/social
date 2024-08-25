import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    f_name: string;

    @Column({ length: 50 })
    l_name: string;

    @Column({ length: 150, unique: true, nullable: true })
    email: string;

    @Column({ length: 10, nullable: true })
    country_code: string;

    @Column({ length: 50, unique: true })
    phone: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }

    @Column({ default: 0 })
    gold_coins: number;

    @Column({ default: 0 })
    silver_coins: number;

    @Column({ default: 0 })
    game_coins: number;

    @Column({ length: 500, nullable: true })
    pio: string;

    @Column({ type: 'date', nullable: true })
    b_date: Date;

    @Column({ nullable: true })
    in_room: number;

    @Column({nullable: true,length:500})
    fcm_token: string;

    @Column({ default: true })
    is_active: boolean;

    @Column({ default: false })
    is_online: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at:Date;
}
