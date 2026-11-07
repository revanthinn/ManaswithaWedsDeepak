export interface WeddingDetails {
  groomName: string;
  brideName: string;
  groomNameTelugu?: string;
  brideNameTelugu?: string;
  groomParents: string;
  brideParents: string;
  groomParentsTelugu?: string;
  brideParentsTelugu?: string;
  weddingDate: string;
  weddingDateTelugu?: string;
  targetDateISO: string; // valid ISO string for live countdown
  muhurthamTime: string;
  muhurthamTimeTelugu?: string;
  venueName: string;
  venueNameTelugu?: string;
  venueAddress: string;
  venueAddressTelugu?: string;
  googleMapsUrl: string;
  lunchNote?: string;
  lunchNoteTelugu?: string;
  invitedBy?: string;
  invitedByTelugu?: string;
  compliments?: string;
  rsvpContact?: string;
  rsvpEmail?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  category: 'Rituals' | 'Couple' | 'Celebration' | 'Decor';
  aspectRatio?: '2/3' | '3/2';
  orientation?: 'portrait' | 'landscape';
}

export interface Blessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  likes: number;
}
