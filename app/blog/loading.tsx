export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg max-w-3xl mx-auto animate-pulse"></div>
        </div>

        {/* Featured Posts Loading */}
        <div className="mb-12">
          <div className="h-8 bg-gray-200 rounded-lg mb-6 w-48 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="h-4 bg-gray-200 rounded-full w-16 mr-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-20 animate-pulse"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-gray-200 rounded-full mr-3 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded-lg w-24 animate-pulse"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-lg w-20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Posts Loading */}
        <div>
          <div className="h-8 bg-gray-200 rounded-lg mb-6 w-32 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="h-3 bg-gray-200 rounded-full w-12 mr-2 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-16 animate-pulse"></div>
                  </div>
                  <div className="h-5 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-6 w-6 bg-gray-200 rounded-full mr-2 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded-lg w-20 animate-pulse"></div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-lg w-16 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 