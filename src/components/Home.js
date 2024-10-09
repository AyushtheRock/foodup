import React from 'react';
import Card from './Card';
import { useState , useEffect } from 'react';
import Shimmer from './Shimmer';
import Cart from './Cart';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './Footer';




const resList= [{
      "info": {
      "id": "665553",
      "name": "Veer Ji Malai Chaap Wale",
      "cloudinaryImageId": "b139cc0e94645b50b1bca2bd8dced0cd",
      "locality": "M Block",
      "areaName": "Kidwai Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "North Indian",
      "Fast Food"
      ],
      "avgRating": 3.9,
      "veg": true,
      "feeDetails": {
      "restaurantId": "665553",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 2000
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 2000
      },
      "parentId": "12056",
      "avgRatingString": "3.9",
      "totalRatingsString": "50+",
      "sla": {
      "deliveryTime": 24,
      "lastMileTravel": 2.3,
      "serviceability": "SERVICEABLE",
      "slaString": "24 mins",
      "lastMileTravelString": "2.3 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-11-22 23:15:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "textBased": {},
      "imageBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "swiggy://menu?restaurant_id=665553",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
      }
      },{
            "info": {
            "id": "298737",
            "name": "PVR Cafe",
            "cloudinaryImageId": "cavywcgsfc49krkkmopp",
            "locality": "South X Mall",
            "areaName": "Kidwai Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Snacks",
            "Fast Food",
            "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
            "restaurantId": "298737",
            "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 2000
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 2000
            },
            "parentId": "11664",
            "avgRatingString": "4.1",
            "totalRatingsString": "50+",
            "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-11-23 01:00:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "imageBased": {},
            "textExtendedBadges": {},
            "textBased": {}
            }
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=298737",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            }
            },
            {
            "info": {
            "id": "86416",
            "name": "Ram Corner",
            "cloudinaryImageId": "853f673f98c9fac50abd98822f5d41c2",
            "locality": "Niralanagar",
            "areaName": "Saket Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
            "Bakery",
            "Chinese",
            "Street Food",
            "Continental"
            ],
            "avgRating": 3.9,
            "feeDetails": {
            "restaurantId": "86416",
            "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 2500
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 2500
            },
            "parentId": "166267",
            "avgRatingString": "3.9",
            "totalRatingsString": "500+",
            "promoted": true,
            "adTrackingId": "cid=9220834~p=12~eid=0000018b-f65c-fff2-06bb-8b5100730c15~srvts=1700645371890~45826",
            "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 3.7,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "3.7 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-11-22 22:15:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {
            "badgeObject": [
            {
            "attributes": {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
            }
            ]
            },
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=86416",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            }
            },
            {
            "info": {
            "id": "699599",
            "name": "The Momo Co.",
            "cloudinaryImageId": "9668a5819fcba35364dcff30d5f5cfbb",
            "locality": "Kidwai Nagar",
            "areaName": "South X Mall",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
            ],
            "avgRating": 3.8,
            "feeDetails": {
            "restaurantId": "699599",
            "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 2000
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 2000
            },
            "parentId": "11442",
            "avgRatingString": "3.8",
            "totalRatingsString": "50+",
            "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-11-23 01:00:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=699599",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            }
            },
            {
            "info": {
            "id": "185896",
            "name": "Khana Khazana",
            "cloudinaryImageId": "vnhwydukt1njozbpdd0f",
            "locality": "F Block",
            "areaName": "Kidwai Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
            "North Indian",
            "Chinese",
            "Thalis",
            "Punjabi"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
            "restaurantId": "185896",
            "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 2000
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 2000
            },
            "parentId": "2928",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-11-22 23:00:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=185896",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            }
            },
            {
            "info": {
            "id": "94487",
            "name": "Agra Vala Sweets",
            "cloudinaryImageId": "qkrnoqxu9xadjk8veuuz",
            "locality": "Kaushalpuri",
            "areaName": "Ashok Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
            "Street Food",
            "Sweets",
            "Bakery",
            "Desserts",
            "Snacks"
            ],
            "avgRating": 4.2,
            "feeDetails": {
            "restaurantId": "94487",
            "fees": [
            {
            "name": "BASE_DISTANCE",
            "fee": 2500
            },
            {
            "name": "BASE_TIME"
            },
            {
            "name": "ANCILLARY_SURGE_FEE"
            }
            ],
            "totalFee": 2500
            },
            "parentId": "13586",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=9528652~p=13~eid=0000018b-f65c-fff2-06bb-8b5200730d4a~srvts=1700645371890~45826",
            "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "23 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2023-11-22 22:00:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=94487",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            }
            },{
                  "info": {
                  "id": "600447",
                  "name": "PizzaExpress",
                  "cloudinaryImageId": "asuoeeljh4yqqz7wv5fh",
                  "locality": "Gandhi Nagar",
                  "areaName": "Harsh Nagar",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                  "Italian-American",
                  "Chinese",
                  "Beverages"
                  ],
                  "avgRating": 3.7,
                  "veg": true,
                  "feeDetails": {
                  "restaurantId": "600447",
                  "fees": [
                  {
                  "name": "BASE_DISTANCE",
                  "fee": 2000
                  },
                  {
                  "name": "BASE_TIME"
                  },
                  {
                  "name": "ANCILLARY_SURGE_FEE"
                  }
                  ],
                  "totalFee": 2000
                  },
                  "parentId": "3531",
                  "avgRatingString": "3.7",
                  "totalRatingsString": "1K+",
                  "sla": {
                  "deliveryTime": 28,
                  "lastMileTravel": 2.5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "28 mins",
                  "lastMileTravelString": "2.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                  "nextCloseTime": "2023-11-22 23:59:00",
                  "opened": true
                  },
                  "badges": {
                  "imageBadges": [
                  {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                  }
                  ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                  "entityBadges": {
                  "imageBased": {
                  "badgeObject": [
                  {
                  "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                  }
                  }
                  ]
                  },
                  "textExtendedBadges": {},
                  "textBased": {}
                  }
                  },
                  "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹199",
                  "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                  }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                  },
                  "analytics": {},
                  "cta": {
                  "link": "swiggy://menu?restaurant_id=600447",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                  }
                  },
                  {
                  "info": {
                  "id": "153047",
                  "name": "Amritsari Krishna Kulche",
                  "cloudinaryImageId": "ricbspswekiyicgchcbk",
                  "locality": "Harsh Nagar",
                  "areaName": "Ashok Nagar",
                  "costForTwo": "₹100 for two",
                  "cuisines": [
                  "Street Food"
                  ],
                  "avgRating": 4,
                  "veg": true,
                  "feeDetails": {
                  "restaurantId": "153047",
                  "fees": [
                  {
                  "name": "BASE_DISTANCE",
                  "fee": 2500
                  },
                  {
                  "name": "BASE_TIME"
                  },
                  {
                  "name": "ANCILLARY_SURGE_FEE"
                  }
                  ],
                  "totalFee": 2500
                  },
                  "parentId": "32132",
                  "avgRatingString": "4.0",
                  "totalRatingsString": "100+",
                  "promoted": true,
                  "adTrackingId": "cid=9264286~p=14~eid=0000018b-f65c-fff2-06bb-8b5300730e69~srvts=1700645371890~45826",
                  "sla": {
                  "deliveryTime": 27,
                  "lastMileTravel": 3.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "27 mins",
                  "lastMileTravelString": "3.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                  "nextCloseTime": "2023-11-22 21:00:00",
                  "opened": true
                  },
                  "badges": {
                  "imageBadges": [
                  {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                  }
                  ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                  "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                  "badgeObject": [
                  {
                  "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                  }
                  }
                  ]
                  },
                  "textExtendedBadges": {}
                  }
                  },
                  "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹75"
                  },
                  "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                  }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                  },
                  "analytics": {},
                  "cta": {
                  "link": "swiggy://menu?restaurant_id=153047",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                  }
                  },
                  {
                  "info": {
                  "id": "523351",
                  "name": "Chinese Hub",
                  "cloudinaryImageId": "on0mgccejyapjfwa9g4b",
                  "locality": "Jwala Devi Degree College Lane",
                  "areaName": "Gandhi Nagar",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                  "Pizzas",
                  "Pastas"
                  ],
                  "avgRating": 3.1,
                  "veg": true,
                  "feeDetails": {
                  "restaurantId": "523351",
                  "fees": [
                  {
                  "name": "BASE_DISTANCE",
                  "fee": 2000
                  },
                  {
                  "name": "BASE_TIME"
                  },
                  {
                  "name": "ANCILLARY_SURGE_FEE"
                  }
                  ],
                  "totalFee": 2000
                  },
                  "parentId": "16394",
                  "avgRatingString": "3.1",
                  "totalRatingsString": "100+",
                  "sla": {
                  "deliveryTime": 30,
                  "lastMileTravel": 2.3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30 mins",
                  "lastMileTravelString": "2.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                  "nextCloseTime": "2023-11-23 03:00:00",
                  "opened": true
                  },
                  "badges": {
                  "imageBadges": [
                  {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                  }
                  ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                  "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                  "badgeObject": [
                  {
                  "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                  }
                  }
                  ]
                  },
                  "textExtendedBadges": {}
                  }
                  },
                  "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120"
                  },
                  "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                  }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                  },
                  "analytics": {},
                  "cta": {
                  "link": "swiggy://menu?restaurant_id=523351",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                  }
                  },
                  {
                  "info": {
                  "id": "721534",
                  "name": "Pizza Wings",
                  "cloudinaryImageId": "da18d66a8f49c3498927bbfbd1d76fd9",
                  "locality": "m block",
                  "areaName": "Kidwai Nagar",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                  "Pizzas",
                  "Italian",
                  "Mexican",
                  "Pastas"
                  ],
                  "avgRating": 3.8,
                  "feeDetails": {
                  "restaurantId": "721534",
                  "fees": [
                  {
                  "name": "BASE_DISTANCE",
                  "fee": 2000
                  },
                  {
                  "name": "BASE_TIME"
                  },
                  {
                  "name": "ANCILLARY_SURGE_FEE"
                  }
                  ],
                  "totalFee": 2000
                  },
                  "parentId": "159048",
                  "avgRatingString": "3.8",
                  "totalRatingsString": "100+",
                  "sla": {
                  "deliveryTime": 25,
                  "lastMileTravel": 2.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25 mins",
                  "lastMileTravelString": "2.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                  "nextCloseTime": "2023-11-23 02:00:00",
                  "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                  "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
                  }
                  },
                  "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120"
                  },
                  "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                  }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "isNewlyOnboarded": true,
                  "restaurantOfferPresentationInfo": {}
                  },
                  "analytics": {},
                  "cta": {
                  "link": "swiggy://menu?restaurant_id=721534",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                  }
                  },
                  {
                  "info": {
                  "id": "359803",
                  "name": "Grameen Kulfi",
                  "cloudinaryImageId": "g3azphzmvsn8ykuagunt",
                  "locality": "R K Nagar",
                  "areaName": "Darshan Purwa",
                  "costForTwo": "₹120 for two",
                  "cuisines": [
                  "Ice Cream",
                  "Desserts"
                  ],
                  "avgRating": 4.7,
                  "veg": true,
                  "feeDetails": {
                  "restaurantId": "359803",
                  "fees": [
                  {
                  "name": "BASE_DISTANCE",
                  "fee": 2500
                  },
                  {
                  "name": "BASE_TIME"
                  },
                  {
                  "name": "ANCILLARY_SURGE_FEE"
                  }
                  ],
                  "totalFee": 2500
                  },
                  "parentId": "12175",
                  "avgRatingString": "4.7",
                  "totalRatingsString": "1K+",
                  "sla": {
                  "deliveryTime": 22,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "22 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                  "nextCloseTime": "2023-11-23 00:00:00",
                  "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                  "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
                  }
                  },
                  "aggregatedDiscountInfoV3": {
                  "header": "EVERY ITEM",
                  "subHeader": "@ ₹99"
                  },
                  "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
                  }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {}
                  },
                  "analytics": {},
                  "cta": {
                  "link": "swiggy://menu?restaurant_id=359803",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
                  }
                  },{
                        "info": {
                        "id": "571843",
                        "name": "Gupta Ji Malai Chaap Wale",
                        "cloudinaryImageId": "g2vfzh3rzoir9x1mk9hl",
                        "locality": "Gopal Nagar",
                        "areaName": "Yashoda Nagar",
                        "costForTwo": "₹150 for two",
                        "cuisines": [
                        "North Indian",
                        "Tandoor",
                        "Snacks",
                        "Fast Food"
                        ],
                        "avgRating": 3.6,
                        "veg": true,
                        "feeDetails": {
                        "restaurantId": "571843",
                        "fees": [
                        {
                        "name": "BASE_DISTANCE",
                        "fee": 3300
                        },
                        {
                        "name": "BASE_TIME"
                        },
                        {
                        "name": "ANCILLARY_SURGE_FEE"
                        }
                        ],
                        "totalFee": 3300
                        },
                        "parentId": "13694",
                        "avgRatingString": "3.6",
                        "totalRatingsString": "100+",
                        "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                        "nextCloseTime": "2023-11-22 23:30:00",
                        "opened": true
                        },
                        "badges": {
                        "imageBadges": [
                        {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                        }
                        ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                        "entityBadges": {
                        "textBased": {},
                        "imageBased": {
                        "badgeObject": [
                        {
                        "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                        }
                        ]
                        },
                        "textExtendedBadges": {}
                        }
                        },
                        "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                        }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=571843",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                        },
                       ,
                        {
                        "info": {
                        "id": "448159",
                        "name": "Veer Ji Malai Chaap Wale ( Saket nagar)",
                        "cloudinaryImageId": "53860ce61845e4f2f4d3c99f733a81a4",
                        "locality": "Juhi Kalan",
                        "areaName": "Saket Nagar",
                        "costForTwo": "₹450 for two",
                        "cuisines": [
                        "Indian",
                        "Snacks"
                        ],
                        "avgRating": 3.8,
                        "veg": true,
                        "feeDetails": {
                        "restaurantId": "448159",
                        "fees": [
                        {
                        "name": "BASE_DISTANCE",
                        "fee": 2800
                        },
                        {
                        "name": "BASE_TIME"
                        },
                        {
                        "name": "ANCILLARY_SURGE_FEE"
                        }
                        ],
                        "totalFee": 2800
                        },
                        "parentId": "406510",
                        "avgRatingString": "3.8",
                        "totalRatingsString": "1K+",
                        "promoted": true,
                        "adTrackingId": "cid=9129453~p=9~eid=0000018b-f6bb-1449-400b-5da600b5096d~srvts=1700651537481~45826",
                        "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "28 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                        "nextCloseTime": "2023-11-22 23:55:00",
                        "opened": true
                        },
                        "badges": {
                        "imageBadges": [
                        {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                        }
                        ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                        "entityBadges": {
                        "textExtendedBadges": {},
                        "textBased": {},
                        "imageBased": {
                        "badgeObject": [
                        {
                        "attributes": {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                        }
                        }
                        ]
                        }
                        }
                        },
                        "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                        }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=448159",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                        },
                        {
                        "info": {
                        "id": "359803",
                        "name": "Grameen Kulfi",
                        "cloudinaryImageId": "g3azphzmvsn8ykuagunt",
                        "locality": "R K Nagar",
                        "areaName": "Darshan Purwa",
                        "costForTwo": "₹120 for two",
                        "cuisines": [
                        "Ice Cream",
                        "Desserts"
                        ],
                        "avgRating": 4.7,
                        "veg": true,
                        "feeDetails": {
                        "restaurantId": "359803",
                        "fees": [
                        {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                        },
                        {
                        "name": "BASE_TIME"
                        },
                        {
                        "name": "ANCILLARY_SURGE_FEE"
                        }
                        ],
                        "totalFee": 2300
                        },
                        "parentId": "12175",
                        "avgRatingString": "4.7",
                        "totalRatingsString": "1K+",
                        "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                        "nextCloseTime": "2023-11-23 00:00:00",
                        "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                        "entityBadges": {
                        "imageBased": {},
                        "textExtendedBadges": {},
                        "textBased": {}
                        }
                        },
                        "aggregatedDiscountInfoV3": {
                        "header": "EVERY ITEM",
                        "subHeader": "@ ₹99"
                        },
                        "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                        }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=359803",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                        },
                        {
                        "info": {
                        "id": "353614",
                        "name": "Spicy Foods",
                        "cloudinaryImageId": "85e1beeb44e3371d49cda6b9cbe4a5f4",
                        "locality": "E Block",
                        "areaName": "Kidwai Nagar",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                        "Chinese",
                        "Italian",
                        "South Indian"
                        ],
                        "avgRating": 3.9,
                        "veg": true,
                        "feeDetails": {
                        "restaurantId": "353614",
                        "fees": [
                        {
                        "name": "BASE_DISTANCE",
                        "fee": 1800
                        },
                        {
                        "name": "BASE_TIME"
                        },
                        {
                        "name": "ANCILLARY_SURGE_FEE"
                        }
                        ],
                        "totalFee": 1800
                        },
                        "parentId": "192496",
                        "avgRatingString": "3.9",
                        "totalRatingsString": "5K+",
                        "promoted": true,
                        "adTrackingId": "cid=9128528~p=10~eid=0000018b-f6bb-1449-400b-5da700b50a1f~srvts=1700651537481~45826",
                        "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                        "nextCloseTime": "2023-11-22 23:59:00",
                        "opened": true
                        },
                        "badges": {
                        "imageBadges": [
                        {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                        }
                        ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                        "entityBadges": {
                        "textBased": {},
                        "imageBased": {
                        "badgeObject": [
                        {
                        "attributes": {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                        }
                        }
                        ]
                        },
                        "textExtendedBadges": {}
                        }
                        },
                        "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                        }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=353614",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                        },
                        {
                        "info": {
                        "id": "587883",
                        "name": "Winni Cakes & More",
                        "cloudinaryImageId": "ey4lpsahswwawa0overk",
                        "locality": "Kaushalpuri",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                        "Bakery",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Fast Food"
                        ],
                        "avgRating": 3.6,
                        "veg": true,
                        "feeDetails": {
                        "restaurantId": "587883",
                        "fees": [
                        {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                        },
                        {
                        "name": "BASE_TIME"
                        },
                        {
                        "name": "ANCILLARY_SURGE_FEE"
                        }
                        ],
                        "totalFee": 2300
                        },
                        "parentId": "226144",
                        "avgRatingString": "3.6",
                        "totalRatingsString": "100+",
                        "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                        "nextCloseTime": "2023-11-22 23:00:00",
                        "opened": true
                        },
                        "badges": {
                        "imageBadges": [
                        {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                        }
                        ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                        "entityBadges": {
                        "imageBased": {
                        "badgeObject": [
                        {
                        "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                        }
                        ]
                        },
                        "textExtendedBadges": {},
                        "textBased": {}
                        }
                        },
                        "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                        },
                        "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                        }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=587883",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                        },
                        {
                        "info": {
                        "id": "87115",
                        "name": "Dawat Restaurant",
                        "cloudinaryImageId": "176e13b6634aa4636d960aaa560205d2",
                        "locality": "Govind Nagar",
                        "areaName": "Nandlal Chawraha",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                        "North Indian",
                        "Thalis",
                        "Chinese",
                        "Afghani",
                        "Pizzas",
                        "Pastas",
                        "Biryani"
                        ],
                        "avgRating": 3.6,
                        "feeDetails": {
                        "restaurantId": "87115",
                        "fees": [
                        {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                        },
                        {
                        "name": "BASE_TIME"
                        },
                        {
                        "name": "ANCILLARY_SURGE_FEE"
                        }
                        ],
                        "totalFee": 2300
                        },
                        "parentId": "13611",
                        "avgRatingString": "3.6",
                        "totalRatingsString": "10K+",
                        "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                        "nextCloseTime": "2023-11-22 23:00:00",
                        "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                        "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {}
                        }
                        },
                        "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                        },
                        "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                        }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=87115",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                        },
                        {
                        "info": {
                        "id": "786613",
                        "name": "KFC",
                        "cloudinaryImageId": "bd384dc3b5ef057f8b2dcb91f243f33b",
                        "locality": "M Block",
                        "areaName": "Kidwai Nagar",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                        ],
                        "avgRating": 3.8,
                        "feeDetails": {
                        "restaurantId": "786613",
                        "fees": [
                        {
                        "name": "BASE_DISTANCE",
                        "fee": 1800
                        },
                        {
                        "name": "BASE_TIME"
                        },
                        {
                        "name": "ANCILLARY_SURGE_FEE"
                        }
                        ],
                        "totalFee": 1800
                        },
                        "parentId": "547",
                        "avgRatingString": "3.8",
                        "totalRatingsString": "20+",
                        "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                        "nextCloseTime": "2023-11-22 23:00:00",
                        "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {},
                        "type": "F",
                        "badgesV2": {
                        "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {}
                        }
                        },
                        "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                        }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "isNewlyOnboarded": true,
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=786613",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                        },
                        {
                        "info": {
                        "id": "221897",
                        "name": "Burger King",
                        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                        "locality": "South X Mall",
                        "areaName": "Kidwai Nagar",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                        "Burgers",
                        "American"
                        ],
                        "avgRating": 4.2,
                        "feeDetails": {
                        "restaurantId": "221897",
                        "fees": [
                        {
                        "name": "BASE_DISTANCE",
                        "fee": 1800
                        },
                        {
                        "name": "BASE_TIME"
                        },
                        {
                        "name": "ANCILLARY_SURGE_FEE"
                        }
                        ],
                        "totalFee": 1800
                        },
                        "parentId": "166",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "10K+",
                        "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                        "nextCloseTime": "2023-11-23 02:00:00",
                        "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                        "entityBadges": {
                        "textBased": {},
                        "imageBased": {},
                        "textExtendedBadges": {}
                        }
                        },
                        "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                        },
                        "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                        }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                        },
                        "analytics": {},
                        "cta": {
                        "link": "swiggy://menu?restaurant_id=221897",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                        }
                        }
                       ];
        
