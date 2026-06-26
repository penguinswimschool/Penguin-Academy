export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Loading */}
        <nav className="mb-8">
          <div className="h-6 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
        </nav>

        {/* Header Loading */}
        <header className="mb-8">
          <div className="flex items-center mb-4">
            <div className="h-6 bg-gray-200 rounded-full w-20 mr-2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
          </div>
          
          <div className="h-12 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>

          {/* Author and Date Loading */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full mr-4 animate-pulse"></div>
              <div>
                <div className="h-5 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Image Loading */}
        <div className="mb-8">
          <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>

        {/* Content Loading */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-2/3 animate-pulse"></div>
        </div>

        {/* Author Bio Loading */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <div className="h-6 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
          <div className="flex items-start">
            <div className="h-16 w-16 bg-gray-200 rounded-full mr-4 flex-shrink-0 animate-pulse"></div>
            <div className="flex-1">
              <div className="h-5 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section Loading */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="h-8 bg-gray-200 rounded-lg mb-6 w-48 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
        </div>
      </article>
    </div>
  )
} 