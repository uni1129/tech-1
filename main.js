'use strict'

// データ構造編

// 1. forEachを使わず定数名scoresに80.90.40.70と配列を定義しconsole.log()で一つずつ表示させなさい。
{
  const scores = [80, 90, 40, 70];
  console.log(scores);
}

// 2. forEachを使い定数名scoresに80.90.40.70と定義し、それぞれをindexキーを用いてconsole.log()で表示させなさい。
{
  const scores = [80, 90, 40, 70];
  scores.forEach((score, index) => {
    console.log(`${index}:${score}`)
  });
}

// 3. mapを使い定数pricesに180.190.200という配列を定義しそれぞれ＋20した値をupdatedpricesという名前でconsole.logを用いて実行しなさい。
{
  const prices = [180, 190, 200];

  const updatedprices = prices.map((price) => {
    return price + 20;
  });
  console.log(updatedprices);
}

// 4. 3をアロー関数で省ける(省略)ところは省き簡潔に表示してください。
{
  const updatedprices = prices => prices + 20;
  console.log(updatedprices(180, 190, 200,));
}

// 5. filterを用いてnumbersという定数に配列1.4.7.8.10と定義する。偶数は表示奇数は非表示にしてください。
{
  const numbers = [1, 4, 7, 8, 10];

}

// 6. 5.の、if文をもっと短くして表示させてください。
{

}

// 7. 定数strにhelloと定義。そしてHelloの文字数を取得してください。
{
  const str = 'Hello';
  

}

// 8. 7.のhelloのllのみ取得してください。
{

}

// 9. 7.のhelloのeのみ取得してください。
{

}

// 10. 定数tに配列で2023,7,29と定義。そこから、カンマをスラッシュにjoinを用いて繋げまでください。
{
  const t = [2023, 7, 29];
  console.log(t.join('/'));
}

// 11. 定数scoresの中に配列10,3,9を入れてforEachでscoresの中身全て足し合わせてそれをsumという関数に置き換えてください。最後にconsole.logで表示してください。
{
  const scores = [10, 3, 9];
  let sum = 0;
  scores.forEach((scores) => {
    sum += scores;
  });
  console.log(sum);
}

// 12. 11のscoresとsumを使い平均(avg)を出してください。計算方法はsum/scores.length=avgです。console.logで表示した答えは7.3333333になります。
{
  const scores = [10, 3, 9];
  let sum = 0;
  scores.forEach((scores) => {
    sum += scores;
  });
  console.log(`${sum / scores.length}`);
}

// 13. 12のavgをそのまま使い、小数点以下切り捨てしてください。
{
  const scores = [10, 3, 9];
  let sum = 0;
  scores.forEach((scores) => {
    sum += scores;
  });
  console.log(`${sum / scores.length}`);
}

// 14. 12のavgをそのまま使い、小数点以下切り上げてください。
{

}

// 15. 12のavgをそのまま使い、四捨五入をしてください。
{

}

// 16. 12のavgをそのまま使い、小数点以下切り捨てしてください。小数点以下三桁まで表示してください。
{

}

// 17. 今度はサイコロを作ります。1〜6までのランダムな数字をMath.randomを使い表示させてください。※ヒントはMath.random*サイコロの個数+1
{

}

// 18.あるクラスの生徒たちが数学のテストを受けました。生徒たちの点数は配列scoresに格納されています。あなたのタスクは、各生徒の点数をループして、合計点と平均点を計算するプログラムを作成してください。
// scores配列の各要素は、0以上100以下の整数とします。
// 合計点は全生徒の点数の合計です。
// 平均点は全生徒の点数の合計を生徒数で割った値です（小数点以下は切り捨て）。
// 以下の配列を使用してください。
// const scores = [78, 92, 64, 85, 91];
// 答えは[生徒数: 5,合計点: 410,平均点: 82]でこのようになります。

{
  const scores = [78, 92, 64, 85, 91];
  let sum = 0;
  const entries = Object.entries(scores);

  console.log(entries);

  entries.forEach((prop) => {
    console.log(`${prop[0]}:${prop[1]}`);
  })

  console.log(`Sum:${sum}`);
  console.log(`Average:${(sum / entries.length)}`);
}


// DOM編

// 1. keydownのイベントを用いて押されたキーボードを、画面上に表示させるプログラムを書きなさい。
{
  document.addEventListener('keydown', (e) => {
    document.querySelector('p').textContent = e.key;
  });
}

// 2. mousemoveイベントを用いてカーソルの縦横比を画面上に表示させるプログラムを書きなさい。
{
  document.addEventListener('mousemove', (e) => {
    document.querySelector('p').textContent = `X:${e.clientX}Y${e.clientY}`;
  });
}

// 3. “Hello, World!“をコンソールに表示するJavaScriptプログラムを書きなさい。
{
  console.log("Hello World!");
}

// 4. 異なるデータ型（文字列、数値、ブール値）の変数を宣言し、それらをコンソールに表示しなさい。
{

}

// 5. 2つの変数名値は数値を取り、それらの和、差、積、商を表示するプログラムを書きなさい。書き方【console.log("和: " + (num1 + num2));】
{
  console.log()
}

// 6. 変数を用いて数値が偶数か奇数かを判定してコンソールに『これは偶数です。』『これは奇数です』と表示するプログラムを書きなさい。
{

}

// 7. 1から10までの数値を順にコンソールに表示するプログラムを書きなさい。
{
  console.log(1);
  for (let i = 2; i < 11; i++) {
    console.log(i);
  }
}

// 8. 数値の配列を作成し、その配列の全要素をfor文を使用してコンソールに表示するプログラムを書きなさい。
{
  const numbers = [1, 2, 3];
  for (let i = 0; i < 1; i++) {
    console.log(numbers);
  }
}

// 9. 2つの数値の積を計算して返す関数を定義し、その関数を使って計算結果をコンソールに表示しなさい。
{
  function sum(a, b) {
    return a * b;
  }
  console.log(sum(20, 30));
}

// 10. 人物の名前、年齢、職業を持つオブジェクトを作成し、その情報をコンソールに表示しなさい。
{
  const profile = {
    名前: '梨紗',
    年齢: '23歳',
    職業: '飲食店',
  }
  console.log(profile);
}

// 11. 配列内に特定の要素が存在するかをチェックするプログラムを書きなさい。
{

}

// 12.ボタンをクリックすると、入力した文字が新しいリストアイテムが追加するシステムを作成しなさい。また空白時にはアラートで知らせましょう
{
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('li').textContent = document.querySelector('input').value;
  });

  document.querySelector('button').addEventListener('click', () => {
    if (confirm('空白です')) {
      alert(document.querySelector('').value);
    }
  });
}

// 13.ボタンをクリックすると、段落のスタイルが変更されるシステムを作成しなさい。
{

}
