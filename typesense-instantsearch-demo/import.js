const Typesense = require('typesense');
const fs = require('fs/promises');

async function main() {
  let client = new Typesense.Client({
    nodes: [
      {
        host: 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
        port: 8108, // For Typesense Cloud use 443
        protocol: 'http', // For Typesense Cloud use https
      },
    ],
    apiKey: 'AS3das2awQ2',
    connectionTimeoutSeconds: 2,
  });

  const booksSchema = {
    name: 'books',
    fields: [
      { name: 'title', type: 'string' },
      { name: 'authors', type: 'string[]', facet: true },

      { name: 'publication_year', type: 'int32', facet: true },
      { name: 'ratings_count', type: 'int32' },
      { name: 'average_rating', type: 'float' },
    ],
    default_sorting_field: 'ratings_count',
  };

  await client.collections('books').delete();

  const data = await client.collections().create(booksSchema);
  //   console.log(data);

  const documents = await fs.readFile('./books.jsonl');
  client
    .collections('books')
    .documents()
    .import(documents, { batch_size: 100 });
}

main();
