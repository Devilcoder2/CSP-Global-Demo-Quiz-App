import { useLocation } from "react-router-dom";
import StartTestHeader from "./StartTestHeader";

const LiveTest = () => {
  const location = useLocation();

  const { provider, name, length } = location.state || {};

  return (
    <div className="h-[100vh] bg-[#232333]">
      <StartTestHeader />
    </div>
  );
};

export default LiveTest;
