import React from 'react'
import "./App.css";
import topImage from "../Images/top.png";
import profileImage from "../Images/profilePhoto.png";
import htmlcssImage from "../Images/htmlcss.png";
import jsImage from "../Images/js.png";
import tsImage from "../Images/typescript.png";
import phpImage from "../Images/php.jpg";
import bootstrapImage from "../Images/bootstrap.png";
import jqueryImage from "../Images/jquery.png";
import reactImage from "../Images/react.png";
import vscodeImage from "../Images/vscode.png";
import laravelImage from "../Images/laravel.png";
import awsImage from "../Images/aws.jpg";
import githubImage from "../Images/github.png";
import github2Image from "../Images/github2.png";
import mysqlImage from "../Images/mysql.png";
import airplaneImage from "../Images/airplane.jpg";
import instagramImage from "../Images/instagram.png";
import facebookImage from "../Images/facebook.jpg";
import qiitaImage from "../Images/qiita.png";
import wantedlyImage from "../Images/wantedly.png";

const App = () => {
  return (
    <main>
      <div className="main-container">
        <div className="photoWrapper">
          <img src={topImage} className="topImage" />
        </div>
        <p className="myName"> 菊間 陽介 </p>
        <div className="photoWrapper">
          <img src={profileImage} className="profileImage" />
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <div className="profileText" >
              <p>■生年月日</p>
              <p>1991年4月12日(31歳) <br />
                *2023年2月現在</p>
            </div>
            <div className="profileText" >
              <p>■出身地</p>
              <p>群馬県前橋市</p>
            </div>
            <div className="profileText" >
              <p>■現在の住まい</p>
              <p>東京都大田区</p>
            </div>
            <div className="profileText" >
              <p>■趣味</p>
              <p>旅行・読書・ボクシング・筋トレ
                YouTube・スポーツ観戦</p>
            </div>
          </div>
          <div className="col-md-4 offset-md-1">
            <div className="profileText" >
              <p>■資格</p>
              <p>普通自動車免許<br />
                ITパスポート<br />
                TOEIC745点<br />
                ※スピーキングスキルはビジネス・日常会話問題なし <br />
                ※通訳・国内アテンド経験あり</p>
            </div>
            <div className="profileText" >
              <p>■経歴</p>
              <p>明治学院大学入学・卒業 <br />
                旅行会社入社・退社 <br />
                広告代理店入社・退社 <br />
                IT企業入社・退社</p>
            </div>
          </div>
        </div>
        <div className="titleWrapper">
          <p>エンジニアスキル</p>
        </div>
        <div className="titleWrapper">
          <p>開発言語</p>
        </div>
        <div className="skillWrapper">
          <div className="skillItemsWrapper" >
            <img src={htmlcssImage} />
            <figcaption>HTML/CSS</figcaption>
          </div>
          <div className="skillItemsWrapper" >
            <img src={jsImage} />
            <figcaption>JavaScript</figcaption>
          </div>
          <div className="skillItemsWrapper" >
            <img src={tsImage} />
            <figcaption>TypeScript</figcaption>
          </div>
          <div className="skillItemsWrapper" >
            <img src={phpImage} />
            <figcaption> PHP </figcaption>
          </div>
        </div>
        <div className="titleWrapper">
          <p>フレームワーク・ライブラリ</p>
        </div>
        <div className="skillWrapper">
          <div className="skillItemsWrapper" >
            <img src={bootstrapImage} />
            <figcaption> BootStrap </figcaption>
          </div>
          <div className="skillItemsWrapper" >
            <img src={laravelImage} />
            <figcaption> Laravel </figcaption>
          </div>
          <div className="skillItemsWrapper" >
            <img src={jqueryImage} />
            <figcaption> jQuery </figcaption>
          </div>
          <div className="skillItemsWrapper" >
            <img src={reactImage} />
            <figcaption> react </figcaption>
          </div>
        </div>

        <div className="titleWrapper">
          <p>開発環境</p>
        </div>
        <div className="skillWrapper">
          <div className="skillItemsWrapper" >
            <img src={vscodeImage} />
            <figcaption> Visual Studio Code </figcaption>
          </div>

          <div className="skillItemsWrapper" >
            <img src={awsImage} />
            <figcaption> AWS </figcaption>
          </div>
        </div>

        <div className="titleWrapper">
          <p>管理ツール</p>
        </div>
        <div className="skillWrapper">
          <div className="skillItemsWrapper" >
            <img src={githubImage} />
            <figcaption> GitHub </figcaption>
          </div>
          <div className="skillItemsWrapper" >
            <img className="skillImage" src={mysqlImage} />
            <figcaption> MySQL </figcaption>
          </div>
        </div>
        <div className="titleWrapper">
          <p>制作物</p>
        </div>
        <div className="portfolioWrapper">
          <p className="portfolioText">航空会社口コミサイト(PHS/Laravel使用)</p>
          <a href="https://serene-journey-99399.herokuapp.com/"><img src={airplaneImage} /></a>
        </div>
        <div className="titleWrapper">
          <p>問い合わせ</p>
        </div>
        <div className="contact">
          <a href="https://www.instagram.com/yo910412/"><img src={instagramImage} /></a>
          <a href="https://www.facebook.com/YOSUKE19910412"><img src={facebookImage} /></a>
          <a href="https://github.com/yosuke-kikuma"><img src={github2Image} /></a>
          <a href="https://qiita.com/yo910412"><img src={qiitaImage} /></a>
        </div>
      </div >
    </main>
  );
}

export default App
