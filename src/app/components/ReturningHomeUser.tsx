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
      <h1 className="mb-8 text-3xl font-bold">Welcome back!</h1>

      {/* Continue where you left off */}
      {unfinishedDesign && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">
            Continue where you left off
          </h2>
          <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
            <Image
              src={unfinishedDesign.imageUrl}
              alt={unfinishedDesign.title}
              width={100}
              height={100}
              className="mr-4 rounded-md"
            />
            <div>
              <h3 className="font-semibold">{unfinishedDesign.title}</h3>
              <div className="mt-2 h-2.5 w-48 rounded-full bg-gray-200">
                <div
                  className="h-2.5 rounded-full bg-blue-600"
                  style={{ width: `${unfinishedDesign.progress}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                {unfinishedDesign.progress}% complete
              </p>
            </div>
            <button className="ml-auto rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
              Continue
            </button>
          </div>
        </section>
      )}

      {/* Recent Generations and Saved Favorites */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Your Designs</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">Recent Generations</h3>
            <div className="space-y-4">
              {recentGenerations.map((design) => (
                <div
                  key={design.id}
                  className="flex items-center rounded-lg bg-white p-4 shadow-md"
                >
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={80}
                    height={80}
                    className="mr-4 rounded-md"
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
            <h3 className="mb-3 text-xl font-semibold">Saved Favorites</h3>
            <div className="space-y-4">
              {savedFavorites.map((design) => (
                <div
                  key={design.id}
                  className="flex items-center rounded-lg bg-white p-4 shadow-md"
                >
                  <Image
                    src={design.imageUrl}
                    alt={design.title}
                    width={80}
                    height={80}
                    className="mr-4 rounded-md"
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
        <h2 className="mb-4 text-2xl font-semibold">
          Explore Trending Designs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trendingDesigns.map((design) => (
            <div
              key={design.id}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <Image
                src={design.imageUrl}
                alt={design.title}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 font-semibold">{design.title}</h3>
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
          className="rounded-lg bg-green-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-600"
        >
          Create New Design
        </Link>
      </div>
    </div>
  );
};

export default ReturningUserHome;
