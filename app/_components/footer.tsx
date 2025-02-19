import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-5">
          <p className="text-sm text-gray-400">
            © 2025 Copyright <span className="font-bold"> Kaf Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
