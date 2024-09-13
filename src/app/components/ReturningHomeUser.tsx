import Image from "next/image";
import Link from "next/link";
import React from "react";

// Mock data (replace with actual data from your backend)
const recentGenerations = [
  { id: 1, imageUrl: "/images/recent1.jpg", title: "Modern Living Room" },
  { id: 2, imageUrl: "/images/recent2.jpg", title: "Minimalist Bedroom" },
];

const savedFavorites = [
  { id: 3, imageUrl: "/images/favorite1.jpg", title: "Rustic Kitchen" },
  { id: 4, imageUrl: "/images/favorite2.jpg", title: "Bohemian Dining Room" },
];

const unfinishedDesign = {
  id: 5,
  imageUrl: "/images/unfinished.jpg",
  title: "Contemporary Office",
  progress: 60,
};

const trendingDesigns = [
  { id: 6, imageUrl: "/images/trending1.jpg", title: "Industrial Loft" },
  { id: 7, imageUrl: "/images/trending2.jpg", title: "Scandinavian Bedroom" },
  { id: 8, imageUrl: "/images/trending3.jpg", title: "Art Deco Living Room" },
];

const ReturningUserHome: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome back!</h1>

      {/* Continue where you left off */}
      {unfinishedDesign && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Continue where you left off
          </h2>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <Image
              src={unfinishedDesign.imageUrl}
              alt={unfinishedDesign.title}
              width={100}
              height={100}
              className="rounded-md mr-4"
            />
            <div>
              <h3 className="font-semibold">{unfinishedDesign.title}</h3>
              <div className="w-48 bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${unfinishedDesign.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {unfinishedDesign.progress}% complete
              </p>
            </div>
            <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Continue
            </button>
          </div>
        </section>
      )}

      {/* Recent Generations and Saved Favorites */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Recent Generations</h3>
            <div className="space-y-4">
              {recentGenerations.map((design) => (
                <div
                  key={design.id}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center"
                >
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={80}
                    height={80}
                    className="rounded-md mr-4"
                  />
                  <h4 className="font-semibold">{design.title}</h4>
                  <button className="ml-auto text-blue-500 hover:text-blue-600">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Saved Favorites</h3>
            <div className="space-y-4">
              {savedFavorites.map((design) => (
                <div
                  key={design.id}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center"
                >
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={80}
                    height={80}
                    className="rounded-md mr-4"
                  />
                  <h4 className="font-semibold">{design.title}</h4>
                  <button className="ml-auto text-blue-500 hover:text-blue-600">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Explore Trending Designs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingDesigns.map((design) => (
            <div
              key={design.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={design.imageUrl}
                alt={design.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{design.title}</h3>
                <Link
                  href={`/design/${design.id}`}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Get inspired
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Create New Design Button */}
      <div className="mt-12 text-center">
        <Link
          href="/create-design"
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
        >
          Create New Design
        </Link>
      </div>
    </div>
  );
};

export default ReturningUserHome;
