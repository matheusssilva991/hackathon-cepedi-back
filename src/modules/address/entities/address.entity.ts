import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'address', orderBy: { id: 'ASC' } })
export class Address {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'street', type: 'varchar', length: 255, nullable: false })
  street: string;

  @Column({
    name: 'neighborhood',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  neighborhood: string;

  @Column({ name: 'complement', type: 'varchar', length: 255, nullable: true })
  complement: string;

  @Column({ name: 'city', type: 'varchar', length: 255, nullable: false })
  city: string;

  @Column({ name: 'state', type: 'varchar', length: 255, nullable: false })
  postalCode: string;

  @Column({ name: 'postalCode', type: 'varchar', length: 255, nullable: false })
  number: string;

  @Column({ name: 'number', type: 'varchar', length: 255, nullable: false })
  amountPeople: number;

  @Column({ name: 'amountPeople', type: 'int', nullable: true })
  cadUnico: string;

  @OneToMany(() => User, (user) => user.address, { onDelete: 'CASCADE' })
  users: User[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
