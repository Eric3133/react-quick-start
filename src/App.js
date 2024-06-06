import './App.css';
export function Profile () {
  return (
    <img src= "https://i.imgur.com/yXOvdOSs.jpg" alt= ''/>
  )
};

export function Gallery () {
  return (
  <section>
    <h1>Amazing scientists</h1>
    <Profile />
    <Profile />
    <Profile />
  </section>
  )
}

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      {/* <Profile /> */}
      <Gallery/>
    </div>
  );
}

export default App;
