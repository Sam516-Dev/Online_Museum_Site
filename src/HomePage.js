import image1 from "../src/assets/museum-image1.jpg";
import image2 from "../src/assets/museum-image2.jpg";
import image3 from "../src/assets/museum-image3.jpg";

function HomePage() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Food Appetites
            </h1>
            <p className="mt-1 text-xl text-gray-600">
              Explore our vast collections and exhibits.
            </p>
          </div>
        </div>
      </div>

      <div className="-mt-16 bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
              <img
                className="w-full h-80 rounded-lg object-cover"
                src="https://assets3.thrillist.com/v1/image/3078503/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
                alt="Museum Image 1"
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium">Barbeque in Houston </h3>
                <p className="mt-2 text-base text-gray-500">
                  Houston is known for its delicious barbecue, featuring
                  slow-cooked meats and a variety of bold sauces.
                </p>
              </div>
              <span className="absolute inset-0"></span>
            </div>

            <div className="group relative">
              <img
                className="w-full h-80 rounded-lg object-cover"
                src="https://www.papercitymag.com/wp-content/uploads/2019/10/candente-combo-plate-1024x1024.jpg"
                alt="Museum Image 2"
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  {" "}
                  Tex-Mex cuisine in Houston
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Houston's Tex-Mex cuisine combines Mexican dishes with
                  Texas-style flavors and ingredients, known for bold and spicy
                  flavors.
                </p>
              </div>
              <span className="absolute inset-0"></span>
            </div>
            <div className="group relative">
              <img
                className="w-full h-80 rounded-lg object-cover"
                src="https://www.bautrip.com/images/food/creole-cuisine-jambalaya.jpg"
                alt="Museum Image 3"
              />
              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  {" "}
                  Louisiana Creole cuisine{" "}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Louisiana Creole cuisine is a blend of French, Spanish,
                  African, and Native American flavors and cooking techniques,
                  popular in Louisiana.
                </p>
              </div>
              <span className="absolute inset-0"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
