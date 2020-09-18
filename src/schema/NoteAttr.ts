import { Entity, ManyToOne, PrimaryKey, Property, Unique } from '@mikro-orm/core'

import { Note } from './Note'

export interface INoteAttr {
  key: string
  value: string
  note: Note
}

@Entity()
@Unique({ properties: ['key', 'note'] })
export class NoteAttr implements INoteAttr {
  @PrimaryKey()
  id!: number

  @Property({ nullable: false })
  key!: string

  @Property({ nullable: false })
  value!: string

  @ManyToOne({ nullable: false })
  note!: Note

  constructor (d: INoteAttr) {
    Object.assign(this, d)
  }
}
