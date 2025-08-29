"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useRouter } from "next/navigation";

const VisualChoice = () => {
  const router = useRouter();

  const visualOptions = [
    {
      id: "car-game",
      title: "Endless Car Game",
      description: "Drive through an endless road while listening to music",
      
      color: "bg-red-500",
    },
    {
      id: "gif",
      title: "Lofi GIF",
      description: "Relaxing animated visuals to accompany your music",
      
      color: "bg-teal-500",
    },
    {
      id: "aesthetic",
      title: "Aesthetic Video",
      description: "Beautiful looping visuals from YouTube",
     
      color: "bg-blue-500",
    },
  ];

  const handleVisualSelect = (visualType) => {
    localStorage.setItem("selectedVisual", visualType);
    router.push("/era-selection");
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <h1 className="text-3xl font-bold text-white text-center mb-4">
        What do you want to see?
      </h1>
      <p className="text-lg text-gray-300 text-center mb-8">
        Choose your visual companion while listening to music
      </p>

      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {visualOptions.map((option) => (
          <BentoGridItem
            key={option.id}
            title={option.title}
            description={option.description}
            onClick={() => handleVisualSelect(option.id)}
            header={
              <div
                className={`w-full h-32 rounded-lg flex flex-col items-center justify-center ${option.color}`}
              >
                <div className="text-4xl">{option.icon}</div>
                <span className="text-white text-xl font-bold">
                  {option.title}
                </span>
              </div>
            }
          />
        ))}
      </BentoGrid>

      <div className="text-center mt-8">
        <button
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          onClick={handleBack}
        >
          ← Back to Mood Selection
        </button>
      </div>
    </div>
  );
};

export default VisualChoice;
