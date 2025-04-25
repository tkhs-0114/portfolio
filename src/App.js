import Works from "./Works";

function App() {
  return (
    <div className="z-10 relative text-gray-50">
      <Space height='10vh'/>
      <div id="title" className="text-center text-4xl font-bold">
        tkhs-0114 's Portfolio
        <Space height='70vh'/>
        <div className="animate-bounce">↓↓↓</div>
      </div>
      <Space height='110vh'/>
      <div id="about" className="w-full bg-black bg-opacity-60 text-4xl font-bold text-center border">
        About Me
      </div>
      <Space height='30vh'/>
      <div id="works" className="w-full bg-black bg-opacity-60 text-4xl font-bold text-center border">
        Works
      </div>
      <div className="flex flex-wrap justify-center items-center m-20">
        <Works />
      </div>
      <Space height='70vh'/>
    </div>
  );
}

export default App;

function Space(props) {
  return (
    <div style={{ height: props.height}}></div>
  )
}