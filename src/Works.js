import Block from "./components/Block";

export default function Works() {
    return (
        <>
<Block
    title="入退室管理アプリ"
    team={true}
    stack={["flask", "selenium"]}
    description="部室の入退室を検知できるシステムああaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
<Block
    title="KC3登壇"
    stack={["docker"]}
    description="「１からはじめるDocker入門」を開催" />
<Block
    title="砂時計"
    stack={["arduino"]}
    description="
        **M5StickC+2**の加速度センサーを用いて砂時計を作成した。<br>
        ArduinoIDEのコンパイルが遅かったのでVScodeの**Platform-io**を使用して書き込んだ<br>" />
        </>
    )
}