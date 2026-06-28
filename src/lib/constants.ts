export const BRAND = {
  colors: {
    forest: '#1A4731',
    forestDeep: '#0D2818',
    gold: '#D4A017',
    teal: '#1B5E6E',
    cream: '#F5F0E8',
    creamDark: '#EDE8E0',
    white: '#FFFFFF',
  },
  contact: {
    phoneSL: '+94-777395884',
    phoneNZ: '+64-0275555880',
    email: 'info.lankanessence@gmail.com',
    whatsapp: 'https://wa.me/94777395884',
    address: '51 Ivy Park, Thalawathugoda, Sri Lanka',
  },
  social: {
    facebook: 'https://facebook.com/lankanessence',
    instagram: 'https://instagram.com/lankanessence',
    twitter: 'https://twitter.com/lankanessence',
    linkedin: 'https://linkedin.com/company/lankanessence',
  },
} as const

export const PACKAGES = [
  {
    id: 'snapshot-4',
    name: 'Sri Lanka in a Snapshot',
    duration: '4 Days',
    tagline: 'A swift immersion into the soul of the island',
    description: 'Experience the essential highlights of Sri Lanka — ancient temples, decorated elephants, and golden coastlines — in an expertly paced four-day journey designed for travelers with limited time but unlimited curiosity.',
    destinations: ['Colombo', 'Pinnawala', 'Kandy'],
    highlights: [
      'Pinnawala Elephant Orphanage',
      'Temple of the Sacred Tooth Relic',
      'Colombo city and harbour tour',
      'Traditional Kandyan cultural show',
    ],
    image: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=800&q=80',
    slug: 'sri-lanka-snapshot-4-days',
  },
  {
    id: 'unveiled-6',
    name: 'Sri Lanka Unveiled',
    duration: '6 Days',
    tagline: 'From rock fortress to golden coast',
    description: 'Journey through the Cultural Triangle to the misty tea hills, then descend to the colonial shores of Galle and the turquoise beaches of Bentota. Six days that reveal Sri Lanka in all its layered splendour.',
    destinations: ['Sigiriya', 'Kandy', 'Nuwara Eliya', 'Galle', 'Bentota'],
    highlights: [
      'Sigiriya Lion Rock Fortress (UNESCO)',
      'Dambulla Golden Cave Temple (UNESCO)',
      'Scenic train through tea country',
      'Galle Dutch Fort colonial walk',
      'Bentota beach leisure day',
    ],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    slug: 'sri-lanka-unveiled-6-days',
  },
  {
    id: 'epic-8',
    name: 'Epic Sri Lanka',
    duration: '8 Days',
    tagline: 'Wildlife, wilderness, and wonder',
    description: "The complete island experience. Ancient kingdoms in the north, dramatic train journeys through hill country, leopard spotting in Yala National Park, and lazy afternoons on Mirissa's whale-watching shores.",
    destinations: ['Sigiriya', 'Ella', 'Yala', 'Mirissa', 'Galle'],
    highlights: [
      'Nine Arch Bridge at Ella',
      'Yala National Park safari',
      'Blue whale watching at Mirissa',
      'Horton Plains and World\'s End',
      'Ravana Falls and Ella Rock hike',
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    slug: 'epic-sri-lanka-8-days',
  },
  {
    id: 'grand-15',
    name: 'Grand Discovery',
    duration: '15 Days',
    tagline: 'The full island circuit — nothing left unseen',
    description: "For the traveler who refuses to choose. A complete circumnavigation of Sri Lanka — from ancient Anuradhapura to the jungle lodges of Wilpattu, through the hill country and down to the deep south. Fifteen days of pure discovery.",
    destinations: ['Colombo', 'Anuradhapura', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Mirissa', 'Galle', 'Bentota'],
    highlights: [
      'Anuradhapura sacred city (UNESCO)',
      'Polonnaruwa ancient ruins (UNESCO)',
      'Wilpattu National Park',
      'Full Kandy Perahera cultural experience',
      'Deep south coastal drive',
      'Private Ayurvedic wellness retreat',
    ],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    slug: 'grand-discovery-15-days',
  },
]

export const DAY_EXCURSIONS = [
  {
    id: 'tea-tour',
    name: 'Private Tea Tour & Factory',
    duration: 'Full Day',
    description: "Walk through emerald tea estates, tour a working factory, and sit down to a private tasting guided by a tea master. One of Sri Lanka's most intimate and sensory experiences.",
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
  },
  {
    id: 'horton-plains',
    name: "Horton Plains & World's End",
    duration: 'Full Day',
    description: "Trek through misty cloud forest to the dramatic cliff edge of World's End — an 880-metre drop into the valley below. Early morning departure for clear views before the clouds roll in.",
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 'waterfalls',
    name: 'Half-Day Waterfall Journey',
    duration: 'Half Day',
    description: "Visit Ravana Falls, Diyaluma Falls, and hidden jungle cascades accessible only by foot. A refreshing half-day adventure through Sri Lanka's verdant interior.",
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
  },
]

export const HOTELS = [
  {
    name: "Queen's Hotel Kandy",
    location: 'Kandy',
    description: 'Colonial grandeur overlooking Kandy Lake, steps from the Sacred Tooth Temple.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
  },
  {
    name: 'City of Dreams Colombo',
    location: 'Colombo',
    description: "Contemporary luxury in the heart of Sri Lanka's vibrant capital city.",
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    name: 'Hilton Colombo',
    location: 'Colombo',
    description: 'International standards with sweeping views of the Indian Ocean.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
  },
  {
    name: 'Taj Samudra',
    location: 'Colombo',
    description: 'Iconic beachfront property with timeless elegance and impeccable service.',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80',
  },
  {
    name: 'HIDE Ella',
    location: 'Ella',
    description: 'Boutique mountain retreat with panoramic valley views and farm-to-table dining.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
  },
]

export const STATS = [
  { value: '98%', label: 'Visitor Satisfaction Rate' },
  { value: '10K+', label: 'Happy Travelers Guided' },
  { value: '120+', label: 'Unique Destinations' },
  { value: '365', label: 'Days of Operation' },
]

export const TESTIMONIALS = [
  {
    quote: "Lankan Essence didn't just plan a holiday — they crafted an experience I'll carry for the rest of my life. Every detail was handled with genuine care and local knowledge.",
    name: 'Daniel White',
    origin: 'Sydney, Australia',
    rating: 5,
  },
  {
    quote: 'From the moment we landed to the day we left, everything was seamless. Our guide felt like a friend who happened to know every secret corner of the island.',
    name: 'Sarah & Tom Mitchell',
    origin: 'Auckland, New Zealand',
    rating: 5,
  },
  {
    quote: "The six-day itinerary was perfectly paced. Not rushed, not slow — just right. I came home feeling like I'd actually understood Sri Lanka, not just photographed it.",
    name: 'Priya Anand',
    origin: 'London, United Kingdom',
    rating: 5,
  },
]

export const ATTRACTIONS = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Lion Rock',
    location: 'Central Province',
    badge: 'UNESCO World Heritage',
    description: 'An ancient palace complex built upon a 200-metre volcanic rock, featuring extraordinary frescoes and water gardens that have endured fifteen centuries. One of the most dramatic archaeological sites in Asia.',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&q=80',
  },
  {
    id: 'kandy-temple',
    name: 'Temple of the Sacred Tooth',
    location: 'Kandy',
    badge: 'UNESCO World Heritage',
    description: 'Sri Lanka\'s most sacred Buddhist shrine houses a tooth relic of the Buddha himself. This gilded, multi-roofed temple sits beside Kandy Lake and draws pilgrims and visitors from across the world.',
    image: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=900&q=80',
  },
  {
    id: 'nine-arch',
    name: 'Nine Arch Bridge',
    location: 'Ella',
    badge: 'Colonial Heritage',
    description: 'Built entirely of brick and stone — no steel — by British colonists and local craftsmen in 1921. Watch the blue train emerge from the jungle and cross this breathtaking viaduct against a backdrop of emerald hills.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    location: 'Southern Province',
    badge: 'Wildlife Reserve',
    description: 'The highest concentration of leopards in the world roams this ancient wilderness. Dawn safaris through thorn scrub and lagoons yield sightings of elephants, sloth bears, crocodiles, and rare migratory birds.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80',
  },
  {
    id: 'galle-fort',
    name: 'Galle Dutch Fort',
    location: 'Galle',
    badge: 'UNESCO World Heritage',
    description: 'A living, breathing colonial fortress built by the Dutch in 1663, still inhabited by families, boutique hotels, and artisan workshops. Walk the ramparts at sunset and watch the Indian Ocean glow orange.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80',
  },
  {
    id: 'mirissa',
    name: 'Mirissa Beach',
    location: 'Southern Coast',
    badge: 'Coastal Paradise',
    description: 'A crescent of golden sand, turquoise water, and swaying palms that doubles as Sri Lanka\'s premier whale-watching destination. Blue whales, the largest animals on Earth, pass through from November to April.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
  },
  {
    id: 'horton-plains-attr',
    name: 'Horton Plains',
    location: 'Central Highlands',
    badge: 'UNESCO World Heritage',
    description: 'A cloud-swept plateau at 2,100 metres above sea level, home to endemic wildlife and the sheer 880-metre drop of World\'s End. Trek through misty montane forests to one of the island\'s most dramatic viewpoints.',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&q=80',
  },
  {
    id: 'tea-country',
    name: 'Nuwara Eliya Tea Country',
    location: 'Central Province',
    badge: 'Hill Country',
    description: 'The British called it "Little England" — rolling green hills carpeted in emerald tea terraces, Victorian bungalows, and a climate cool enough for roses and strawberries to thrive at altitude.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&q=80',
  },
]
