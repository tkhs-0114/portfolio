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
      <div className="flex flex-wrap justify-center items-center mt-5 mx-10 bg-black bg-opacity-80 rounded-xl border-gray-100 text-center text-lg">
        <p>tkhs-0114</p>
        <p>私は情報系の大学生です。競プロやWebアプリ,3D技術などの様々な分野に興味があります。</p>
      </div>
      <Space height='30vh'/>
      <div id="works" className="w-full bg-black bg-opacity-60 text-4xl font-bold text-center border">
        Works
      </div>
      <div className="flex flex-wrap justify-center items-center m-5">
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