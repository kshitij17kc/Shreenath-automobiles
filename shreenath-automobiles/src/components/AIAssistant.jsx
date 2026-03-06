import { useState } from "react";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I’m your car service assistant. How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // User message
    const userMsg = { sender: "user", text: input };

    // Dummy AI reply
    const aiMsg = {
      sender: "ai",
      text:
        "Thanks for your query. Based on your issue, we recommend a general inspection. You can book a service anytime."
    };

    setMessages([...messages, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <section id="ai-assistant" className="py-20 bg-gray-950">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Talk to Our AI Assistant
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Describe your car problem and get instant guidance
        </p>

        <div className="bg-black border border-gray-800 rounded-xl p-6">
          
          {/* Chat Window */}
          <div className="h-64 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "ml-auto bg-red-500 text-white"
                    : "mr-auto bg-gray-800 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your car issue here..."
              className="flex-1 bg-gray-900 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-red-500 px-5 py-2 rounded text-white hover:bg-red-600 transition"
            >
              Send
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
