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
      <div className="mt-5 mx-auto p-5 max-w-lg bg-black bg-opacity-80 rounded-xl border-gray-100 text-center text-lg">
        <div className="text-2xl">tkhs-0114</div>
        <div>
          　私は情報系大学の3年生です。Webアプリ や 競技プログラミング ,3DCGなど様々な分野に興味があり、日々学習しています。
          ランダムなチームで行う ハッカソン が好きなので、長期休業の時期は参加しています。
          プログラムは自分で考えて書く事も，先人が生み出した偉大なアルゴリズムを知る事もどちらも好きです。
        </div>
        <div className="text-left">資格
          <ul>
            <li>- 第二級 陸上特殊無線技士</li>
            <li>- 工事担任者 第二級デジタル通信</li>
            <li>- 危険物取扱者 乙種4類</li>
            <li>- 普通自動車第一種免許(MT)</li>
          </ul>
        </div>
      </div>
      <div className="mt-5 pb-10 mx-auto p-2 max-w-2xl bg-black bg-opacity-80 rounded-xl border-gray-100 text-center text-lg">
        <Icon src="javascript" /><Icon src="python" /><Icon src="typescript" />
        <Icon src="react" /><Icon src="nextjs" /><Icon src="git" />
        <Icon src="docker" /><Icon src="c" /><Icon src="fastapi" />
        <Icon src="java" /><Icon src="mysql" /><Icon src="flask" />
        <div className="text-white text-sm mx-5">
          <span className="float-left">よく使う</span>
          <span className="float-right">使ったことがある</span>
        </div>
      </div>
      <Space height='20vh'/>
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
function Icon(props) {
  return (
    <img className="aspect-square w-10 inline-block bg-gray-500 bg rounded-full p-2 my-2 opacity-90" src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${props.src}/${props.src}-original.svg`}></img>
  )
}