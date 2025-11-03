import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingCalendar from './components/BookingCalendar';
import ContentSections from './components/ContentSections';

function App() {
  return (
    <div className="font-sans text-black bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BookingCalendar />
        <ContentSections />
      </main>
    </div>
  );
}

export default App;
