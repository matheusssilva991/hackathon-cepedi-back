import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user', orderBy: { id: 'ASC' } })
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'cpf',
    type: 'varchar',
    length: 11,
    nullable: true,
    unique: true,
  })
  cpf: string;

  @Column({
    name: 'cnpj',
    type: 'varchar',
    length: 14,
    nullable: true,
    unique: true,
  })
  cnpj: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
  password: string;
}
