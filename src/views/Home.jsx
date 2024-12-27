import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(featuredCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || '/default-cat.jpg', // Fallback image
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <>
      {/* Welcome Section */}
      <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>Looking for the perfect companion? Explore our featured cats and find your next furry friend today!</p>
      </section>

      {/* Featured Cats Section */}
      <section className="mt-5">
        <h2>Featured Cats</h2>
        {loading ? (
          <div className="text-center mt-4">
            <p>Loading cats...</p>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <p className="text-danger">Sorry, we couldn't load the cat images at the moment. Please try again later.</p>
        ) : (
          <div className="mt-2 row g-4" id="cats-container">
            {cats.map((cat, i) => (
              <div key={i} className="col-md-4">
                <div className="card shadow-sm">
                  <img src={cat.image} alt={cat.name} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{cat.name}</h5>
                    <p className="card-text">Age: {cat.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
