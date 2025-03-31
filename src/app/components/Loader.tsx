'use client';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
    </div>
  );
};

export default Loading;
