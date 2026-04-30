import React, { useState } from "react";
import { summarizeText } from "./api";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async () => {
    const result = await summarizeText(text);
    setSummary(result.summary);
  };

  return (
    <div className="container">
      <h1>AI Notes Summarizer</h1>

      <textarea
        placeholder="Paste your notes..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>Summarize</button>

      {summary && (
        <div className="result">
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
