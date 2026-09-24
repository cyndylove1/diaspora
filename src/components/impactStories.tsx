import cardImg1 from "../assets/home.jpg"; 
import cardImg2 from "../assets/gettyimages-576829274-612x612.jpg"; 
import cardImg3 from "../assets/students.jpg"; 
import cardImg4 from "../assets/habitat.jpg"; 

interface StoryCard {
  title: string;
  image: string;
  alt: string;
}

export default function ImpactStories() {
  const stories: StoryCard[] = [
    {
      title: "Empowering Individuals & Families to Transform Their Lives",
      image: cardImg1,
      alt: "Community members smiling after receiving support",
    },
    {
      title: "Providing Nutritious Meals to Communities in Need",
      image: cardImg2,
      alt: "Volunteers distributing fresh meals to families",
    },
    {
      title: "Sponsoring Students to Unlock Quality Education",
      image: cardImg3,
      alt: "Young students studying happily in a classroom",
    },
    {
      title: "Building Safe & Sustainable Homes for Families",
      image: cardImg4,
      alt: "Newly constructed safe home for a local family",
    },
  ];

  return (
    <section className="bg-gray-50 pt-16 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl max-w-xl mx-auto sm:text-5xl font-semibold text-[#184E2A] tracking-tight">
            Stories of Change: Impact in Action
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl overflow-hidden bg-[#C5EACF] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="w-full h-[260px] sm:h-[280px] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Light Green Bottom Label Area */}
              <div className=" bg-gradient-to-br from-[#EAF5EE] via-[#DCEFE3] to-[#CBE5D4] px-6 py-6 text-center flex-grow flex items-center justify-center">
                <h3 className="text-xl sm:text-lg font-medium text-[#133E1F]">
                  {story.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
