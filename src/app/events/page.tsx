import EventCard from '@/components/EventCard';
import { events } from '@/data/events';

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl mb-4">Events</h1>
        <p className="text-xl text-charcoal/70 mb-12 max-w-2xl">
          Join us for upcoming Badger Book Club meetings, reading nights, and literary discussions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
