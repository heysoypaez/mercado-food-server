const ContentfulService = require("./contentful.js");
const contentfulService = new ContentfulService();

const uploadEntries = async () => {


	let productToUpload =  {
      "fields": {

        "name": {

          "es": /*Call name dynamically from LaVegaGourmet API*/ 
        },
        "slug": {
          "es":  /* "productos/nameCalledDynamicallyFromImageUrl" Call name dynamically from LaVegaGourmet API*/
        },
        "details": {

          "es": /*"## Acelga hoja limpia\n\nIngrediente ideal para tu familia, restaurantes, locales de comida y minimarkets.\n\n\n### ¿Por qué comprar esta Acelga de hoja limpia con nosotros?\n\nComodidad + Economía = Mercado Food\n\nPorque te ofrecemos precios mejores que los de la Vega en la comodidad de tu domicilio.\n\nRecuerda que hacemos envíos a todo Chile y dentro de Santiago.\n\n### ¿Por qué lo tenemos en nuestra tienda?\n\n¡Porque sabemos que es parte de tu mercado!\n\n_Agregalo al carrito y hazlo parte de tu pedido._\n\n### ¿Dudas?\n\nEscribenos al Whatsapp, sientete libre de dejarnos caer tus inquietudes.\n"*/
        },
        "image": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": /*Call Image Asset Id dynamically from Contentful API*/
            }
          }
        },
        "productMorePhotos": {
          "es": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Asset",
                "id": /*Call Image Asset Id dynamically from Contentful API*/
              }
            }
          ]
        },
        "author": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": /*Call Author Entry Id statically from Contentful API using Heysoypaez author*/
            }
          }
        },
        "price": {
        	
          "es": /*Call price dynamically from LaVegaGourmet API*/ 
        },
        "rating": {

          "es": 5 //static
        },
        "category": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": /*Call Category Entry Id dynamically from Contentful API*/
            }
          }
        }
      }
    }

	let assets = await contentfulService.getAssets();

	const assetsFields = assets.map((asset) => {
		return asset.fields
	})

	console.log(assetsFields);

//	contentfulService.createEntry({contentTypeId, entry})

	return assetsFields

}

module.exports = uploadEntries;


/*
Shorten version
 {
      "fields": {

        "name": {

          "es": "Acelga hoja limpia x kg"
        },
        "slug": {
          "es": "productos/acelga-hoja-limpia"
        },
        "details": {

          "es": "## Acelga hoja limpia\n\nIngrediente ideal para tu familia, restaurantes, locales de comida y minimarkets.\n\n\n### ¿Por qué comprar esta Acelga de hoja limpia con nosotros?\n\nComodidad + Economía = Mercado Food\n\nPorque te ofrecemos precios mejores que los de la Vega en la comodidad de tu domicilio.\n\nRecuerda que hacemos envíos a todo Chile y dentro de Santiago.\n\n### ¿Por qué lo tenemos en nuestra tienda?\n\n¡Porque sabemos que es parte de tu mercado!\n\n_Agregalo al carrito y hazlo parte de tu pedido._\n\n### ¿Dudas?\n\nEscribenos al Whatsapp, sientete libre de dejarnos caer tus inquietudes.\n"
        },
        "image": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4awZpOpaBVwJwF3xPEX5wX"
            }
          }
        },
        "productMorePhotos": {
          "es": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Asset",
                "id": "4awZpOpaBVwJwF3xPEX5wX"
              }
            }
          ]
        },
        "author": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "2I5NjNitP5Gen04BeNTts8"
            }
          }
        },
        "price": {

          "es": 897
        },
        "rating": {

          "es": 5
        },
        "category": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "3FcDvWvIHXETWXBm855COf"
            }
          }
        }
      }
    },

*/


/*
Long version
 {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "1us0mfst32lg"
          }
        },
        "id": "1NRq4ZGpgy4b0rt3xCUR07",
        "type": "Entry",
        "createdAt": "2019-10-04T16:30:41.360Z",
        "updatedAt": "2019-10-24T02:08:19.903Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 83,
        "publishedAt": "2019-10-24T02:08:19.903Z",
        "firstPublishedAt": "2019-10-04T16:32:31.100Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "6gIufn5DZc7ZCG6oGMWdHK"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "6gIufn5DZc7ZCG6oGMWdHK"
          }
        },
        "publishedCounter": 11,
        "version": 84,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "6gIufn5DZc7ZCG6oGMWdHK"
          }
        },
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "product"
          }
        }
      },
      "fields": {
        "name": {
          "es": "Acelga hoja limpia x kg"
        },
        "slug": {
          "es": "productos/acelga-hoja-limpia"
        },
        "details": {
          "es": "## Acelga hoja limpia\n\nIngrediente ideal para tu familia, restaurantes, locales de comida y minimarkets.\n\n\n### ¿Por qué comprar esta Acelga de hoja limpia con nosotros?\n\nComodidad + Economía = Mercado Food\n\nPorque te ofrecemos precios mejores que los de la Vega en la comodidad de tu domicilio.\n\nRecuerda que hacemos envíos a todo Chile y dentro de Santiago.\n\n### ¿Por qué lo tenemos en nuestra tienda?\n\n¡Porque sabemos que es parte de tu mercado!\n\n_Agregalo al carrito y hazlo parte de tu pedido._\n\n### ¿Dudas?\n\nEscribenos al Whatsapp, sientete libre de dejarnos caer tus inquietudes.\n"
        },
        "image": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4awZpOpaBVwJwF3xPEX5wX"
            }
          }
        },
        "productMorePhotos": {
          "es": [
            {
              "sys": {
                "type": "Link",
                "linkType": "Asset",
                "id": "4awZpOpaBVwJwF3xPEX5wX"
              }
            }
          ]
        },
        "author": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "2I5NjNitP5Gen04BeNTts8"
            }
          }
        },
        "price": {
          "es": 897
        },
        "rating": {
          "es": 5
        },
        "category": {
          "es": {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "3FcDvWvIHXETWXBm855COf"
            }
          }
        }
      }
    },

*/