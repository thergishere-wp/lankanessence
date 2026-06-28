// Base Wix CDN helper — append Wix transform params for quality/size
const wix = (id: string, ext = 'jpg') =>
  `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.${ext}`

const wixHotel = (id: string, ext = 'jpg') =>
  `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.${ext}`

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
    phoneIndia: '+91-9988290621',
    email: 'Info.lankanessence@gmail.com',
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
    description:
      'Experience the essential highlights of Sri Lanka — ancient temples, decorated elephants, and golden coastlines — in an expertly paced four-day journey designed for travelers with limited time but unlimited curiosity.',
    destinations: ['Colombo', 'Pinnawala', 'Kandy'],
    highlights: [
      'Pinnawala Elephant Orphanage',
      'Temple of the Sacred Tooth Relic',
      'Colombo city and harbour tour',
      'Traditional Kandyan cultural show',
    ],
    image: 'https://static.wixstatic.com/media/6271b2_0e602e17318d46f8bbe976ee1492e234~mv2.avif/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.avif',
    slug: 'sri-lanka-snapshot-4-days',
  },
  {
    id: 'unveiled-6',
    name: 'Sri Lanka Unveiled',
    duration: '6 Days',
    tagline: 'From rock fortress to golden coast',
    description:
      "Journey through the Cultural Triangle to the misty tea hills, then descend to the colonial shores of Galle and the turquoise beaches of Bentota. Six days that reveal Sri Lanka's best — culture, nature, and coast.",
    destinations: ['Sigiriya', 'Kandy', 'Nuwara Eliya', 'Galle', 'Bentota'],
    highlights: [
      'Sigiriya Lion Rock Fortress (UNESCO)',
      'Dambulla Golden Cave Temple (UNESCO)',
      'Scenic train through tea country',
      'Galle Dutch Fort colonial walk',
      'Bentota beach leisure day',
    ],
    image: 'https://static.wixstatic.com/media/nsplsh_31f34edf6673461099502756c5796a37~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
    slug: 'sri-lanka-unveiled-6-days',
  },
  {
    id: 'epic-8',
    name: 'Epic Sri Lanka',
    duration: '8 Days',
    tagline: 'Wildlife, wilderness, and wonder',
    description:
      "From Sigiriya to Mirissa, this 8-day tour captures the true essence of Sri Lanka — wild and serene. Ancient kingdoms, dramatic train journeys through hill country, leopard spotting in Yala, and whale watching off the southern coast.",
    destinations: ['Sigiriya', 'Ella', 'Yala', 'Mirissa', 'Galle'],
    highlights: [
      'Nine Arch Bridge at Ella',
      'Yala National Park safari',
      'Blue whale watching at Mirissa',
      "Horton Plains and World's End",
      'Ravana Falls and Ella Rock hike',
    ],
    image: 'https://static.wixstatic.com/media/nsplsh_7853492d38687779557a45~mv2_d_5078_3384_s_4_2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
    slug: 'epic-sri-lanka-8-days',
  },
  {
    id: 'grand-15',
    name: 'Grand Discovery of Sri Lanka',
    duration: '15 Days',
    tagline: 'The full island circuit — nothing left unseen',
    description:
      "For the traveler who refuses to choose. A complete circumnavigation of Sri Lanka — from ancient Anuradhapura to the jungle lodges of Wilpattu, through the hill country and down to the deep south. Fifteen days of pure discovery.",
    destinations: ['Colombo', 'Anuradhapura', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Mirissa', 'Galle', 'Bentota'],
    highlights: [
      'Anuradhapura sacred city (UNESCO)',
      'Polonnaruwa ancient ruins (UNESCO)',
      'Wilpattu National Park',
      'Full Kandy Perahera cultural experience',
      'Deep south coastal drive',
      'Private Ayurvedic wellness retreat',
    ],
    image: 'https://static.wixstatic.com/media/6271b2_2c0e689f1df44dc1ab1d8a2a8a433c65~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
    slug: 'grand-discovery-15-days',
  },
]

