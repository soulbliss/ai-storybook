import React, { useState } from "react";

// Mock data for room types and styles
const roomTypes = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office"];
const roomStyles = [
  "Modern",
  "Traditional",
  "Minimalist",
  "Industrial",
  "Bohemian",
];

// Mock function to simulate image generation
const generateImages = (count: number) => {
  return Array(count)
    .fill(null)
    .map((_, index) => ({
      id: `gen-${index}`,
      url: `https://picsum.photos/seed/${Math.random()}/300/200`,
      isFavorite: false,
    }));
};

const GenerationPage: React.FC = () => {
  const [roomType, setRoomType] = useState("");
  const [roomStyle, setRoomStyle] = useState("");
  const [renderCount, setRenderCount] = useState(4);
  const [generatedImages, setGeneratedImages] = useState<any[]>([]);
  const [savedDesigns, setSavedDesigns] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("generate");
  const [previousGenerations, setPreviousGenerations] = useState<any[]>([]);

  const handleGenerate = () => {
    const newImages = generateImages(renderCount);
    setGeneratedImages(newImages);
    setPreviousGenerations([
      ...previousGenerations,
      { roomType, roomStyle, images: newImages },
    ]);
  };

  const handleSurpriseMe = () => {
    setRoomType(roomTypes[Math.floor(Math.random() * roomTypes.length)]);
    setRoomStyle(roomStyles[Math.floor(Math.random() * roomStyles.length)]);
    handleGenerate();
  };

  const toggleFavorite = (id: string) => {
    setGeneratedImages((images) =>
      images.map((img) =>
        img.id === id ? { ...img, isFavorite: !img.isFavorite } : img
      )
    );
  };

  const saveDesign = (image: any) => {
    setSavedDesigns([...savedDesigns, { ...image, roomType, roomStyle }]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex">
        <button
          className={`mr-2 px-4 py-2 ${
            activeTab === "generate" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("generate")}
        >
          Generate
        </button>
        <button
          className={`mr-2 px-4 py-2 ${
            activeTab === "saved" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("saved")}
        >
          Saved Designs
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "history" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
      </div>

      {activeTab === "generate" && (
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-6 w-full px-4 md:w-1/3">
            <h2 className="mb-4 text-2xl font-bold">Design Input</h2>
            <select
              className="mb-4 w-full rounded border p-2"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="">Select Room Type</option>
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <select
              className="mb-4 w-full rounded border p-2"
              value={roomStyle}
              onChange={(e) => setRoomStyle(e.target.value)}
            >
              <option value="">Select Room Style</option>
              {roomStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
            <input
              type="number"
              className="mb-4 w-full rounded border p-2"
              value={renderCount}
              onChange={(e) => setRenderCount(parseInt(e.target.value))}
              min="1"
              max="10"
            />
            <button
              className="mb-4 w-full rounded bg-blue-500 py-2 text-white"
              onClick={handleGenerate}
            >
              Generate
            </button>
            <button
              className="w-full rounded bg-green-500 py-2 text-white"
              onClick={handleSurpriseMe}
            >
              Surprise Me
            </button>
          </div>
          <div className="w-full px-4 md:w-2/3">
            <h2 className="mb-4 text-2xl font-bold">Generated Designs</h2>
            <div className="grid grid-cols-2 gap-4">
              {generatedImages.map((image) => (
                <div key={image.id} className="relative">
                  <img
                    src={image.url}
                    alt="Generated room design"
                    width={300}
                    height={200}
                    className="rounded"
                  />
                  <div className="absolute right-2 top-2 space-x-2">
                    <button
                      onClick={() => toggleFavorite(image.id)}
                      className="rounded-full bg-white p-1"
                    >
                      {image.isFavorite ? "❤️" : "🤍"}
                    </button>
                    <button
                      onClick={() => saveDesign(image)}
                      className="rounded-full bg-white p-1"
                    >
                      💾
                    </button>
                    <button className="rounded-full bg-white p-1">🖊️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "saved" && (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Saved Designs</h2>
          <div className="grid grid-cols-3 gap-4">
            {savedDesigns.map((design, index) => (
              <div key={index} className="rounded border p-4">
                <img
                  src={design.url}
                  alt="Saved room design"
                  width={300}
                  height={200}
                  className="mb-2 rounded"
                />
                <p>
                  {design.roomType} - {design.roomStyle}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "history" && (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Generation History</h2>
          {previousGenerations.map((gen, index) => (
            <div key={index} className="mb-6 border-b pb-6">
              <h3 className="mb-2 text-xl font-semibold">
                {gen.roomType} - {gen.roomStyle}
              </h3>
              <div className="mb-4 grid grid-cols-4 gap-2">
                {gen.images.map((img: any) => (
                  <div key={img.id} className="relative">
                    <img
                      src={img.url}
                      alt="Previous generation"
                      width={150}
                      height={100}
                      className="rounded"
                    />
                    <div className="absolute right-1 top-1 space-x-1">
                      <button
                        onClick={() => toggleFavorite(img.id)}
                        className="rounded-full bg-white p-1 text-xs"
                      >
                        {img.isFavorite ? "❤️" : "🤍"}
                      </button>
                      <button
                        onClick={() => saveDesign(img)}
                        className="rounded-full bg-white p-1 text-xs"
                      >
                        💾
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setRoomType(gen.roomType);
                    setRoomStyle(gen.roomStyle);
                    setActiveTab("generate");
                  }}
                  className="rounded bg-blue-500 px-4 py-2 text-white"
                >
                  Recreate
                </button>
                <button
                  onClick={() => {
                    setRoomType(gen.roomType);
                    setRoomStyle(gen.roomStyle);
                    setActiveTab("generate");
                  }}
                  className="rounded bg-green-500 px-4 py-2 text-white"
                >
                  Modify
                </button>
              </div>
            </div>
          ))}
          {previousGenerations.length > 5 && (
            <button className="w-full rounded bg-gray-200 px-4 py-2">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GenerationPage;
