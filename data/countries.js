export const countries = [
  {
    id: "thailand",
    name: "Thailand",
    slug: "thailand",
    region: "Southeast Asia",
    flag: "🇹🇭",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    overview: "Thailand is one of the world's most sought-after destinations, renowned for tropical beaches, ornate temples, ancient ruins, and world-famous cuisine.",
    highlight: "Popular Tourist & Visa on Arrival Destination",
    popular: true,
    visas: [
      {
        id: "tourist-e-visa",
        title: "Tourist E-Visa (Single Entry)",
        type: "Tourist",
        validity: "90 Days from issuance",
        stayDuration: "Up to 60 Days",
        processingTime: "5 - 7 Working Days",
        entryType: "Single Entry",
        description: "Ideal for travelers visiting Thailand for leisure, holiday, sightseeing, or visiting friends.",
        requirements: [
          "Original Passport valid for at least 6 months",
          "Recent passport-size photograph (white background, 35x45mm)",
          "Confirmed return flight itinerary / dummy ticket",
          "Confirmed hotel reservation voucher",
          "Last 3 months bank statements with adequate balance"
        ]
      },
      {
        id: "visa-on-arrival-assistance",
        title: "Visa on Arrival / Fast Track Assistance",
        type: "Tourist / VoA",
        validity: "On Arrival",
        stayDuration: "15 to 30 Days (subject to prevailing nationality exemption/rules)",
        processingTime: "Instant / Pre-verified documentation",
        entryType: "Single Entry",
        description: "Assistance with pre-filling immigration cards, boarding clearance, and documentation readiness for arrival.",
        requirements: [
          "Passport valid for minimum 30 days beyond stay",
          "Confirmed return flight ticket within 15 or 30 days",
          "Proof of accommodation in Thailand",
          "Proof of sufficient funds (10,000 THB per person / 20,000 THB per family equivalent)"
        ]
      },
      {
        id: "business-non-b",
        title: "Business Visa (Non-Immigrant B)",
        type: "Business",
        validity: "90 Days",
        stayDuration: "Up to 90 Days",
        processingTime: "7 - 10 Working Days",
        entryType: "Single / Multiple",
        description: "Designed for business meetings, conferences, investments, or commercial negotiations.",
        requirements: [
          "Original passport with minimum 6 months validity",
          "Formal invitation letter from registered Thai corporate host",
          "Company registration copy and DBD documents from host",
          "Covering letter on Indian/applicant employer letterhead",
          "6 months corporate or personal bank statements"
        ]
      }
    ],
    generalRequirements: [
      "Passport with minimum 6 months validity from intended departure date",
      "Two clear color photographs with white background",
      "Confirmed round-trip flight booking or verifiable travel itinerary",
      "Proof of accommodation throughout stay in Thailand",
      "Financial proof (recent 3 to 6 months bank statement)"
    ],
    importantNotes: "Visa policies and visa-free travel regimes may change subject to royal Thai governmental regulations. Always verify current visa exemptions for your passport."
  },
  {
    id: "uae",
    name: "Dubai / UAE",
    slug: "uae",
    region: "Middle East",
    flag: "🇦🇪",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
    overview: "United Arab Emirates features world-class shopping, modern skyscrapers, desert safaris, and luxury hospitality in Dubai and Abu Dhabi.",
    highlight: "Fast Electronic Visa Processing (24 - 48 Hours)",
    popular: true,
    visas: [
      {
        id: "uae-30-days-tourist",
        title: "30 Days Tourist E-Visa",
        type: "Tourist",
        validity: "60 Days from issuance date",
        stayDuration: "30 Days from entry",
        processingTime: "24 - 48 Hours (Express available)",
        entryType: "Single Entry",
        description: "Standard tourist visa for family vacations, city exploration, and visiting relatives.",
        requirements: [
          "Color scan of passport first and last page (min 6 months validity)",
          "Passport-size photo with white background",
          "Confirmed return airline ticket or flight itinerary",
          "Hotel booking confirmation or host Emirates ID/residence details"
        ]
      },
      {
        id: "uae-60-days-tourist",
        title: "60 Days Tourist E-Visa",
        type: "Tourist",
        validity: "60 Days from issuance",
        stayDuration: "60 Days from entry",
        processingTime: "2 - 3 Working Days",
        entryType: "Single Entry",
        description: "Extended tourist stay visa for long leisure breaks, job searching, or extended family visits.",
        requirements: [
          "Clear color copy of passport bio pages",
          "Passport photo with white background",
          "Return ticket reservation",
          "Proof of residence or hotel stay"
        ]
      },
      {
        id: "uae-multiple-entry-30",
        title: "30 Days Multiple Entry E-Visa",
        type: "Business / Tourist",
        validity: "60 Days from issuance",
        stayDuration: "30 Days total",
        processingTime: "2 - 4 Working Days",
        entryType: "Multiple Entry",
        description: "Ideal for travelers making multiple trips between UAE and neighboring GCC or Asian countries.",
        requirements: [
          "Passport scan with 6 months validity",
          "White background digital photo",
          "Travel itinerary demonstrating multiple entry need",
          "Financial proof or company invitation"
        ]
      }
    ],
    generalRequirements: [
      "Color scan of passport front and back pages (valid for at least 6 months)",
      "Digital passport photograph with white background",
      "Confirmed round-trip ticket or itinerary",
      "Valid OK to Board (OTB) confirmation on selected budget airlines"
    ],
    importantNotes: "Indian nationals holding valid US Tourist/Green Card, UK or EU residency may be eligible for UAE Visa on Arrival at Dubai airports."
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    region: "Middle East",
    flag: "🇸🇦",
    heroImage: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop",
    overview: "Kingdom of Saudi Arabia offers historic Umrah pilgrimages in Makkah & Madinah, as well as emerging leisure tourism in Riyadh, AlUla, and Jeddah.",
    highlight: "Umrah, Tourist E-Visa & Business Visit Assistance",
    popular: true,
    visas: [
      {
        id: "saudi-umrah-visa",
        title: "Umrah E-Visa",
        type: "Pilgrimage / Religious",
        validity: "90 Days from issuance",
        stayDuration: "Up to 90 Days",
        processingTime: "24 - 48 Hours",
        entryType: "Multiple Entry",
        description: "Official electronic Umrah visa enabling pilgrimage to Makkah and Madinah, valid for visiting any city in Saudi Arabia.",
        requirements: [
          "Passport valid for at least 6 months",
          "Recent color photograph with white background",
          "Confirmed flight itinerary (Jeddah/Madinah recommended)",
          "Approved hotel reservation in Makkah and Madinah",
          "Valid travel health insurance (integrated with issuance)"
        ]
      },
      {
        id: "saudi-tourist-visa",
        title: "Tourist E-Visa (1 Year Multiple Entry)",
        type: "Tourist",
        validity: "1 Year",
        stayDuration: "90 Days per visit",
        processingTime: "24 - 72 Hours",
        entryType: "Multiple Entry",
        description: "Enables international leisure tourism, exploration of heritage sites, attending events, and performing Umrah.",
        requirements: [
          "Passport with 6 months validity",
          "Digital passport photograph",
          "Return travel booking or dummy ticket",
          "Proof of stay (hotel voucher)",
          "Eligibility verification (eligible passports or qualifying US/UK/Schengen visa)"
        ]
      },
      {
        id: "saudi-commercial-business",
        title: "Commercial Business Visit Visa",
        type: "Business",
        validity: "6 Months to 1 Year",
        stayDuration: "30 to 90 Days per visit",
        processingTime: "3 - 5 Working Days",
        entryType: "Single / Multiple",
        description: "For corporate representatives attending meetings, signing agreements, or exploring trade relations.",
        requirements: [
          "Saudi Ministry of Foreign Affairs (MOFA) invitation letter",
          "Original passport with 6 months validity",
          "Company covering letter legalized by Chamber of Commerce",
          "Company registration certificate"
        ]
      }
    ],
    generalRequirements: [
      "Original passport with at least 6 months validity and 2 blank pages",
      "Recent passport-size photo with white background",
      "Mandatory COVID/travel medical insurance (included in official fee)",
      "Confirmed round-trip ticket or itinerary"
    ],
    importantNotes: "Umrah pilgrims during Hajj season must adhere strictly to dedicated Hajj visa requirements. Umrah visas do not permit employment."
  },
  {
    id: "vietnam",
    name: "Vietnam",
    slug: "vietnam",
    region: "Southeast Asia",
    flag: "🇻🇳",
    heroImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    overview: "Vietnam captivates travelers with breath-taking Halong Bay limestone karsts, lively streets of Hanoi and Ho Chi Minh City, and lush Mekong Delta.",
    highlight: "90 Days E-Visa (Single & Multiple Entry)",
    popular: true,
    visas: [
      {
        id: "vietnam-30-single",
        title: "30 Days Single Entry E-Visa",
        type: "Tourist",
        validity: "30 Days",
        stayDuration: "30 Days",
        processingTime: "3 - 5 Working Days (Urgent 24h available)",
        entryType: "Single Entry",
        description: "Official electronic visa issued directly through the Vietnam Immigration Department.",
        requirements: [
          "Clear scan of passport bio page (min 6 months validity)",
          "Passport portrait photo (4x6cm, without glasses, white background)",
          "Proposed entry and exit international checkpoints",
          "Travel dates and planned accommodation"
        ]
      },
      {
        id: "vietnam-90-multiple",
        title: "90 Days Multiple Entry E-Visa",
        type: "Tourist / Business",
        validity: "90 Days",
        stayDuration: "90 Days",
        processingTime: "4 - 6 Working Days",
        entryType: "Multiple Entry",
        description: "Allows unlimited entries into Vietnam within a 90-day period for tourism or business exploration.",
        requirements: [
          "Clear passport bio page scan",
          "High-resolution digital photo",
          "Entry/exit checkpoint designations",
          "Verifiable return flight itinerary"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months beyond intended departure date",
      "Digital passport-size portrait (4x6 cm)",
      "Confirmed return or onward ticket",
      "Designated port of entry cannot be changed once visa is issued"
    ],
    importantNotes: "E-visa is accepted at 33 international entry ports including airports, seaports, and land border crossings."
  },
  {
    id: "singapore",
    name: "Singapore",
    slug: "singapore",
    region: "Southeast Asia",
    flag: "🇸🇬",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?q=80&w=800&auto=format&fit=crop",
    overview: "A dazzling global hub celebrated for Marina Bay Sands, Gardens by the Bay, culinary diversity, and world-class theme parks.",
    highlight: "Fast Submission Through Authorized Visa Agents",
    popular: true,
    visas: [
      {
        id: "singapore-tourist-visa",
        title: "30 Days Tourist E-Visa",
        type: "Tourist",
        validity: "Up to 2 Years (at ICA discretion)",
        stayDuration: "Up to 30 Days per visit",
        processingTime: "3 - 5 Working Days",
        entryType: "Multiple Entry",
        description: "Paperless electronic visa for tourism, family visits, and short leisure holidays.",
        requirements: [
          "Original passport with min 6 months validity",
          "Form 14A duly signed by the applicant",
          "Two recent matte-finish photos (35x45mm, 80% face coverage)",
          "Personal cover letter explaining visit purpose",
          "Last 3 months bank statements showing adequate funds"
        ]
      },
      {
        id: "singapore-business-visa",
        title: "Business E-Visa",
        type: "Business",
        validity: "Up to 2 Years",
        stayDuration: "Up to 30 Days",
        processingTime: "3 - 5 Working Days",
        entryType: "Multiple Entry",
        description: "For corporate executives attending business conferences, vendor meetings, and client discussions.",
        requirements: [
          "Passport valid for min 6 months",
          "Official Letter of Introduction (Form V39A) from Singapore registered firm",
          "Covering letter on Indian company letterhead",
          "3 months bank statements"
        ]
      }
    ],
    generalRequirements: [
      "Passport with min 6 months validity and 2 blank pages",
      "Mandatory Singapore Arrival Card (SGAC) submitted within 3 days prior to arrival",
      "Confirmed return or onward flight itinerary",
      "Hotel accommodation proof"
    ],
    importantNotes: "The electronic visa is sent as a PDF printout. Each entry stay duration is stamped by ICA immigration at the checkpoint."
  },
  {
    id: "malaysia",
    name: "Malaysia",
    slug: "malaysia",
    region: "Southeast Asia",
    flag: "🇲🇾",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=800&auto=format&fit=crop",
    overview: "Diverse cultural tapestry, futuristic Petronas Towers in Kuala Lumpur, pristine beaches in Langkawi, and historic tea plantations in Cameron Highlands.",
    highlight: "Visa-Free / MDAC Digital Card Entry Assistance",
    popular: true,
    visas: [
      {
        id: "malaysia-mdac-arrival",
        title: "MDAC Digital Arrival Registration",
        type: "Tourist Entry Card",
        validity: "Valid for entry date",
        stayDuration: "Up to 30 Days",
        processingTime: "Within 24 Hours",
        entryType: "Single / Multiple",
        description: "Assistance with mandatory Malaysia Digital Arrival Card (MDAC) pre-registration for visa-exempt/eligible travelers.",
        requirements: [
          "Passport bio page with at least 6 months validity",
          "Confirmed return flight itinerary",
          "Hotel booking confirmation",
          "Travel health / travel info declaration"
        ]
      },
      {
        id: "malaysia-e-visa-tourist",
        title: "30 Days E-Visa (Single / Multiple Entry)",
        type: "Tourist",
        validity: "3 Months",
        stayDuration: "Up to 30 Days",
        processingTime: "2 - 3 Working Days",
        entryType: "Single / Multiple",
        description: "For nationalities requiring an eVisa stamp prior to departure.",
        requirements: [
          "Passport bio data page scan",
          "Recent studio photograph (35x50mm white background)",
          "Confirmed return flight tickets",
          "Hotel accommodation voucher"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months from entry",
      "Return or onward flight ticket",
      "Confirmed accommodation reservation",
      "Sufficient funds for expenses during stay"
    ],
    importantNotes: "All foreign travelers must complete the Malaysia Digital Arrival Card (MDAC) online within three days prior to arrival in Malaysia."
  },
  {
    id: "indonesia",
    name: "Indonesia (Bali)",
    slug: "indonesia",
    region: "Southeast Asia",
    flag: "🇮🇩",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
    overview: "Famous for the mystical island of Bali, volcanic landscapes, ancient Borobudur temple, and world-renowned surf and yoga sanctuaries.",
    highlight: "Electronic Visa on Arrival (e-VoA B1)",
    popular: true,
    visas: [
      {
        id: "indonesia-evoa-30",
        title: "30 Days Electronic Visa on Arrival (e-VoA B1)",
        type: "Tourist",
        validity: "90 Days from issuance",
        stayDuration: "30 Days (Extendable once for 30 days)",
        processingTime: "24 - 48 Hours",
        entryType: "Single Entry",
        description: "Skip the long airport queues upon landing in Bali or Jakarta with a pre-approved electronic VoA.",
        requirements: [
          "Passport scan valid for minimum 6 months from arrival date",
          "Passport size digital photograph",
          "Return ticket out of Indonesia",
          "Email address and payment method"
        ]
      },
      {
        id: "indonesia-tourist-60",
        title: "60 Days Visit Visa (211A / C1)",
        type: "Tourist / Extended",
        validity: "90 Days",
        stayDuration: "60 Days (Extendable)",
        processingTime: "5 - 7 Working Days",
        entryType: "Single Entry",
        description: "For long stay digital nomads, extended wellness retreats, and multi-island exploratory trips.",
        requirements: [
          "Passport scan valid for at least 6 months",
          "Proof of sufficient funds (min $2,000 equivalent bank balance)",
          "Return flight ticket",
          "Color photograph"
        ]
      }
    ],
    generalRequirements: [
      "Passport with minimum 6 months validity remaining",
      "Confirmed return or onward ticket to another country",
      "Mandatory Bali Tourist Tax voucher (IDR 150,000) for Bali entries",
      "Electronic Customs Declaration (e-CD) filled within 3 days prior"
    ],
    importantNotes: "The 30-day e-VoA can be extended online for an additional 30 days without visiting the local immigration office in person."
  },
  {
    id: "turkey",
    name: "Turkey (Türkiye)",
    slug: "turkey",
    region: "Europe & Middle East",
    flag: "🇹🇷",
    heroImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800&auto=format&fit=crop",
    overview: "Where East meets West: Istanbul's magnificent Bosphorus and mosques, Cappadocia hot air balloons, and Mediterranean turquoise coastlines.",
    highlight: "E-Visa for Valid US/UK/Schengen Visa Holders & Sticker Visas",
    popular: true,
    visas: [
      {
        id: "turkey-e-visa",
        title: "30 Days Electronic Visa (E-Visa)",
        type: "Tourist / E-Visa",
        validity: "180 Days",
        stayDuration: "Up to 30 Days",
        processingTime: "Instant / 24 Hours",
        entryType: "Single Entry",
        description: "Available for nationalities holding a valid supporting visa or residence permit from Schengen, USA, UK, or Ireland.",
        requirements: [
          "Passport valid for at least 60 days beyond stay duration",
          "Valid supporting visa/residence permit from USA, UK, Ireland, or Schengen member country",
          "Confirmed return flight booking (Turkish Airlines or Pegasus preferred by regulation)",
          "Hotel booking confirmation"
        ]
      },
      {
        id: "turkey-sticker-tourist",
        title: "Tourist Sticker Visa (Gateway Management)",
        type: "Tourist",
        validity: "Up to 6 Months",
        stayDuration: "Up to 30 or 90 Days",
        processingTime: "10 - 15 Working Days",
        entryType: "Single / Multiple",
        description: "Regular consular sticker visa processed through authorized visa submission centers.",
        requirements: [
          "Original passport with 6 months validity",
          "Two biometric photographs (5x5cm white background)",
          "Detailed day-wise travel itinerary",
          "Confirmed flight itinerary & hotel bookings",
          "Last 3 months certified bank statements",
          "Income Tax returns (ITR-V) for last 2 years",
          "Employment letter / leave sanction"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months",
      "Confirmed round-trip ticket or verifiable flight itinerary",
      "Hotel reservation proof",
      "Travel insurance covering min 30,000 EUR medical expenses"
    ],
    importantNotes: "E-visa is only valid if your supporting US/UK/Schengen visa is physical or e-residence that is currently active upon arrival."
  },
  {
    id: "azerbaijan",
    name: "Azerbaijan (Baku)",
    slug: "azerbaijan",
    region: "Caucasus / Europe",
    flag: "🇦🇿",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    overview: "The Land of Fire: ultra-modern Flame Towers in Baku, charming Old City UNESCO lanes, Gobustan mud volcanoes, and lush Caucasus mountains.",
    highlight: "ASAN Visa Online (Standard 3 Days / Urgent 3 Hours)",
    popular: true,
    visas: [
      {
        id: "azerbaijan-asan-standard",
        title: "ASAN Electronic Visa (Standard)",
        type: "Tourist",
        validity: "90 Days from issuance",
        stayDuration: "Up to 30 Days",
        processingTime: "3 Working Days",
        entryType: "Single Entry",
        description: "Official government ASAN electronic visa issued online without visiting an embassy.",
        requirements: [
          "Clear scan of passport bio page (min 3 months validity beyond stay)",
          "Intended address of accommodation in Baku/Azerbaijan",
          "Flight itinerary details"
        ]
      },
      {
        id: "azerbaijan-asan-urgent",
        title: "ASAN Urgent E-Visa",
        type: "Tourist / Urgent",
        validity: "90 Days",
        stayDuration: "Up to 30 Days",
        processingTime: "3 to 5 Hours",
        entryType: "Single Entry",
        description: "Fast-track processing for last-minute travelers or sudden business meetings.",
        requirements: [
          "Clear passport bio page scan",
          "Travel dates and hotel address"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 3 months beyond intended departure from Azerbaijan",
      "Valid hotel booking / accommodation details",
      "Registration with State Migration Service if staying longer than 15 calendar days"
    ],
    importantNotes: "If your stay exceeds 15 days, your hotel or host must register your presence with the State Migration Service within 15 days to avoid heavy fines."
  },
  {
    id: "schengen",
    name: "Schengen Countries",
    slug: "schengen",
    region: "Europe",
    flag: "🇪🇺",
    heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1471623817296-aa07ae5c9f47?q=80&w=800&auto=format&fit=crop",
    overview: "One visa opens access to 29 European countries: France, Germany, Italy, Switzerland, Spain, Austria, Netherlands, Greece, and more.",
    highlight: "Expert Appointment Booking & Dossier Preparation",
    popular: true,
    visas: [
      {
        id: "schengen-tourist-type-c",
        title: "Short Stay Tourist Visa (Category C)",
        type: "Tourist",
        validity: "Up to 90 Days or multi-year",
        stayDuration: "Max 90 Days within 180 Days",
        processingTime: "15 - 20 Calendar Days",
        entryType: "Single / Multiple Entry",
        description: "Comprehensive assistance with VFS / TLS / BLS appointment scheduling, document verification, and cover letter crafting.",
        requirements: [
          "Passport valid for min 3 months beyond return date with 2 blank pages",
          "Two biometric photographs compliant with ICAO standard (35x45mm)",
          "Detailed day-to-day travel itinerary with intra-Europe transport bookings",
          "Confirmed round-trip flight dummy ticket / reservations",
          "Proof of accommodation for every night in Schengen territory",
          "Last 3 to 6 months bank statements with bank seal and signature",
          "Income Tax Returns (ITR-V) for last 2 or 3 years",
          "Leave sanction letter and salary slips for employed individuals",
          "Travel health insurance with minimum EUR 30,000 coverage including repatriation"
        ]
      },
      {
        id: "schengen-business-visa",
        title: "Business Schengen Visa",
        type: "Business",
        validity: "Up to 90 Days or multi-year",
        stayDuration: "90 Days within 180 Days",
        processingTime: "10 - 15 Working Days",
        entryType: "Single / Multiple Entry",
        description: "For attending trade fairs, client meetings, conferences, or signing bilateral commercial agreements.",
        requirements: [
          "Official formal invitation letter from European counterpart company",
          "Company covering letter on Indian company letterhead",
          "Certificate of incorporation & GST of Indian employer",
          "Travel medical insurance EUR 30,000",
          "Flight itinerary & hotel reservations"
        ]
      }
    ],
    generalRequirements: [
      "Application must be lodged at the consulate of the country of main destination (longest stay) or first port of entry",
      "Mandatory biometric fingerprinting at the designated visa application center",
      "Proof of financial ties and intention to return to home country"
    ],
    importantNotes: "Processing times vary significantly during peak summer and holiday seasons. We recommend applying 1 to 2 months in advance of intended travel."
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    slug: "united-kingdom",
    region: "Europe",
    flag: "🇬🇧",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=800&auto=format&fit=crop",
    overview: "Explore historic London, Oxford universities, Scottish Highlands, Wales coastlines, world-class theaters, and premier sports events.",
    highlight: "Standard Visitor Visas (6 Months, 2, 5 & 10 Years)",
    popular: true,
    visas: [
      {
        id: "uk-standard-visitor-6m",
        title: "Standard Visitor Visa (6 Months)",
        type: "Tourist / Family",
        validity: "6 Months",
        stayDuration: "Up to 180 Days",
        processingTime: "15 Working Days (Priority 5 days available)",
        entryType: "Multiple Entry",
        description: "For tourism, holidays, visiting family/friends, and attending short business conferences.",
        requirements: [
          "Current valid passport with at least 1 blank page",
          "Previous travel history and old passports",
          "Detailed financial evidence: 6 months bank statements demonstrating source of funds",
          "Employment letter, leave approval and last 6 months pay slips",
          "Income Tax Returns (ITR-V) for 3 years",
          "Detailed itinerary and accommodation reservations"
        ]
      },
      {
        id: "uk-long-term-visitor",
        title: "Long-Term Visitor Visa (2, 5 or 10 Years)",
        type: "Tourist / Business",
        validity: "2, 5 or 10 Years",
        stayDuration: "Max 6 Months per visit",
        processingTime: "15 Working Days",
        entryType: "Multiple Entry",
        description: "Ideal for frequent visitors with established travel history to the UK.",
        requirements: [
          "Passport valid for duration of intended visa",
          "Proof of ongoing need to visit the UK regularly",
          "Solid financial documentation and assets",
          "Clean immigration compliance history"
        ]
      }
    ],
    generalRequirements: [
      "Online UKVI application and fee payment",
      "Biometrics appointment at VFS Global",
      "Clear documentation of financial self-sufficiency without resorting to public funds"
    ],
    importantNotes: "The UK is NOT part of the Schengen zone. A separate UK visa is mandatory even if you hold a valid Schengen visa."
  },
  {
    id: "united-states",
    name: "United States (USA)",
    slug: "united-states",
    region: "North America",
    flag: "🇺🇸",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop",
    overview: "From the skyline of New York to Grand Canyon, California beaches, Las Vegas entertainment, and Florida theme parks.",
    highlight: "B1/B2 Visitor Visa Interview Preparation & Appointment Assistance",
    popular: true,
    visas: [
      {
        id: "usa-b1-b2-visitor",
        title: "B1 / B2 Non-Immigrant Tourist & Business Visa",
        type: "Tourist & Business",
        validity: "Up to 10 Years",
        stayDuration: "Up to 6 Months per entry (determined at CBP port)",
        processingTime: "Appointment slot dependent + 3-5 days passport return",
        entryType: "Multiple Entry",
        description: "Assistance with DS-160 filing, CGI Federal profile management, appointment monitoring, and mock interview guidance.",
        requirements: [
          "Passport valid for at least 6 months beyond intended stay",
          "Completed Form DS-160 confirmation barcode page",
          "MRV fee receipt payment confirmation",
          "One 2x2 inch (51x51mm) color photo conforming to US state requirements",
          "Evidence of strong economic, familial, and social ties to home country",
          "Financial proof (bank statements, investments, tax returns)"
        ]
      }
    ],
    generalRequirements: [
      "Accurate DS-160 electronic submission",
      "Two-step appointment (OFC Biometrics + Consular Interview)",
      "Proof of genuine non-immigrant intent (INA 214(b) compliance)"
    ],
    importantNotes: "We provide comprehensive dossier preparation, appointment guidance, and mock interview training. Visa issuance decisions rest solely with the consular officer."
  },
  {
    id: "japan",
    name: "Japan",
    slug: "japan",
    region: "East Asia",
    flag: "🇯🇵",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
    overview: "Ancient Shinto shrines, cherry blossoms, Mount Fuji, bullet trains, and the neon-lit culinary haven of Tokyo and Kyoto.",
    highlight: "E-Visa for Tourism & Consular Sticker Submissions",
    popular: false,
    visas: [
      {
        id: "japan-tourist-evisa",
        title: "Short-Term Tourist E-Visa",
        type: "Tourist",
        validity: "3 Months",
        stayDuration: "Up to 15 or 30 Days",
        processingTime: "5 - 7 Working Days",
        entryType: "Single Entry",
        description: "Official Japan eVisa system for individual tourists traveling for leisure.",
        requirements: [
          "Passport valid for min 6 months",
          "Recent digital photograph (2x2 inch, white background)",
          "Schedule of stay (day-by-day travel plan in Japan)",
          "Flight reservations & hotel booking vouchers",
          "Latest Income Tax Return and 6 months bank statement"
        ]
      }
    ],
    generalRequirements: [
      "Passport with at least 2 blank pages",
      "Detailed daily itinerary form",
      "Confirmed flight dummy tickets and hotel vouchers",
      "Financial self-sufficiency proof"
    ],
    importantNotes: "Travelers must display the official eVisa issuance notice on a mobile device with internet connectivity upon airport check-in (PDF prints not accepted at boarding)."
  },
  {
    id: "south-korea",
    name: "South Korea",
    slug: "south-korea",
    region: "East Asia",
    flag: "🇰🇷",
    heroImage: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=800&auto=format&fit=crop",
    overview: "K-Culture hub featuring historic Gyeongbokgung palace, bustling Myeongdong night markets, Jeju Island beaches, and high-tech Seoul.",
    highlight: "C-3-9 Tourist Visa & K-ETA Assistance",
    popular: false,
    visas: [
      {
        id: "south-korea-tourist",
        title: "C-3-9 Tourist Visa (Single Entry)",
        type: "Tourist",
        validity: "3 Months",
        stayDuration: "Up to 90 Days",
        processingTime: "7 - 10 Working Days",
        entryType: "Single Entry",
        description: "For holiday sightseeing, visiting relatives, and cultural exploration in South Korea.",
        requirements: [
          "Original passport with at least 6 months validity",
          "Visa application form with 35x45mm photo",
          "6 months bank statements with bank seal",
          "Income Tax Returns for last 2 years",
          "Confirmed flight itinerary & hotel accommodation"
        ]
      }
    ],
    generalRequirements: [
      "Valid passport with 6 months validity",
      "Comprehensive bank statements showing stable balance",
      "Round trip flight reservation",
      "Hotel reservation proof"
    ],
    importantNotes: "Visa application center submission in India / regional centers."
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    slug: "sri-lanka",
    region: "South Asia",
    flag: "🇱🇰",
    heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    overview: "The Pearl of the Indian Ocean: Sigiriya rock fortress, tea hills of Nuwara Eliya, golden beaches of Bentota, and elephant wildlife safaris.",
    highlight: "ETA Electronic Travel Authorization (Fast 24h Approval)",
    popular: true,
    visas: [
      {
        id: "sri-lanka-eta-tourist",
        title: "30 Days Tourist ETA",
        type: "Tourist",
        validity: "180 Days",
        stayDuration: "30 Days (Double Entry)",
        processingTime: "Within 24 Hours",
        entryType: "Double Entry",
        description: "Official electronic travel authorization for holiday, relaxation, and visiting friends.",
        requirements: [
          "Clear passport bio page scan (min 6 months validity)",
          "Confirmed return flight booking",
          "Proof of hotel accommodation"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months from arrival date",
      "Confirmed return or onward ticket",
      "Sufficient funds during stay in Sri Lanka"
    ],
    importantNotes: "Check periodically for promotional fee waiver schemes announced for selected tourist markets."
  },
  {
    id: "maldives",
    name: "Maldives",
    slug: "maldives",
    region: "South Asia",
    flag: "🇲🇻",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop",
    overview: "Overwater private villas, crystalline turquoise lagoons, pristine coral reefs, and world-class luxury honeymoon resorts.",
    highlight: "Free 30-Day Tourist Visa on Arrival & IMUGA Portal Assistance",
    popular: true,
    visas: [
      {
        id: "maldives-voa-assistance",
        title: "Tourist Visa on Arrival & IMUGA Filing",
        type: "Tourist VoA",
        validity: "On Arrival",
        stayDuration: "Up to 30 Days",
        processingTime: "Same Day / Prior to flight",
        entryType: "Single Entry",
        description: "Complete pre-departure verification including IMUGA Traveler Declaration submission.",
        requirements: [
          "Passport valid for at least 1 month (6 months recommended)",
          "Confirmed return airline ticket",
          "Confirmed prepaid hotel reservation voucher at registered tourist facility",
          "Mandatory IMUGA declaration submitted within 96 hours prior to arrival",
          "Sufficient funds ($100 + $50/day or resort package)"
        ]
      }
    ],
    generalRequirements: [
      "Machine-readable passport valid for travel",
      "Prepaid booking at tourist resort, hotel, or guesthouse",
      "Completed IMUGA digital health declaration QR code"
    ],
    importantNotes: "Tourist visa is issued complimentary upon landing for all nationalities subject to meeting immigration prerequisites."
  },
  {
    id: "georgia",
    name: "Georgia",
    slug: "georgia",
    region: "Caucasus / Europe",
    flag: "🇬🇪",
    heroImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800&auto=format&fit=crop",
    overview: "Historic cobblestone capital Tbilisi, snow-capped Caucasus peaks of Kazbegi, ancient winemaking traditions, and friendly hospitality.",
    highlight: "E-Visa & Visa-Free Entry for GCC / Schengen / US Visa Holders",
    popular: false,
    visas: [
      {
        id: "georgia-tourist-evisa",
        title: "Short-Term Electronic Visa",
        type: "Tourist",
        validity: "120 Days",
        stayDuration: "Up to 30 Days",
        processingTime: "5 Working Days",
        entryType: "Multiple Entry",
        description: "Official electronic visa issued through the Ministry of Foreign Affairs of Georgia.",
        requirements: [
          "Passport scan valid for min 3 months beyond visa validity",
          "Digital passport photograph",
          "Return flight reservation",
          "Hotel booking confirmation",
          "Travel medical insurance",
          "Bank statement demonstrating financial sufficiency"
        ]
      }
    ],
    generalRequirements: [
      "Passport with min 3 months validity",
      "Travel medical insurance covering entire stay",
      "Confirmed accommodation and flight itinerary"
    ],
    importantNotes: "Holders of valid visas or residence permits from GCC countries, USA, UK, Schengen countries can enter Georgia visa-free for up to 90 days in any 180-day period."
  },
  {
    id: "armenia",
    name: "Armenia",
    slug: "armenia",
    region: "Caucasus",
    flag: "🇦🇲",
    heroImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop",
    overview: "Rich Christian heritage, ancient monasteries set against Mount Ararat, Lake Sevan, and the lively pink-tuff streets of Yerevan.",
    highlight: "Fast E-Visa Processing (3 Working Days)",
    popular: false,
    visas: [
      {
        id: "armenia-evisa-21",
        title: "21 Days Short-Term E-Visa",
        type: "Tourist",
        validity: "90 Days",
        stayDuration: "Up to 21 Days",
        processingTime: "3 Working Days",
        entryType: "Single Entry",
        description: "Ideal for tourists traveling for sightseeing and exploring historical monasteries.",
        requirements: [
          "Passport scan valid for min 6 months",
          "Digital portrait photo",
          "Hotel reservation and flight itinerary"
        ]
      }
    ],
    generalRequirements: [
      "Valid passport with 6 months validity",
      "Confirmed round trip flight ticket or itinerary",
      "Proof of accommodation in Armenia"
    ],
    importantNotes: "Holders of certain residence cards or Schengen/US visas can obtain visa on arrival at Yerevan airport."
  },
  {
    id: "oman",
    name: "Oman",
    slug: "oman",
    region: "Middle East",
    flag: "🇴🇲",
    heroImage: "https://images.unsplash.com/photo-1578895101407-293675fca92f?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1578895101407-293675fca92f?q=80&w=800&auto=format&fit=crop",
    overview: "Majestic Sultan Qaboos Grand Mosque, dramatic desert dunes of Wahiba Sands, emerald wadis, and ancient forts of Nizwa.",
    highlight: "Royal Oman Police E-Visa (26B & 26M)",
    popular: false,
    visas: [
      {
        id: "oman-tourist-30",
        title: "30 Days Tourist E-Visa (Type 26B)",
        type: "Tourist",
        validity: "30 Days from issuance",
        stayDuration: "30 Days",
        processingTime: "24 - 48 Hours",
        entryType: "Single Entry",
        description: "Official ROP electronic visa for leisure and vacation in the Sultanate of Oman.",
        requirements: [
          "Clear passport bio page scan with 6 months validity",
          "Color passport photo on white background",
          "Confirmed return airline ticket",
          "Hotel reservation proof"
        ]
      }
    ],
    generalRequirements: [
      "Valid passport for at least 6 months",
      "Round trip flight itinerary",
      "Hotel reservation voucher",
      "Valid OK to Board (OTB) if traveling on selected airlines"
    ],
    importantNotes: "Residents of GCC countries can apply for GCC Resident tourist visa (29A) with minimal documentation."
  },
  {
    id: "qatar",
    name: "Qatar",
    slug: "qatar",
    region: "Middle East",
    flag: "🇶🇦",
    heroImage: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=800&auto=format&fit=crop",
    overview: "World-class architecture in Doha, Museum of Islamic Art, bustling Souq Waqif, luxury corniche, and Inland Sea desert safaris.",
    highlight: "Hayya Portal Tourist Entry Visa (A1)",
    popular: false,
    visas: [
      {
        id: "qatar-hayya-tourist",
        title: "Hayya Tourist Entry Visa (A1)",
        type: "Tourist",
        validity: "90 Days from issuance",
        stayDuration: "Up to 30 Days",
        processingTime: "24 - 72 Hours",
        entryType: "Single / Multiple",
        description: "Processed through the official Qatar Hayya portal for leisure tourism.",
        requirements: [
          "Passport copy with at least 3 months validity",
          "Recent color passport photograph",
          "Confirmed hotel booking via Discover Qatar or host registration",
          "Return flight ticket"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 3 months",
      "Discover Qatar hotel booking or approved host",
      "Return flight ticket"
    ],
    importantNotes: "Many nationalities are eligible for visa waiver on arrival for up to 30 days upon meeting hotel booking criteria."
  },
  {
    id: "bahrain",
    name: "Bahrain",
    slug: "bahrain",
    region: "Middle East",
    flag: "🇧🇭",
    heroImage: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=800&auto=format&fit=crop",
    overview: "Island kingdom famous for Bahrain International Circuit (F1), pearling trails, historic Qal'at al-Bahrain fort, and modern Manama.",
    highlight: "Fast Electronic Visa (2 Weeks / 1 Month)",
    popular: false,
    visas: [
      {
        id: "bahrain-evisa-14",
        title: "14 Days Tourist E-Visa",
        type: "Tourist",
        validity: "30 Days from issuance",
        stayDuration: "14 Days",
        processingTime: "3 - 5 Working Days",
        entryType: "Single Entry",
        description: "Official NPRA electronic visa for short tourism and business visits.",
        requirements: [
          "Passport copy valid for min 6 months",
          "Return flight ticket",
          "Hotel booking or residence proof",
          "Last 3 months bank statement"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months",
      "Confirmed round trip ticket",
      "Proof of funds"
    ],
    importantNotes: "Ensure passport is machine-readable without physical damage."
  },
  {
    id: "kuwait",
    name: "Kuwait",
    slug: "kuwait",
    region: "Middle East",
    flag: "🇰🇼",
    heroImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    overview: "Iconic Kuwait Towers, bustling Souq Al-Mubarakiya, Grand Mosque, and modern coastal malls.",
    highlight: "Family Visit & Business Visa Processing Assistance",
    popular: false,
    visas: [
      {
        id: "kuwait-visit-visa",
        title: "Commercial & Family Visit Visa Assistance",
        type: "Visit / Business",
        validity: "90 Days",
        stayDuration: "30 Days",
        processingTime: "5 - 7 Working Days",
        entryType: "Single Entry",
        description: "Guidance on sponsorship formalities, MOI clearance, and visa stamping.",
        requirements: [
          "Sponsor invitation / Chamber of Commerce letter",
          "Passport copy valid for min 6 months",
          "Salary certificate / commercial register of sponsor"
        ]
      }
    ],
    generalRequirements: [
      "Original passport with 6 months validity",
      "Approved visa issuance document from Kuwait MOI",
      "Medical checkup (GAMCA) if required for long term stay"
    ],
    importantNotes: "Visit visa rules in Kuwait are subject to Ministry of Interior sponsorship regulations."
  },
  {
    id: "egypt",
    name: "Egypt",
    slug: "egypt",
    region: "North Africa / Middle East",
    flag: "🇪🇬",
    heroImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800&auto=format&fit=crop",
    overview: "Great Pyramids of Giza, Sphinx, Nile River cruises, Valley of the Kings in Luxor, and Red Sea coral reefs in Sharm El Sheikh.",
    highlight: "E-Visa & Consular Sticker Visa Assistance",
    popular: false,
    visas: [
      {
        id: "egypt-tourist-30",
        title: "30 Days Single Entry Tourist E-Visa",
        type: "Tourist",
        validity: "90 Days",
        stayDuration: "30 Days",
        processingTime: "5 - 7 Working Days",
        entryType: "Single Entry",
        description: "Electronic visa for leisure travel, heritage tourism, and Red Sea holidays.",
        requirements: [
          "Passport scan valid for min 6 months beyond travel dates",
          "Passport photo",
          "Flight reservations and hotel bookings",
          "Tour itinerary"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months",
      "Confirmed round trip ticket",
      "Confirmed hotel reservation or invitation"
    ],
    importantNotes: "Certain nationalities can obtain visa on arrival at Cairo, Hurghada or Sharm el Sheikh if traveling in organized tourist groups."
  },
  {
    id: "australia",
    name: "Australia",
    slug: "australia",
    region: "Oceania",
    flag: "🇦🇺",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
    overview: "Sydney Opera House, Great Barrier Reef, Melbourne coffee culture, outback Uluru, and exotic Australian wildlife.",
    highlight: "Visitor Visa (Subclass 600) Specialist Assistance",
    popular: true,
    visas: [
      {
        id: "australia-subclass-600",
        title: "Visitor Visa (Subclass 600) Tourist Stream",
        type: "Tourist",
        validity: "3, 6, or 12 Months",
        stayDuration: "Up to 3 Months per visit",
        processingTime: "15 - 25 Calendar Days",
        entryType: "Multiple Entry",
        description: "Paperless digital visa linked directly to your passport via Department of Home Affairs ImmiAccount.",
        requirements: [
          "Clear color scan of passport bio pages and all stamped pages",
          "National identity card scan",
          "Detailed travel plan and itinerary in Australia",
          "6 months bank statements with certified bank seal",
          "Income Tax Returns (ITR-V) for last 3 years",
          "Employment verification letter and last 3 months pay slips",
          "Property or asset documents proving strong ties to home country"
        ]
      },
      {
        id: "australia-subclass-600-business",
        title: "Business Visitor Stream (Subclass 600)",
        type: "Business",
        validity: "Up to 12 Months",
        stayDuration: "Up to 3 Months per visit",
        processingTime: "10 - 20 Calendar Days",
        entryType: "Multiple Entry",
        description: "For attending trade conferences, exploring business opportunities, and commercial negotiations.",
        requirements: [
          "Invitation letter from host organisation in Australia",
          "Cover letter from employer outlining business agenda",
          "Company registration details and financial proof"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for intended travel duration",
      "Meeting Genuine Temporary Entrant (GTE) criteria",
      "Comprehensive proof of personal funds to cover entire stay"
    ],
    importantNotes: "Biometrics collection at VFS Australia center may be requested following initial online application lodgement."
  },
  {
    id: "canada",
    name: "Canada",
    slug: "canada",
    region: "North America",
    flag: "🇨🇦",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop",
    overview: "Spectacular Canadian Rockies, Niagara Falls, cosmopolitan Toronto and Vancouver, and charming French-speaking Quebec.",
    highlight: "Temporary Resident Visa (TRV) & Visitor Visa Services",
    popular: false,
    visas: [
      {
        id: "canada-visitor-trv",
        title: "Visitor Visa (TRV / Tourist)",
        type: "Tourist",
        validity: "Up to 10 Years (or passport validity)",
        stayDuration: "Up to 6 Months per entry",
        processingTime: "30 - 45 Calendar Days",
        entryType: "Multiple Entry",
        description: "Assistance with IRCC portal filing, family information forms, financial ties proof, and VFS biometrics scheduling.",
        requirements: [
          "Original passport with at least 6 months validity",
          "Color digital photo (35x45mm white background)",
          "Form IMM 5257 and IMM 5645 completed accurately",
          "6 months bank statements with bank seal",
          "Employment letter, payslips and ITR for 3 years",
          "Property valuation / investment portfolio documents",
          "Detailed cover letter explaining trip purpose"
        ]
      }
    ],
    generalRequirements: [
      "Valid passport with at least one blank page",
      "Biometrics appointment at VFS Canada",
      "Clear police record and admissibility checks"
    ],
    importantNotes: "Visitor visas are generally issued up to the remaining validity of the applicant's current passport minus one month."
  },
  {
    id: "france",
    name: "France",
    slug: "france",
    region: "Europe (Schengen)",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    overview: "The Eiffel Tower and Louvre Museum in Paris, world-renowned wine regions of Bordeaux and Champagne, and French Riviera glamour.",
    highlight: "Schengen Short Stay Visa via France-Visas",
    popular: true,
    visas: [
      {
        id: "france-tourist-schengen",
        title: "Tourist Short Stay (Schengen C)",
        type: "Tourist",
        validity: "Up to 90 Days (or multi-year)",
        stayDuration: "Up to 90 Days in 180 Days",
        processingTime: "10 - 15 Working Days",
        entryType: "Single / Multiple Entry",
        description: "Official Schengen visa covering travel across France and all 29 Schengen member states.",
        requirements: [
          "France-Visas online summary receipt",
          "Passport valid for at least 3 months beyond intended departure",
          "Two biometric photographs compliant with ISO/IEC standards",
          "Confirmed return airline itinerary",
          "Hotel booking confirmations for entire duration",
          "Travel health insurance EUR 30,000",
          "3 months bank statements & 2 years ITR"
        ]
      }
    ],
    generalRequirements: [
      "Application registered on France-Visas portal",
      "Appointment at VFS Global",
      "Proof of funds (approx EUR 65-120 per day depending on hotel reservation)"
    ],
    importantNotes: "Apply at least 3 weeks prior to departure to avoid peak-season delays."
  },
  {
    id: "germany",
    name: "Germany",
    slug: "germany",
    region: "Europe (Schengen)",
    flag: "🇩🇪",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
    overview: "Berlin Wall and Reichstag, fairy-tale Neuschwanstein Castle in Bavaria, Black Forest, Oktoberfest, and cutting-edge engineering.",
    highlight: "Schengen Tourist & Business Trade Fair Visas",
    popular: false,
    visas: [
      {
        id: "germany-schengen-visit",
        title: "Schengen Short Stay Tourist Visa",
        type: "Tourist",
        validity: "Up to 90 Days",
        stayDuration: "90 Days in 180 Days",
        processingTime: "12 - 15 Working Days",
        entryType: "Single / Multiple",
        description: "For holiday sightseeing, visiting friends, or attending cultural and sports events.",
        requirements: [
          "VIDEX online form barcode printout",
          "Passport with 3 months validity beyond return",
          "Biometric photos (35x45mm)",
          "Travel insurance EUR 30,000",
          "Confirmed flight itinerary & hotel booking",
          "Financial proof (salary slips, bank statements, ITR)"
        ]
      }
    ],
    generalRequirements: [
      "Completed VIDEX form",
      "Biometrics appointment at VFS Germany",
      "Financial self-sufficiency documentation"
    ],
    importantNotes: "Germany strictly checks travel medical insurance policy wording. Ensure medical repatriation coverage is clearly noted."
  },
  {
    id: "italy",
    name: "Italy",
    slug: "italy",
    region: "Europe (Schengen)",
    flag: "🇮🇹",
    heroImage: "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
    overview: "Rome's Colosseum, romantic canals of Venice, Florence Renaissance masterpieces, Milan fashion, and Amalfi Coast vistas.",
    highlight: "Schengen Tourism & VFS Italy Assistance",
    popular: false,
    visas: [
      {
        id: "italy-tourist-schengen",
        title: "Tourist Short Stay (Type C)",
        type: "Tourist",
        validity: "Up to 90 Days",
        stayDuration: "90 Days in 180 Days",
        processingTime: "15 Calendar Days",
        entryType: "Single / Multiple",
        description: "Assistance with dossier assembly, cover letter crafting, and VFS submission appointment.",
        requirements: [
          "Completed Italian visa application form",
          "Original passport with 3 months validity beyond stay",
          "Two recent photos (35x40mm)",
          "Confirmed flight reservations (dummy ticket)",
          "Hotel bookings with contact phone numbers",
          "Travel insurance covering EUR 30,000",
          "3 months bank statements certified by bank"
        ]
      }
    ],
    generalRequirements: [
      "Appointment at VFS Italy center",
      "Complete set of original documents and photocopies",
      "Proof of accommodation for every night in Italy/Schengen"
    ],
    importantNotes: "For applicants with sponsor invitations from Italian residents, formal 'Lettera d'invito' must be included."
  },
  {
    id: "switzerland",
    name: "Switzerland",
    slug: "switzerland",
    region: "Europe (Schengen)",
    flag: "🇨🇭",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    overview: "Alpine peaks of Jungfraujoch and Matterhorn, serene lakes of Lucerne and Geneva, scenic panoramic trains, and Swiss chocolates.",
    highlight: "Schengen Visa via Swiss Consular Representation",
    popular: false,
    visas: [
      {
        id: "switzerland-schengen-tourist",
        title: "Swiss Schengen Tourist Visa",
        type: "Tourist",
        validity: "Up to 90 Days",
        stayDuration: "90 Days in 180 Days",
        processingTime: "10 - 15 Working Days",
        entryType: "Single / Multiple",
        description: "Explore the Swiss Alps and Europe with a Swiss-issued Schengen visa.",
        requirements: [
          "Swiss visa application form signed by applicant",
          "Passport valid for at least 3 months beyond return",
          "Two biometric photographs",
          "Confirmed flight booking or flight itinerary",
          "Hotel vouchers or Swiss Travel Pass itinerary",
          "Travel insurance EUR 30,000",
          "3 months bank statements & salary proof"
        ]
      }
    ],
    generalRequirements: [
      "Submission via VFS Switzerland",
      "Biometrics collection",
      "Sufficient funds (minimum 100 CHF per day of stay)"
    ],
    importantNotes: "Switzerland requires strict day-wise travel itinerary matching accommodation bookings."
  },
  {
    id: "spain",
    name: "Spain",
    slug: "spain",
    region: "Europe (Schengen)",
    flag: "🇪🇸",
    heroImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?q=80&w=800&auto=format&fit=crop",
    overview: "Barcelona's Sagrada Familia, Madrid Royal Palace, Seville flamenco dancing, Mediterranean beaches, and world-class tapas.",
    highlight: "Schengen Visa via BLS International Spain",
    popular: false,
    visas: [
      {
        id: "spain-tourist-schengen",
        title: "Tourist Visa (Schengen Category C)",
        type: "Tourist",
        validity: "Up to 90 Days",
        stayDuration: "90 Days in 180 Days",
        processingTime: "12 - 15 Working Days",
        entryType: "Single / Multiple",
        description: "Complete dossier preparation and BLS Spain center appointment assistance.",
        requirements: [
          "BLS Spain application form",
          "Passport valid for at least 3 months after departure",
          "Two recent photographs with white background",
          "Round-trip flight reservations",
          "Hotel booking confirmations",
          "Medical insurance EUR 30,000",
          "6 months bank statements with bank seal"
        ]
      }
    ],
    generalRequirements: [
      "Appointment at BLS Spain visa center",
      "Proof of funds (approx EUR 113 per day of stay)",
      "Employment leave certificate"
    ],
    importantNotes: "Book BLS Spain appointments well in advance during peak travel seasons."
  },
  {
    id: "morocco",
    name: "Morocco",
    slug: "morocco",
    region: "North Africa",
    flag: "🇲🇦",
    heroImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800&auto=format&fit=crop",
    overview: "Majestic imperial cities of Marrakech and Fes, blue city of Chefchaouen, Sahara Desert dunes, and vibrant souks.",
    highlight: "AEVM Electronic Travel Authorization / E-Visa",
    popular: false,
    visas: [
      {
        id: "morocco-evisa-tourist",
        title: "Single Entry Tourist E-Visa",
        type: "Tourist",
        validity: "180 Days",
        stayDuration: "Up to 30 Days",
        processingTime: "3 - 5 Working Days",
        entryType: "Single Entry",
        description: "Official Access Maroc electronic visa issued online.",
        requirements: [
          "Passport scan valid for min 6 months",
          "Passport photograph",
          "Flight reservations and hotel voucher"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months",
      "Confirmed return flight itinerary",
      "Proof of hotel reservation"
    ],
    importantNotes: "Eligible for e-visa if holding valid visa from Schengen, USA, UK, Canada, Australia or Japan."
  },
  {
    id: "south-africa",
    name: "South Africa",
    slug: "south-africa",
    region: "Africa",
    flag: "🇿🇦",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop",
    overview: "Table Mountain in Cape Town, Big Five safaris in Kruger National Park, scenic Garden Route, and rich cultural heritage.",
    highlight: "Tourist E-Visa & VFS Submission Assistance",
    popular: false,
    visas: [
      {
        id: "south-africa-tourist",
        title: "Visitor Visa (Tourist Stream)",
        type: "Tourist",
        validity: "Up to 90 Days",
        stayDuration: "Up to 90 Days",
        processingTime: "10 - 15 Working Days",
        entryType: "Single / Multiple",
        description: "For holiday safaris, beach exploration, and visiting friends and relatives.",
        requirements: [
          "Original passport valid for min 30 days beyond stay with 2 blank pages",
          "Two color photographs (35x45mm)",
          "Detailed day-to-day itinerary",
          "Confirmed return flight itinerary and accommodation vouchers",
          "Last 3 months certified bank statements",
          "Vaccination certificate (Yellow Fever if traveling from endemic zone)"
        ]
      }
    ],
    generalRequirements: [
      "Passport with min 30 days validity after return",
      "Proof of accommodation for every night in South Africa",
      "Financial self-sufficiency documentation"
    ],
    importantNotes: "E-visa is increasingly available for select nationalities on the South African DHA portal."
  }
];
