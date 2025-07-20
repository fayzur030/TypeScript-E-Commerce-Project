const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} My Simple Shop. All rights reserved. @Md. Fayzur Rahman
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
