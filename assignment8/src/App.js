import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css"; // ✅ Import CSS file

// Dummy movie data
const movies = [
  { id: 1, title: "Inception", image: "https://tse1.mm.bing.net/th/id/OIP.SDLkOsgAz_CfDHY-4YhjaQHaEK?pid=Api&P=0&h=220" },
  { id: 2, title: "Interstellar", image: "https://tse1.mm.bing.net/th/id/OIP.IuuohBMqKkT8LCNUWL4W3QHaJQ?pid=Api&P=0&h=220" },
  { id: 3, title: "The Dark Knight", image: "https://tse1.mm.bing.net/th/id/OIP.lCYQZpdqe5UK_DBQgWGfkQHaJ4?pid=Api&P=0&h=220" },
  { id: 4, title: "Tenet", image: "https://tse2.mm.bing.net/th/id/OIP.0IVu-AC1Be7TXJ2b8RJejAHaLH?pid=Api&P=0&h=220" },
  { id: 5, title: "Avatar", image: "https://tse1.mm.bing.net/th/id/OIP.hCDRzT-8TXTHmVFZYs27mQHaJQ?pid=Api&P=0&h=220" },
  { id: 6, title: "Titanic", image: "https://tse1.mm.bing.net/th/id/OIP.qf3ZxqV5IzN2_bauAt6tAwHaLH?pid=Api&P=0&h=220" },
  { id: 7, title: "Avengers", image: "https://tse4.mm.bing.net/th/id/OIP.DqBB7qa_vH9gvDT3EmjDKgHaJ4?pid=Api&P=0&h=220" },
  { id: 8, title: "Iron Man", image: "https://tse2.mm.bing.net/th/id/OIP.nhGKi8NnjEX01SvbnByPFQHaLH?pid=Api&P=0&h=220" },
  { id: 9, title: "Doctor Strange", image: "https://tse3.mm.bing.net/th/id/OIP.vwr9Kr9Tcd8Vr0CURioQRQHaLH?pid=Api&P=0&h=220" },
  { id: 10, title: "Black Panther", image: "https://tse3.mm.bing.net/th/id/OIP.tnzR4SNgzUnPCIB1fFa16QHaLH?pid=Api&P=0&h=220" },
  { id: 11, title: "Thor", image: "https://tse4.mm.bing.net/th/id/OIP.gjm438Vs581Q2CA8bkk8aQHaLc?pid=Api&P=0&h=220" },
  { id: 12, title: "Spider-Man", image: "https://tse1.mm.bing.net/th/id/OIP.opUNdjlwTirKH-_3LyCE6QHaK0?pid=Api&P=0&h=220" },
  { id: 13, title: "Guardians", image: "https://tse1.mm.bing.net/th/id/OIP.NeSAIbgII9P8sH9oVqMaqAHaKf?pid=Api&P=0&h=220" },
  { id: 14, title: "Captain America", image: "https://tse3.mm.bing.net/th/id/OIP.Rj445AFR_99Coys2OYf2swHaLH?pid=Api&P=0&h=220" },
  { id: 15, title: "Eternals", image: "https://tse2.mm.bing.net/th/id/OIP.HTWpGTwDvwO0-_nzDPY5fgHaLp?pid=Api&P=0&h=220" },
  { id: 16, title: "Ant-Man", image: "https://tse2.mm.bing.net/th/id/OIP.lipH8gTMGCJ0C9PqkfjUsQHaK-?pid=Api&P=0&h=220" },
];

// Page 1: Movie List
function MovieList() {
  return (
    <div>
      <h2>🎬 Movie List</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h4>{movie.title}</h4>
            <Link to={`/movie/${movie.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Page 2: Movie Details
function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>Some exciting details about {movie.title}...</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
}

// Page 3: Booking Form
function BookingForm({ setBookingData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    setBookingData({ ...form, bookingId });
    navigate("/confirmation");
  };

  return (
    <div>
      <h2>Book Seat for Movie ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Page 4: Confirmation
function Confirmation({ bookingData }) {
  if (!bookingData) return <h2>No booking found</h2>;

  return (
    <div className="confirmation">
      <h2>✅ Seat Booked Successfully!</h2>
      <p>
        <strong>Booking ID:</strong> {bookingData.bookingId}
      </p>
      <p>
        <strong>Name:</strong> {bookingData.name}
      </p>
      <p>
        <strong>Email:</strong> {bookingData.email}
      </p>
      <p>
        <strong>Mobile:</strong> {bookingData.mobile}
      </p>
      <Link to="/">
        <button>Back to Movies</button>
      </Link>
    </div>
  );
}

// Main App
function App() {
  const [bookingData, setBookingData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm setBookingData={setBookingData} />} />
        <Route path="/confirmation" element={<Confirmation bookingData={bookingData} />} />
      </Routes>
    </Router>
  );
}

export default App;
