// 加载live2d模型
document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  // live2d_path 参数建议使用绝对路径
  const live2d_path =
    "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";

  // 加载 waifu.css live2d.min.js waifu-tips.js
  if (screen.width >= 768) {
    Promise.all([
      NexT.utils.loadExternalResource(live2d_path + "waifu.css", "css"),
      NexT.utils.loadExternalResource(live2d_path + "live2d.min.js", "js"),
      NexT.utils.loadExternalResource(live2d_path + "waifu-tips.js", "js"),
    ]).then(() => {
      // 配置选项的具体用法见 README.md
      // let minimum = 0;
      // let maximum = 11;
      // const modelId =
      //   Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      let modelTexturesId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

      localStorage.setItem("modelId", 0);
      localStorage.setItem("modelTexturesId", modelTexturesId);
      initWidget({
        waifuPath: live2d_path + "waifu-tips.json",
        // apiPath: "https://api.zsq.im/live2d", // https://live2d.fghrsh.net/api
        cdnPath: "https://npm.elemecdn.com/akilar-live2dapi@latest/",
      });
    });
  }

  console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
});

// End Live2d Code

window.addEventListener("load", () => {
  console.log(
    "%cpengqy的博客",
    "text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);\
font-size: 5em;"
  );
  console.log(
    `\n%cpengqy's Blog%cv${CONFIG.version}%c\n`,
    "padding: 8px; background: #bf74cc; font-weight: bold; font-size: large; color: white;",
    "padding: 8px; background: #0bd2e0; font-size: large; color: #eee;",
    ""
  );
  console.log(
    `页面加载完毕消耗了${Math.round(performance.now() * 100) / 100}ms`
  );
});
