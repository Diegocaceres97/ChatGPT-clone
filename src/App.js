const App = () => {
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
      <ul className="feed">

      </ul>
      <div className="bottom-section">
        <div className="input-container">
          <input />
          <div id="submit">➢</div>
        </div>
        <p className="info">
          Chat GPT April 27. Free research preview.
        </p>
      </div>
     </section>
    </div>
  );
}

export default App;
