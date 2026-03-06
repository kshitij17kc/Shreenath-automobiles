export default function AIHighlight() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">
            AI-Powered Car Assistance
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Not sure what’s wrong with your car?  
            Our AI assistant guides you step-by-step.
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-3 rounded">
            Chat with AI
          </button>
        </div>

        <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl">
          <p className="font-semibold">You:</p>
          <p>My car vibrates while braking</p>
          <p className="mt-3 font-semibold text-primary">AI:</p>
          <p>Possible brake pad wear. We recommend inspection.</p>
        </div>
      </div>
    </section>
  );
}
