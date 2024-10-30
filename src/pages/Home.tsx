import { useEffect, useState } from 'react';

// Sample Quotes Array
const quotes = [
  "Love all, serve all.",
  "Help ever, hurt never.",
  "Hands that serve are holier than lips that pray.",
  "Service to man is service to God.",
  "You are not one person, but three: The one you think you are, the one others think you are, and the one you really are."
];

export default function Home() {
  const [quote, setQuote] = useState("");

  // Function to get a new quote each day
  useEffect(() => {
    const today = new Date().getDate(); // Get today's date (1-31)
    const index = today % quotes.length; // Rotate quotes based on the day
    setQuote(quotes[index]);
  }, []);

  return (
    <div className="home">
      <h1>Daily Sai Quote</h1>
      <p>{quote}</p>
      <button
        onClick={() =>
          navigator.share({ text: quote }).catch(() => alert("Sharing failed"))
        }
      >
        Share Quote
      </button>
    </div>
  );
}
