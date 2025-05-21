const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-600 relative">
      {children}
    </div>
  );
};

export default AppLayout;
