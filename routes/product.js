const express = require("express");
const router = express.Router();

const products = [
  // 20230905131303
  // https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627

  //   {
  //     statusCode: 0,
  //     data: {
  //       tid: "2b29f62b-8cc3-4593-beaa-594440312053",
  //       sid: "95oae426-038f-4cd8-97f1-1d2ac2808b2e",
  //       success: {
  //         cards: [
  //           {
  //             relevance: {},
  //             gridWidget: {
  //               header: {
  //                 action: {},
  //                 headerStyling: {
  //                   padding: {},
  //                 },
  //               },
  //               layout: {
  //                 rows: 1,
  //                 columns: 2,
  //                 itemSpacing: 12,
  //                 widgetPadding: {},
  //                 containerStyle: {
  //                   containerPadding: {
  //                     left: 16,
  //                     top: 16,
  //                     right: 16,
  //                     bottom: 12,
  //                   },
  //                 },
  //                 scrollBar: {
  //                   scrollStyling: {
  //                     padding: {},
  //                   },
  //                 },
  //                 autoScrollConfig: {},
  //                 separatorConfig: {},
  //               },
  //               imageGridCards: {
  //                 info: [
  //                   {
  //                     id: "410097",
  //                     imageId: "rng/md/carousel/production/ak4f9kufbxgb8fprancy",
  //                     action: {
  //                       link: "swiggy://restaurantList",
  //                       text: "Restaurant",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "RESTAURANT",
  //                       altTextCta: "Click to know more about Restaurants.",
  //                     },
  //                   },
  //                   {
  //                     id: "409959",
  //                     imageId: "rng/md/carousel/production/rxhxvcibw2jlbihmwqwh",
  //                     action: {
  //                       link: "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
  //                       text: "Night",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "INSTAMART",
  //                       altTextCta: "Click to know more about Instamart.",
  //                     },
  //                   },
  //                 ],
  //                 style: {
  //                   width: {
  //                     type: "TYPE_RELATIVE",
  //                     value: 0.5,
  //                     reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
  //                   },
  //                   height: {
  //                     type: "TYPE_RELATIVE",
  //                     value: 0.79518074,
  //                     reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
  //                   },
  //                 },
  //               },
  //               id: "ScrollNavSplitP2_latebinding",
  //               gridElements: {
  //                 infoWithStyle: {
  //                   "@type":
  //                     "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
  //                   info: [
  //                     {
  //                       id: "410097",
  //                       imageId:
  //                         "rng/md/carousel/production/ak4f9kufbxgb8fprancy",
  //                       action: {
  //                         link: "swiggy://restaurantList",
  //                         text: "Restaurant",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "RESTAURANT",
  //                         altTextCta: "Click to know more about Restaurants.",
  //                       },
  //                       entityId: "swiggy://restaurantList",
  //                       frequencyCapping: {},
  //                     },
  //                     {
  //                       id: "409959",
  //                       imageId:
  //                         "rng/md/carousel/production/rxhxvcibw2jlbihmwqwh",
  //                       action: {
  //                         link: "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
  //                         text: "Night",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "INSTAMART",
  //                         altTextCta: "Click to know more about Instamart.",
  //                       },
  //                       entityId:
  //                         "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
  //                       frequencyCapping: {},
  //                     },
  //                   ],
  //                   style: {
  //                     width: {
  //                       type: "TYPE_RELATIVE",
  //                       value: 0.5,
  //                       reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
  //                     },
  //                     height: {
  //                       type: "TYPE_RELATIVE",
  //                       value: 0.79518074,
  //                       reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
  //                     },
  //                   },
  //                 },
  //               },
  //               footer: {
  //                 labelWrapper: {},
  //               },
  //             },
  //           },
  //           {
  //             relevance: {
  //               type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //               sectionId: "MENU_RETURN",
  //             },
  //             gridWidget: {
  //               header: {
  //                 title: "Top Picks For You",
  //                 action: {},
  //                 imageId: "sl9oogwe7n5dusolt5xe",
  //                 headerStyling: {
  //                   padding: {
  //                     left: 16,
  //                     top: 15,
  //                     bottom: 24,
  //                   },
  //                 },
  //               },
  //               layout: {
  //                 rows: 1,
  //                 columns: 16,
  //                 horizontalScrollEnabled: true,
  //                 shouldSnap: true,
  //                 itemSpacing: 12,
  //                 widgetPadding: {},
  //                 containerStyle: {
  //                   containerPadding: {
  //                     left: 16,
  //                     right: 16,
  //                     bottom: 12,
  //                   },
  //                 },
  //                 scrollBar: {
  //                   scrollStyling: {
  //                     padding: {},
  //                   },
  //                 },
  //                 autoScrollConfig: {},
  //                 separatorConfig: {},
  //               },
  //               imageGridCards: {
  //                 style: {
  //                   width: {},
  //                   height: {},
  //                 },
  //               },
  //               id: "Updated_4_favourites_SimRestoRelevance",
  //               gridElements: {
  //                 infoWithStyle: {
  //                   "@type":
  //                     "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
  //                   restaurants: [
  //                     {
  //                       info: {
  //                         id: "342643",
  //                         name: "The Pizza Bakery",
  //                         cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
  //                         locality: "Church Street",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹700 for two",
  //                         cuisines: [
  //                           "Pizzas",
  //                           "Pastas",
  //                           "Italian",
  //                           "Desserts",
  //                           "Continental",
  //                         ],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "342643",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "11108",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "1K+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8058380~p=1~eid=0000018a-644b-7e64-6198-af1200ef0121~srvts=1693899783780~45995",
  //                         sla: {
  //                           deliveryTime: 27,
  //                           lastMileTravel: 1.5,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "27 mins",
  //                           lastMileTravelString: "1.5 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           imageBadges: [
  //                             {
  //                               imageId: "newg.png",
  //                               description: "Gourmet",
  //                             },
  //                           ],
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "options available",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     shortDescription: "options available",
  //                                     fontColor: "#7E808C",
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                     description: "",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                             textBased: {},
  //                             imageBased: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     imageId: "newg.png",
  //                                     description: "Gourmet",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "40% OFF",
  //                           subHeader: "UPTO ₹100",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=342643",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "30034",
  //                         name: "Mani's Dum Biryani",
  //                         cloudinaryImageId: "y0fjz8h4ad8nfzkmbznu",
  //                         locality: "Haudin Road",
  //                         areaName: "Ulsoor",
  //                         costForTwo: "₹499 for two",
  //                         cuisines: ["Biryani"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "30034",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "623",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 26,
  //                           lastMileTravel: 4.1,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "26 mins",
  //                           lastMileTravelString: "4.1 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=30034",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "2914",
  //                         name: "Bheema's",
  //                         cloudinaryImageId: "aff0be3ebc62e299701c087b8dcd1c0d",
  //                         locality: "Church Street",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹550 for two",
  //                         cuisines: ["Andhra"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "2914",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "1841",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 26,
  //                           lastMileTravel: 1.5,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "26 mins",
  //                           lastMileTravelString: "1.5 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 15:30:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=2914",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "570511",
  //                         name: "Bakingo",
  //                         cloudinaryImageId: "qwbqggsxzw86vgk60c9c",
  //                         locality: "MV Jayanthi Road",
  //                         areaName: "Vasanth Nagar",
  //                         costForTwo: "₹299 for two",
  //                         cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "570511",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 5800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 5800,
  //                         },
  //                         parentId: "3818",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 24,
  //                           lastMileTravel: 3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "24 mins",
  //                           lastMileTravelString: "3.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 01:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                             imageBased: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=570511",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "672074",
  //                         name: "Subway",
  //                         cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
  //                         locality: "Ashok Nagar",
  //                         areaName: "Sobha Mall",
  //                         costForTwo: "₹350 for two",
  //                         cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
  //                         avgRating: 3.9,
  //                         feeDetails: {
  //                           restaurantId: "672074",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "2",
  //                         avgRatingString: "3.9",
  //                         totalRatingsString: "100+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8202606~p=2~eid=0000018a-644b-7e64-6198-af1300ef0219~srvts=1693899783780~45995",
  //                         sla: {
  //                           deliveryTime: 24,
  //                           lastMileTravel: 1.6,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "24 mins",
  //                           lastMileTravelString: "1.6 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 03:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "40% OFF",
  //                           subHeader: "UPTO ₹80",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=672074",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "440123",
  //                         name: "Great Indian Khichdi by EatFit",
  //                         cloudinaryImageId: "0da26e86f4490626665f0b1d8810906e",
  //                         locality: "Cunnigham road",
  //                         areaName: "Vasanth Nagar",
  //                         costForTwo: "₹200 for two",
  //                         cuisines: [
  //                           "Home Food",
  //                           "Indian",
  //                           "North Indian",
  //                           "Healthy Food",
  //                           "Snacks",
  //                           "Desserts",
  //                           "Rajasthani",
  //                           "South Indian",
  //                           "Maharashtrian",
  //                           "Sweets",
  //                         ],
  //                         avgRating: 4.3,
  //                         veg: true,
  //                         feeDetails: {
  //                           restaurantId: "440123",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "319582",
  //                         avgRatingString: "4.3",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 26,
  //                           lastMileTravel: 3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "26 mins",
  //                           lastMileTravelString: "3.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "options available",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                     description: "",
  //                                     shortDescription: "options available",
  //                                     fontColor: "#7E808C",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                             textBased: {},
  //                             imageBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "50% OFF",
  //                           subHeader: "UPTO ₹100",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=440123",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "281469",
  //                         name: "Lavonne",
  //                         cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
  //                         locality: "St. Marks Road",
  //                         areaName: "St. Marks Road",
  //                         costForTwo: "₹750 for two",
  //                         cuisines: ["Bakery", "Desserts"],
  //                         avgRating: 4.6,
  //                         feeDetails: {
  //                           restaurantId: "281469",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "10530",
  //                         avgRatingString: "4.6",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 23,
  //                           lastMileTravel: 0.6,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "23 mins",
  //                           lastMileTravelString: "0.6 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 22:40:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           imageBadges: [
  //                             {
  //                               imageId: "newg.png",
  //                               description: "Gourmet",
  //                             },
  //                           ],
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "options available",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     imageId: "newg.png",
  //                                     description: "Gourmet",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     description: "",
  //                                     shortDescription: "options available",
  //                                     fontColor: "#7E808C",
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=281469",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "5938",
  //                         name: "Burger King",
  //                         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //                         locality: "Tasker Town",
  //                         areaName: "Shivaji Nagar",
  //                         costForTwo: "₹350 for two",
  //                         cuisines: ["Burgers", "American"],
  //                         avgRating: 4.1,
  //                         feeDetails: {
  //                           restaurantId: "5938",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "166",
  //                         avgRatingString: "4.1",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 28,
  //                           lastMileTravel: 2.7,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "28 mins",
  //                           lastMileTravelString: "2.7 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 02:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "60% OFF",
  //                           subHeader: "UPTO ₹120",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=5938",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "533773",
  //                         name: "Third Wave Coffee",
  //                         cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
  //                         locality: "Lavelle Road",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: ["Beverages", "Bakery", "Continental"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "533773",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "274773",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "100+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8150216~p=4~eid=0000018a-644b-7e64-6198-af1500ef0470~srvts=1693899783780~45995",
  //                         sla: {
  //                           deliveryTime: 19,
  //                           lastMileTravel: 0.5,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "19 mins",
  //                           lastMileTravelString: "0.5 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 00:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "20% OFF",
  //                           subHeader: "UPTO ₹50",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=533773",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "588619",
  //                         name: "KFC",
  //                         cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
  //                         locality: "Brigade Rd",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: [
  //                           "Burgers",
  //                           "Biryani",
  //                           "American",
  //                           "Snacks",
  //                           "Fast Food",
  //                         ],
  //                         avgRating: 4.1,
  //                         feeDetails: {
  //                           restaurantId: "588619",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "547",
  //                         avgRatingString: "4.1",
  //                         totalRatingsString: "500+",
  //                         sla: {
  //                           deliveryTime: 24,
  //                           lastMileTravel: 2.8,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "24 mins",
  //                           lastMileTravelString: "2.8 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 01:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "20% OFF",
  //                           subHeader: "UPTO ₹50",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=588619",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "43836",
  //                         name: "McDonald's",
  //                         cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  //                         locality: "MG Road",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //                         avgRating: 4.2,
  //                         feeDetails: {
  //                           restaurantId: "43836",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "630",
  //                         avgRatingString: "4.2",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 23,
  //                           lastMileTravel: 1.4,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "23 mins",
  //                           lastMileTravelString: "1.4 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 02:45:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "10% OFF",
  //                           subHeader: "ABOVE ₹999",
  //                           discountTag: "FLAT DEAL",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=43836",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "3241",
  //                         name: "Meghana Foods",
  //                         cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
  //                         locality: "Residency Road",
  //                         areaName: "Residency Road",
  //                         costForTwo: "₹500 for two",
  //                         cuisines: [
  //                           "Biryani",
  //                           "Andhra",
  //                           "South Indian",
  //                           "North Indian",
  //                           "Chinese",
  //                           "Seafood",
  //                         ],
  //                         avgRating: 4.5,
  //                         feeDetails: {
  //                           restaurantId: "3241",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "635",
  //                         avgRatingString: "4.5",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 22,
  //                           lastMileTravel: 2.3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "22 mins",
  //                           lastMileTravelString: "2.3 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 01:30:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=3241",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "393107",
  //                         name: "EatFit",
  //                         cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
  //                         locality: "Ali Asker Road",
  //                         areaName: "Cunningham Road",
  //                         costForTwo: "₹270 for two",
  //                         cuisines: [
  //                           "Chinese",
  //                           "Healthy Food",
  //                           "Tandoor",
  //                           "Pizzas",
  //                           "North Indian",
  //                           "Thalis",
  //                           "Biryani",
  //                         ],
  //                         avgRating: 4.3,
  //                         feeDetails: {
  //                           restaurantId: "393107",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "76139",
  //                         avgRatingString: "4.3",
  //                         totalRatingsString: "1K+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8209131~p=5~eid=0000018a-644b-7e64-6198-af1600ef050d~srvts=1693899783780~45995",
  //                         sla: {
  //                           deliveryTime: 25,
  //                           lastMileTravel: 3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "25 mins",
  //                           lastMileTravelString: "3.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "brand",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     fontColor: "#7E808C",
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                     description: "",
  //                                     shortDescription: "brand",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "40% OFF",
  //                           subHeader: "UPTO ₹80",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=393107",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "23847",
  //                         name: "Domino's Pizza",
  //                         cloudinaryImageId: "fjqcvqfgqlw6h0atques",
  //                         locality: "Rest House Road",
  //                         areaName: "Brigade Road",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //                         avgRating: 4.3,
  //                         feeDetails: {
  //                           restaurantId: "23847",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "2456",
  //                         avgRatingString: "4.3",
  //                         totalRatingsString: "5K+",
  //                         sla: {
  //                           deliveryTime: 25,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "25 mins",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 22:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "₹150 OFF",
  //                           subHeader: "ABOVE ₹999",
  //                           discountTag: "FLAT DEAL",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=23847",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "684427",
  //                         name: "Cafe Amudham",
  //                         cloudinaryImageId: "0bcdca61f3cd1e9135b98328593d044f",
  //                         locality: "Lalbhagh  Siddapura",
  //                         areaName: "Jayanagar",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: ["South Indian", "Snacks"],
  //                         avgRating: 4.5,
  //                         feeDetails: {
  //                           restaurantId: "684427",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "396620",
  //                         avgRatingString: "4.5",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 27,
  //                           lastMileTravel: 4,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "27 mins",
  //                           lastMileTravelString: "4.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "20% OFF",
  //                           subHeader: "UPTO ₹50",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=684427",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "317934",
  //                         name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
  //                         cloudinaryImageId: "x0ybjon2zebfetcdrzah",
  //                         locality: "5th Cross",
  //                         areaName: "Wilson Garden",
  //                         costForTwo: "₹200 for two",
  //                         cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
  //                         avgRating: 4.7,
  //                         veg: true,
  //                         feeDetails: {
  //                           restaurantId: "317934",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "582",
  //                         avgRatingString: "4.7",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 24,
  //                           lastMileTravel: 3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "24 mins",
  //                           lastMileTravelString: "3.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 22:30:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=317934",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                   ],
  //                   theme: "RESTAURANT_GROUP_FAVOURITE_THEME",
  //                   widgetType: "WIDGET_TYPE_FAVOURITES",
  //                   style: {},
  //                   collectionId: "45995",
  //                 },
  //               },
  //               footer: {
  //                 labelWrapper: {},
  //               },
  //             },
  //           },
  //           {
  //             relevance: {},
  //             gridWidget: {
  //               header: {
  //                 action: {},
  //                 headerStyling: {
  //                   padding: {},
  //                 },
  //               },
  //               layout: {
  //                 rows: 1,
  //                 columns: 4,
  //                 horizontalScrollEnabled: true,
  //                 shouldSnap: true,
  //                 itemSpacing: 20,
  //                 widgetPadding: {},
  //                 containerStyle: {
  //                   containerPadding: {
  //                     left: 20,
  //                     top: 12,
  //                     right: 20,
  //                     bottom: 8,
  //                   },
  //                 },
  //                 scrollBar: {
  //                   scrollThumbColor: "#E46D47",
  //                   scrollTrackColor: "#E4E4E4",
  //                   width: 54,
  //                   height: 4,
  //                   scrollStyling: {
  //                     padding: {
  //                       top: 6,
  //                       bottom: 12,
  //                     },
  //                   },
  //                 },
  //                 autoScrollConfig: {
  //                   isScrollEnabled: true,
  //                   autoScrollDuration: 4,
  //                   autoScrollResetDuration: 4,
  //                 },
  //                 separatorConfig: {},
  //               },
  //               imageGridCards: {
  //                 info: [
  //                   {
  //                     id: "635511",
  //                     imageId:
  //                       "rng/md/carousel/production/7659fbc06b0b183d5eb813e4affb36e3",
  //                     action: {
  //                       link: "swiggy://collectionV2?collection_id=78798&tags=layout_ux4",
  //                       text: "All new super",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "GET 50% OFF ON FIRST ORDER",
  //                       altTextCta: "ORDER NOW",
  //                     },
  //                   },
  //                   {
  //                     id: "1234057",
  //                     imageId:
  //                       "rng/md/carousel/production/3d8c10783aa514d93dd699b3e389a8f7",
  //                     action: {
  //                       link: "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3461&custom_back=true&entryId=1234&entryName=topicalBanner4",
  //                       text: "Tropical_IM",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "Explore Instamart",
  //                       altTextCta: "Shop Now",
  //                     },
  //                   },
  //                   {
  //                     id: "735389",
  //                     imageId:
  //                       "rng/md/carousel/production/47558c4252f15596658023bf89420b11",
  //                     action: {
  //                       link: "swiggy://collectionV2?collection_id=78542&tags=layout_ux4",
  //                       text: "Holi",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "Get Upto 60% off",
  //                       altTextCta: "Order Now",
  //                     },
  //                   },
  //                   {
  //                     id: "1225675",
  //                     imageId:
  //                       "rng/md/carousel/production/5c39255c9406dd03e24052a82b331953",
  //                     action: {
  //                       link: "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3218&custom_back=true&entryId=1234&entryName=topical2Banner4",
  //                       text: "Tropical_IM",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "Explore Instamart",
  //                       altTextCta: "Shop Now",
  //                     },
  //                   },
  //                 ],
  //                 style: {
  //                   width: {
  //                     type: "TYPE_RELATIVE",
  //                     value: 0.8,
  //                     reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
  //                   },
  //                   height: {
  //                     type: "TYPE_RELATIVE",
  //                     value: 0.82432,
  //                     reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
  //                   },
  //                 },
  //               },
  //               id: "Homepage_Version4_Topical_Fullbleed",
  //               gridElements: {
  //                 infoWithStyle: {
  //                   "@type":
  //                     "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
  //                   info: [
  //                     {
  //                       id: "635511",
  //                       imageId:
  //                         "rng/md/carousel/production/7659fbc06b0b183d5eb813e4affb36e3",
  //                       action: {
  //                         link: "swiggy://collectionV2?collection_id=78798&tags=layout_ux4",
  //                         text: "All new super",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "GET 50% OFF ON FIRST ORDER",
  //                         altTextCta: "ORDER NOW",
  //                       },
  //                       entityId: "78798",
  //                       frequencyCapping: {},
  //                     },
  //                     {
  //                       id: "1234057",
  //                       imageId:
  //                         "rng/md/carousel/production/3d8c10783aa514d93dd699b3e389a8f7",
  //                       action: {
  //                         link: "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3461&custom_back=true&entryId=1234&entryName=topicalBanner4",
  //                         text: "Tropical_IM",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "Explore Instamart",
  //                         altTextCta: "Shop Now",
  //                       },
  //                       entityId:
  //                         "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3461&custom_back=true&entryId=1234&entryName=topicalBanner4",
  //                       frequencyCapping: {},
  //                     },
  //                     {
  //                       id: "735389",
  //                       imageId:
  //                         "rng/md/carousel/production/47558c4252f15596658023bf89420b11",
  //                       action: {
  //                         link: "swiggy://collectionV2?collection_id=78542&tags=layout_ux4",
  //                         text: "Holi",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "Get Upto 60% off",
  //                         altTextCta: "Order Now",
  //                       },
  //                       entityId: "78542",
  //                       frequencyCapping: {},
  //                     },
  //                     {
  //                       id: "1225675",
  //                       imageId:
  //                         "rng/md/carousel/production/5c39255c9406dd03e24052a82b331953",
  //                       action: {
  //                         link: "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3218&custom_back=true&entryId=1234&entryName=topical2Banner4",
  //                         text: "Tropical_IM",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "Explore Instamart",
  //                         altTextCta: "Shop Now",
  //                       },
  //                       entityId:
  //                         "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3218&custom_back=true&entryId=1234&entryName=topical2Banner4",
  //                       frequencyCapping: {},
  //                     },
  //                   ],
  //                   style: {
  //                     width: {
  //                       type: "TYPE_RELATIVE",
  //                       value: 0.8,
  //                       reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
  //                     },
  //                     height: {
  //                       type: "TYPE_RELATIVE",
  //                       value: 0.82432,
  //                       reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
  //                     },
  //                   },
  //                 },
  //               },
  //               footer: {
  //                 labelWrapper: {},
  //               },
  //             },
  //           },
  //           {
  //             relevance: {},
  //             gridWidget: {
  //               header: {
  //                 title: "Offers For You",
  //                 action: {},
  //                 headerStyling: {
  //                   padding: {
  //                     left: 16,
  //                     top: 24,
  //                     bottom: 24,
  //                   },
  //                 },
  //               },
  //               layout: {
  //                 rows: 1,
  //                 columns: 5,
  //                 horizontalScrollEnabled: true,
  //                 itemSpacing: 4,
  //                 widgetPadding: {
  //                   top: 8,
  //                 },
  //                 containerStyle: {
  //                   containerPadding: {
  //                     left: 16,
  //                     bottom: 24,
  //                   },
  //                 },
  //                 scrollBar: {
  //                   scrollStyling: {
  //                     padding: {},
  //                   },
  //                 },
  //                 autoScrollConfig: {},
  //                 separatorConfig: {},
  //               },
  //               imageGridCards: {
  //                 info: [
  //                   {
  //                     id: "410105",
  //                     imageId: "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
  //                     action: {
  //                       link: "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
  //                       text: "DEAL60",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "DEAL60",
  //                       altTextCta: "Tap to grab best deals from best restaurant",
  //                     },
  //                   },
  //                   {
  //                     id: "410104",
  //                     imageId: "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
  //                     action: {
  //                       link: "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
  //                       text: "TRYNEW",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "TRYNEW",
  //                       altTextCta: "explore Unique tastes from new eateries",
  //                     },
  //                   },
  //                   {
  //                     id: "410121",
  //                     imageId: "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
  //                     action: {
  //                       link: "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
  //                       text: "TRYNEW",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "SWIGGYIT",
  //                       altTextCta: "Offers for 1 Upto 50% off",
  //                     },
  //                   },
  //                   {
  //                     id: "410109",
  //                     imageId: "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
  //                     action: {
  //                       link: "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
  //                       text: "JUBO",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "JUMBO",
  //                       altTextCta: "DEALS FOR TWO - UPTO Rs.200 OFF",
  //                     },
  //                   },
  //                   {
  //                     id: "410114",
  //                     imageId: "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
  //                     action: {
  //                       link: "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
  //                       text: "PARTY",
  //                       type: "DEEPLINK",
  //                     },
  //                     entityType: "BANNER",
  //                     accessibility: {
  //                       altText: "PARTY",
  //                       altTextCta: "Party Steals upto 300/- off",
  //                     },
  //                   },
  //                 ],
  //                 style: {
  //                   width: {
  //                     type: "TYPE_RELATIVE",
  //                     value: 0.35714287,
  //                     reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
  //                   },
  //                   height: {
  //                     type: "TYPE_RELATIVE",
  //                     value: 1.1916667,
  //                     reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
  //                   },
  //                 },
  //               },
  //               id: "Home_P2_Food_Offerwidget_MainComponent_Scrollcards",
  //               gridElements: {
  //                 infoWithStyle: {
  //                   "@type":
  //                     "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
  //                   info: [
  //                     {
  //                       id: "410105",
  //                       imageId:
  //                         "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
  //                       action: {
  //                         link: "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
  //                         text: "DEAL60",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "DEAL60",
  //                         altTextCta:
  //                           "Tap to grab best deals from best restaurant",
  //                       },
  //                       entityId: "54793",
  //                       frequencyCapping: {},
  //                     },
  //                     {
  //                       id: "410104",
  //                       imageId:
  //                         "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
  //                       action: {
  //                         link: "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
  //                         text: "TRYNEW",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "TRYNEW",
  //                         altTextCta: "explore Unique tastes from new eateries",
  //                       },
  //                       entityId: "54802",
  //                       frequencyCapping: {},
  //                     },
  //                     {
  //                       id: "410121",
  //                       imageId:
  //                         "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
  //                       action: {
  //                         link: "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
  //                         text: "TRYNEW",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "SWIGGYIT",
  //                         altTextCta: "Offers for 1 Upto 50% off",
  //                       },
  //                       entityId: "54908",
  //                       frequencyCapping: {},
  //                     },
  //                     {
  //                       id: "410109",
  //                       imageId:
  //                         "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
  //                       action: {
  //                         link: "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
  //                         text: "JUBO",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "JUMBO",
  //                         altTextCta: "DEALS FOR TWO - UPTO Rs.200 OFF",
  //                       },
  //                       entityId: "54797",
  //                       frequencyCapping: {},
  //                     },
  //                     {
  //                       id: "410114",
  //                       imageId:
  //                         "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
  //                       action: {
  //                         link: "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
  //                         text: "PARTY",
  //                         type: "DEEPLINK",
  //                       },
  //                       entityType: "BANNER",
  //                       accessibility: {
  //                         altText: "PARTY",
  //                         altTextCta: "Party Steals upto 300/- off",
  //                       },
  //                       entityId: "50880",
  //                       frequencyCapping: {},
  //                     },
  //                   ],
  //                   style: {
  //                     width: {
  //                       type: "TYPE_RELATIVE",
  //                       value: 0.35714287,
  //                       reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
  //                     },
  //                     height: {
  //                       type: "TYPE_RELATIVE",
  //                       value: 1.1916667,
  //                       reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
  //                     },
  //                   },
  //                 },
  //               },
  //               footer: {
  //                 labelWrapper: {},
  //               },
  //             },
  //           },
  //           {
  //             relevance: {},
  //             gridWidget: {
  //               header: {
  //                 title: "All Restaurants Nearby",
  //                 subtitle: "Discover unique tastes near you",
  //                 action: {},
  //                 imageId: "rng/md/production/ipai4xhkoy9ovshdnyn6",
  //                 headerStyling: {
  //                   padding: {
  //                     left: 16,
  //                     top: 24,
  //                     bottom: 24,
  //                   },
  //                 },
  //               },
  //               layout: {
  //                 rows: 25,
  //                 columns: 1,
  //                 lineSpacing: 24,
  //                 widgetPadding: {},
  //                 containerStyle: {
  //                   containerPadding: {
  //                     right: 12,
  //                     bottom: 8,
  //                   },
  //                 },
  //                 scrollBar: {
  //                   scrollStyling: {
  //                     padding: {},
  //                   },
  //                 },
  //                 autoScrollConfig: {},
  //                 separatorConfig: {},
  //               },
  //               imageGridCards: {
  //                 style: {
  //                   width: {},
  //                   height: {},
  //                 },
  //               },
  //               id: "restaurantCollectionDeliveringNowTheme",
  //               gridElements: {
  //                 infoWithStyle: {
  //                   "@type":
  //                     "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
  //                   restaurants: [
  //                     {
  //                       info: {
  //                         id: "342643",
  //                         name: "The Pizza Bakery",
  //                         cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
  //                         locality: "Church Street",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹700 for two",
  //                         cuisines: [
  //                           "Pizzas",
  //                           "Pastas",
  //                           "Italian",
  //                           "Desserts",
  //                           "Continental",
  //                         ],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "342643",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "11108",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "1K+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8058380~p=1~eid=0000018a-644b-7e9d-6197-c85d002a015a~srvts=1693899783837~45826",
  //                         sla: {
  //                           deliveryTime: 27,
  //                           lastMileTravel: 1.5,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "27 mins",
  //                           lastMileTravelString: "1.5 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           imageBadges: [
  //                             {
  //                               imageId: "newg.png",
  //                               description: "Gourmet",
  //                             },
  //                           ],
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "options available",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     imageId: "newg.png",
  //                                     description: "Gourmet",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                     description: "",
  //                                     shortDescription: "options available",
  //                                     fontColor: "#7E808C",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "40% OFF",
  //                           subHeader: "UPTO ₹100",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=342643",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "30034",
  //                         name: "Mani's Dum Biryani",
  //                         cloudinaryImageId: "y0fjz8h4ad8nfzkmbznu",
  //                         locality: "Haudin Road",
  //                         areaName: "Ulsoor",
  //                         costForTwo: "₹499 for two",
  //                         cuisines: ["Biryani"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "30034",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "623",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 26,
  //                           lastMileTravel: 4.1,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "26 mins",
  //                           lastMileTravelString: "4.1 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                             imageBased: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=30034",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "2914",
  //                         name: "Bheema's",
  //                         cloudinaryImageId: "aff0be3ebc62e299701c087b8dcd1c0d",
  //                         locality: "Church Street",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹550 for two",
  //                         cuisines: ["Andhra"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "2914",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "1841",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 26,
  //                           lastMileTravel: 1.5,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "26 mins",
  //                           lastMileTravelString: "1.5 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 15:30:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=2914",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "672074",
  //                         name: "Subway",
  //                         cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
  //                         locality: "Ashok Nagar",
  //                         areaName: "Sobha Mall",
  //                         costForTwo: "₹350 for two",
  //                         cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
  //                         avgRating: 3.9,
  //                         feeDetails: {
  //                           restaurantId: "672074",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "2",
  //                         avgRatingString: "3.9",
  //                         totalRatingsString: "100+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8202606~p=2~eid=0000018a-644b-7e9d-6197-c85e002a0259~srvts=1693899783837~45826",
  //                         sla: {
  //                           deliveryTime: 24,
  //                           lastMileTravel: 1.6,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "24 mins",
  //                           lastMileTravelString: "1.6 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 03:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "40% OFF",
  //                           subHeader: "UPTO ₹80",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=672074",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "48230",
  //                         name: "Kanti Sweets",
  //                         cloudinaryImageId: "u0hhfifwmpsnobytv2yf",
  //                         locality: "Brigade Road",
  //                         areaName: "Brigade Road",
  //                         costForTwo: "₹150 for two",
  //                         cuisines: ["Sweets"],
  //                         avgRating: 4.5,
  //                         veg: true,
  //                         feeDetails: {
  //                           restaurantId: "48230",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "4700",
  //                         avgRatingString: "4.5",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 22,
  //                           lastMileTravel: 2,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "22 mins",
  //                           lastMileTravelString: "2.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 22:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                             imageBased: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=48230",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "570511",
  //                         name: "Bakingo",
  //                         cloudinaryImageId: "qwbqggsxzw86vgk60c9c",
  //                         locality: "MV Jayanthi Road",
  //                         areaName: "Vasanth Nagar",
  //                         costForTwo: "₹299 for two",
  //                         cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "570511",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 5800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 5800,
  //                         },
  //                         parentId: "3818",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 24,
  //                           lastMileTravel: 3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "24 mins",
  //                           lastMileTravelString: "3.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 01:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=570511",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "533773",
  //                         name: "Third Wave Coffee",
  //                         cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
  //                         locality: "Lavelle Road",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: ["Beverages", "Bakery", "Continental"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "533773",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "274773",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "100+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8150216~p=4~eid=0000018a-644b-7e9d-6197-c860002a0434~srvts=1693899783837~45826",
  //                         sla: {
  //                           deliveryTime: 19,
  //                           lastMileTravel: 0.5,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "19 mins",
  //                           lastMileTravelString: "0.5 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 00:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                             imageBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "20% OFF",
  //                           subHeader: "UPTO ₹50",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=533773",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "440123",
  //                         name: "Great Indian Khichdi by EatFit",
  //                         cloudinaryImageId: "0da26e86f4490626665f0b1d8810906e",
  //                         locality: "Cunnigham road",
  //                         areaName: "Vasanth Nagar",
  //                         costForTwo: "₹200 for two",
  //                         cuisines: [
  //                           "Home Food",
  //                           "Indian",
  //                           "North Indian",
  //                           "Healthy Food",
  //                           "Snacks",
  //                           "Desserts",
  //                           "Rajasthani",
  //                           "South Indian",
  //                           "Maharashtrian",
  //                           "Sweets",
  //                         ],
  //                         avgRating: 4.3,
  //                         veg: true,
  //                         feeDetails: {
  //                           restaurantId: "440123",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "319582",
  //                         avgRatingString: "4.3",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 26,
  //                           lastMileTravel: 3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "26 mins",
  //                           lastMileTravelString: "3.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "options available",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     description: "",
  //                                     shortDescription: "options available",
  //                                     fontColor: "#7E808C",
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                             textBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "50% OFF",
  //                           subHeader: "UPTO ₹100",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=440123",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "281469",
  //                         name: "Lavonne",
  //                         cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
  //                         locality: "St. Marks Road",
  //                         areaName: "St. Marks Road",
  //                         costForTwo: "₹750 for two",
  //                         cuisines: ["Bakery", "Desserts"],
  //                         avgRating: 4.6,
  //                         feeDetails: {
  //                           restaurantId: "281469",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "10530",
  //                         avgRatingString: "4.6",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 23,
  //                           lastMileTravel: 0.6,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "23 mins",
  //                           lastMileTravelString: "0.6 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 22:40:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           imageBadges: [
  //                             {
  //                               imageId: "newg.png",
  //                               description: "Gourmet",
  //                             },
  //                           ],
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "options available",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     imageId: "newg.png",
  //                                     description: "Gourmet",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     description: "",
  //                                     shortDescription: "options available",
  //                                     fontColor: "#7E808C",
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=281469",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "393107",
  //                         name: "EatFit",
  //                         cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
  //                         locality: "Ali Asker Road",
  //                         areaName: "Cunningham Road",
  //                         costForTwo: "₹270 for two",
  //                         cuisines: [
  //                           "Chinese",
  //                           "Healthy Food",
  //                           "Tandoor",
  //                           "Pizzas",
  //                           "North Indian",
  //                           "Thalis",
  //                           "Biryani",
  //                         ],
  //                         avgRating: 4.3,
  //                         feeDetails: {
  //                           restaurantId: "393107",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "76139",
  //                         avgRatingString: "4.3",
  //                         totalRatingsString: "1K+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8209131~p=5~eid=0000018a-644b-7e9d-6197-c861002a0556~srvts=1693899783837~45826",
  //                         sla: {
  //                           deliveryTime: 25,
  //                           lastMileTravel: 3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "25 mins",
  //                           lastMileTravelString: "3.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "brand",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                     description: "",
  //                                     shortDescription: "brand",
  //                                     fontColor: "#7E808C",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "40% OFF",
  //                           subHeader: "UPTO ₹80",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=393107",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "5938",
  //                         name: "Burger King",
  //                         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //                         locality: "Tasker Town",
  //                         areaName: "Shivaji Nagar",
  //                         costForTwo: "₹350 for two",
  //                         cuisines: ["Burgers", "American"],
  //                         avgRating: 4.1,
  //                         feeDetails: {
  //                           restaurantId: "5938",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "166",
  //                         avgRatingString: "4.1",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 28,
  //                           lastMileTravel: 2.7,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "28 mins",
  //                           lastMileTravelString: "2.7 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 02:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                             imageBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "60% OFF",
  //                           subHeader: "UPTO ₹120",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=5938",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "588619",
  //                         name: "KFC",
  //                         cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
  //                         locality: "Brigade Rd",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: [
  //                           "Burgers",
  //                           "Biryani",
  //                           "American",
  //                           "Snacks",
  //                           "Fast Food",
  //                         ],
  //                         avgRating: 4.1,
  //                         feeDetails: {
  //                           restaurantId: "588619",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "547",
  //                         avgRatingString: "4.1",
  //                         totalRatingsString: "500+",
  //                         sla: {
  //                           deliveryTime: 24,
  //                           lastMileTravel: 2.8,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "24 mins",
  //                           lastMileTravelString: "2.8 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 01:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "20% OFF",
  //                           subHeader: "UPTO ₹50",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=588619",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "665528",
  //                         name: "TART Cafe",
  //                         cloudinaryImageId: "970e39d5ed45923ee153889e6a148f1f",
  //                         locality: "Brigade Road",
  //                         areaName: "Central Bangalore",
  //                         costForTwo: "₹750 for two",
  //                         cuisines: ["Bakery", "Desserts", "Pastas"],
  //                         avgRating: 4.2,
  //                         feeDetails: {
  //                           restaurantId: "665528",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "201283",
  //                         avgRatingString: "4.2",
  //                         totalRatingsString: "50+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8058544~p=6~eid=0000018a-644b-7e9d-6197-c862002a0652~srvts=1693899783837~45826",
  //                         sla: {
  //                           deliveryTime: 24,
  //                           lastMileTravel: 2.2,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "24 mins",
  //                           lastMileTravelString: "2.2 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 21:30:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                             imageBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "40% OFF",
  //                           subHeader: "UPTO ₹80",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=665528",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "43836",
  //                         name: "McDonald's",
  //                         cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  //                         locality: "MG Road",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //                         avgRating: 4.2,
  //                         feeDetails: {
  //                           restaurantId: "43836",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "630",
  //                         avgRatingString: "4.2",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 23,
  //                           lastMileTravel: 1.4,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "23 mins",
  //                           lastMileTravelString: "1.4 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 02:45:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "10% OFF",
  //                           subHeader: "ABOVE ₹999",
  //                           discountTag: "FLAT DEAL",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=43836",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "3241",
  //                         name: "Meghana Foods",
  //                         cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
  //                         locality: "Residency Road",
  //                         areaName: "Residency Road",
  //                         costForTwo: "₹500 for two",
  //                         cuisines: [
  //                           "Biryani",
  //                           "Andhra",
  //                           "South Indian",
  //                           "North Indian",
  //                           "Chinese",
  //                           "Seafood",
  //                         ],
  //                         avgRating: 4.5,
  //                         feeDetails: {
  //                           restaurantId: "3241",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "635",
  //                         avgRatingString: "4.5",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 22,
  //                           lastMileTravel: 2.3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "22 mins",
  //                           lastMileTravelString: "2.3 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 01:30:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=3241",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "58103",
  //                         name: "Sahana's (Since 1993)",
  //                         cloudinaryImageId: "ea4b2040bf61feaf7f21e50bb97350bd",
  //                         locality: "Wilson Garden",
  //                         areaName: "Wilson garden",
  //                         costForTwo: "₹200 for two",
  //                         cuisines: ["South Indian", "Biryani", "Chinese"],
  //                         avgRating: 4.1,
  //                         feeDetails: {
  //                           restaurantId: "58103",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "174613",
  //                         avgRatingString: "4.1",
  //                         totalRatingsString: "5K+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8212720~p=8~eid=0000018a-644b-7e9d-6197-c864002a0844~srvts=1693899783837~45826",
  //                         sla: {
  //                           deliveryTime: 23,
  //                           lastMileTravel: 3.9,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "23 mins",
  //                           lastMileTravelString: "3.9 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 16:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "20% OFF",
  //                           subHeader: "UPTO ₹50",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=58103",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "23847",
  //                         name: "Domino's Pizza",
  //                         cloudinaryImageId: "fjqcvqfgqlw6h0atques",
  //                         locality: "Rest House Road",
  //                         areaName: "Brigade Road",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //                         avgRating: 4.3,
  //                         feeDetails: {
  //                           restaurantId: "23847",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "2456",
  //                         avgRatingString: "4.3",
  //                         totalRatingsString: "5K+",
  //                         sla: {
  //                           deliveryTime: 25,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "25 mins",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 22:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                             textBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "₹150 OFF",
  //                           subHeader: "ABOVE ₹999",
  //                           discountTag: "FLAT DEAL",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=23847",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "684427",
  //                         name: "Cafe Amudham",
  //                         cloudinaryImageId: "0bcdca61f3cd1e9135b98328593d044f",
  //                         locality: "Lalbhagh  Siddapura",
  //                         areaName: "Jayanagar",
  //                         costForTwo: "₹400 for two",
  //                         cuisines: ["South Indian", "Snacks"],
  //                         avgRating: 4.5,
  //                         feeDetails: {
  //                           restaurantId: "684427",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 3800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 3800,
  //                         },
  //                         parentId: "396620",
  //                         avgRatingString: "4.5",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 27,
  //                           lastMileTravel: 4,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "27 mins",
  //                           lastMileTravelString: "4.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "20% OFF",
  //                           subHeader: "UPTO ₹50",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=684427",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "102334",
  //                         name: "Dindigul Thalappakatti",
  //                         cloudinaryImageId: "ogidjgqgh5w4otvuiipj",
  //                         locality: "Mg Road",
  //                         areaName: "MG Road",
  //                         costForTwo: "₹650 for two",
  //                         cuisines: [
  //                           "Biryani",
  //                           "Barbecue",
  //                           "South Indian",
  //                           "Chinese",
  //                           "North Indian",
  //                         ],
  //                         avgRating: 4,
  //                         feeDetails: {
  //                           restaurantId: "102334",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 5800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 5800,
  //                         },
  //                         parentId: "332",
  //                         avgRatingString: "4.0",
  //                         totalRatingsString: "5K+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8241083~p=9~eid=0000018a-644b-7e9d-6197-c865002a095f~srvts=1693899783837~45826",
  //                         sla: {
  //                           deliveryTime: 27,
  //                           lastMileTravel: 4,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "27 mins",
  //                           lastMileTravelString: "4.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:59:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=102334",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "3369",
  //                         name: "Truffles",
  //                         cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
  //                         locality: "St. Marks Road",
  //                         areaName: "St. Marks Road",
  //                         costForTwo: "₹450 for two",
  //                         cuisines: [
  //                           "American",
  //                           "Desserts",
  //                           "Continental",
  //                           "Italian",
  //                         ],
  //                         avgRating: 4.5,
  //                         feeDetails: {
  //                           restaurantId: "3369",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "218065",
  //                         avgRatingString: "4.5",
  //                         totalRatingsString: "10K+",
  //                         sla: {
  //                           deliveryTime: 26,
  //                           lastMileTravel: 0.8,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "26 mins",
  //                           lastMileTravelString: "0.8 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 23:30:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=3369",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "557322",
  //                         name: "Living Bowls",
  //                         cloudinaryImageId: "9726755cb6f18f1c3ca2ce4720adfe24",
  //                         locality: "7th Phase",
  //                         areaName: "BRIGADE ROAD",
  //                         costForTwo: "₹500 for two",
  //                         cuisines: ["Salads", "Continental", "Indian", "Juices"],
  //                         avgRating: 4.1,
  //                         feeDetails: {
  //                           restaurantId: "557322",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "270680",
  //                         avgRatingString: "4.1",
  //                         totalRatingsString: "1K+",
  //                         promoted: true,
  //                         adTrackingId:
  //                           "cid=8110613~p=10~eid=0000018a-644b-7e9d-6197-c866002a0a59~srvts=1693899783837~45826",
  //                         sla: {
  //                           deliveryTime: 27,
  //                           lastMileTravel: 2.2,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "27 mins",
  //                           lastMileTravelString: "2.2 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-06 01:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "options available",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                     description: "",
  //                                     shortDescription: "options available",
  //                                     fontColor: "#7E808C",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                             textBased: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "40% OFF",
  //                           subHeader: "UPTO ₹80",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=557322",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "15870",
  //                         name: "All Saints Bakery",
  //                         cloudinaryImageId: "yij33zwbu97ulmh9yymy",
  //                         locality: "Brigade Road",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹200 for two",
  //                         cuisines: ["Bakery", "Snacks", "Desserts"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "15870",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "21659",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "5K+",
  //                         sla: {
  //                           deliveryTime: 23,
  //                           lastMileTravel: 2.3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "23 mins",
  //                           lastMileTravelString: "2.3 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 19:10:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=15870",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "117871",
  //                         name: "Green Onion Chinese-Residency Road",
  //                         cloudinaryImageId: "443c0f41ecb658490b7654f1c16d544a",
  //                         locality: "Residency Road",
  //                         areaName: "Ashok Nagar",
  //                         costForTwo: "₹600 for two",
  //                         cuisines: ["Chinese"],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "117871",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "401339",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "5K+",
  //                         sla: {
  //                           deliveryTime: 27,
  //                           lastMileTravel: 2.3,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "27 mins",
  //                           lastMileTravelString: "2.3 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 22:50:00",
  //                           opened: true,
  //                         },
  //                         badges: {},
  //                         isOpen: true,
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {},
  //                           },
  //                         },
  //                         aggregatedDiscountInfoV3: {
  //                           header: "10% OFF",
  //                           subHeader: "ABOVE ₹1100",
  //                           discountTag: "FLAT DEAL",
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=117871",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "145074",
  //                         name: "The Brahmins Khanavali",
  //                         cloudinaryImageId: "rkx3kyxxbozmxymxoozt",
  //                         locality: "Ashok Nagar",
  //                         areaName: "St Marks Road",
  //                         costForTwo: "₹200 for two",
  //                         cuisines: ["South Indian"],
  //                         avgRating: 4.5,
  //                         veg: true,
  //                         feeDetails: {
  //                           restaurantId: "145074",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 2800,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 2800,
  //                         },
  //                         parentId: "205768",
  //                         avgRatingString: "4.5",
  //                         totalRatingsString: "1K+",
  //                         sla: {
  //                           deliveryTime: 23,
  //                           lastMileTravel: 1,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "23 mins",
  //                           lastMileTravelString: "1.0 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 16:00:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "options available",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             imageBased: {},
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                     description: "",
  //                                     shortDescription: "options available",
  //                                     fontColor: "#7E808C",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                             textBased: {},
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=145074",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                     {
  //                       info: {
  //                         id: "9911",
  //                         name: "Fresh Pressery Cafe",
  //                         cloudinaryImageId: "219782505fb37712366ea9051ab6bd2a",
  //                         locality: "Ashok Nagar",
  //                         areaName: "Lavelle Road",
  //                         costForTwo: "₹1000 for two",
  //                         cuisines: [
  //                           "Italian",
  //                           "Salads",
  //                           "Healthy Food",
  //                           "French",
  //                         ],
  //                         avgRating: 4.4,
  //                         feeDetails: {
  //                           restaurantId: "9911",
  //                           fees: [
  //                             {
  //                               name: "BASE_DISTANCE",
  //                               fee: 4300,
  //                             },
  //                             {
  //                               name: "BASE_TIME",
  //                             },
  //                             {
  //                               name: "ANCILLARY_SURGE_FEE",
  //                             },
  //                           ],
  //                           totalFee: 4300,
  //                         },
  //                         parentId: "1405",
  //                         avgRatingString: "4.4",
  //                         totalRatingsString: "5K+",
  //                         sla: {
  //                           deliveryTime: 26,
  //                           lastMileTravel: 0.5,
  //                           serviceability: "SERVICEABLE",
  //                           slaString: "26 mins",
  //                           lastMileTravelString: "0.5 km",
  //                           iconType: "ICON_TYPE_EMPTY",
  //                         },
  //                         availability: {
  //                           nextCloseTime: "2023-09-05 19:30:00",
  //                           opened: true,
  //                         },
  //                         badges: {
  //                           textExtendedBadges: [
  //                             {
  //                               iconId: "guiltfree/GF_Logo_android_3x",
  //                               shortDescription: "brand",
  //                               fontColor: "#7E808C",
  //                             },
  //                           ],
  //                         },
  //                         isOpen: true,
  //                         aggregatedDiscountInfoV2: {},
  //                         type: "F",
  //                         badgesV2: {
  //                           entityBadges: {
  //                             textBased: {},
  //                             imageBased: {},
  //                             textExtendedBadges: {
  //                               badgeObject: [
  //                                 {
  //                                   attributes: {
  //                                     description: "",
  //                                     shortDescription: "brand",
  //                                     fontColor: "#7E808C",
  //                                     iconId: "guiltfree/GF_Logo_android_3x",
  //                                   },
  //                                 },
  //                               ],
  //                             },
  //                           },
  //                         },
  //                         differentiatedUi: {
  //                           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //                           differentiatedUiMediaDetails: {
  //                             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //                             lottie: {},
  //                             video: {},
  //                           },
  //                         },
  //                         reviewsSummary: {},
  //                         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //                         restaurantOfferPresentationInfo: {},
  //                       },
  //                       analytics: {},
  //                       cta: {
  //                         link: "swiggy://menu?restaurant_id=9911",
  //                         text: "RESTAURANT_MENU",
  //                         type: "DEEPLINK",
  //                       },
  //                     },
  //                   ],
  //                   theme: "DELIVERING_NOW",
  //                   collectionId: "45826",
  //                 },
  //               },
  //               footer: {
  //                 labelWrapper: {
  //                   "@type":
  //                     "type.googleapis.com/swiggy.gandalf.widgets.v2.Label",
  //                   text: "See all restaurants",
  //                   textColor: "#ffffff",
  //                   fontSize: 17,
  //                   fontName: "FONT_NAME_BOLD",
  //                   alignment: "ALIGNMENT_CENTER",
  //                   borderRadius: 6,
  //                   margin: {
  //                     left: 16,
  //                     top: 16,
  //                     right: 16,
  //                     bottom: 16,
  //                   },
  //                   padding: {
  //                     top: 18,
  //                     bottom: 18,
  //                   },
  //                   backgroundColor: "#e46d47",
  //                   cta: {
  //                     link: "swiggy://restaurantList",
  //                     text: "See all restaurants",
  //                     type: "DEEPLINK",
  //                   },
  //                   maxLines: 1,
  //                 },
  //               },
  //             },
  //           },
  //         ],
  //         firstOffsetRequest: true,
  //         ribbons: [
  //           {
  //             text: "Preorder",
  //             textColor: "#ffffff",
  //             imageId: "sfefefefeegeg",
  //             topBackgroundColor: "#d53d4c",
  //             bottomBackgroundColor: "#af2330",
  //             type: "PREORDER",
  //           },
  //           {
  //             text: "Exclusive",
  //             textColor: "#ffffff",
  //             imageId: "sfefefefeegeg",
  //             topBackgroundColor: "#fa4a5b",
  //             bottomBackgroundColor: "#d12a3b",
  //             type: "EXCLUSIVE",
  //           },
  //           {
  //             text: "Newly Added",
  //             textColor: "#ffffff",
  //             imageId: "sfefefefeegeg",
  //             topBackgroundColor: "#d53d4c",
  //             bottomBackgroundColor: "#af2330",
  //             type: "NEW",
  //           },
  //           {
  //             text: "Repeat",
  //             textColor: "#ffffff",
  //             imageId: "sfefefefeegeg",
  //             topBackgroundColor: "#D53D4C",
  //             bottomBackgroundColor: "#B02331",
  //             type: "REPEAT",
  //           },
  //           {
  //             text: "Daily Menus",
  //             textColor: "#ffffff",
  //             imageId: "sfefefefeegeg",
  //             topBackgroundColor: "#fa4a5b",
  //             bottomBackgroundColor: "#d12a3b",
  //             type: "CLOUD",
  //           },
  //           {
  //             text: "Premium",
  //             textColor: "#ffffff",
  //             imageId: "sfefefefeegeg",
  //             topBackgroundColor: "#8a584b",
  //             bottomBackgroundColor: "#583229",
  //             type: "PREMIUM",
  //           },
  //           {
  //             text: "Promoted",
  //             textColor: "#ffffff",
  //             imageId: "sfefefefeegeg",
  //             topBackgroundColor: "#3a3c41",
  //             bottomBackgroundColor: "#1e2023",
  //             type: "PROMOTED",
  //           },
  //         ],
  //         cacheExpiryTime: {
  //           value: 600,
  //         },
  //         nextFetch: 3,
  //       },
  //       requestId: "55b884e6-41dd-4d1a-97ba-ed752da82e57",
  //     },
  //     tid: "2b29f62b-8cc3-4593-beaa-594440312053",
  //     sid: "95oae426-038f-4cd8-97f1-1d2ac2808b2e",
  //     deviceId: "ffb874b3-e3cc-8c1c-67d8-d3b882397811",
  //     csrfToken: "CwhnZbLuhnWj-gKB4hKOBLD2ELfbOEl1HmaVjiBI",
  //   },

  {
    name: "Apple",
    price: 100,
    description: "This is an apple",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c0d1b1a1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    id: 1,
    category: "Fruits",
  },
  {
    name: "Banana",
    price: 200,
    description: "This is a banana",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c0d1b1a1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    id: 2,
    category: "Fruits",
  },
];

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === parseInt(id));
  res.send(product);
});

router.post("/", (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.send(product);
});

router.put("/:id", (req, res) => {
  const product = req.body;
  const id = req.params.id;
  const dbProduct = products[parseInt(id) - 1];
  products[parseInt(id) - 1] = Object.assign(dbProduct, product);
  res.send(product);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  products.splice(parseInt(id) - 1, 1);
  res.send({ success: true });
});

module.exports = router;
