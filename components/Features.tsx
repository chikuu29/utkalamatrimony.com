

export default function Features() {
  return (
    <section className="bg-[#fef9f0] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#444] mb-4">
          Our <span className="text-[#b69a60]">Features</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Discover how Utkal Matrimony helps you find your perfect match
          effortlessly.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-[#b69a60] text-4xl mb-4">💞</div>
            <h3 className="text-xl font-semibold text-[#444] mb-2">
              Verified Profiles
            </h3>
            <p className="text-gray-600">
              We ensure every profile is verified for genuine connections.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-[#b69a60] text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#444] mb-2">
              Smart Matchmaking
            </h3>
            <p className="text-gray-600">
              Our AI-based algorithm suggests the best matches based on your
              preferences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-[#b69a60] text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-[#444] mb-2">
              Privacy First
            </h3>
            <p className="text-gray-600">
              Your personal details and photos are fully secure with advanced
              privacy controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
