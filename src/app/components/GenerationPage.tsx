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
      <div className="flex mb-6">
        <button
          className={`px-4 py-2 mr-2 ${
            activeTab === "generate" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("generate")}
        >
          Generate
        </button>
        <button
          className={`px-4 py-2 mr-2 ${
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
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6">
            <h2 className="text-2xl font-bold mb-4">Design Input</h2>
            <select
              className="w-full p-2 mb-4 border rounded"
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
              className="w-full p-2 mb-4 border rounded"
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
              className="w-full p-2 mb-4 border rounded"
              value={renderCount}
              onChange={(e) => setRenderCount(parseInt(e.target.value))}
              min="1"
              max="10"
            />
            <button
              className="w-full bg-blue-500 text-white py-2 rounded mb-4"
              onClick={handleGenerate}
            >
              Generate
            </button>
            <button
              className="w-full bg-green-500 text-white py-2 rounded"
              onClick={handleSurpriseMe}
            >
              Surprise Me
            </button>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <h2 className="text-2xl font-bold mb-4">Generated Designs</h2>
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
                  <div className="absolute top-2 right-2 space-x-2">
                    <button
                      onClick={() => toggleFavorite(image.id)}
                      className="bg-white p-1 rounded-full"
                    >
                      {image.isFavorite ? "❤️" : "🤍"}
                    </button>
                    <button
                      onClick={() => saveDesign(image)}
                      className="bg-white p-1 rounded-full"
                    >
                      💾
                    </button>
                    <button className="bg-white p-1 rounded-full">🖊️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "saved" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Saved Designs</h2>
          <div className="grid grid-cols-3 gap-4">
            {savedDesigns.map((design, index) => (
              <div key={index} className="border rounded p-4">
                <img
                  src={design.url}
                  alt="Saved room design"
                  width={300}
                  height={200}
                  className="rounded mb-2"
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
          <h2 className="text-2xl font-bold mb-4">Generation History</h2>
          {previousGenerations.map((gen, index) => (
            <div key={index} className="mb-6 border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">
                {gen.roomType} - {gen.roomStyle}
              </h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {gen.images.map((img: any) => (
                  <div key={img.id} className="relative">
                    <img
                      src={img.url}
                      alt="Previous generation"
                      width={150}
                      height={100}
                      className="rounded"
                    />
                    <div className="absolute top-1 right-1 space-x-1">
                      <button
                        onClick={() => toggleFavorite(img.id)}
                        className="bg-white p-1 rounded-full text-xs"
                      >
                        {img.isFavorite ? "❤️" : "🤍"}
                      </button>
                      <button
                        onClick={() => saveDesign(img)}
                        className="bg-white p-1 rounded-full text-xs"
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
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Recreate
                </button>
                <button
                  onClick={() => {
                    setRoomType(gen.roomType);
                    setRoomStyle(gen.roomStyle);
                    setActiveTab("generate");
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Modify
                </button>
              </div>
            </div>
          ))}
          {previousGenerations.length > 5 && (
            <button className="bg-gray-200 px-4 py-2 rounded w-full">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GenerationPage;
