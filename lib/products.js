export const productsDataCategory = [
  {
    "title": "Cupcakes",
    "price": "$2.50 - $3.50",
    "details": "",
    "extra_details": "",
    "image": "Basic gourmet flavors",
    "category": "cupcakes",
    "ready_to_order": true,
    "subproducts": [
      {
        "title": "Basic gourmet flavors",
        "price": "$2.50",
        "details": "Chocolate/vanilla only",
        "extra_details": "",
        "image": "Basic gourmet flavors",
        "category": "",
        "subproducts": [],
        "ready_to_order": true,
      },
      {
        "title": "Filled gourmet flavors",
        "price": "$2.75",
        "details": "Filling inside cupcake with custard, jelly, cream or mousse",
        "extra_details": "",
        "image": "Filled gourmet flavors",
        "category": "",
        "subproducts": [],
        "ready_to_order": true,
      },
      {
        "title": "Decorated gourmet flavors",
        "price": "$3.00",
        "details": "Sugar flowers, embellishments, characters",
        "extra_details": "",
        "image": "Decorated gourmet flavors",
        "category": "",
        "subproducts": [],
        "ready_to_order": true,
      },
      {
        "title": "Boozy flavors",
        "price": "$3.25",
        "details": "Infused with any liquor or wine & can be filled",
        "extra_details": "you can select the liquors or wine when we contact you",
        "image": "Boozy flavors",
        "category": "",
        "subproducts": [],
        "ready_to_order": true,
      }
    ]
  },
  {
    "title": "Dessert parfait cups",
    "price": "$3.50",
    "details": "Any flavor",
    "extra_details": "",
    "image": "Dessert parfait cups",
    "category": "parfait",
    "subproducts": [],
    "ready_to_order": true,
  },
  {
    "title": "Mini tray cakes",
    "price": "$3.50",
    "details": "Any flavor, great for two people",
    "extra_details": "",
    "image": "Mini tray cakes",
    "category": "tray-cakes",
    "subproducts": [],
    "ready_to_order": false,
  },
  {
    "title": "Small cakes",
    "price": "$30 - $65",
    "details": 'Any flavor, two layer with a filling in 6", 8", 10"',
    "extra_details": "",
    "image": "Small cakes",
    "category": "small-cakes",
    "subproducts": [],
    "ready_to_order": false,
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