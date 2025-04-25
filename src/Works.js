import Block from "./components/Block";

export default function Works() {
    return (
        <>
<Block
    title="ポートフォリオ"
    stack={["react"]}
    description="
        **react**でポートフォリオを作成した。<br>
        背景の飛行船は**3Dライブラリ等を使用せず**に、canvasに**アフィン変換**や**透視投影行列**を用いて計算し、描画している。<br>
        [GitHub：リポジトリ](https://github.com/tkhs-0114/portfolio)<br>
        " />
<Block
    title="KC3-Hack"
    team={true}
    stack={["nextjs", "oauth", "mysql", "docker"]}
    description="
        **KC3**(関西情報系大学カンファレンス)が主催するハッカソンに参加した。<br>
        地図に登録された曲を位置情報から再生する**Webアプリ**を作成した。<br>
        SpotifyAPIを使用する為に**OAuth認証**を使用した。<br>
        **KD-tree**を使用して高速に動作するアルゴリズムを使用している。<br>
        [GitHub：リポジトリ](https://github.com/kc3hack/2025_2)<br>
        " />
<Block
    title="VScode拡張機能"
    stack={["nodejs", "electron", "typescript"]}
    description="
        VScodeのサイドバーにアニメーションを持たせる**拡張機能**を作成した。<br>
        通常の作成方法ではVScodeのUIまで干渉できない為、**electron**で作成されたVScodeに自作の設定ファイルを追記する拡張機能を作成し、内部からアニメーションを適用した。<br>
        [VScode Marketplace](https://marketplace.visualstudio.com/items?itemName=tkhs-0114.vscode-animation)<br>
        [GitHub：リポジトリ](https://github.com/tkhs-0114/vscode-sidebar-animation)<br>
        " />
<Block
    title="RunCat-CUI"
    stack={["python", "unix", "vim", "rust"]}
    description="
        ターミナル上を猫が走る**CUIアプリ**を作成した。<br>
        Rustで実装する予定だったが、LT大会で使用する予定だったので断念し、Pythonで実装した。<br>
        画面下部で猫を走らせながら、上部でターミナルを操作するため、**並列処理**を使用したり、**疑似端末**を使用したり等、Unix周りの知識も必要になった。<br>
        CUI上に画像を表示する処理は点字を使用し、6倍の密度でドットを表示することが可能である。<br>
        LT大会では**企業賞**と**優秀賞**を頂いた。<br>
        せっかくCUIのアプリを作るので**Vim**を使用して開発した。<br>
        [GitHub：リポジトリ](https://github.com/tkhs-0114/RunCat-CUI)<br>
        " />
<Block
    title="モバイルオーダー"
    team={true}
    stack={["flask", "mysql", "apache", "docker", "uwsgi"]}
    description="
        大学の文化祭で販売するフランクフルトをオンラインで予約・注文できる**Webアプリ**を作成した。<br>
        **コンテナ環境**とサーバへのデプロイを主に担当、サーバ側の処理も一部作成した。<br>
        **さくらインターネット**のサーバに**Apache**と**uwsgi**を使用してFlaskアプリをのっけた。
        [GitHub：リポジトリ](https://github.com/oithxs/mobile-order-2024)<br>
        " />
<Block
    title="近畿大ハッカソン"
    team={true}
    stack={["javascript", "html5", "css3", "github"]}
    description="
        近畿大学で開催されたハッカソン**UnionHack**に参加、**企業賞**を頂いた。<br>
        「囲いパズル」のランダムな問題を生成する為のアルゴリズムを作成した。<br>
        [GitHub-Pages：完成品](https://tenhou-ravenclaw.github.io/Slitherlink/)<br>
        [GitHub：リポジトリ](https://github.com/tenhou-Ravenclaw/Slitherlink)<br>
        " />
<Block
    title="入退室管理アプリ"
    team={true}
    stack={["flask", "selenium", "docker", "github"]}
    description="
        部室への人の入退室を管理できる**Webアプリ**を開発した。<br>
        WiFiの管理画面から現在アクセス中の端末リストをスクレイピングして、表示する。<br>
        初めてのGitを活用したチーム開発<br>
        [GitHub：リポジトリ](https://github.com/oithxs/clubroom-observer)<br>
        " />
<Block
    title="KC3登壇"
    stack={["docker"]}
    description="
        **KC3**(関西情報系団体交流会)にて**「1から始めるDocker入門」**で登壇した。<br>
        docker compose を用いた開発用コンテナを作成する為のプロセスを紹介した。<br>
        [KC3-2024](https://kc3.me/conf/conf2024/2024-timetable/)<br>
        [GitHub：サンプルコード](https://github.com/tkhs-0114/1-Docker)
        " />
<Block
    title="砂時計"
    stack={["arduino"]}
    description="
        **M5StickC+2**の加速度センサーを用いて砂時計を作成した。<br>
        ArduinoIDEのコンパイルが遅かったのでVScodeの**Platform-io**を使用して書き込んだ<br>
        " />
        </>
    )
}