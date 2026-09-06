import Navbar from "../components/layout/Navbar";
import LandingPage from "./LandingPage";
import WorkspacePreview from "../components/common/WorkspacePreview";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <LandingPage />

      <WorkspacePreview />
    </>
  );
};

export default HomePage;
