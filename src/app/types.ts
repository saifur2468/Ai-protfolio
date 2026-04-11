export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'conference' | 'workshop' | 'seminar' | 'networking' | 'webinar';
  capacity: number;
  registered: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  organizer: string;
  image?: string;
}

export interface Attendee {
  id: string;
  name: string;
  email: string;
  eventId: string;
  registeredAt: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}
