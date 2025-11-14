import { useState } from "react";
import { Save, FileText, Image, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

const AdminCMS = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("homepage");

  // Mock content data
  const [content, setContent] = useState({
    homepage: {
      heroTitle: "Discover Inner Peace Through Mindful Wellness",
      heroSubtitle: "Pakistan's first AI-driven wellness ecosystem",
      aboutPreview: "At Mindful Yogi, we blend ancient wisdom with modern technology...",
    },
    about: {
      mission: "To make wellness accessible to everyone in Pakistan through AI-powered guidance...",
      vision: "A society where mental and physical wellness is prioritized...",
    },
    services: {
      intro: "Explore our comprehensive wellness services designed for your journey...",
    },
  });

  const handleSave = (section: string) => {
    toast({
      title: "Content Saved",
      description: `${section} content has been updated successfully`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif text-foreground">Content Management</h1>
          <p className="text-muted-foreground">Update website content and media</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        <TabsContent value="homepage" className="space-y-6">
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-serif">Homepage Content</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="heroTitle">Hero Title</Label>
                <Input
                  id="heroTitle"
                  value={content.homepage.heroTitle}
                  onChange={(e) => setContent({
                    ...content,
                    homepage: { ...content.homepage, heroTitle: e.target.value }
                  })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                <Input
                  id="heroSubtitle"
                  value={content.homepage.heroSubtitle}
                  onChange={(e) => setContent({
                    ...content,
                    homepage: { ...content.homepage, heroSubtitle: e.target.value }
                  })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="aboutPreview">About Preview</Label>
                <Textarea
                  id="aboutPreview"
                  value={content.homepage.aboutPreview}
                  onChange={(e) => setContent({
                    ...content,
                    homepage: { ...content.homepage, aboutPreview: e.target.value }
                  })}
                  className="mt-2 min-h-[120px]"
                />
              </div>
            </div>

            <Button onClick={() => handleSave("Homepage")} className="w-full md:w-auto">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-serif">About Page Content</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="mission">Mission Statement</Label>
                <Textarea
                  id="mission"
                  value={content.about.mission}
                  onChange={(e) => setContent({
                    ...content,
                    about: { ...content.about, mission: e.target.value }
                  })}
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div>
                <Label htmlFor="vision">Vision Statement</Label>
                <Textarea
                  id="vision"
                  value={content.about.vision}
                  onChange={(e) => setContent({
                    ...content,
                    about: { ...content.about, vision: e.target.value }
                  })}
                  className="mt-2 min-h-[120px]"
                />
              </div>
            </div>

            <Button onClick={() => handleSave("About")} className="w-full md:w-auto">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-serif">Services Page Content</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="servicesIntro">Services Introduction</Label>
                <Textarea
                  id="servicesIntro"
                  value={content.services.intro}
                  onChange={(e) => setContent({
                    ...content,
                    services: { ...content.services, intro: e.target.value }
                  })}
                  className="mt-2 min-h-[120px]"
                />
              </div>
            </div>

            <Button onClick={() => handleSave("Services")} className="w-full md:w-auto">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Image className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-serif">Media Library</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer"
                >
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
              ))}
            </div>

            <Button className="w-full md:w-auto">
              <Image className="h-4 w-4 mr-2" />
              Upload Media
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminCMS;
