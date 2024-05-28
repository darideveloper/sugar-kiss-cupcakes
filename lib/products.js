export const productsDataCategory = [
  {
    "title": "Cupcakes",
    "price": "$2.50 - $3.50",
    "image": "Basic gourmet flavors",
    "category": "cupcakes",
    "subproducts": [
      {
        "title": "Basic gourmet flavors",
        "price": "$2.50",
        "details": "Chocolate/vanilla only",
        "image": "Basic gourmet flavors",
        "subproducts": [],
      },
      {
        "title": "Filled gourmet flavors",
        "price": "$2.75",
        "details": "Filling inside cupcake with custard, jelly, cream or mousse",
        "image": "Filled gourmet flavors",
        "subproducts": [],
      },
      {
        "title": "Decorated gourmet flavors",
        "price": "$3.00",
        "details": "Sugar flowers, embellishments, characters",
        "image": "Decorated gourmet flavors",
        "subproducts": [],
      },
      {
        "title": "Boozy flavors",
        "price": "$3.25",
        "details": "Infused with any liquor or wine & can be filled",
        "image": "Boozy flavors",
        "subproducts": [],
      }
    ]
  },
  {
    "title": "Dessert parfait cups",
    "price": "$3.50",
    "image": "Dessert parfait cups",
    "category": "parfait",
    "details": "Any flavor",
    "subproducts": [],
  },
  {
    "title": "Mini tray cakes",
    "price": "$3.50",
    "details": "Any flavor, great for two people",
    "category": "tray-cakes",
    "subproducts": [],
  },
  {
    "title": "Small cakes",
    "price": "$30 - $65",
    "details": 'Any flavor, two layer with a filling in 6", 8", 10"',
    "category": "small-cakes",
    "subproducts": [],
  },
]

export const productsDataAll = []
for (const product of productsDataCategory) {
  if (product.subproducts.length === 0) {
    productsDataAll.push(product)
  } else {
    for (const subproduct of product.subproducts) {
      productsDataAll.push(subproduct)
    }
  }
}