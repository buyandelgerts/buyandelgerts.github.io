const Footer = () => (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        <p className="text-sm mt-1">Built with passion and a lot of coffee.</p> 
      </div>
    </footer>
  );

export default Footer;