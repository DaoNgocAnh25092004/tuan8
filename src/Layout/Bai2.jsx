import React from "react";
import { PlayCircle, Bookmark, Search } from "lucide-react";

const RecipeCard = ({ title, time, imageUrl, hasVideo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
        )}
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-pink-500 mt-1">{time}</p>{" "}
        {/* Màu hồng cho thời gian */}
      </div>
      <div className="p-4 flex justify-end">
        <Bookmark className="w-6 h-6 text-gray-500 hover:text-red-500 transition-colors" />
      </div>
    </div>
  );
};

const RecipeCard2 = ({
  title,
  time,
  imageUrl,
  hasVideo,
  author,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      {" "}
      {/* Thay đổi flex direction */}
      <div className="md:w-1/2">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
        )}
      </div>
      <div className="md:w-1/2 p-4 flex-grow flex flex-col justify-between">
        {" "}
        {/* Thêm justify-between */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-pink-500 mt-1">{time}</p>
          {description && (
            <p className="text-gray-600 mt-2 text-sm">{description}</p>
          )}
          {author && (
            <p className="text-gray-700 mt-2 font-medium text-sm">
              By {author}
            </p>
          )}
        </div>
        <div className="flex justify-end mt-4">
          {" "}
          {/* Đẩy bookmark xuống dưới */}
          <Bookmark className="w-6 h-6 text-gray-500 hover:text-red-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-pink-500 mr-2">Chefify</span>
          {/* */}
        </div>

        {/* Search Bar */}
        <div className="flex-grow px-4 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="What would you like to cook?"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition-colors"
          >
            What to cook
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition-colors"
          >
            Recipes
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition-colors"
          >
            Ingredients
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition-colors"
          >
            Occasions
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition-colors"
          >
            About Us
          </a>
        </nav>

        {/* Login/Subscribe */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-700 hover:text-pink-500 transition-colors"
          >
            Login
          </a>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

const RecipeOfDay = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="md:w-100% h-200px">
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG0dby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Salad Caprese"
            className="rounded-lg shadow-lg w-full object-cover h-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/3 text-left absolute left-20 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-md">
          <span className="absolute top-4 left-4 text-xs font-semibold text-yellow-500 bg-yellow-100 px-2 py-1 rounded">
            Recipe of the day
          </span>
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
            Salad Caprese
          </h2>
          <p className="text-gray-600 mb-4">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>
          <div className="flex items-center mt-6 mb-4">
            {/* */}
            <span className="text-sm font-medium text-gray-700 ml-2">
              Salad Caprese
            </span>
          </div>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
            View now →
          </button>
        </div>
      </div>
    </div>
  );
};

const Bai2 = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Header />
      <RecipeOfDay />
      <div className="container mx-auto px-4 mt-6">
        <h1 className="text-3xl font-bold text-pink-500 text-center mb-8">
          This Summer Recipes
        </h1>
        <p className="text-gray-600 text-center mb-12">
          We have all your Independence Day sweets covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <RecipeCard
            title="Lotus delight salad"
            time="20 minutes"
            imageUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <RecipeCard
            title="Snack cakes"
            time="25 minutes"
            imageUrl="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <RecipeCard
            title="Lotus delight salad"
            time="20 minutes"
            imageUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <RecipeCard
            title="Snack cakes"
            time="25 minutes"
            imageUrl="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <h1 className="text-3xl font-bold text-pink-500 text-center mb-8">
          Recipes With Videos
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Cooking Up Culinary Creations with Step-by-Step Videos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <RecipeCard
            title="Lotus delight salad"
            time="20 minutes"
            imageUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <RecipeCard
            title="Snack cakes"
            time="25 minutes"
            imageUrl="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <RecipeCard
            title="Lotus delight salad"
            time="20 minutes"
            imageUrl="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <RecipeCard
            title="Snack cakes"
            time="25 minutes"
            imageUrl="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <h1 className="text-3xl mt-6 font-bold text-pink-500 text-center mb-8">
          Editor's Pick
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecipeCard2
            title="Stuffed sticky rice ball"
            time="34 minutes"
            imageUrl="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="Jennifer King"
            description="Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling..."
          />
          <RecipeCard2
            title="Strawberry smoothie"
            time="40 minutes"
            imageUrl="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="Matthew Martinez"
            description="Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers..."
          />
          <RecipeCard2
            title="Latte Art"
            time="19 minutes"
            imageUrl="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="Sarah Hill"
            description="Latte art is the skillful craft of creating captivating designs on the surface of a latte..."
          />
          <RecipeCard2
            title="Butter fried noodles"
            time="16 minutes"
            imageUrl="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            author="Julia Lopez"
            description="Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal..."
          />
        </div>
      </div>
    </div>
  );
};

export default Bai2;
