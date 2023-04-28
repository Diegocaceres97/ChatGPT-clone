import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState(null);
  const [value, setValue] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const getMessage = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();

      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }

    if (currentTitle && value && message) {
      setPreviousChats((prevState) => [
        ...prevState,
        { title: currentTitle, role: "user", content: value },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  return (
    <div className="App">
      <section className="side-bar">
        <button>＋ New Chat</button>
        <ul className="history">
          <li>Blugh</li>
        </ul>
        <nav>
          <p>Made by Diego</p>
        </nav>
      </section>
      <section className="main">
        <h1>DiegoGPT</h1>
        { !currentTitle && <h1>DiegoGPT</h1>}
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessage}>
              ➢
            </div>
          </div>
          <p className="info">Chat GPT April 27. Free research preview.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
