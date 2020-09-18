import { MikroORM, Options } from '@mikro-orm/core'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'

export async function initDatabase (dbString: string): Promise<MikroORM> {
  const isMongo = /^mongodb(\+[A-Z]+)?:\/\//i.test(dbString)

  const orm = await MikroORM.init({
    type: isMongo ? 'mongo' : 'sqlite',
    dbName: isMongo ? 'data' : dbString,
    clientUrl: dbString,
    entities: ['./dist/schema'],
    entitiesTs: ['./src/schema'],
    metadataProvider: TsMorphMetadataProvider,
    cache: {
      pretty: true,
      options: {
        cacheDir: process.env.TMP_DIR || './tmp'
      }
    }
  } as Options)

  try {
    await orm.getSchemaGenerator().createSchema()
  } catch (e) {
    console.error(e)
  }

  return orm
}

export async function main() {
  await initDatabase('test.db')
}

if (require.main === module) {
  main()
}
