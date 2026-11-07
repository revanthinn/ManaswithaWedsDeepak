import { WeddingDetails, GalleryPhoto, Blessing } from '../types';

// Real wedding details – Manaswitha & Deepak
export const MANASWITHA_DEEPAK_DETAILS: WeddingDetails = {
  groomName: 'Chi. Deepak',
  groomNameTelugu: 'చి. దీపక్',
  brideName: 'Chi. La. Sow. Manaswitha',
  brideNameTelugu: 'చి. ల. సౌ. మనస్విత',
  groomParents: 'Smt. Poreddy Vasantha and Late Srinivas',
  groomParentsTelugu: 'శ్రీమతి పొరెడ్డి వసంత & స్వర్గీయ శ్రీనివాస్',
  brideParents: 'Smt. & Sri Kusuma Vani Sree – Venu Gopal',
  brideParentsTelugu: 'శ్రీమతి & శ్రీ కుసుమ వాణిశ్రీ – వేణు గోపాల్',
  weddingDate: 'Sunday, 15th November 2026',
  weddingDateTelugu: '15-11-2026 ఆదివారం',
  targetDateISO: '2026-11-15T10:13:00',
  muhurthamTime: '10:13 AM (Dhanur Lagnam)',
  muhurthamTimeTelugu: 'ఉదయం గం. 10:13 నిమిషాలకు – ధనుర్లగ్నం',
  venueName: 'Padmashali Kalyana Mandapam A/C',
  venueNameTelugu: 'పద్మశాలి కళ్యాణ మండపము A/C',
  venueAddress: 'Under Bridge Road, Shiva Nagar, Warangal, Telangana',
  venueAddressTelugu: 'అండర్ బ్రిడ్జ్ రోడ్, శివనగర్, వరంగల్, తెలంగాణ',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Padmashali+Kalyana+Mandapam+Shiva+Nagar+Warangal',
  lunchNote: 'Lunch follows the wedding',
  lunchNoteTelugu: 'విందు: వివాహానంతరం',
  invitedBy: 'Smt. & Sri Kusuma Vani Sree – Venu Gopal',
  invitedByTelugu: 'శ్రీమతి & శ్రీ కుసుమ వాణిశ్రీ – వేణు గోపాల్',
  compliments: 'With best compliments from: Near & Dear...',
  rsvpContact: '+91 94401 23456',
  rsvpEmail: '',
};

// Default and sample both use the real details now to prevent any placeholder leakage
export const DEFAULT_PLACEHOLDER_DETAILS: WeddingDetails = MANASWITHA_DEEPAK_DETAILS;
export const SAMPLE_REALISTIC_DETAILS: WeddingDetails = MANASWITHA_DEEPAK_DETAILS;

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    url: '/images/1000288993.jpg',
    caption: 'Chi. La. Sow. Manaswitha & Chi. Deepak adorned in traditional silk attire & sacred floral garlands',
    category: 'Couple',
    aspectRatio: '2/3',
    orientation: 'portrait',
  },
  {
    id: 'g-2',
    url: '/images/1000289002.jpg',
    caption: 'Auspicious Kalyana Mandapam: The couple embracing in front of fragrant jasmine & marigold backdrop',
    category: 'Couple',
    aspectRatio: '3/2',
    orientation: 'landscape',
  },
  {
    id: 'g-3',
    url: '/images/1000288990.jpg',
    caption: 'Tender moments of love: Hand adorned in intricate Mehendi and golden bangles resting on heart',
    category: 'Couple',
    aspectRatio: '2/3',
    orientation: 'portrait',
  },
  {
    id: 'g-4',
    url: '/images/1000288996.jpg',
    caption: 'Sacred wedding rings on traditional bridal mehendi palm, sealed with elders’ blessings',
    category: 'Rituals',
    aspectRatio: '2/3',
    orientation: 'portrait',
  },
  {
    id: 'g-5',
    url: '/images/1000289005.jpg',
    caption: 'Together forever: Hands intertwined in sacred vow, celebrating the divine Grihastha Ashramam',
    category: 'Rituals',
    aspectRatio: '3/2',
    orientation: 'landscape',
  },
  {
    id: 'g-6',
    url: '/images/1000288999.jpg',
    caption: 'Joyful wedding celebration: Modern elegance blending seamlessly with timeless Telugu tradition',
    category: 'Celebration',
    aspectRatio: '2/3',
    orientation: 'portrait',
  },
  {
    id: 'g-7',
    url: '/images/1000289008.jpg',
    caption: 'Radiant bride Manaswitha smiling with joy beside Deepak on their blessed wedding celebration',
    category: 'Couple',
    aspectRatio: '2/3',
    orientation: 'portrait',
  },
];

export const INITIAL_BLESSINGS: Blessing[] = [
  {
    id: 'b-vanisree',
    name: 'Smt. & Sri Kusuma Vani Sree – Venu Gopal',
    relation: 'Bride’s Parents • ఆహ్వానించేవారు',
    message: 'We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our beloved daughter Manaswitha with Deepak. Your presence and blessings are our greatest gift.',
    timestamp: 'Today',
    likes: 108,
  },
  {
    id: 'b-poreddy',
    name: 'Smt. Poreddy Vasantha (Late Srinivas)',
    relation: 'Groom’s Mother • వరుని తల్లి',
    message: 'Heartfelt blessings to our dear son Deepak and daughter Manaswitha. May the holy Agni witness your eternal companionship and may all divine forces protect and guide your beautiful journey together.',
    timestamp: 'Today',
    likes: 96,
  },
  {
    id: 'b-menamama',
    name: 'Gudimella Srikanth (Menamama)',
    relation: 'Maternal Uncle • మేనమామ',
    message: 'చి.ల.సౌ. మనస్విత మరియు చి. దీపక్ లకు హృదయపూర్వక వివాహ శుభాకాంక్షలు! May Lord Venkateswara and Goddess Padmavathi shower both of you with boundless health, everlasting happiness, prosperity, and love on this sacred Grihastha Ashramam. Subhamastu!',
    timestamp: 'Today',
    likes: 85,
  },
];
