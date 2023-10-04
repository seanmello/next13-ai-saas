import { CrispChat } from "@/components/crisp-chat";

const Testimonials = () => {
  // Testimonials code here...
};

const HomePage = () => {
  return (
    <div>
      <use-client />
      <CrispProvider />
      <Testimonials />
      <a href="https://dust.tt/w/a2354950ab/assistant/4771371b76" className="text-center block mt-8 text-blue-500 hover:text-blue-700">
        Learn More
      </a>
    </div>
  );
};

export default HomePage;
