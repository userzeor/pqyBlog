function customInit() {
  customLoadCursor(); // 鼠标滑动特效
  customLoadAplayer(); // 添加音乐播放
  clickEffect(); // 鼠标点击特效函数
  // customLoadBgDynamic(); // 动态背景
}

// 加载自己插入的js
document.addEventListener("DOMContentLoaded", () => {
  customInit();
});

// 添加音乐播放
async function customLoadAplayer() {
  NexT.utils.loadExternalResource(
    "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css",
    "css"
  );

  await NexT.utils.loadExternalResource(
    "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js",
    "js"
  );

  const apDom = document.createElement("div");
  apDom.id = "aplayer";
  apDom.style.position = "fixed";
  apDom.style.left = "0";
  apDom.style.bottom = "400px";
  document.body.appendChild(apDom);
  const appStyle = document.createElement("style");
  appStyle.innerText = `
   .aplayer.aplayer-fixed .aplayer-body{
     bottom: 400px;
   }
  `;
  document.head.appendChild(appStyle);

  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 1,
    autoplay: true,
    fixed: true,
    audio: [
      {
        link: "http://music.163.com/#/song?id=1864700281",
        title: "心墙 (DJ版)",
        author: "赵俊飞,电音马哥,DJ野马,小阿菲",
        lrc: "",
        url: "http://music.163.com/song/media/outer/url?id=1864700281.mp3",
        pic: "http://p4.music.126.net/DFjadgE7oGz0rwdroassvQ==/109951167253195174.jpg?param=300x300",
      },
      {
        link: "http://music.163.com/#/song?id=500665346",
        title: "平凡之路 (Live)",
        author: "朴树",
        lrc: "[00:00.000] 作词 : 朴树/韩寒\n[00:01.000] 作曲 : 朴树\n[00:13.98]徘徊着的 在路上的\n[00:19.63]你要走吗 via via\n[00:25.37]易碎的 骄傲着\n[00:30.93]那也曾是我的模样\n[00:36.77]沸腾着的 不安着的\n[00:42.37]你要去哪 via via\n[00:48.23]谜一样的 沉默着的\n[00:53.81]故事你真的 在听吗\n[00:58.11]我曾经跨过山和大海\n[01:01.47]也穿过人山人海\n[01:03.93]我曾经拥有着的一切\n[01:07.17]转眼都飘散如烟\n[01:09.88]我曾经失落失望\n[01:11.97]失掉所有方向\n[01:15.52]直到看见平凡\n[01:18.39]才是唯一的答案\n[01:34.07]当你仍然 还在幻想\n[01:39.93]你的明天 via via\n[01:45.39]她会好吗 还是更烂\n[01:51.06]对我而言 是另一天\n[01:55.37]我曾经毁了我的一切\n[01:58.38]只想永远地离开\n[02:00.94]我曾经堕入无边黑暗\n[02:04.14]想挣扎无法自拔\n[02:06.71]我曾经像你像他\n[02:09.08]像那野草野花\n[02:12.83]绝望着 也渴望着\n[02:15.51]也哭也笑平凡着\n[03:05.29]向前走 就这么走\n[03:08.05]就算被给过什么\n[03:10.93]向前走 就这么走\n[03:13.87]就算被夺走什么\n[03:16.62]向前走 就这么走\n[03:19.41]就算会错过什么\n[03:22.30]向前走 就这么走 就算会\n[03:26.72]我曾经跨过山和大海\n[03:29.84]也穿过人山人海\n[03:32.37]我曾经拥有着的一切\n[03:35.55]转眼都飘散如烟\n[03:38.08]我曾经失落失望\n[03:40.60]失掉所有方向\n[03:44.06]直到看见平凡\n[03:46.76]才是唯一的答案\n[03:49.47]我曾经毁了我的一切\n[03:52.69]只想永远地离开\n[03:55.27]我曾经堕入无边黑暗\n[03:58.65]想挣扎无法自拔\n[04:00.98]我曾经像你像他\n[04:03.46]像那野草野花\n[04:06.99]绝望着 也渴望着\n[04:09.79]也哭也笑平凡着\n[04:12.57]我曾经跨过山和大海\n[04:15.56]也穿过人山人海\n[04:18.25]我曾经问遍整个世界\n[04:21.27]从来没得到答案\n[04:23.86]我不过像你像他\n[04:26.35]像那野草野花\n[04:29.99]冥冥中 这是我\n[04:32.66]唯一要走的路啊\n[04:36.85]时间如烟 如此这般\n[04:42.40]明天已在 via via\n[04:48.02]风吹过的 路依然远\n[04:53.76]你的故事讲到了哪\n",
        url: "http://music.163.com/song/media/outer/url?id=500665346.mp3",
        pic: "http://p4.music.126.net/IwEI0tFPh4w9OjY6RM2IJQ==/109951163009071893.jpg?param=300x300",
      },
      {
        name: "溯（钢琴版）",
        artist: "柳轻颂",
        url: "http://music.163.com/song/media/outer/url?id=1433584979.mp3",
        cover:
          "http://p1.music.126.net/qX7knUIlpmbJ34UBzCCS6w==/109951164802366812.jpg?param=130y130",
      },
      {
        name: "スパークル（火花）——《你的名字。》插曲",
        artist: "ゆう十",
        url: "http://music.163.com/song/media/outer/url?id=1984045303.mp3",
        cover:
          "http://p2.music.126.net/SiTInUUumsPdSdndv1MCyw==/109951167903888878.jpg?param=130y130",
      },
      {
        name: "euphoria",
        artist: " ",
        url: "http://music.163.com/song/media/outer/url?id=1814327255.mp3",
        cover: "/images/susan1.jpg",
      },
      {
        name: "Friend",
        artist: "Kozoro",
        url: "http://music.163.com/song/media/outer/url?id=33004707.mp3",
        cover:
          "http://p2.music.126.net/FR7zKYB8ujNRoWQuGCHbGg==/109951163288692527.jpg?param=130y130",
      },
      {
        name: "One Last Time",
        artist: "廖泽蓝",
        url: "http://music.163.com/song/media/outer/url?id=1870680152.mp3",
        cover:
          "http://p1.music.126.net/Y_Io_ln1-ujiL9eFdyQvmQ==/109951166291345875.jpg?param=130y130",
      },
    ],
  });
}

