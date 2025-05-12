import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

// const { algoliasearch, instantsearch } = window;

// // const searchClient = algoliasearch(
// //   'latency',
// //   '6be0576ff61c053d5f9a3225e2a90f76'
// // );

// // const search = instantsearch({
// //   indexName: 'instant_search',
// //   searchClient,
// //   future: { preserveSharedStateOnUnmount: true },
// // });

// import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'AS3das2awQ2', // Be sure to use the search-only-api-key
    nodes: [
      {
        host: 'localhost',
        port: 8108,
        protocol: 'http',
      },
    ],
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: 'title,authors',
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const search = instantsearch({
  searchClient,
  indexName: 'books',
});

// search.addWidgets([
//   instantsearch.widgets.searchBox({
//     container: '#searchbox',
//   }),
//   instantsearch.widgets.hits({
//     container: '#hits',
//   }),
//   instantsearch.widgets.configure({
//     hitsPerPage: 8,
//   }),
//   instantsearch.widgets.dynamicWidgets({
//     container: '#dynamic-widgets',
//     fallbackWidget({ container, attribute }) {
//       return instantsearch.widgets.panel({
//         templates: { header: () => attribute },
//       })(instantsearch.widgets.refinementList)({
//         container,
//         attribute,
//       });
//     },
//     widgets: [],
//   }),
//   instantsearch.widgets.pagination({
//     container: '#pagination',
//   }),
// ]);

// search.start();

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 12,
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <div class="hit">
        <img src="{{image_url}}" align="left" alt="{{title}}" class="hit-image" />
        <div class="hit-content">
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "authors" }{{/helpers.highlight}}
          </div>
          <div class="hit-publication-year">
            Publication Year: {{publication_year}}
          </div>
          <div class="hit-ratings">
            Average Rating: {{average_rating}} ({{ratings_count}} ratings)
          </div>
        </div>
      </div>
    `,
    },
  }),

  // instantsearch.widgets.hits({
  //   container: '#hits',
  //   templates: {
  //     item: `
  //       <div>
  //         <img src="{{image_url}}" align="left" alt="" />
  //         <div class="hit-name">
  //           {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
  //         </div>
  //         <div class="hit-description">
  //           {{#helpers.highlight}}{ "attribute": "authors" }{{/helpers.highlight}}
  //         </div>
  //         <div class="hit-price">\$</div>
  //         <div class="hit-rating">Rating: </div>
  //       </div>
  //     `,
  //   },
  //  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
  instantsearch.widgets.refinementList({
    container: '#refinements',
    attribute: 'authors',
  }),
  // instantsearch.widgets.sortBy({
  //   container: '#sort-by',
  //   items: [
  //     { label: 'Default', value: 'books' },
  //     { label: 'Publication Year', value: 'books/sort/published_at:desc' },
  //   ],
  // }),
]);

search.start();
