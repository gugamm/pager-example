let itemsCache = {};
let itemsCount;

const getItemsCacheHandler = (request) => {
  if (!itemsCount) {
    itemsCount = request.params.count;
  } else if (itemsCount !== request.params.count) {
    itemsCache = {};
  } else if (itemsCache[request.params.page]) {
    return itemsCache[request.params.page];
  }
};

const afterResponseItems = (request, response) => {
  itemsCache[request.params.page] = response;
};

const itemsResource = {
  name: 'Items',
  path: '/items',
  endPoints: [
    {
      name: 'getItems',
      path: '',
      params: {
        count: 2
      },
      options: {
        cacheHandler: getItemsCacheHandler,
        afterResponse: afterResponseItems
      }
    }
  ]
};

export default itemsResource;
