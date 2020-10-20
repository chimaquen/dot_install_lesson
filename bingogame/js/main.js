'use strict';

// {
//   const scores = [80,90,40,70];

//   scores.forEach((score, index) => {
//     console.log(`Score ${index} : ${score}`);
//   });
// }

{
  const prices = [200,220,240];

  const updatePrices = prices.map(price => price + 20);
    console.log(updatePrices);
}

{
  const numbers = [1,4,7,8,10];

  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  const evenNumbers = numbers.filter(number => number % 2 === 0);

  console.log(evenNumbers);
}

{
  // const point = [100,120];
  const otherProps = {
    r: 4,
    color: 'red',
  };

  const point = {
    x:100,
    y:120,
    ...otherProps,
  };

  // console.log(point.x);

  point.x = 150;

  point.z = 200;
  // delete point.y;

  // console.log(point);

  const {x,r, ...others} = point;
  console.log(x);
  console.log(r);
  console.log(others);
}

{
  const point = {
    x:100,
    y:150,
  };

  // const keys = Object.keys(point);
  // keys.forEach(key => {
  //   console.log(`Key: ${key}, Value: ${point[key]}`);
  // });

  const points = [
    {x:30, y:20},
    {x:20, y:30},
    {x:10, y:40},
  ];

  console.log(points[2].x);
}

{
  // let x = 1;
  // let y = x;
  // x = 5;

  // console.log(x); // 5
  // console.log(y);

  // let x = [1,2];
  // let y = x;
  // x[0] = 5;

  // console.log(x); 
  // console.log(y);

  let x = [1,2];
  let y = [...x];
  x[0] = 5;

  console.log(x); 
  console.log(y);
}

{
  const str = 'hello';

  console.log(str.length);
  console.log(str.substring(2,4));
  console.log(str[4]);

  // str[0] ='b';
  console.log(str);
}

{
  const d = [2020,6,13];

  console.log(d.join('/'));

  const t = "18:12:30";

  // console.log(t.split(':'));

  const [hour, minute, second] = t.split(':');

  console.log(hour);
  console.log(minute);
  console.log(second);
}

{
  const scores = [10,3,9];

  let sum = 0;

  scores.forEach(score => {
    sum += score;
  })

  const avg = sum / scores.length;

  console.log(sum);
  console.log(avg);

  console.log(Math.floor(avg));
  console.log(Math.ceil(avg));
  console.log(Math.round(avg));
  console.log(avg.toFixed(2));

  console.log(Math.random());
}

{
  console.log(Math.floor(Math.random() * 6) + 1);
}

{
  const d = new Date();

  // console.log(d);

  console.log(`${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`);
}

{
  const d = new Date(2020, 5);
  d.setHours(10,20,30);
  d.setDate(13);
  d.setDate(d.getDate()+1);
  console.log(d);
}

// {
  // alert('Hello!');

  // const answer = confirm('削除しますか？');
  // if (answer) {
  //   console.log('削除しました。');
  // } else {
  //   console.log('キャンセルしました。');
  // }
// }

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     i ++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(showTime, 100);
// }

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime, 1);
//     i ++;
//     if(i > 2) {
//       clearInterval(timeoutId);
//     }
//   }

//   showTime();
// }

{
  // const name = "shimada";
  const name = 4;

  try {
    console.log(name.toUpperCase());
  } catch(e) {
    console.log(e);
  }

  console.log('Finish!');
}

{
  class Post {
    constructor(text) {
      this.text = text; 
      this.likeCount = 0;
    }

    show() {
        console.log(`${this.text} - ${this.likeCount} いいね`);
      }

    like() {
      this.likeCount++;
      this.show();
    }

  }

  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text); 
      this.sponsor = sponsor;
    }

    show() {
        super.show();
        console.log(`... sponsored by ${this.sponsor}`);
      }

    // static showInfo() {
    //   console.log('Post class version 1.0');
    // }

  }

  const posts = [
    new Post ('JavaScriptの勉強中！'),
    new Post ('プログラミング楽しい！'),
    new Post ('3分動画でマスターしよう！','dotinstall'),
  ];
  // posts[0].like();
  // posts[0].like();
  // posts[1].like();

  // Post.showInfo();
  posts[2].show();
  posts[2].like();
}



