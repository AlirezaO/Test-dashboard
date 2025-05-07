const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>This is the App Header</h1>
      {children}
    </div>
  );
};

export default AppLayout;
