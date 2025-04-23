import Block from "./components/Block";

function App() {
  return (
    <div className="z-10 relative text-gray-50">
      <div style={{ height: '10vh' }}></div>
      <div className="text-center text-4xl font-bold">
        tkhs-0114 's Portfolio
      </div>
      <div style={{ height: '70vh' }}></div>
      <div className="animate-bounce margin-auto text-center">
        sita
      </div>
      <div className="h-screen"></div>
      <div className="w-full bg-gray-400 bg-opacity-90 text-4xl font-bold text-center">
        Works
      </div>
      <div className="flex flex-wrap justify-center items-center">
      <Block
        title="入退室管理アプリ"
        team={true}
        stack={["flask", "selenium"]}
        description="部室の入退室を検知できるシステムあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
      <Block
        title="KC3登壇"
        stack={["docker"]}
        description="「１からはじめるDocker入門」を開催" />
        <Block title="砂時計" stack={["arduino"]} description="M5Stickで加速度センサを用いた砂時計" />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
