import crypto from 'crypto'

import { Collection, Entity, ManyToMany, MikroORM, OneToMany, PrimaryKey, Property, Unique } from '@mikro-orm/core'

import { Note } from './Note'

export interface IUser {
  name: string
  email: string
}

@Entity()
export class User implements IUser {
  @PrimaryKey()
  id!: number

  @Property({ nullable: false })
  name!: string

  @Property({ nullable: false })
  @Unique()
  email!: string

  @Property({ nullable: false, lazy: true })
  apiKey: string = crypto.randomBytes(64).toString('base64').slice(0, -2)

  @ManyToMany({ entity: () => Note, inversedBy: 'users' })
  notes = new Collection(Note)

  constructor (d: IUser) {
    Object.assign(this, d)
  }
}