function Home() {
      const [filteredRestaurant,setfilteredRestaurant] = useState(resList);

      const [listofRes,setlistofRes] = useState(resList);
      
      const[searchText,setsearchText] = useState("");

      const[cart,setCart] = useState([]);

      const[showCart,setShowCart]=useState(false);
    

     const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
      console.log(data);
      
      setlistofRes(data.recipes);
      setfilteredRestaurant(data.recipes);
     };

 if(listofRes.length === 0){
      return <Shimmer />
 }

 useEffect(()=> {
      fetchData();
     },[]);


     const AddtoCart = (data) => {
       setCart([...cart,{ ...data, quantity:1}])
       
     }




  return (
      <div>
            <Header count={cart.length} setShowCart={(value) => setShowCart(value)} />
               
    <div className='myhome'>
     <div className='filter'>
      <button className='btn-top' onClick={()=>{
            const filteredList = listofRes.filter(
                  (resData) => resData.rating > 4.7 
            );
            setfilteredRestaurant(filteredList);
      }}
      >Top Restaurents</button>
      </div>
       {
            showCart?null:<div className='search'>
            <input type='text' className='search-box' value={searchText} 
            onChange={(e) =>{
             setsearchText(e.target.value);
            }}></input>
            <button onClick={()=>{
    
                const filteredList = listofRes.filter(
                      (res) => res.name.includes(searchText)
                );
            setfilteredRestaurant(filteredList);
            }} className='sbutton'>Search</button>
          </div>
       }
       {


     showCart? null :
       <div className="header2">
       <div className="slidepart">
         <Slideshow />  
       </div> 
       <div className="header-image">
            <img className="chefImage" src="https://thumbs.dreamstime.com/b/d-cartoon-cook-character-funny-merry-icon-isolated-no-background-gourmet-chef-man-cooking-figure-61414518.jpg"></img>
       </div>
       
       </div>
       }
      {
            showCart?  <Cart cart={cart} /> :   <div className='home1'> 
            
     
  {filteredRestaurant.map((restaurant) => (
    <Card  item key={restaurant.id} resData={restaurant} AddtoCart={AddtoCart}  />
    
    
   ))}
   
   </div>
      }
      {
          showCart? null:   <Footer />
      }
    
   </div>
  
   </div>
   )
  
}

export default Home;
