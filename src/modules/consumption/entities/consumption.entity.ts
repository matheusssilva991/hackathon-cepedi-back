import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from '../../address/entities/address.entity';

@Entity({ name: 'consumption', orderBy: { id: 'ASC' } })
export class Consumption {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'year', type: 'int', nullable: false })
  year: number;

  @Column({ name: 'month', type: 'int', nullable: false })
  month: number;

  @Column({ name: 'day', type: 'varchar', length: 100, nullable: false })
  day: string;

  @Column({ name: 'hour', type: 'int', nullable: false })
  hour: number;

  @Column({ name: 'consumption', type: 'float', nullable: false })
  consumption: number;

  @Column({ name: 'pattern', type: 'varchar', length: 255, nullable: true })
  pattern?: string;

  @Column({ name: 'address_id', type: 'int', nullable: false })
  addressId: number;

  @ManyToOne(() => Address, (address) => address.consumptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'address_id' })
  address: Address;

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
