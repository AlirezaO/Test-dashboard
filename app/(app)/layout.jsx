import NavBar from "../../components/custom_components/NavBar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-600 relative">
      <NavBar />
      {children}
    </div>
  );
};

export default AppLayout;
