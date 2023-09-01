const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-gray-700"></div>
      </div>
    </div>
  );
};

export default Loading;
