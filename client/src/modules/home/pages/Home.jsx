import { lazy, Suspense } from "react";

const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("../components/About"));
const CompanyOverview = lazy(() => import("../components/CompanyOverview"));
const Sectors = lazy(() => import("../components/Sectors"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const News = lazy(() => import("../components/News"));

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full"></div>
        </div>
      }
    >
      <Hero />
      <About />
      <CompanyOverview />
      <Sectors />
      <WhyChooseUs />
      <News />
    </Suspense>
  );
};

export default Home;