import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventCard from "./components/EventCard"

function App() {
   const events = [
    { title: "React Workshop", date: "Oct 10, 2025", location: "Community Hall", description: "Learn React basics in a beginner-friendly session." },
    { title: "Hackathon 2025", date: "Nov 2-3, 2025", location: "Tech Hub", description: "A 24-hour coding challenge for all skill levels." },
    { title: "UI/UX Meetup", date: "Oct 15, 2025", location: "Design Studio", description: "Discuss modern UI/UX trends and portfolio tips." },
    { title: "Career Fair", date: "Oct 20, 2025", location: "University Center", description: "Meet recruiters and explore internship opportunities." },
    { title: "Game Dev Night", date: "Oct 25, 2025", location: "Arcade Lounge", description: "Build mini-games in teams with Unity or Godot." },
    { title: "AI & ML Talk", date: "Nov 5, 2025", location: "Innovation Hall", description: "Intro to AI/ML for beginners." },
    { title: "Open Source Saturday", date: "Oct 28, 2025", location: "Library Lab", description: "Contribute to open source projects together." },
    { title: "Networking Mixer", date: "Nov 8, 2025", location: "Startup Hub", description: "Connect with local tech professionals." },
    { title: "Web Dev Bootcamp", date: "Nov 12, 2025", location: "Online", description: "Hands-on intro to HTML, CSS, and JavaScript." },
    { title: "Community Demo Day", date: "Nov 20, 2025", location: "Auditorium", description: "Showcase student and community projects." },
  ];

  return (
    <div className="app">
      <header>
        <h1>🌟 Tech Community Events Board</h1>
        <p>Stay up-to-date with upcoming events in our tech community!</p>
      </header>

      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


