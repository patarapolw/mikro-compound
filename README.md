# Compound indexes with auto-named columns

Although this one is for [mikro-orm](https://mikro-orm.io), the documentation for TypeORM is also unclear on how to do this.

## Errors

```
yarn run v1.22.5
$ ts-node src/index.ts
InvalidFieldNameException: create unique index `note_attr_key_note_id_unique` on `note_attr` (`key`, `note_id`); - SQLITE_ERROR: no such column: note_id
    at SqliteExceptionConverter.convertException (/Users/patarapolw/projects/mikro-compound/node_modules/@mikro-orm/sqlite/SqliteExceptionConverter.js:32:20)
    at SqliteDriver.convertException (/Users/patarapolw/projects/mikro-compound/node_modules/@mikro-orm/core/drivers/DatabaseDriver.js:168:54)
    at /Users/patarapolw/projects/mikro-compound/node_modules/@mikro-orm/core/drivers/DatabaseDriver.js:172:24
    at SchemaGenerator.execute (/Users/patarapolw/projects/mikro-compound/node_modules/@mikro-orm/knex/schema/SchemaGenerator.js:108:13)
    at SchemaGenerator.createSchema (/Users/patarapolw/projects/mikro-compound/node_modules/@mikro-orm/knex/schema/SchemaGenerator.js:27:9)
    at initDatabase (/Users/patarapolw/projects/mikro-compound/src/index.ts:23:5)
    at main (/Users/patarapolw/projects/mikro-compound/src/index.ts:32:3)

previous Error: create unique index `note_attr_key_note_id_unique` on `note_attr` (`key`, `note_id`); - SQLITE_ERROR: no such column: note_id {
  errno: 1,
  code: 'SQLITE_ERROR'
}
```
