import { WeddingDetails, GalleryPhoto, Blessing } from '../types';

// Real wedding details – Manaswitha & Deepak Reddy
export const MANASWITHA_DEEPAK_DETAILS: WeddingDetails = {
  groomName: 'Chi. Deepak Reddy',
  groomNameTelugu: 'చి. దీపక్ రెడ్డి',
  brideName: 'Chi. La. Sow. Manaswitha',
  brideNameTelugu: 'చి. ల. సౌ. మనస్విత',
  groomParents: 'Smt. Poreddy Vasantha and Late Srinivas Reddy',
  groomParentsTelugu: 'శ్రీమతి పొరెడ్డి వసంత & స్వర్గీయ శ్రీనివాస్ రెడ్డి',
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
  reception: {
    title: 'Wedding Reception',
    titleTelugu: 'వివాహ విందు / రిసెప్షన్',
    date: 'Monday, 16 November 2026',
    dateTelugu: '16-11-2026 సోమవారం',
    time: '11:30 AM',
    timeTelugu: 'ఉదయం 11:30 గంటలకు',
    venueName: 'SLV Grand',
    venueNameTelugu: 'SLV గ్రాండ్',
    address: 'Nagavaram Road, Wanaparthy',
    addressTelugu: 'నగవరం రోడ్, వనపర్తి',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SLV+Grand+Nagavaram+Road+Wanaparthy',
  },
};

// Default and sample both use the real details now to prevent any placeholder leakage
export const DEFAULT_PLACEHOLDER_DETAILS: WeddingDetails = MANASWITHA_DEEPAK_DETAILS;
export const SAMPLE_REALISTIC_DETAILS: WeddingDetails = MANASWITHA_DEEPAK_DETAILS;

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    url: '/images/1000288993.jpg',
    caption: 'Chi. La. Sow. Manaswitha & Chi. Deepak Reddy adorned in traditional silk attire & sacred floral garlands',
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
    url: '/images/1000289008.jpg',
    caption: 'Radiant bride Manaswitha smiling with joy beside Deepak Reddy on their blessed wedding celebration',
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
    message: 'We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our beloved daughter Manaswitha with Deepak Reddy. Your presence and blessings are our greatest gift.',
    timestamp: 'Today',
    likes: 108,
  },
  {
    id: 'b-poreddy',
    name: 'Smt. Poreddy Vasantha (Late Srinivas Reddy)',
    relation: 'Groom’s Mother • వరుని తల్లి',
    message: 'Heartfelt blessings to our dear son Deepak Reddy and daughter Manaswitha. May the holy Agni witness your eternal companionship and may all divine forces protect and guide your beautiful journey together.',
    timestamp: 'Today',
    likes: 96,
  },
  {
    id: 'b-menamama',
    name: 'Gudimella Srikanth (Menamama)',
    relation: 'Maternal Uncle • మేనమామ',
    message: 'చి.ల.సౌ. మనస్విత మరియు చి. దీపక్ రెడ్డి లకు హృదయపూర్వక వివాహ శుభాకాంక్షలు! May Lord Venkateswara and Goddess Padmavathi shower both of you with boundless health, everlasting happiness, prosperity, and love on this sacred Grihastha Ashramam. Subhamastu!',
    timestamp: 'Today',
    likes: 85,
  },
];
