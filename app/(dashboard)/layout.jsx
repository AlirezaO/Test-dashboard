const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>This is the Dashboard Header</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
