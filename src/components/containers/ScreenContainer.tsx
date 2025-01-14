const ScreenContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen flex flex-col bg-white">{children}</div>;
};

export default ScreenContainer;
