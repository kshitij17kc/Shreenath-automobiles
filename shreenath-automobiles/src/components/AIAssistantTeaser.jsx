export default function AIAssistantTeaser() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            AI-Powered Car Assistance
          </h2>

          <p className="text-gray-400 mb-6">
            Not sure what’s wrong with your car?  
            Our AI assistant helps customers understand car issues,
            suggests services, and tracks service status.
          </p>

          <ul className="text-gray-400 space-y-2 mb-6 text-sm">
            <li>✔ Explain car problems in simple language</li>
            <li>✔ Suggest required services</li>
            <li>✔ Assist during entire service journey</li>
          </ul>

          <button className="bg-red-500 px-6 py-3 rounded text-white
                             hover:bg-red-600 transition">
            Try AI Assistant (Coming Soon)
          </button>
        </div>

        {/* CHAT MOCKUP */}
        <div className="bg-black border border-gray-800 rounded-xl p-6">
          <p className="text-gray-300 text-sm mb-3">
            <span className="text-red-500 font-semibold">You:</span>  
            My car makes noise while braking
          </p>

          <p className="text-gray-300 text-sm">
            <span className="text-red-500 font-semibold">AI:</span>  
            This could be due to worn brake pads.  
            We recommend a brake inspection service.
          </p>
        </div>

      </div>
    </section>
  );
}
