import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="text-red-500 text-5xl font-black underline flex-center h-[100vh]">
      App
    </div>
  );
};

export default App;
