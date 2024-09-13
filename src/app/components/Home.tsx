import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Home = () => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const onboardingSteps = [
    {
      title: "Welcome to AI Room Designer",
      description: "Create stunning room designs with the power of AI.",
      action: "Next",
    },
    {
      title: "Choose Your Room",
      description: "Select the type of room you want to design.",
      action: "Next",
    },
    {
      title: "Pick Your Style",
      description: "Choose from various interior design styles.",
      action: "Next",
    },
    {
      title: "Generate Designs",
      description: "Specify the number of designs you want to create.",
      action: "Start Designing",
    },
  ];

  const handleOnboardingNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFirstTimeUser(false);
    }
  };

  const FirstTimeUserView = () => (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <Card className="w-full max-w-md bg-white p-8 text-gray-800">
        <h1 className="mb-4 text-2xl font-bold">
          {onboardingSteps[currentStep].title}
        </h1>
        <p className="mb-6">{onboardingSteps[currentStep].description}</p>
        {currentStep === 1 && (
          <Select>
            <SelectTrigger className="mb-4 w-full">
              <SelectValue placeholder="Select room type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="living-room">Living Room</SelectItem>
              <SelectItem value="bedroom">Bedroom</SelectItem>
              <SelectItem value="kitchen">Kitchen</SelectItem>
            </SelectContent>
          </Select>
        )}
        {currentStep === 2 && (
          <Select>
            <SelectTrigger className="mb-4 w-full">
              <SelectValue placeholder="Select room style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="traditional">Traditional</SelectItem>
              <SelectItem value="minimalist">Minimalist</SelectItem>
            </SelectContent>
          </Select>
        )}
        {currentStep === 3 && (
          <Input
            type="number"
            placeholder="Number of renders"
            className="mb-4"
          />
        )}
        <Button onClick={handleOnboardingNext} className="w-full">
          {onboardingSteps[currentStep].action}
        </Button>
      </Card>
    </div>
  );

  const ReturningUserView = () => (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-100 p-6">
        <h2 className="mb-4 text-xl font-bold">Design Input</h2>
        <div className="flex flex-col space-y-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select room type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="living-room">Living Room</SelectItem>
              <SelectItem value="bedroom">Bedroom</SelectItem>
              <SelectItem value="kitchen">Kitchen</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select room style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="traditional">Traditional</SelectItem>
              <SelectItem value="minimalist">Minimalist</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Number of renders"
            className="mb-4"
          />
          <Button className="w-full">Generate Designs</Button>
        </div>
      </div>
      <div className="w-2/3 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Generated Designs</h2>
          <Button variant="outline">Previous Generations</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Placeholder for generated images */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex h-48 items-center justify-center rounded-lg bg-gray-200"
            >
              Image {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main>
      {isFirstTimeUser ? <FirstTimeUserView /> : <ReturningUserView />}
    </main>
  );
};

export default Home;
