import { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const handleInput = async (e) => {
    setText(e.target.value);
  };

  const summariser = async () => {
    setLoading(true); // Set loading to true when the request starts
    try {
      const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: text,
          lang: 'en',
          engine: '2'
        },
        headers: {
          'x-rapidapi-key': 'eff8cf4ff9msh27f3e0700847401p18e720jsn6dd6fda059bc',
          'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary("Failed to fetch summary. Please try again.");
    } finally {
      setLoading(false); // Set loading to false when the request finishes
    }
  };

  return (
    <div className='w-screen h-screen flex items-center flex-col bg-slate-900 gap-y-10'>
      <h1 className="text-3xl font-bold underline text-orange-700">Article Summarizer</h1>
      <div className='h-20 w-[800px] bg-slate-900 flex justify-center items-center gap-1'>
        <input
          type="text"
          className='w-[350px] h-10 rounded-lg outline-none border-none px-2'
          onChange={handleInput}
          placeholder='paste link here'
        />
        <button
          className='text-white w-20 h-10 bg-blue-400 rounded-lg'
          onClick={summariser}
          disabled={loading} // Disable button when loading
        >
          {loading ? "Loading..." : "Click me"}
        </button>
      </div>
      <div className='w-[800px] h-80 bg-orange-400 rounded-lg p-2 flex justify-start'>
        {loading ? "Loading summary..." : summary}
      </div>
    </div>
  );
}

export default App;
