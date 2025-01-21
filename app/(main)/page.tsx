import AdminProfile from "../_components/AdminProfile";
import BlogSection from "./_components/BlogSection";
import Hero from "./_components/Hero";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <hr className="border-0 h-[2px] w-1/2
       bg-gradient-to-r from-gray-300
        via-gray-500 to-gray-300 
        my-10 mx-auto rounded-full" />
      <BlogSection />
      <hr className="border-0 h-[2px] 
      w-1/2 bg-gradient-to-r from-gray-300
       via-gray-500 to-gray-300 my-10 
       mx-auto rounded-full"  />
      <AdminProfile />
    </div>
  );
}
