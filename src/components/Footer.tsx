import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <Droplets className="h-8 w-8" />
            <span className="text-2xl font-bold">Abhuday Pure Drops</span>
          </div>
          <p className="text-background/80 max-w-md">
            Your trusted partner in pure, safe drinking water solutions
          </p>
          <div className="pt-4 border-t border-background/20 w-full">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Abhuday Pure Drops. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
