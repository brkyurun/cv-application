function App() {
  return (
    <div className="App">
      <h1 className="text-sky-400 text-2xl underline underline-offset-8 text-center">
        Hello World!
      </h1>
      <ul>
        {["one", "two", "three", "four", "five"].map((num) => (
          <h2>{num}</h2>
        ))}
      </ul>
    </div>
  );
}

export default App;
