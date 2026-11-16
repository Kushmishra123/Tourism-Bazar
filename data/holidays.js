export const holidayCategories = [
  { id: "all", label: "All Packages" },
  { id: "umrah", label: "Umrah" },
  { id: "international", label: "International Holidays" },
  { id: "domestic", label: "Domestic Holidays" },
  { id: "group-tours", label: "Group Tours" },
];

export const holidayPackages = [
  {
    id: "premium-umrah-package",
    slug: "premium-umrah-package",
    category: "umrah",
    title: "15 Days Executive Umrah Package",
    destination: "Makkah & Madinah, Saudi Arabia",
    duration: "15 Days / 14 Nights",
    featured: true,
    priceDisplay: "Request a Quote",
    coverImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop",
    ],
    overview: "A spiritually enriching Umrah experience designed with comfort, proximity to the Holy Harams, guided Ziyarat tours, and personalized ground assistance.",
    hotelInfo: {
      makkah: "5-Star Hotel within 250m of Masjid Al Haram (Clock Tower / Ibrahim Al Khalil road)",
      madinah: "5-Star Hotel facing the Northern Courtyard of Masjid An Nabawi",
      roomTypes: "Quad, Triple, Double and Single Sharing options available"
    },
    inclusions: [
      "Umrah E-Visa with comprehensive medical insurance",
      "7 Nights accommodation in Makkah close to Haram",
      "7 Nights accommodation in Madinah close to Prophet's Mosque",
      "Daily buffet breakfast & dinner (international / Indian cuisine)",
      "Dedicated air-conditioned VIP coach transfers throughout the journey",
      "Historical guided Ziyarat tours in Makkah (Jabal Al-Noor, Mina, Arafat, Muzdalifah)",
      "Guided Ziyarat tours in Madinah (Masjid Quba, Mount Uhud, Seven Mosques)",
      "Complimentary 5 Litre Zamzam water can per pilgrim (subject to airport clearance)",
      "24/7 dedicated multi-lingual tour manager and spiritual guide assistance"
    ],
    exclusions: [
      "Round-trip international flight tickets (can be arranged upon request)",
      "Expenses of personal nature like laundry, calls, room service",
      "Any additional private vehicle hiring outside standard itinerary",
      "Excess baggage charges levied by airlines"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jeddah & Transfer to Makkah",
        description: "Arrive at King Abdulaziz International Airport (Jeddah). Meet & greet by our representative. Transfer by luxury AC coach to your Makkah hotel. Check-in, relax, and proceed under group guidance to perform Umrah at Masjid Al Haram."
      },
      {
        day: 2,
        title: "Ibadah & Rest in Makkah",
        description: "Day dedicated to personal prayers, recitation, and Tawaf in the blessed precincts of the Grand Mosque."
      },
      {
        day: 3,
        title: "Guided Makkah Ziyarat Tour",
        description: "Early morning departure for historical Ziyarat: visit Jabal Al-Noor (Cave of Hira), Cave of Thawr, Mina, Muzdalifah, and the plains of Mount Arafat with spiritual commentary."
      },
      {
        day: 4,
        title: "Personal Prayers & Optional Second Umrah",
        description: "Free day for Ibadah. Pilgrims wishing to perform an additional Umrah can visit Masjid Aisha (Al Taneem) with group transport."
      },
      {
        day: 5,
        title: "Full Day Ibadah in Masjid Al Haram",
        description: "Engage in prayers and reflect at the holy Kaaba. Group dinner in the evening."
      },
      {
        day: 6,
        title: "Shopping & Spiritual Reflection",
        description: "Explore traditional Makkah markets for dates, prayer mats, and Islamic artifacts. Continue daily prayers in the Haram."
      },
      {
        day: 7,
        title: "Tawaf Al-Wada & Transfer to Madinah Al Munawwarah",
        description: "Perform farewell Tawaf (Tawaf Al-Wada). Board the high-speed Haramain Express Train or VIP coach to the peaceful city of Madinah. Check-in to your hotel near the Prophet's Mosque."
      },
      {
        day: 8,
        title: "Salam to the Prophet (PBUH) & Rawdah Sharif",
        description: "Offer prayers at Masjid An Nabawi. Guided assistance for entering the blessed Rawdah Al-Sharifah (via official Nusuk appointment)."
      },
      {
        day: 9,
        title: "Madinah Ziyarat Tour",
        description: "Visit Masjid Quba (first mosque in Islam), Mount Uhud and martyrs' cemetery, Masjid Al Qiblatain, and the Seven Mosques of Khandaq."
      },
      {
        day: 10,
        title: "Dates Market & Spiritual Discourses",
        description: "Visit the renowned Madinah central dates market. Evening spiritual session on the Seerah of Prophet Muhammad (PBUH)."
      },
      {
        day: 11,
        title: "Reflective Ibadah in Madinah",
        description: "Spend tranquil moments inside Masjid An Nabawi, soaking in the serene spiritual atmosphere of Madinah."
      },
      {
        day: 12,
        title: "Community Prayers & Free Time",
        description: "Free day for personal Quran recitation, Tahajjud, and quiet contemplation."
      },
      {
        day: 13,
        title: "Visits to Local Islamic Landmarks",
        description: "Optional visit to the International Fair and Museum of the Prophet's Biography and Islamic Civilization near the Haram."
      },
      {
        day: 14,
        title: "Final Prayers & Packing",
        description: "Offer farewell Salam at the Prophet's Mosque. Receive packed 5L Zamzam cans and prepare for departure."
      },
      {
        day: 15,
        title: "Departure from Madinah or Jeddah Airport",
        description: "Check-out and transfer to Prince Mohammad bin Abdulaziz Airport (Madinah) or King Abdulaziz Airport (Jeddah) for your return flight home."
      }
    ]
  },
  {
    id: "vietnam-highlights-tour",
    slug: "vietnam-highlights-tour",
    category: "international",
    title: "Enchanting Vietnam: Hanoi, Halong Bay & Da Nang",
    destination: "Hanoi, Halong Bay & Da Nang, Vietnam",
    duration: "7 Days / 6 Nights",
    featured: true,
    priceDisplay: "Request a Quote",
    coverImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557160854-e1e89fdd3286?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "Discover Vietnam's greatest wonders: Hanoi's historic French quarter, an overnight cruise across emerald Halong Bay karsts, and the iconic Golden Bridge held by giant stone hands in Da Nang.",
    hotelInfo: {
      hanoi: "4-Star Hotel in Hanoi French Quarter / Old Quarter (2 Nights)",
      halongBay: "Luxury 5-Star Overnight Cruise with private oceanview balcony cabin (1 Night)",
      daNang: "4-Star Beachfront Hotel near My Khe Beach (3 Nights)"
    },
    inclusions: [
      "Vietnam E-Visa processing assistance",
      "6 Nights hand-picked premium hotel and cruise accommodation",
      "Overnight luxury Halong Bay cruise with full board meals on board",
      "Daily international breakfast at hotels",
      "Private air-conditioned airport and sightseeing transfers",
      "Round-trip Ba Na Hills cable car ticket & Golden Bridge access",
      "Guided Hanoi city tour with entrance fees",
      "Traditional Vietnamese water puppet theater show ticket",
      "English-speaking licensed local tour guide"
    ],
    exclusions: [
      "International flights to Hanoi and from Da Nang",
      "Domestic flight from Hanoi to Da Nang (can be added seamlessly)",
      "Personal travel insurance",
      "Discretionary tips for guides and cruise crew"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Hanoi — Charming Capital Welcome",
        description: "Arrive at Noi Bai International Airport (HAN). Private transfer to your hotel. Evening cycloride through the bustling 36 Guilds of Hanoi Old Quarter followed by an authentic Vietnamese dinner."
      },
      {
        day: 2,
        title: "Hanoi City Discovery & Water Puppetry",
        description: "Visit Ho Chi Minh Mausoleum, One Pillar Pagoda, Temple of Literature, and tranquil Hoan Kiem Lake. In the evening, watch the traditional Thang Long Water Puppet Show."
      },
      {
        day: 3,
        title: "Hanoi to Halong Bay — Luxury Overnight Cruise",
        description: "Scenic drive through the Red River Delta to Halong Bay. Board your 5-star cruise vessel. Savor a gourmet seafood lunch while sailing past thousand limestone islets. Enjoy kayaking into hidden caves, swimming, and an evening sunset party on the sundeck."
      },
      {
        day: 4,
        title: "Halong Bay Sunrise, Fly to Da Nang",
        description: "Greet the morning with Tai Chi on the sun deck. Explore the awe-inspiring Sung Sot (Surprise) Cave. Disembark cruise and transfer to Hanoi airport for a short flight to coastal Da Nang. Check in to beachfront resort."
      },
      {
        day: 5,
        title: "Sun World Ba Na Hills & Iconic Golden Bridge",
        description: "Ascend the world-record cable car to Ba Na Hills. Walk across the world-famous Golden Bridge held aloft by two giant mossy stone hands. Explore French Village, Fantasy Park, and Linh Ung Pagoda."
      },
      {
        day: 6,
        title: "Hoi An Ancient Lantern Town Tour",
        description: "Afternoon excursion to UNESCO World Heritage town of Hoi An. Stroll through pedestrian lanes lined with Japanese Covered Bridge, Chinese assembly halls, and thousands of glowing silk lanterns. Enjoy a lantern boat ride on the Thu Bon River."
      },
      {
        day: 7,
        title: "Da Nang Departure",
        description: "Breakfast at leisure overlooking My Khe Beach. Last-minute souvenir shopping at Han Market. Private airport transfer for your departure flight."
      }
    ]
  },
  {
    id: "thailand-bangkok-phuket-paradise",
    slug: "thailand-bangkok-phuket-paradise",
    category: "international",
    title: "Best of Thailand: Phuket Island & Bangkok City",
    destination: "Phuket & Bangkok, Thailand",
    duration: "6 Days / 5 Nights",
    featured: true,
    priceDisplay: "Request a Quote",
    coverImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "Experience Thailand's quintessential double attraction: sun-kissed Andaman island beaches and Phi Phi speedboat excursion in Phuket, combined with dazzling temples and modern shopping in Bangkok.",
    hotelInfo: {
      phuket: "4-Star Resort near Patong Beach or Karon Beach (3 Nights)",
      bangkok: "4-Star Hotel in Sukhumvit / Pratunam central district (2 Nights)"
    },
    inclusions: [
      "Thailand Tourist Visa / VoA documentation assistance",
      "3 Nights hotel stay in Phuket with breakfast",
      "2 Nights hotel stay in Bangkok with breakfast",
      "Full day Phi Phi Island tour by speedboat with buffet lunch & snorkeling gear",
      "Phuket City & Big Buddha viewpoint orientation tour",
      "Bangkok Temple City Tour (Wat Traimit Golden Buddha & Wat Pho)",
      "Chao Phraya luxury dinner cruise with live entertainment",
      "All airport and sightseeing transfers in private AC vehicles"
    ],
    exclusions: [
      "International airfare and domestic Phuket-Bangkok flights",
      "National Park entry fees (payable directly at islands)",
      "Personal water sports (parasailing, jet ski)",
      "Meals not explicitly mentioned in the inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Phuket — Tropical Island Welcome",
        description: "Arrive at Phuket International Airport (HKT). Warm meet and greet by our team and transfer to your beachfront resort. Evening at leisure to explore Bangla Road or relax at Patong Beach."
      },
      {
        day: 2,
        title: "Phi Phi Islands & Maya Bay by Speedboat",
        description: "Full-day excursion by speedboat across the Andaman Sea. Visit Maya Bay (famed by The Beach movie), Viking Cave, Monkey Beach, and turquoise waters of Pileh Lagoon. Enjoy snorkeling among tropical marine life and a beachfront buffet lunch."
      },
      {
        day: 3,
        title: "Phuket Viewpoints & Big Buddha Tour",
        description: "Visit the iconic 45-meter marble Big Buddha perched atop Nakkerd Hill with panoramic 360-degree island views. Continue to Wat Chalong temple and historic Old Phuket Town with Sino-Portuguese architecture."
      },
      {
        day: 4,
        title: "Phuket to Bangkok — Chao Phraya Dinner Cruise",
        description: "Transfer to Phuket airport and fly to Bangkok. Check in to your central Bangkok hotel. In the evening, board a luxury dinner cruise on the Chao Phraya River, admiring illuminated views of Wat Arun and the Grand Palace."
      },
      {
        day: 5,
        title: "Bangkok Temples & Shopping Extravaganza",
        description: "Morning guided tour of Wat Traimit (Golden Buddha) and Wat Benchamabophit (Marble Temple). Spend the afternoon shopping at ICONSIAM, Platinum Fashion Mall, or CentralWorld."
      },
      {
        day: 6,
        title: "Bangkok Departure",
        description: "Free morning for last-minute shopping. Private transfer to Suvarnabhumi or Don Mueang Airport for your onward flight."
      }
    ]
  },
  {
    id: "kashmir-paradise-on-earth",
    slug: "kashmir-paradise-on-earth",
    category: "domestic",
    title: "Heaven on Earth: Srinagar, Gulmarg & Pahalgam",
    destination: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    featured: true,
    priceDisplay: "Request a Quote",
    coverImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "Immerse yourself in Kashmir's timeless valleys: staying in handcrafted Dal Lake houseboats, riding the Gulmarg Gondola over snow peaks, and strolling along the Lidder River in Pahalgam.",
    hotelInfo: {
      srinagar: "Super Deluxe Handcrafted Houseboat on Dal Lake (1 Night) + 4-Star Hotel (2 Nights)",
      pahalgam: "4-Star Riverview Resort along the Lidder River (1 Night)",
      gulmarg: "Premium Boutique Mountain Resort (1 Night)"
    },
    inclusions: [
      "5 Nights premium accommodation (Houseboat + Hotels)",
      "Daily breakfast and dinner (MAP meal plan)",
      "Complimentary 1-hour Shikara ride on Dal Lake visiting floating gardens",
      "Full day excursion to Gulmarg with Gondola Phase 1 booking guidance",
      "Full day excursion to Pahalgam with Betaab Valley and Aru Valley visits",
      "Srinagar Mughal Gardens tour (Nishat Bagh, Shalimar Bagh, Chashme Shahi)",
      "Dedicated private sanitized vehicle (Innova / Ertiga / Tempo) for entire tour"
    ],
    exclusions: [
      "Airfare to and from Srinagar",
      "Gondola cable car tickets Phase 2 (subject to weather/direct booking)",
      "Pony / horse riding, ATV or snow sledging activities",
      "Union vehicle charges in Pahalgam (Aru/Chandanwari) as per local regulation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Srinagar — Dal Lake Houseboat Experience",
        description: "Arrive at Srinagar Sheikh ul-Alam Airport. Warm Kashmiri welcome and transfer to a luxury handcrafted houseboat on Dal Lake. Enjoy a serene sunset Shikara ride across the lotus gardens and floating flower markets."
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg — Meadow of Flowers",
        description: "Drive through scenic pine-fringed routes to Gulmarg (2,730m). Witness snow-clad Himalayan ranges. Experience the famous Gulmarg Gondola (one of the world's highest cable cars). Check into your mountain resort."
      },
      {
        day: 3,
        title: "Gulmarg to Pahalgam — Valley of Shepherds",
        description: "Descend towards Pahalgam via Pampore saffron fields and Awantipora ruins. Drive along the roaring Lidder River. Enjoy the evening riverside breeze and Kashmiri Kahwa tea."
      },
      {
        day: 4,
        title: "Pahalgam Valley Exploration (Betaab & Aru Valley)",
        description: "Explore the breathtaking meadows of Betaab Valley (named after the Bollywood classic) and picturesque Aru Valley surrounded by pine forests. Later afternoon return drive to Srinagar."
      },
      {
        day: 5,
        title: "Srinagar Mughal Gardens & Shankaracharya Temple",
        description: "Visit historic Mughal pleasure gardens built by Emperor Jahangir: Shalimar Bagh, Nishat Bagh, and Cheshma Shahi. Visit the ancient hilltop Shankaracharya Temple for panoramic views of Srinagar city."
      },
      {
        day: 6,
        title: "Departure from Srinagar",
        description: "Enjoy breakfast overlooking the snow peaks. Transfer to Srinagar airport for your return flight with unforgettable memories of Kashmir."
      }
    ]
  },
  {
    id: "vibrant-goa-beach-getaway",
    slug: "vibrant-goa-beach-getaway",
    category: "domestic",
    title: "Sunkissed Goa: Beaches, Heritage & Sunset Cruise",
    destination: "Goa, India",
    duration: "4 Days / 3 Nights",
    featured: true,
    priceDisplay: "Request a Quote",
    coverImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "Relax on golden sands, experience Portuguese colonial heritage in Old Goa, sample delicious coastal seafood shacks, and cruise the Mandovi River at sunset.",
    hotelInfo: {
      goa: "4-Star Beachside Resort with swimming pool in North Goa (Calangute / Candolim)"
    },
    inclusions: [
      "3 Nights resort stay with swimming pool access",
      "Daily breakfast at the resort",
      "North Goa beach tour (Calangute, Baga, Anjuna, Aguada Fort)",
      "South Goa heritage tour (Basilica of Bom Jesus, Se Cathedral, Miramar Beach)",
      "Evening 1-hour Mandovi River sunset cruise with Goan folk dance performances",
      "Airport / Railway station pickup and drop by AC vehicle"
    ],
    exclusions: [
      "Flight or train tickets to Goa",
      "Water sports charges at beaches",
      "Personal expenses, drinks, and lunch/dinner"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa & Beachside Relaxation",
        description: "Arrive at Dabolim (GOI) or Manohar Mopa (GOX) airport. Transfer to your beachside resort. Spend the afternoon lounging by the pool or enjoying sunset cocktails by the beach."
      },
      {
        day: 2,
        title: "North Goa Sightseeing & Vibrant Shacks",
        description: "Visit historic 17th-century Fort Aguada and its lighthouse. Explore lively Calangute and Baga beaches, followed by panoramic cliffside views at Anjuna and Chapora Fort."
      },
      {
        day: 3,
        title: "Old Goa Heritage & Mandovi Sunset Cruise",
        description: "Discover UNESCO World Heritage churches in Old Goa: Basilica of Bom Jesus and Se Cathedral. Explore the vibrant Latin Quarter of Fontainhas in Panaji. Evening sunset cruise on Mandovi River with Goan folk music."
      },
      {
        day: 4,
        title: "Goa Departure",
        description: "Breakfast at the resort. Time for souvenir shopping of cashews and spices before your private transfer to the airport."
      }
    ]
  },
  {
    id: "international-group-tour-dubai-explorer",
    slug: "international-group-tour-dubai-explorer",
    category: "group-tours",
    title: "Dubai Grand Explorer: Desert Safari, Marina & Burj Khalifa",
    destination: "Dubai & Abu Dhabi, UAE",
    duration: "5 Days / 4 Nights",
    featured: true,
    priceDisplay: "Request a Quote",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop"
    ],
    overview: "Our bestselling small-group tour featuring Dubai's grandest icons: ascending Burj Khalifa 124th floor, thrilling 4x4 desert dune bashing with barbecue dinner, Dubai Marina yacht cruise, and Sheikh Zayed Grand Mosque in Abu Dhabi.",
    hotelInfo: {
      dubai: "4-Star Deluxe Hotel in Downtown / Al Barsha with metro connectivity (4 Nights)"
    },
    inclusions: [
      "UAE Tourist Visa with COVID travel medical insurance",
      "4 Nights accommodation with daily buffet breakfast",
      "Burj Khalifa 124th/125th floor non-prime admission tickets",
      "Dubai Mall & Dubai Fountain evening show",
      "Thrilling 4x4 Desert Safari with dune bashing, camel ride, Tanoura show & BBQ dinner",
      "Dubai Marina 5-Star Luxury Dhow Cruise with international buffet dinner",
      "Half-day Dubai city tour with photo stops at Burj Al Arab & Dubai Frame",
      "Full day guided Abu Dhabi city tour with Sheikh Zayed Grand Mosque visit",
      "Round-trip airport transfers in luxury group coach"
    ],
    exclusions: [
      "International round-trip flights",
      "Tourism Dirham fee payable directly at hotel check-in",
      "Personal expenses and optional activities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Dubai — Marina Dhow Cruise Welcome",
        description: "Arrive at Dubai International Airport (DXB). Group coach transfer to hotel. In the evening, board a traditional wooden dhow cruise along illuminated Dubai Marina skyscrapers with dinner."
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa At The Top",
        description: "Morning city tour covering Dubai Creek, Gold Souk, Burj Al Arab photo stop, and Atlantis The Palm. Afternoon visit to Dubai Mall and ascend to the 124th floor of Burj Khalifa for breathtaking panoramas."
      },
      {
        day: 3,
        title: "Desert Safari Extravaganza with BBQ Dinner",
        description: "Morning at leisure. In the afternoon, pick-up in 4x4 Land Cruisers for thrilling red dune bashing in the Lahbab desert. Enjoy camel riding, sandboarding, falcon photography, and a lavish BBQ dinner with live belly dance and Tanoura shows under the stars."
      },
      {
        day: 4,
        title: "Abu Dhabi Full Day Capital Tour",
        description: "Full day excursion to the UAE capital. Visit the breathtaking Sheikh Zayed Grand Mosque, drive along the Corniche, view Emirates Palace and Qasr Al Watan, and photo stop at Ferrari World Abu Dhabi."
      },
      {
        day: 5,
        title: "Dubai Departure",
        description: "Breakfast at hotel. Free time for shopping at Deira Gold Souk or Mall of the Emirates before group transfer to Dubai International Airport."
      }
    ]
  }
];