// 添加鼠标特效
async function customLoadCursor() {
  await NexT.utils.loadExternalResource(
    "https://unpkg.com/cursor-effects@latest/dist/browser.js",
    "js"
  );

  // Rainbow Cursor 彩虹光标
  // Emoji Rain 雨表情符号
  // Elastic Emoji 弹性表情符号
  // Ghost Following 鬼追
  // Trailing Cursor 尾部光标
  // Text Flag Cursor 文本标记光标
  // Following Dot 跟随圆点
  // Bubbles Particles 气泡和颗粒
  // Snowflake Particles 雪花颗粒
  // Fairy Dust 仙尘
  // Clock Cursor 时钟光标
  const targetElement = document.querySelector("main.main");
  new cursoreffects.emojiCursor({
    // element: targetElement,
    emoji: ["🔥", "🐬", "🦆"],
  });
}

// 添加点击特效
function clickEffect() {
  let balls = [];
  let longPressed = false;
  let longPress;
  let multiplier = 0;
  let width, height;
  let origin;
  let normal;
  let ctx;
  const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.setAttribute(
    "style",
    "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;"
  );
  const pointer = document.createElement("span");
  pointer.classList.add("pointer");
  document.body.appendChild(pointer);
  if (canvas.getContext && window.addEventListener) {
    ctx = canvas.getContext("2d");
    updateSize();
    window.addEventListener("resize", updateSize, false);
    loop();
    window.addEventListener(
      "mousedown",
      function (e) {
        pushBalls(randBetween(10, 20), e.clientX, e.clientY);
        document.body.classList.add("is-pressed");
        longPress = setTimeout(function () {
          document.body.classList.add("is-longpress");
          longPressed = true;
        }, 500);
      },
      false
    );
    window.addEventListener(
      "mouseup",
      function (e) {
        clearInterval(longPress);
        if (longPressed == true) {
          document.body.classList.remove("is-longpress");
          pushBalls(
            randBetween(
              50 + Math.ceil(multiplier),
              100 + Math.ceil(multiplier)
            ),
            e.clientX,
            e.clientY
          );
          longPressed = false;
        }
        document.body.classList.remove("is-pressed");
      },
      false
    );
    window.addEventListener(
      "mousemove",
      function (e) {
        let x = e.clientX;
        let y = e.clientY;
        pointer.style.top = y + "px";
        pointer.style.left = x + "px";
      },
      false
    );
  } else {
    console.log("canvas or addEventListener is unsupported!");
  }
  function updateSize() {
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.scale(2, 2);
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    origin = { x: width / 2, y: height / 2 };
    normal = { x: width / 2, y: height / 2 };
  }
  class Ball {
    constructor(x = origin.x, y = origin.y) {
      this.x = x;
      this.y = y;
      this.angle = Math.PI * 2 * Math.random();
      if (longPressed == true) {
        this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
      } else {
        this.multiplier = randBetween(6, 12);
      }
      this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
      this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
      this.r = randBetween(8, 12) + 3 * Math.random();
      this.color = colours[Math.floor(Math.random() * colours.length)];
    }
    update() {
      this.x += this.vx - normal.x;
      this.y += this.vy - normal.y;
      normal.x = (-2 / window.innerWidth) * Math.sin(this.angle);
      normal.y = (-2 / window.innerHeight) * Math.cos(this.angle);
      this.r -= 0.3;
      this.vx *= 0.9;
      this.vy *= 0.9;
    }
  }
  function pushBalls(count = 1, x = origin.x, y = origin.y) {
    for (let i = 0; i < count; i++) {
      balls.push(new Ball(x, y));
    }
  }
  function randBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
  function loop() {
    ctx.fillStyle = "rgba(255, 255, 255, 0)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if (b.r < 0) continue;
      ctx.fillStyle = b.color;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
      ctx.fill();
      b.update();
    }
    if (longPressed == true) {
      multiplier += 0.2;
    } else if (!longPressed && multiplier >= 0) {
      multiplier -= 0.4;
    }
    removeBall();
    requestAnimationFrame(loop);
  }
  function removeBall() {
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      if (
        b.x + b.r < 0 ||
        b.x - b.r > width ||
        b.y + b.r < 0 ||
        b.y - b.r > height ||
        b.r < 0
      ) {
        balls.splice(i, 1);
      }
    }
  }
}

// 添加动态背景
async function customLoadBgDynamic() {
  await NexT.utils.loadExternalResource(
    "https://cdnjs.cloudflare.com/ajax/libs/canvas-nest.js/2.0.4/canvas-nest.umd.js",
    "js"
  );
  // color: 线条颜色, 默认: '0,0,0' ；三个数字分别为(R,G,B)，注意用,分割
  // pointColor: 交点颜色, 默认: '0,0,0' ；三个数字分别为(R,G,B)，注意用,分割
  // opacity: 线条透明度（0~1）, 默认: 0.5
  // count: 线条的总数量, 默认: 150
  // zIndex: 背景的z-index属性，css属性用于控制所在层的位置, 默认: -1
  const config = {
    color: "255,0,0",
    pointColor: "78,60,30",
    opacity: 1,
  };

  // Using config rendering effect at 'element'.
  const cn = new CanvasNest(document.body, config);
}
