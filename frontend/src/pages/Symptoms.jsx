import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { assets } from '@/assets/assets';

const symptomsData = {
  common: [
    {
      title: "Headache",
      description: "Pain or discomfort in the head, scalp, or neck",
      image: assets.headache,
      causes: ["Stress", "Dehydration", "Eye strain", "Migraine", "Tension"],
      whenToSeekHelp: "If headache is severe, sudden, or accompanied by fever, stiff neck, or confusion",
      selfCare: ["Rest in a quiet, dark room", "Stay hydrated", "Use over-the-counter pain relievers"]
    },
    {
      title: "Fever",
      description: "Body temperature above 98.6°F (37°C)",
      image: assets.fever,
      causes: ["Infection", "Inflammation", "Heat exhaustion", "Certain medications"],
      whenToSeekHelp: "If temperature exceeds 103°F (39.4°C) or lasts more than 3 days",
      selfCare: ["Rest", "Stay hydrated", "Take fever reducers if needed"]
    },
    // Add more common symptoms
  ],
  digestive: [
    {
      title: "Nausea",
      description: "Sensation of unease in the stomach with an urge to vomit",
      causes: ["Food poisoning", "Motion sickness", "Pregnancy", "Viral infections"],
      whenToSeekHelp: "If accompanied by severe pain or dehydration",
      selfCare: ["Eat bland foods", "Stay hydrated", "Rest"]
    },
    // Add more digestive symptoms
  ],
  respiratory: [
    {
      title: "Shortness of Breath",
      description: "Difficulty breathing or feeling like you can't get enough air",
      causes: ["Asthma", "Anxiety", "Exercise", "Heart problems", "Lung conditions"],
      whenToSeekHelp: "If sudden, severe, or accompanied by chest pain",
      selfCare: ["Use prescribed inhalers", "Practice deep breathing", "Avoid triggers"]
    },
    // Add more respiratory symptoms
  ]
};

const SymptomCard = ({ symptom }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center gap-4">
        {symptom.image && (
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={symptom.image} 
              alt={symptom.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <CardTitle>{symptom.title}</CardTitle>
          <CardDescription>{symptom.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="causes">
            <AccordionTrigger>Common Causes</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4">
                {symptom.causes.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="when-to-seek-help">
            <AccordionTrigger>When to Seek Help</AccordionTrigger>
            <AccordionContent>
              {symptom.whenToSeekHelp}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="self-care">
            <AccordionTrigger>Self-Care Tips</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4">
                {symptom.selfCare.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

const Symptoms = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Medical Symptoms Guide</h1>
        <p className="text-muted-foreground">
          Learn about common symptoms, their causes, and when to seek medical attention.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search symptoms..."
            className="w-full pl-8 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
        <Button>Search</Button>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="common" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="common">Common</TabsTrigger>
          <TabsTrigger value="digestive">Digestive</TabsTrigger>
          <TabsTrigger value="respiratory">Respiratory</TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[600px] pr-4">
          <TabsContent value="common" className="mt-0">
            {symptomsData.common.map((symptom, index) => (
              <SymptomCard key={index} symptom={symptom} />
            ))}
          </TabsContent>

          <TabsContent value="digestive" className="mt-0">
            {symptomsData.digestive.map((symptom, index) => (
              <SymptomCard key={index} symptom={symptom} />
            ))}
          </TabsContent>

          <TabsContent value="respiratory" className="mt-0">
            {symptomsData.respiratory.map((symptom, index) => (
              <SymptomCard key={index} symptom={symptom} />
            ))}
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default Symptoms;