export const DAY_EXCURSIONS = [
  {
    id: 'tea-tour',
    name: 'Private Tea Tour & Factory',
    duration: 'Full Day',
    description:
      "Embark on an unforgettable journey through Sri Lanka's iconic tea region. Stroll through scenic plantations, meet skilled tea pluckers, explore their village and local temple, tour the factory witnessing every step — withering, rolling, drying, sifting, and packing — then sip freshly brewed Ceylon tea right where it's made.",
    image: 'https://static.wixstatic.com/media/nsplsh_784b397847664874594449~mv2_d_3290_2193_s_2.jpg/v1/fill/w_800,h_533,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'horton-plains',
    name: "Horton Plains & World's End",
    duration: 'Full Day',
    description:
      "Trek through misty cloud forest to the dramatic cliff edge of World's End — an 880-metre drop into the valley below. Early morning departure for clear views before the clouds roll in. Includes Baker's Falls and endemic wildlife spotting.",
    image: 'https://static.wixstatic.com/media/nsplsh_2780c8fb3f5c4a4dbae207d9838deb47~mv2.jpg/v1/fill/w_800,h_533,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'waterfalls',
    name: 'Half-Day Waterfall Journey',
    duration: 'Half Day',
    description:
      "Visit Ravana Falls, Diyaluma Falls, and hidden jungle cascades accessible only by foot. A refreshing half-day adventure through Sri Lanka's verdant interior, ending with a dip in a natural pool beneath tumbling white water.",
    image: 'https://static.wixstatic.com/media/11062b_f40a9b60b09c4698855377eb0b6a44e9~mv2.jpg/v1/fill/w_800,h_533,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
]

export const HOTELS = [
  {
    name: "Queen's Hotel",
    location: 'Kandy',
    description:
      "Housed in a historical colonial building just 50 metres from Kandy Lake, Queen's Hotel offers elegant accommodation with an outdoor pool, three dining options, and free parking. Spacious rooms have large windows and classic hardwood furnishings.",
    image: 'https://static.wixstatic.com/media/6271b2_8a57673ac96b4ba4bf794cc900753be9~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpeg',
  },
  {
    name: 'City of Dreams',
    location: 'Colombo',
    description:
      "Contemporary luxury in the heart of Sri Lanka's vibrant capital. City of Dreams Colombo blends modern design with island warmth, offering world-class dining, a rooftop pool, and easy access to the city's best attractions.",
    image: 'https://static.wixstatic.com/media/6271b2_569b4a474d5c47f1bc22a9904a7c876a~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    name: 'Hilton Colombo',
    location: 'Colombo',
    description:
      "International standards with sweeping views of the Indian Ocean. Hilton Colombo sits on the shores of Beira Lake in the commercial heart of the city, offering full-service amenities and impeccable hospitality.",
    image: 'https://static.wixstatic.com/media/6271b2_8acaa1e5176947be9bff40f4c53ae865~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    name: 'Taj Samudra',
    location: 'Colombo',
    description:
      "Iconic beachfront property on Galle Face Green with timeless elegance and impeccable service. Taj Samudra is Colombo's landmark luxury hotel, combining heritage grandeur with modern comfort and ocean-facing rooms.",
    image: 'https://static.wixstatic.com/media/6271b2_0e991dca99914ba68361644d30189a1d~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    name: 'HIDE Ella Hotel & Resort',
    location: 'Ella',
    description:
      "Boutique mountain retreat with panoramic valley views and farm-to-table dining. HIDE Ella combines stylish design with raw nature, offering infinity pools, jungle walks, and personalized service at altitude.",
    image: 'https://static.wixstatic.com/media/6271b2_baa8de039e464d8cab6a9bf976e4eb35~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
]

export const STATS = [
  { value: '98%', label: 'Visitor Satisfaction Rate' },
  { value: '10K+', label: 'Happy Travelers Guided' },
  { value: '120+', label: 'Unique Destinations Covered' },
  { value: '365', label: 'Year-Round Cultural Wonders' },
]

export const TESTIMONIALS = [
  {
    quote:
      "One of the most unforgettable experiences of my life! From the warm welcome at the airport to the breathtaking tours across Sri Lanka's cultural cities and serene beaches — everything was perfectly planned. The team at Lankan Essence was professional, friendly, and always ready to help. I felt safe, cared for, and truly immersed in the beauty of Sri Lanka. Highly recommended!",
    name: 'Daniel White',
    origin: 'Backpacker from Australia',
    rating: 5,
  },
  {
    quote:
      "From the moment we landed to the day we left, everything was seamless. Our guide felt like a friend who happened to know every secret corner of the island. The 8-day Epic package was the perfect choice for us.",
    name: 'Sarah & Tom Mitchell',
    origin: 'Auckland, New Zealand',
    rating: 5,
  },
  {
    quote:
      "The six-day itinerary was perfectly paced. Not rushed, not slow — just right. I came home feeling like I'd actually understood Sri Lanka, not just photographed it. Will absolutely be back.",
    name: 'Priya Anand',
    origin: 'London, United Kingdom',
    rating: 5,
  },
]

export const ATTRACTIONS = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    location: 'Central Province',
    badge: 'UNESCO World Heritage',
    description:
      'A majestic ancient rock fortress that rises 200 metres above lush plains, featuring intricate frescoes, spectacular water gardens, and centuries-old engineering marvels. One of the most dramatic archaeological sites in Asia.',
    image: 'https://static.wixstatic.com/media/nsplsh_82ae4befca5a4cf692f44de60d3b89cb~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'kandy-temple',
    name: 'Temple of the Tooth Relic',
    location: 'Kandy',
    badge: 'UNESCO World Heritage',
    description:
      "A sacred pilgrimage site and UNESCO World Heritage temple that enshrines the revered tooth relic of Lord Buddha, set beside a tranquil lake. The annual Esala Perahera festival draws hundreds of thousands of devotees to its gilded halls.",
    image: 'https://static.wixstatic.com/media/nsplsh_65d82158aa9e4da89e2155a8633077e3~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'nine-arch',
    name: 'Nine Arch Bridge',
    location: 'Ella',
    badge: 'Colonial Heritage',
    description:
      "A stunning stone railway viaduct built entirely of brick and stone in 1921 — no steel. Nestled in misty highlands, surrounded by dense jungle and tea plantations, it's one of Sri Lanka's most photographed landmarks. Watch the blue train appear from the mist.",
    image: 'https://static.wixstatic.com/media/6271b2_09911f624d6748309231114269d331d6~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    location: 'Southern Province',
    badge: 'Wildlife Reserve',
    description:
      "Home to the highest density of leopards in the world, this wildlife haven offers thrilling jeep safaris through dry forests, lagoons, and scrubland. Dawn drives yield sightings of elephants, sloth bears, crocodiles, and rare migratory birds.",
    image: 'https://static.wixstatic.com/media/6271b2_0502aaedc9e5407398eb0659fb285a27~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'galle-fort',
    name: 'Galle Dutch Fort',
    location: 'Galle',
    badge: 'UNESCO World Heritage',
    description:
      "A living, breathing colonial fortress built by the Dutch in 1663 — still inhabited by families, boutique hotels, and artisan workshops. Cobblestone streets, charming architecture, and rich history create an atmosphere unlike anywhere else in Asia.",
    image: 'https://static.wixstatic.com/media/6271b2_1aa038cd0bb5492ba8ac2e240f8624d2~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'mirissa',
    name: 'Mirissa Beach',
    location: 'Southern Coast',
    badge: 'Coastal Paradise',
    description:
      "A tropical coastal escape known for golden sands, turquoise waters, whale watching, and laid-back vibes. Blue whales — the largest animals on Earth — pass through from November to April, making Mirissa one of the world's premier whale-watching destinations.",
    image: 'https://static.wixstatic.com/media/6271b2_66d27d09e2754194ae7d886c04df89aa~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'horton-plains-attr',
    name: 'Horton Plains',
    location: 'Central Highlands',
    badge: 'UNESCO World Heritage',
    description:
      "A cloud-swept plateau at 2,100 metres above sea level, home to endemic wildlife and the sheer 880-metre drop of World's End. Trek through misty montane forests to one of the island's most dramatic and spiritual viewpoints.",
    image: 'https://static.wixstatic.com/media/6271b2_a171d645729749e1ae2c7e4f93cba9ac~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
  {
    id: 'tea-country',
    name: 'Nuwara Eliya Tea Country',
    location: 'Central Province',
    badge: 'Hill Country',
    description:
      "The British called it 'Little England' — rolling green hills carpeted in emerald tea terraces, Victorian bungalows, and a cool climate perfect for roses and strawberries. The source of world-famous Ceylon Tea, grown at altitude in the island's misty heart.",
    image: 'https://static.wixstatic.com/media/6271b2_1f0c62dd16924ef984094b3af93d5094~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
  },
]
