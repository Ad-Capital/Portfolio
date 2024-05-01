import Arrow from "@/public/Arrow.json";

import Lottie from "lottie-react";

function App() {
  return (
        <div className="Lottie">
          <Lottie loop={true} animationData={Arrow} />
        </div>
  );
}

export default App;