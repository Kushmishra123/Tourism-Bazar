/**
 * Exact 29-Country Visa & Clearance Services Directory
 * Horizon Tourism & Visas Co.
 */

export const countries = [
  {
    id: "azerbaijan",
    name: "Azerbaijan",
    slug: "azerbaijan",
    region: "Central Asia",
    flag: "🇦🇿",
    heroImage: "https://images.unsplash.com/photo-1579606032824-74d32a4e4d56?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1579606032824-74d32a4e4d56?q=80&w=800&auto=format&fit=crop",
    overview: "Explore Baku's flame towers, Caspian coastline, ancient mud volcanoes, and vibrant Silk Road heritage with fast ASAN E-Visa processing.",
    highlight: "Fast Electronic Visa Processing (ASAN Visa)",
    popular: true,
    visas: [
      {
        id: "az-tourist-single-30d",
        title: "Tourist Visa – Single, 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "2 - 3 Working Days (Standard) / 3 Hours (Urgent)",
        description: "Standard electronic tourist visa for holiday, leisure, and sightseeing across Azerbaijan.",
        requirements: [
          "Color scan of Passport bio-page (minimum 6 months validity)",
          "Recent passport-size photograph with white background",
          "Confirmed return flight itinerary or travel proof",
          "Confirmed hotel accommodation reservation"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months beyond intended stay",
      "Valid email address and WhatsApp contact for electronic dossier delivery",
      "Confirmed round-trip flight booking and accommodation vouchers"
    ],
    importantNotes: "Electronic ASAN visas are sent directly via PDF. Print in color and carry along with your valid passport for immigration entry."
  },
  {
    id: "bahrain",
    name: "Bahrain",
    slug: "bahrain",
    region: "Middle East",
    flag: "🇧🇭",
    heroImage: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop",
    overview: "Gateway to the Persian Gulf offering pearl diving history, modern financial architecture, and desert landmarks.",
    highlight: "E-Visa & Multiple Entry Options Available",
    popular: false,
    visas: [
      {
        id: "bh-tourist-14d",
        title: "Tourist – 14 Days / 3 Months Validity",
        category: "visa",
        type: "Tourist",
        stayDuration: "14 Days",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Short-stay tourist visa suitable for quick getaways, business meetings, and stopovers in Manama.",
        requirements: [
          "Passport copy (first and last page) with minimum 6 months validity",
          "Passport size photo on white background",
          "Return flight ticket booking",
          "Hotel reservation in Bahrain"
        ]
      },
      {
        id: "bh-tourist-30d",
        title: "Tourist – 30 Days / 3 Months Validity",
        category: "visa",
        type: "Tourist",
        stayDuration: "30 Days",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Standard 30-day tourist entry visa for leisure travel, family visits, or commercial exploration.",
        requirements: [
          "Passport bio-data page scan (min 6 months validity)",
          "White background photograph",
          "Return flight ticket",
          "Proof of accommodation in Bahrain",
          "Bank statement (last 3 months with stamped verification)"
        ]
      },
      {
        id: "bh-multiple-90d-1y",
        title: "Multiple Entry – 90 Days / 1 Year Validity",
        category: "visa",
        type: "Multiple Entry",
        stayDuration: "90 Days per visit",
        validity: "1 Year Validity",
        entryType: "Multiple Entry",
        processingTime: "5 - 7 Working Days",
        description: "Long-term multiple entry visa allowing repeated visits up to 90 days per entry over a 1-year period.",
        requirements: [
          "Valid passport with at least 1 year remaining validity",
          "Recent color photograph",
          "3 months bank statements showing sufficient funds",
          "Round-trip flight booking reservation and hotel voucher"
        ]
      }
    ],
    generalRequirements: [
      "Passport with minimum 6 months validity from travel date",
      "Confirmed round-trip flight itinerary",
      "Confirmed hotel voucher or sponsor Emirates/Bahrain CPR details"
    ],
    importantNotes: "Bahrain E-Visas require active entry within the specified validity period. Extension options can be applied for at the Bahrain NPRA desk."
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    slug: "bangladesh",
    region: "South Asia",
    flag: "🇧🇩",
    heroImage: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?q=80&w=800&auto=format&fit=crop",
    overview: "Explore the bustling streets of Dhaka, the scenic Sundarbans mangrove forest, and the endless sandy shores of Cox's Bazar.",
    highlight: "Complete Visa Assistance for Single & Multiple Entry",
    popular: false,
    visas: [
      {
        id: "bd-tourist-30d-single",
        title: "Tourist – 30 Days Single Entry",
        category: "visa",
        type: "Tourist",
        stayDuration: "30 Days",
        validity: "As granted by High Commission",
        entryType: "Single Entry",
        processingTime: "5 - 7 Working Days",
        description: "Single entry tourist visa for holiday, personal tourism, and social visits.",
        requirements: ["Original Passport", "2 Passport Photos", "Air Ticket Itinerary", "Hotel Confirmation"]
      },
      {
        id: "bd-tourist-90d-single",
        title: "Tourist – 90 Days Single Entry",
        category: "visa",
        type: "Tourist",
        stayDuration: "90 Days",
        validity: "As granted by High Commission",
        entryType: "Single Entry",
        processingTime: "7 - 10 Working Days",
        description: "Extended single entry tourist visa for longer personal travel and family stays.",
        requirements: ["Original Passport", "Photos", "Financial Documents", "Flight Reservation"]
      },
      {
        id: "bd-tourist-3m-multiple",
        title: "Tourist – 3 Months Multiple Entry",
        category: "visa",
        type: "Tourist",
        stayDuration: "As per consular grant",
        validity: "3 Months Validity",
        entryType: "Multiple Entry",
        processingTime: "7 - 10 Working Days",
        description: "3-Month multiple entry visa suitable for frequent travelers and cross-border transit.",
        requirements: ["Original Passport", "Photos", "Bank Statement", "Travel Proof"]
      },
      {
        id: "bd-tourist-6m-multiple",
        title: "Tourist – 6 Months Multiple Entry",
        category: "visa",
        type: "Tourist",
        stayDuration: "As per consular grant",
        validity: "6 Months Validity",
        entryType: "Multiple Entry",
        processingTime: "7 - 10 Working Days",
        description: "6-Month multiple entry tourist visa for travelers with recurring personal or commercial engagements.",
        requirements: ["Original Passport", "Photos", "Proof of Frequent Travel", "Financial Proof"]
      },
      {
        id: "bd-tourist-1y-multiple",
        title: "Tourist – 1 Year Multiple Entry",
        category: "visa",
        type: "Tourist",
        stayDuration: "As per consular grant",
        validity: "1 Year Validity",
        entryType: "Multiple Entry",
        processingTime: "10 - 12 Working Days",
        description: "Long-term 1-year multiple entry tourist visa for frequent cross-border travelers.",
        requirements: ["Original Passport with 1.5+ years validity", "Extensive travel record", "Financial proof"]
      },
      {
        id: "bd-business-6m-multiple",
        title: "Business – 6 Months Multiple Entry",
        category: "visa",
        type: "Business",
        stayDuration: "As per consular grant",
        validity: "6 Months Validity",
        entryType: "Multiple Entry",
        processingTime: "7 - 10 Working Days",
        description: "Business visa for corporate representatives, trade delegations, and commercial negotiations.",
        requirements: ["Host invitation letter from Bangladesh entity", "Indian company covering letter", "Trade license/registration copy", "Bank statements"]
      },
      {
        id: "bd-business-1y-multiple",
        title: "Business – 1 Year Multiple Entry",
        category: "visa",
        type: "Business",
        stayDuration: "As per consular grant",
        validity: "1 Year Validity",
        entryType: "Multiple Entry",
        processingTime: "10 - 12 Working Days",
        description: "Long-term annual multiple entry visa for corporate investors, procurement directors, and regular business visitors.",
        requirements: ["Formal Chamber of Commerce / BIDA invitation", "Company covering letter", "Corporate tax returns", "Bank statement"]
      }
    ],
    generalRequirements: [
      "Original Passport valid for minimum 6 months with at least 2 blank pages",
      "Two recent passport size color photographs (white background)",
      "Confirmed round-trip flight booking reservation",
      "Copy of National ID / Aadhaar card and utility bill"
    ],
    importantNotes: "Visa issuance and validity are at the sole discretion of the Bangladesh High Commission / Deputy High Commission."
  },
  {
    id: "cambodia",
    name: "Cambodia",
    slug: "cambodia",
    region: "Southeast Asia",
    flag: "🇰🇭",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    overview: "Home of the majestic Angkor Wat temple complex, colonial riverside towns, and tropical southern coastlines.",
    highlight: "Swift Electronic E-Visa (Type T)",
    popular: false,
    visas: [
      {
        id: "kh-tourist-evisa-30d-3m",
        title: "Tourist E-Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 Working Days",
        description: "Official Cambodian electronic visa (Type T) valid for tourism and leisure across all recognized air and land borders.",
        requirements: [
          "Color scan of Passport bio-page (minimum 6 months validity)",
          "Digital passport photograph (JPEG/PNG, white background)",
          "Return flight reservation itinerary"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months from entry date",
      "Valid payment method and digital photo scan",
      "Printed copies of E-Visa approval certificate to present at immigration"
    ],
    importantNotes: "E-Visa is accepted at major international airports (Phnom Penh, Siem Reap, Sihanoukville) and key overland border checkpoints."
  },
  {
    id: "egypt",
    name: "Egypt",
    slug: "egypt",
    region: "Middle East",
    flag: "🇪🇬",
    heroImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800&auto=format&fit=crop",
    overview: "Marvel at the Great Pyramids of Giza, cruise the legendary Nile River, and relax at the luxury resorts of Sharm El Sheikh.",
    highlight: "Online E-Visa & Multiple Entry Consultation",
    popular: true,
    visas: [
      {
        id: "eg-tourist-evisa-30d-3m",
        title: "Tourist E-Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "5 - 7 Working Days",
        description: "Standard single entry electronic tourist visa for holidaymakers and cultural explorers.",
        requirements: [
          "Passport copy with minimum 6 months validity",
          "Color photograph",
          "Flight itinerary / ticket booking",
          "Confirmed hotel booking or travel itinerary"
        ]
      },
      {
        id: "eg-multiple-entry",
        title: "Multiple Entry Visa",
        category: "visa",
        type: "Multiple Entry",
        stayDuration: "Up to 30 Days per entry",
        validity: "6 Months Validity",
        entryType: "Multiple Entry",
        processingTime: "7 - 10 Working Days",
        description: "Multiple entry visa for travelers planning repeated visits or combined Middle East & North Africa regional circuits.",
        requirements: [
          "Passport with at least 8 months validity",
          "Recent photographs",
          "Proof of travel plans across multiple entries",
          "Financial verification"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months beyond intended stay",
      "Confirmed round-trip flight booking or itinerary",
      "Hotel reservation voucher or host invitation letter"
    ],
    importantNotes: "Ensure all passport bio-data details match exactly with the submitted application to prevent boarding issues."
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    slug: "hong-kong",
    region: "East Asia",
    flag: "🇭🇰",
    heroImage: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=800&auto=format&fit=crop",
    overview: "A dazzling skyline, world-class culinary scene, Victoria Harbour cruises, and vibrant shopping districts.",
    highlight: "Instant PAR (Pre-Arrival Registration) Assistance",
    popular: true,
    visas: [
      {
        id: "hk-tourist-14d-1m",
        title: "Tourist Visa – 14 Days Stay / 1 Month Validity",
        category: "visa",
        type: "Tourist Visa",
        stayDuration: "14 Days Stay",
        validity: "1 Month Validity",
        entryType: "Single Entry",
        processingTime: "4 - 6 Weeks (Consular Submission)",
        description: "Full consular tourist visa for cases where PAR is not applicable or requires specialized clearance.",
        requirements: [
          "Passport bio-data copy",
          "Financial proof (bank statements)",
          "Travel itinerary and return flight ticket",
          "Leave sanction letter or company proof"
        ]
      },
      {
        id: "hk-par-service",
        title: "PAR – Pre-Arrival Registration Service",
        category: "service",
        type: "Pre-Arrival Registration Service",
        stayDuration: "14 Days per entry",
        validity: "6 Months Multiple Entry",
        entryType: "Pre-Arrival Registration",
        processingTime: "Same Day / Instant",
        description: "Mandatory Pre-Arrival Registration for Indian passport holders allowing visa-free entry for up to 14 days per visit.",
        requirements: [
          "Valid Indian passport bio-data details",
          "Clean immigration history",
          "WhatsApp submission for immediate generation"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months",
      "Printed PAR slip on standard A4 paper",
      "Confirmed return or onward flight itinerary"
    ],
    importantNotes: "PAR registration must be completed before boarding flights to Hong Kong. The generated slip must be kept throughout the journey."
  },
  {
    id: "laos",
    name: "Laos",
    slug: "laos",
    region: "Southeast Asia",
    flag: "🇱🇦",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop",
    overview: "Serene Buddhist temples of Luang Prabang, Kuang Si waterfalls, and tranquil Mekong River cruises.",
    highlight: "Official Electronic Travel E-Visa",
    popular: false,
    visas: [
      {
        id: "la-tourist-evisa-30d-2m",
        title: "Tourist E-Visa – 30 Days Stay / 2 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "2 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Official electronic travel approval allowing a 30-day stay for leisure, holiday, and temple tours in Laos.",
        requirements: [
          "Passport scan with minimum 6 months validity",
          "Digital photograph (white background)",
          "Confirmed flight itinerary or entry point details"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months upon arrival",
      "Printed E-Visa approval letter (Color copy recommended)"
    ],
    importantNotes: "E-Visa is accepted at Wattay International Airport (Vientiane), Luang Prabang Airport, and Pakse Airport."
  },
  {
    id: "malaysia",
    name: "Malaysia",
    slug: "malaysia",
    region: "Southeast Asia",
    flag: "🇲🇾",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop",
    overview: "Iconic Petronas Towers in Kuala Lumpur, rainforests of Borneo, and the historic culinary streets of Penang.",
    highlight: "E-Visa, DAC, VDR & Regional Clearance Desks",
    popular: true,
    visas: [
      {
        id: "my-tourist-evisa-30d-3m",
        title: "Tourist E-Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single / Multiple",
        processingTime: "2 - 4 Working Days",
        description: "Official Malaysian electronic tourist visa for family vacations, sightseeing, and leisure trips.",
        requirements: [
          "Passport scan (valid for minimum 6 months)",
          "Passport size photo on white background",
          "Confirmed return flight booking (verifiable PNR)",
          "Hotel reservation voucher"
        ]
      },
      {
        id: "my-south-visa-service",
        title: "Malaysia South – Visa Service",
        category: "service",
        type: "Visa Service",
        stayDuration: "As per consular clearance",
        validity: "As issued",
        entryType: "Service Assistance",
        processingTime: "3 - 5 Working Days",
        description: "Specialized visa processing for southern regional consular jurisdictions and cross-border Singapore-Johor commuters.",
        requirements: ["Passport copies", "Photographs", "Travel itinerary"]
      },
      {
        id: "my-north-visa-service",
        title: "Malaysia North – Visa Service",
        category: "service",
        type: "Visa Service",
        stayDuration: "As per consular clearance",
        validity: "As issued",
        entryType: "Service Assistance",
        processingTime: "3 - 5 Working Days",
        description: "Specialized visa processing for northern regional consular jurisdictions and overland crossings.",
        requirements: ["Passport copies", "Photographs", "Travel itinerary"]
      },
      {
        id: "my-dac-service",
        title: "Malaysia DAC – Service",
        category: "service",
        type: "Digital Arrival Card (DAC) Service",
        stayDuration: "Mandatory Arrival Clearance",
        validity: "Travel Specific",
        entryType: "Service Assistance",
        processingTime: "Same Day / Instant",
        description: "Malaysia Digital Arrival Card (MDAC) submission service required for entry clearance at all ports.",
        requirements: ["Passport details", "Flight and accommodation details"]
      },
      {
        id: "my-vdr-service",
        title: "Malaysia VDR – Service",
        category: "service",
        type: "Visa with Reference (VDR) Service",
        stayDuration: "Employment / Long-term entry",
        validity: "Subject to Immigration Approval",
        entryType: "Service Assistance",
        processingTime: "7 - 14 Working Days",
        description: "Visa with Reference (Visa Dengan Rujukan) clearance for work, professional visit passes, and dependants.",
        requirements: ["Approval letter from Immigration Department of Malaysia", "Original Passport", "Medical clearance"]
      }
    ],
    generalRequirements: [
      "Passport with minimum 6 months validity",
      "Confirmed return flight ticket and accommodation proof",
      "Digital Arrival Card (MDAC) pre-registration before departure"
    ],
    importantNotes: "Review current visa exemption guidelines for Indian citizens and complete MDAC within 3 days prior to arrival."
  },
  {
    id: "myanmar",
    name: "Myanmar",
    slug: "myanmar",
    region: "Southeast Asia",
    flag: "🇲🇲",
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
    overview: "Ancient stupas of Bagan, sacred Shwedagon Pagoda in Yangon, and peaceful stilt villages of Inle Lake.",
    highlight: "Official Electronic E-Visa Service",
    popular: false,
    visas: [
      {
        id: "mm-tourist-evisa-30d-3m",
        title: "Tourist E-Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Official electronic tourist visa for exploring Myanmar's cultural and archaeological treasures.",
        requirements: [
          "Passport copy with at least 6 months validity",
          "Color passport photo (white background)",
          "Confirmed return flight ticket",
          "Registered hotel booking confirmation"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months",
      "Approved E-Visa color printout",
      "Confirmed round-trip flight booking"
    ],
    importantNotes: "E-Visa is accepted at Yangon, Mandalay, and Nay Pyi Taw international airports."
  },
  {
    id: "morocco",
    name: "Morocco",
    slug: "morocco",
    region: "Africa",
    flag: "🇲🇦",
    heroImage: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop",
    overview: "Historic medinas of Marrakech and Fes, blue alleys of Chefchaouen, and Sahara Desert camel expeditions.",
    highlight: "Modern Electronic Visa (AEVM) Desk",
    popular: true,
    visas: [
      {
        id: "ma-tourist-evisa-30d-3m",
        title: "Tourist E-Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days (Standard) / 24 Hours (Express)",
        description: "Official Moroccan E-Visa (AEVM) for leisure, sightseeing, and cultural expeditions across the kingdom.",
        requirements: [
          "Passport scan valid for at least 6 months",
          "Digital passport photograph",
          "Confirmed round-trip flight itinerary",
          "Hotel booking voucher or riad confirmation"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months from entry date",
      "Color printout of E-Visa approval",
      "Return air ticket and sufficient financial proof"
    ],
    importantNotes: "Applicants holding valid US, UK, Schengen, Canada, or Australia visas may qualify for fast-track electronic authorization."
  },
  {
    id: "oman",
    name: "Oman",
    slug: "oman",
    region: "Middle East",
    flag: "🇴🇲",
    heroImage: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?q=80&w=800&auto=format&fit=crop",
    overview: "Grand Sultan Qaboos Mosque in Muscat, rugged wadis, coastal fjords of Musandam, and desert oases.",
    highlight: "Royal Oman Police (ROP) Electronic Visas",
    popular: true,
    visas: [
      {
        id: "om-tourist-kb-10d",
        title: "Tourist KB – 10 Days",
        category: "visa",
        type: "Tourist",
        stayDuration: "10 Days Stay",
        validity: "As specified on E-Visa",
        entryType: "Single Entry",
        processingTime: "2 - 3 Working Days",
        description: "Short-stay tourist visa (Category 26A / KB) ideal for quick city visits, diving trips, and weekend breaks.",
        requirements: [
          "Passport copy (min 6 months validity)",
          "Photograph on white background",
          "Confirmed return flight itinerary",
          "Hotel booking confirmation"
        ]
      },
      {
        id: "om-tourist-kb-30d",
        title: "Tourist KB – 30 Days",
        category: "visa",
        type: "Tourist",
        stayDuration: "30 Days Stay",
        validity: "3 Months from issuance",
        entryType: "Single Entry",
        processingTime: "2 - 3 Working Days",
        description: "Full one-month electronic tourist visa (Category 26B / KB) for comprehensive holidays and visiting friends.",
        requirements: [
          "Passport first and last page scan",
          "Recent color photo",
          "Confirmed return airline ticket",
          "Hotel reservation voucher"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months from arrival date",
      "Confirmed round-trip flight booking",
      "Printed E-Visa document"
    ],
    importantNotes: "GCC residents holding valid professional residency cards may qualify for specialized cross-border entry permits."
  },
  {
    id: "qatar",
    name: "Qatar",
    slug: "qatar",
    region: "Middle East",
    flag: "🇶🇦",
    heroImage: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop",
    overview: "Futuristic Doha Corniche, Souq Waqif spice markets, Museum of Islamic Art, and luxury island retreats.",
    highlight: "Hayya Platform & Specialized Clearance Services",
    popular: true,
    visas: [
      {
        id: "qa-tourist-visa-30d-3m",
        title: "Tourist Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "2 - 4 Working Days",
        description: "Standard electronic tourist visa (Hayya / Ministry) for holiday stays, shopping festivals, and cultural events.",
        requirements: [
          "Passport bio-page scan with minimum 6 months validity",
          "Passport size digital photograph",
          "Confirmed return flight ticket",
          "Discover Qatar confirmed hotel booking or registered host"
        ]
      },
      {
        id: "qa-ins-service",
        title: "Qatar INS – Service",
        category: "service",
        type: "Service Assistance",
        stayDuration: "Specific to Clearance",
        validity: "As authorized",
        entryType: "Service Assistance",
        processingTime: "3 - 5 Working Days",
        description: "Specialized immigration and inspection documentation service for Qatar travel and entry verification.",
        requirements: ["Passport copy", "Sponsor/Company details in Qatar", "Clearance application form"]
      },
      {
        id: "qa-id-service",
        title: "Qatar ID – Service",
        category: "service",
        type: "Service Assistance",
        stayDuration: "Specific to Clearance",
        validity: "As authorized",
        entryType: "Service Assistance",
        processingTime: "3 - 5 Working Days",
        description: "QID verification, residency document renewal coordination, and immigration status advisory.",
        requirements: ["Qatar ID / Passport details", "Sponsorship proof"]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months upon arrival",
      "Confirmed return flight itinerary",
      "Approved hotel booking or host registration through official portal"
    ],
    importantNotes: "Indian travelers may be eligible for visa on arrival subject to Discover Qatar mandatory hotel booking rules."
  },
  {
    id: "russia",
    name: "Russia",
    slug: "russia",
    region: "East Asia / Eurasia",
    flag: "🇷🇺",
    heroImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=800&auto=format&fit=crop",
    overview: "Iconic Red Square and Kremlin in Moscow, Hermitage Museum and canals in St. Petersburg, and vast Siberian landscapes.",
    highlight: "Electronic E-Visa & Consular Sticker Visas",
    popular: true,
    visas: [
      {
        id: "ru-tourist-evisa",
        title: "Tourist E-Visa",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "Up to 16 Days",
        validity: "60 Days from issuance",
        entryType: "Single Entry",
        processingTime: "4 - 6 Working Days",
        description: "Unified Electronic Visa (UEV) valid for tourism, business visits, and cultural exchanges across the Russian Federation.",
        requirements: [
          "Passport copy (at least 6 months validity)",
          "Digital photograph meeting strict consular specifications",
          "Travel insurance covering Russia"
        ]
      },
      {
        id: "ru-sticker-tourist-90d",
        title: "Sticker Tourist Visa – 90 Days",
        category: "visa",
        type: "Sticker Tourist Visa",
        stayDuration: "Up to 90 Days",
        validity: "As granted by Consulate",
        entryType: "Single / Double Entry",
        processingTime: "8 - 12 Working Days",
        description: "Traditional consular passport sticker visa with official tourist voucher / tourist confirmation (Poddverzhdeniye).",
        requirements: [
          "Original Passport with minimum 6 months validity",
          "Official Russian tourist voucher & confirmation letter",
          "2 physical passport photos",
          "Travel medical insurance policy"
        ]
      },
      {
        id: "ru-sticker-business-90d",
        title: "Sticker Business Visa – 90 Days",
        category: "visa",
        type: "Sticker Business Visa",
        stayDuration: "Up to 90 Days",
        validity: "90 Days Validity",
        entryType: "Single / Double Entry",
        processingTime: "10 - 15 Working Days",
        description: "Consular business visa for corporate meetings, commercial negotiations, and trade agreements.",
        requirements: [
          "Original Passport",
          "Official Ministry of Internal Affairs (MVD) / Telex business invitation",
          "Covering letter from Indian employer",
          "Corporate bank statements"
        ]
      },
      {
        id: "ru-sticker-multiple-6m",
        title: "Sticker Multiple Entry – 6 Months",
        category: "visa",
        type: "Sticker Multiple Entry",
        stayDuration: "Up to 90 Days per 180-day period",
        validity: "6 Months Validity",
        entryType: "Multiple Entry",
        processingTime: "12 - 18 Working Days",
        description: "Multi-entry commercial and trade visa for executive business travelers visiting Russia on ongoing projects.",
        requirements: [
          "Original Passport with at least 1.5 years validity",
          "Official MVD or Chamber of Commerce multiple invitation",
          "Previous Russian visa copies",
          "Comprehensive travel insurance"
        ]
      }
    ],
    generalRequirements: [
      "Original Passport valid for at least 6 months after visa expiry",
      "Valid travel medical insurance recognized in the Russian Federation",
      "Confirmed flight reservation and voucher support"
    ],
    importantNotes: "E-Visa processing allows entry through all designated air, sea, and rail border checkpoints across Russia."
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    slug: "sri-lanka",
    region: "South Asia",
    flag: "🇱🇰",
    heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
    overview: "Lush tea plantations in Nuwara Eliya, ancient rock fortress of Sigiriya, scenic train rides, and sandy beaches.",
    highlight: "Electronic Travel Authorization (ETA)",
    popular: true,
    visas: [
      {
        id: "lk-tourist-visa-30d-3m",
        title: "Tourist Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Double Entry",
        processingTime: "24 - 48 Hours",
        description: "Official tourist visa allowing double entry for leisure, beach holidays, and family vacations.",
        requirements: [
          "Passport copy with minimum 6 months validity",
          "Return flight ticket booking",
          "Confirmed hotel booking"
        ]
      },
      {
        id: "lk-eta-service",
        title: "ETA – Electronic Travel Authorisation",
        category: "service",
        type: "Electronic Travel Authorisation Service",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Electronic Authorization",
        processingTime: "Same Day / Instant",
        description: "Fast-track ETA pre-registration service for tourists and short-term business visitors.",
        requirements: ["Passport details", "Flight and travel dates"]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months from arrival date",
      "Confirmed round-trip flight ticket",
      "Proof of adequate funds for the duration of stay"
    ],
    importantNotes: "ETA approval confirmation should be printed and presented at airline check-in and Colombo immigration counters."
  },
  {
    id: "thailand",
    name: "Thailand",
    slug: "thailand",
    region: "Southeast Asia",
    flag: "🇹🇭",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    overview: "Tropical islands of Phuket and Koh Samui, bustling night markets of Bangkok, and cultural temples of Chiang Mai.",
    highlight: "E-Visa & ARVC Arrival Clearances",
    popular: true,
    visas: [
      {
        id: "th-tourist-evisa-10d-3m",
        title: "Tourist E-Visa – 10 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "10 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Fast-track electronic visa for short island getaways, business shopping, and city tours.",
        requirements: [
          "Color scan of passport bio-page (min 6 months validity)",
          "Recent passport photo (white background)",
          "Confirmed return flight itinerary / void ticket",
          "Hotel booking confirmation"
        ]
      },
      {
        id: "th-arvc-service",
        title: "ARVC – Service",
        category: "service",
        type: "Arrival Registration & Verification Clearance",
        stayDuration: "Arrival Clearance",
        validity: "Travel Specific",
        entryType: "Service Assistance",
        processingTime: "Same Day / Instant",
        description: "Assistance with immigration pre-arrival verification cards, fast-track arrival clearances, and boarding readiness.",
        requirements: ["Passport details", "Flight booking PNR", "Arrival airport and accommodation address"]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months",
      "Confirmed round-trip flight booking",
      "Proof of accommodation and sufficient funds (10,000 THB equivalent)"
    ],
    importantNotes: "Check current bilateral visa waiver policies. When required, E-Visa must be secured prior to airline boarding."
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    slug: "uzbekistan",
    region: "Central Asia",
    flag: "🇺🇿",
    heroImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop",
    overview: "Magical Silk Road architecture in Samarkand, Bukhara, and Khiva featuring blue mosaic domes and ancient fortresses.",
    highlight: "Fast Electronic E-Visa System",
    popular: true,
    visas: [
      {
        id: "uz-tourist-single-30d-3m",
        title: "Tourist E-Visa – Single Entry, 30 Days / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 Working Days",
        description: "Single entry electronic tourist visa for holidaymakers exploring Tashkent, Samarkand, and Bukhara.",
        requirements: [
          "Passport copy (at least 6 months validity)",
          "Digital color photograph (35x45mm, white background)",
          "Confirmed flight itinerary"
        ]
      },
      {
        id: "uz-tourist-double-30d-3m",
        title: "Tourist E-Visa – Double Entry, 30 Days / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay Total",
        validity: "3 Months Validity",
        entryType: "Double Entry",
        processingTime: "3 Working Days",
        description: "Double entry E-Visa suitable for travelers combining Uzbekistan with neighboring Central Asian republics.",
        requirements: ["Passport scan", "Digital photo", "Round-trip travel proof"]
      },
      {
        id: "uz-tourist-multiple-30d-3m",
        title: "Tourist E-Visa – Multiple Entry, 30 Days / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay Total",
        validity: "3 Months Validity",
        entryType: "Multiple Entry",
        processingTime: "3 - 4 Working Days",
        description: "Multiple entry electronic visa for frequent regional business or multi-destination Silk Road circuits.",
        requirements: ["Passport copy", "Digital photo", "Multi-destination itinerary"]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months from arrival date",
      "Color printout of official E-Visa PDF document",
      "Hotel registration slips (provided by Uzbek hotels upon check-in)"
    ],
    importantNotes: "Keep hotel registration slips safely throughout your journey as immigration officials inspect them upon departure."
  },
  {
    id: "vietnam",
    name: "Vietnam",
    slug: "vietnam",
    region: "Southeast Asia",
    flag: "🇻🇳",
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    overview: "Emerald waters of Halong Bay, lantern-lit streets of Hoi An, vibrant streets of Hanoi, and tropical beaches of Da Nang.",
    highlight: "Standard, Next-Day & Same-Day Express E-Visas",
    popular: true,
    visas: [
      {
        id: "vn-evisa-30d-single",
        title: "E-Visa – 30 Days Single Entry",
        category: "visa",
        type: "E-Visa",
        stayDuration: "30 Days Stay",
        validity: "30 Days Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Standard 30-day single entry electronic visa for tourism, leisure, and holiday travel.",
        requirements: ["Passport bio-page scan (min 6 months validity)", "Portrait photo with clear background", "Entry/exit port details"]
      },
      {
        id: "vn-evisa-30d-multiple",
        title: "E-Visa – 30 Days Multiple Entry",
        category: "visa",
        type: "E-Visa",
        stayDuration: "30 Days Stay",
        validity: "30 Days Validity",
        entryType: "Multiple Entry",
        processingTime: "3 - 5 Working Days",
        description: "30-day multiple entry visa allowing exit and re-entry across land or air borders within 30 days.",
        requirements: ["Passport scan", "Portrait photo", "Travel itinerary"]
      },
      {
        id: "vn-evisa-90d-single",
        title: "E-Visa – 90 Days Single Entry",
        category: "visa",
        type: "E-Visa",
        stayDuration: "90 Days Stay",
        validity: "90 Days Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Extended 3-month single entry tourist and business visa for long-stay vacations or remote working.",
        requirements: ["Passport bio-page", "Digital photograph", "Arrival airport details"]
      },
      {
        id: "vn-evisa-90d-multiple",
        title: "E-Visa – 90 Days Multiple Entry",
        category: "visa",
        type: "E-Visa",
        stayDuration: "90 Days Stay",
        validity: "90 Days Validity",
        entryType: "Multiple Entry",
        processingTime: "4 - 6 Working Days",
        description: "Long-term 3-month multiple entry visa ideal for frequent travelers, regional executives, and multi-country trips.",
        requirements: ["Passport scan", "Digital portrait photo", "Travel dates"]
      },
      {
        id: "vn-evisa-90d-single-nextday",
        title: "E-Visa – 90 Days Single Entry (Next Day)",
        category: "visa",
        type: "E-Visa Express",
        stayDuration: "90 Days Stay",
        validity: "90 Days Validity",
        entryType: "Single Entry",
        processingTime: "Next Working Day (24h Express)",
        description: "Urgent expedited next-day E-Visa clearance for last-minute flights and emergency travel plans.",
        requirements: ["Passport copy", "Digital photo", "Urgent flight confirmation"]
      },
      {
        id: "vn-evisa-90d-single-sameday",
        title: "E-Visa – 90 Days Single Entry (Same Day)",
        category: "visa",
        type: "E-Visa Super Express",
        stayDuration: "90 Days Stay",
        validity: "90 Days Validity",
        entryType: "Single Entry",
        processingTime: "Same Day (4 - 8 Hours Super Express)",
        description: "Super express same-day emergency visa clearance for same-day departure and urgent visa fixes.",
        requirements: ["Passport scan", "High-res photo", "Urgent flight PNR and contact on WhatsApp"]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months after arrival date",
      "Digital passport photograph without glasses",
      "Confirmed flight reservation and designated entry checkpoint"
    ],
    importantNotes: "E-Visa is accepted at 33 international border checkpoints (airports, seaports, and land crossings) across Vietnam."
  },
  {
    id: "singapore",
    name: "Singapore",
    slug: "singapore",
    region: "Southeast Asia",
    flag: "🇸🇬",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    overview: "Futuristic Gardens by the Bay, Marina Bay Sands, Sentosa Island attractions, and Michelin-starred culinary markets.",
    highlight: "Consular E-Visa & Singapore RMI Support",
    popular: true,
    visas: [
      {
        id: "sg-visa-with-documents",
        title: "Visa with Documents",
        category: "visa",
        type: "Tourist / Business Visa",
        stayDuration: "Up to 30 Days per visit",
        validity: "Up to 2 Years Multiple Entry",
        entryType: "Multiple Entry",
        processingTime: "3 - 5 Working Days",
        description: "Standard consular electronic tourist/business visa processed through authorized Singapore visa partners.",
        requirements: [
          "Original Passport with minimum 6 months validity",
          "Duly filled and signed Form 14A",
          "2 recent passport photos (semi-matte finish, 35x45mm, white background)",
          "Covering letter stating purpose of travel",
          "Last 3 months bank statements with adequate funds",
          "Confirmed return flight itinerary and hotel voucher"
        ]
      },
      {
        id: "sg-rmi-service",
        title: "Singapore RMI – Service",
        category: "service",
        type: "Service Assistance",
        stayDuration: "Special Immigration Clearance",
        validity: "As authorized",
        entryType: "Service Assistance",
        processingTime: "2 - 4 Working Days",
        description: "Singapore Return / Resident / Multi-entry Inspection and verification support desk.",
        requirements: ["Passport copy", "ICA clearance reference / documents", "Direct WhatsApp coordination"]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months from entry date",
      "Confirmed round-trip flight booking and hotel vouchers",
      "Electronic Singapore Arrival Card (SGAC) submitted within 3 days prior to arrival"
    ],
    importantNotes: "Singapore visas are issued electronically. Print the e-Visa PDF on plain A4 paper and carry along with your passport."
  },
  {
    id: "indonesia",
    name: "Indonesia",
    slug: "indonesia",
    region: "Southeast Asia",
    flag: "🇮🇩",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    overview: "Tropical paradise of Bali, volcanic craters of Java, Komodo dragon sanctuaries, and cultural temples of Yogyakarta.",
    highlight: "Official Electronic Visa on Arrival (e-VoA)",
    popular: true,
    visas: [
      {
        id: "id-tourist-evisa",
        title: "Tourist E-Visa",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay (Extendable)",
        validity: "90 Days Validity from issuance",
        entryType: "Single Entry",
        processingTime: "24 - 48 Hours",
        description: "Electronic Visa on Arrival (B1 / e-VoA) enabling fast-track automated e-gates entry at Bali and Jakarta airports.",
        requirements: [
          "Color scan of passport bio-page (minimum 6 months validity)",
          "Passport size photo (JPEG/PNG)",
          "Confirmed return flight ticket"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months upon arrival",
      "Confirmed return or onward flight booking",
      "Customs Declaration (ECD) completed online prior to boarding"
    ],
    importantNotes: "The 30-day e-VoA can be extended online for an additional 30 days without visiting immigration offices."
  },
  {
    id: "jordan",
    name: "Jordan",
    slug: "jordan",
    region: "Middle East",
    flag: "🇯🇴",
    heroImage: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop",
    overview: "World wonder of Petra carved into pink sandstone cliffs, floating in the Dead Sea, and starry nights in Wadi Rum.",
    highlight: "Ministry of Interior Electronic Visa Desk",
    popular: false,
    visas: [
      {
        id: "jo-tourist-evisa",
        title: "Tourist E-Visa",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Official Jordanian electronic tourist visa for exploring Petra, Amman, Jerash, and the Red Sea coast.",
        requirements: [
          "Passport bio-data copy (min 6 months validity)",
          "Passport photo",
          "Confirmed flight itinerary and hotel bookings"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months",
      "Confirmed round-trip flight booking",
      "Proof of accommodation in Jordan"
    ],
    importantNotes: "Travelers purchasing the Jordan Pass may receive waiver of entry visa fees if staying for at least 3 consecutive nights."
  },
  {
    id: "cuba",
    name: "Cuba",
    slug: "cuba",
    region: "Americas",
    flag: "🇨🇺",
    heroImage: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?q=80&w=800&auto=format&fit=crop",
    overview: "Vintage classic cars in vibrant Havana, pastel plazas of Trinidad, tobacco valleys of Viñales, and Caribbean beaches.",
    highlight: "Tourist Card (Tarjeta del Turista) & E-Visa",
    popular: false,
    visas: [
      {
        id: "cu-tourist-evisa",
        title: "Tourist E-Visa",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "90 Days Stay",
        validity: "Single Entry / Valid within 90 days",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Official electronic tourist authorization (Tarjeta del Turista) required for holiday and cultural visits to Cuba.",
        requirements: [
          "Passport copy with minimum 6 months validity",
          "Confirmed return flight itinerary",
          "Travel medical insurance covering Cuba"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months from entry",
      "Confirmed return air ticket",
      "Approved health / travel medical insurance"
    ],
    importantNotes: "Complete the online D'Viajeros travel declaration portal within 48 hours prior to arrival in Cuba."
  },
  {
    id: "kuwait",
    name: "Kuwait",
    slug: "kuwait",
    region: "Middle East",
    flag: "🇰🇼",
    heroImage: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop",
    overview: "Kuwait Towers overlooking the Persian Gulf, grand Souk Al-Mubarakiya, desert camel culture, and modern Islamic architecture.",
    highlight: "Kuwait ID & Clearance Service Desk",
    popular: false,
    visas: [
      {
        id: "kw-id-service",
        title: "Kuwait ID – Service",
        category: "service",
        type: "Kuwait ID Clearance Service",
        stayDuration: "Clearance Assistance",
        validity: "As authorized",
        entryType: "Service Assistance",
        processingTime: "3 - 7 Working Days",
        description: "Assistance with Kuwait Civil ID documentation, residency status verification, and commercial clearance support.",
        requirements: [
          "Passport copy and Kuwait Civil ID details",
          "Sponsor or Kuwait employer authorization documents",
          "Direct consultation via WhatsApp"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months",
      "Valid Kuwait residency or sponsorship clearance documents"
    ],
    importantNotes: "Kuwait entry requirements depend strictly on nationality and GCC residency profession. Contact our desk for pre-screening."
  },
  {
    id: "uae",
    name: "UAE",
    slug: "uae",
    region: "Middle East",
    flag: "🇦🇪",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
    overview: "Burj Khalifa, luxury resorts, desert safaris, and vibrant commercial centers in Dubai, Abu Dhabi, and Sharjah.",
    highlight: "Full Visa Portfolio, Express 24-48h & Visa Change Services",
    popular: true,
    visas: [
      {
        id: "ae-transit-48h",
        title: "Transit Visa – 48 Hours",
        category: "visa",
        type: "Transit Visa",
        stayDuration: "48 Hours",
        validity: "30 Days from issuance",
        entryType: "Single Entry",
        processingTime: "24 - 48 Hours",
        description: "Short layover transit visa for travelers passing through Dubai or Abu Dhabi with confirmed onward flights.",
        requirements: ["Passport copy (min 6 months)", "Photo", "Confirmed third-country onward flight ticket"]
      },
      {
        id: "ae-transit-96h",
        title: "Transit Visa – 96 Hours",
        category: "visa",
        type: "Transit Visa",
        stayDuration: "96 Hours",
        validity: "30 Days from issuance",
        entryType: "Single Entry",
        processingTime: "24 - 48 Hours",
        description: "Four-day transit visa ideal for extended stopovers, business meetings, and shopping in the Emirates.",
        requirements: ["Passport copy", "Photo", "Confirmed onward flight ticket"]
      },
      {
        id: "ae-private-24h",
        title: "Private Visa – 24 Hours",
        category: "visa",
        type: "Private Visa",
        stayDuration: "24 Hours",
        validity: "Single Entry",
        entryType: "Single Entry",
        processingTime: "24 Hours Express",
        description: "Express short-duration entry permit for urgent commercial requirements and rapid stopovers.",
        requirements: ["Passport copy", "Photograph", "Flight booking"]
      },
      {
        id: "ae-tourist-30d",
        title: "Tourist Visa – 30 Days",
        category: "visa",
        type: "Tourist Visa",
        stayDuration: "30 Days",
        validity: "60 Days from issuance",
        entryType: "Single Entry",
        processingTime: "24 - 48 Hours",
        description: "Standard 30-day tourist visa for family holidays, leisure sightseeing, and visiting friends.",
        requirements: ["Passport copy (min 6 months)", "Passport size photo", "Return flight ticket"]
      },
      {
        id: "ae-tourist-60d",
        title: "Tourist Visa – 60 Days",
        category: "visa",
        type: "Tourist Visa",
        stayDuration: "60 Days",
        validity: "60 Days from issuance",
        entryType: "Single Entry",
        processingTime: "24 - 48 Hours",
        description: "Long-stay 60-day tourist visa for extended family visits, job search preparation, and long vacations.",
        requirements: ["Passport copy", "Photograph", "Return flight booking"]
      },
      {
        id: "ae-sharjah-private-30d",
        title: "Sharjah Private Visa – 30 Days",
        category: "visa",
        type: "Sharjah Private Visa",
        stayDuration: "30 Days",
        validity: "60 Days from issuance",
        entryType: "Single Entry",
        processingTime: "24 - 48 Hours",
        description: "Entry permit issued under Sharjah immigration authority for business, family, or travel in Northern Emirates.",
        requirements: ["Passport copy", "Photograph", "Flight itinerary"]
      },
      {
        id: "ae-sharjah-private-60d",
        title: "Sharjah Private Visa – 60 Days",
        category: "visa",
        type: "Sharjah Private Visa",
        stayDuration: "60 Days",
        validity: "60 Days from issuance",
        entryType: "Single Entry",
        processingTime: "24 - 48 Hours",
        description: "Two-month entry permit under Sharjah immigration jurisdiction for extended stays.",
        requirements: ["Passport copy", "Photograph", "Travel itinerary"]
      },
      {
        id: "ae-multiple-24h",
        title: "Multiple Entry – 24 Hours",
        category: "visa",
        type: "Multiple Entry",
        stayDuration: "24 Hours per entry",
        validity: "As issued",
        entryType: "Multiple Entry",
        processingTime: "24 - 48 Hours",
        description: "Multiple entry permit for frequent crew, regional flight connections, and repeated layovers.",
        requirements: ["Passport copy", "Photograph", "Multi-sector flight itinerary"]
      },
      {
        id: "ae-multiple-30d",
        title: "Multiple Entry – 30 Days",
        category: "visa",
        type: "Multiple Entry",
        stayDuration: "30 Days total",
        validity: "60 Days from issuance",
        entryType: "Multiple Entry",
        processingTime: "48 Hours",
        description: "Multiple entry tourist visa allowing repeated visits to Dubai and the UAE within 30 days.",
        requirements: ["Passport copy", "Photo", "Return flight ticket"]
      },
      {
        id: "ae-multiple-60d",
        title: "Multiple Entry – 60 Days",
        category: "visa",
        type: "Multiple Entry",
        stayDuration: "60 Days total",
        validity: "60 Days from issuance",
        entryType: "Multiple Entry",
        processingTime: "48 - 72 Hours",
        description: "Comprehensive 60-day multiple entry visa for frequent business executives, investors, and family visitors.",
        requirements: ["Passport copy", "Photo", "Proof of repeated travel"]
      },
      {
        id: "ae-visa-change-bus-30-60d",
        title: "Visa Change by Bus – 30/60 Days",
        category: "service",
        type: "Visa Change Service",
        stayDuration: "30 / 60 Days New Visa",
        validity: "Immediate renewal",
        entryType: "Service Assistance",
        processingTime: "Scheduled Departure",
        description: "Overland Oman border visa-change package by bus including return transport, exit stamp, and new UAE visa.",
        requirements: ["Current UAE visa copy", "Passport copy", "Current entry stamp copy"]
      },
      {
        id: "ae-visa-change-a2a-60d",
        title: "Visa Change by A2A – 60 Days",
        category: "service",
        type: "Visa Change Service",
        stayDuration: "60 Days New Visa",
        validity: "Same-Day Airport to Airport",
        entryType: "Service Assistance",
        processingTime: "Same Day Airport Run",
        description: "Airport-to-Airport (A2A) same-day flight visa change service for immediate 60-day visa renewal without exiting to home country.",
        requirements: ["Passport copy", "Current UAE visa & file number", "Exit airport preference"]
      },
      {
        id: "ae-gcc-visit-service",
        title: "GCC Visit Visa – Service",
        category: "service",
        type: "GCC Visit Visa Service",
        stayDuration: "As per GDRFA approval",
        validity: "30 Days Validity",
        entryType: "Service Assistance",
        processingTime: "24 - 48 Hours",
        description: "Specialized visa processing for residents of Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman visiting the UAE.",
        requirements: ["Valid GCC Residence Card (minimum 3 months validity)", "Passport copy", "Approved profession list"]
      },
      {
        id: "ae-gcc-poe-service",
        title: "GCC POE – Emigration/POE Service",
        category: "service",
        type: "Emigration Clearance Service",
        stayDuration: "Clearance Assistance",
        validity: "Single Departure Clearance",
        entryType: "Service Assistance",
        processingTime: "24 - 48 Hours",
        description: "Protector of Emigrants (POE) clearance advisory and document attestation assistance for Gulf-bound travelers.",
        requirements: ["Passport copy with ECR status", "Employment contract / entry visa copy", "PBA insurance"]
      }
    ],
    generalRequirements: [
      "Color scan of passport bio-page (valid for at least 6 months)",
      "Clear passport-size photograph with white background",
      "Confirmed return flight itinerary or travel booking"
    ],
    importantNotes: "UAE electronic visas are issued in PDF format with verifiable barcode. No physical passport submission required."
  },
  {
    id: "bahamas",
    name: "Bahamas",
    slug: "bahamas",
    region: "Americas",
    flag: "🇧🇸",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    overview: "Pristine pink sand beaches of Harbour Island, swimming with pigs in Exuma, and world-class luxury resorts in Nassau.",
    highlight: "Consular & Electronic Tourist Visa Support",
    popular: false,
    visas: [
      {
        id: "bs-tourist-visa-30d-3m",
        title: "Tourist Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "7 - 10 Working Days",
        description: "Official tourist visa for beach holidays, cruise stopovers, and resort vacations in the Bahamas archipelago.",
        requirements: [
          "Passport copy with minimum 6 months validity",
          "Color passport photo",
          "Confirmed return airline ticket or cruise itinerary",
          "Confirmed hotel booking in Bahamas"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months beyond travel dates",
      "Confirmed round-trip flight booking and hotel vouchers",
      "Proof of financial sufficiency (recent 3 months bank statements)"
    ],
    importantNotes: "Indian passport holders holding valid US, UK, Canada, or Schengen visas may be eligible for visa waivers or on-arrival permits."
  },
  {
    id: "ethiopia",
    name: "Ethiopia",
    slug: "ethiopia",
    region: "Africa",
    flag: "🇪🇹",
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop",
    overview: "Ancient rock-hewn churches of Lalibela, dramatic peaks of Simien Mountains, and rich Ethiopian coffee culture in Addis Ababa.",
    highlight: "Direct Immigration E-Visa Processing",
    popular: false,
    visas: [
      {
        id: "et-tourist-evisa-30d-3m",
        title: "Tourist E-Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "2 - 3 Working Days",
        description: "Official electronic tourist visa for exploring Ethiopia's UNESCO heritage sites and natural wonders.",
        requirements: [
          "Passport bio-page scan with minimum 6 months validity",
          "Recent passport photograph",
          "Return flight itinerary"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months from entry date",
      "Printed electronic visa approval certificate",
      "Yellow Fever vaccination card (recommended/mandated depending on departure route)"
    ],
    importantNotes: "E-Visa holders must arrive via Addis Ababa Bole International Airport (ADD)."
  },
  {
    id: "kenya",
    name: "Kenya",
    slug: "kenya",
    region: "Africa",
    flag: "🇰🇪",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    overview: "World-famous Maasai Mara Great Migration, Mount Kenya summits, and tropical Indian Ocean beaches of Mombasa and Diani.",
    highlight: "Electronic Travel Authorization (eTA) Desk",
    popular: true,
    visas: [
      {
        id: "ke-tourist-evisa-30d-3m",
        title: "Tourist E-Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa / eTA",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 Working Days",
        description: "Official Electronic Travel Authorization (eTA) required for all visitors entering Kenya for safari, wildlife, and leisure.",
        requirements: [
          "Passport copy with at least 6 months validity",
          "Selfie or passport photo",
          "Confirmed flight itinerary (return ticket)",
          "Hotel booking confirmation or safari tour voucher"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months",
      "Yellow Fever vaccination certificate",
      "Printed eTA approval document"
    ],
    importantNotes: "Kenya operates a 100% electronic travel authorization system. eTA must be obtained prior to airline check-in."
  },
  {
    id: "tanzania",
    name: "Tanzania",
    slug: "tanzania",
    region: "Africa",
    flag: "🇹🇿",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    overview: "Serengeti National Park safaris, snow-capped Mount Kilimanjaro, and the exotic spice island of Zanzibar.",
    highlight: "Immigration E-Visa & Zanzibar Clearances",
    popular: true,
    visas: [
      {
        id: "tz-tourist-evisa-30d-3m",
        title: "Tourist E-Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "5 - 7 Working Days",
        description: "Official Tanzanian electronic tourist visa valid for wildlife safaris in the Serengeti, Kilimanjaro climbs, and Zanzibar holidays.",
        requirements: [
          "Passport copy with at least 6 months validity",
          "Recent passport photo",
          "Return flight ticket booking",
          "Hotel confirmation or safari package voucher"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for at least 6 months",
      "Confirmed round-trip flight booking",
      "Yellow Fever vaccination certificate"
    ],
    importantNotes: "E-Visa processing is conducted through the official Tanzania Immigration Department. Print the approval grant notice."
  },
  {
    id: "tajikistan",
    name: "Tajikistan",
    slug: "tajikistan",
    region: "Central Asia",
    flag: "🇹🇯",
    heroImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop",
    overview: "Spectacular Pamir Highway, turquoise lakes of Fann Mountains, and Silk Road mountain passes in Dushanbe.",
    highlight: "Electronic E-Visa with GBAO Mountain Permit",
    popular: false,
    visas: [
      {
        id: "tj-tourist-single-30d-3m",
        title: "Tourist E-Visa – Single Entry, 30 Days / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Single Entry",
        processingTime: "3 - 5 Working Days",
        description: "Electronic tourist visa for trekking, Silk Road exploration, and cultural tours in Tajikistan.",
        requirements: [
          "Passport bio-page scan (minimum 6 months validity)",
          "Passport photo",
          "Travel itinerary"
        ]
      },
      {
        id: "tj-tourist-multiple-30d-3m",
        title: "Tourist E-Visa – Multiple Entry, 30 Days / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay Total",
        validity: "3 Months Validity",
        entryType: "Multiple Entry",
        processingTime: "3 - 5 Working Days",
        description: "Multiple entry electronic visa allowing repeated entry across Central Asian mountain borders.",
        requirements: [
          "Passport scan",
          "Photo",
          "Multi-entry regional itinerary"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months from entry date",
      "Color printout of the electronic visa",
      "GBAO special permit if traveling through the Pamir region"
    ],
    importantNotes: "Specify if you require the GBAO (Gorno-Badakhshan Autonomous Region) permit endorsement during WhatsApp consultation."
  },
  {
    id: "india-others",
    name: "India (Others)",
    slug: "india-others",
    region: "South Asia",
    flag: "🇮🇳",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
    overview: "Full consular assistance for inbound foreign visitors, overseas passport holders, OCI holders, and arrival clearance services.",
    highlight: "Inbound Tourist E-Visa & Arrival Card Services",
    popular: true,
    visas: [
      {
        id: "in-tourist-visa-30d-3m",
        title: "Tourist Visa – 30 Days Stay / 3 Months Validity",
        category: "visa",
        type: "Tourist E-Visa",
        stayDuration: "30 Days Stay",
        validity: "3 Months Validity",
        entryType: "Double Entry",
        processingTime: "3 - 5 Working Days",
        description: "Official Indian Electronic Tourist Visa (e-Tourist Visa) for international travelers, foreign passport holders, and NRI tourists.",
        requirements: [
          "Passport bio-page scan with minimum 6 months validity",
          "Square digital passport photograph with white background",
          "Return flight ticket booking and accommodation details"
        ]
      },
      {
        id: "in-arrival-card-service",
        title: "Arrival Card – Service",
        category: "service",
        type: "Arrival Card & Immigration Clearance Service",
        stayDuration: "Arrival Clearance",
        validity: "Single Entry",
        entryType: "Service Assistance",
        processingTime: "Same Day / Instant",
        description: "Assistance with Indian online arrival card declaration, boarding clearance verification, and customs documentation.",
        requirements: [
          "Passport details and incoming flight PNR",
          "Accommodation address in India"
        ]
      }
    ],
    generalRequirements: [
      "Passport valid for minimum 6 months with at least 2 blank pages",
      "Confirmed return or onward flight itinerary",
      "Printed electronic visa confirmation slip"
    ],
    importantNotes: "Indian e-Visa is valid for entry through 29 designated international airports and 5 major seaports."
  }
];
