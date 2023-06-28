const collections = [
  {
    id: 1,
    title: "Houston Food Cultures",
    description:
      "Experience the culinary wonders of Houston's diverse communities at our upcoming exhibition. Explore a range of food-related artifacts and exhibits featuring the unique food cultures of Houston.",
    imageUrl:
      "https://www.holidify.com/images/cmsuploads/compressed/Vietnamese_cuisine_Hoi_An_283883420354429_20201215132732.jpg",
  },
  {
    id: 2,
    title: "Tex-Mex Cuisine",
    description:
      "Discover the rich history and flavors of Tex-Mex cuisine, a unique fusion of Mexican and American culinary traditions that has become a beloved staple of Houston's food scene.",
    imageUrl:
      "https://www.tasteofhome.com/wp-content/uploads/2021/09/THJJ21_PU5312_B02_10_1bC_tex-mex_Taste-of-Home.jpg",
  },
  {
    id: 3,
    title: "Asian Cuisine",
    description:
      "From sushi to pho, Houston boasts a vibrant Asian food scene. Experience the delicious flavors and traditions of this diverse cuisine at our exhibition, featuring exhibits and artifacts from the region's many different food cultures.",
    imageUrl:
      "https://qul.imgix.net/3e193bb2-8e28-4e67-aed9-7bbfdac6b236/475679_sld.jpg",
  },
];

function Collections() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-2 mt-8">
        Houston Food Cultures Exhibition
      </h2>

      <div className="grid grid-cols-1   md:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-blue-300 rounded-lg shadow-md">
            <img
              src={collection.imageUrl}
              alt={collection.title}
              className="rounded-t-lg h-64 w-full object-cover"
            />
            <div className="p-4  flex justify-between flex-col ">
              <h3 className="flex text-lg font-bold mb-2">
                {collection.title}
              </h3>
              <p className="flex text-gray-600">{collection.description}</p>
              <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
