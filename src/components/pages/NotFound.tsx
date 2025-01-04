import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Sidan hittades inte</h2>
      <p className="mb-4">Den sida du letar efter verkar inte existera.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Tillbaka till startsidan
      </Link>
    </div>
  );
};
