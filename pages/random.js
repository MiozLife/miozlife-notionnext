// pages/random.js

import { useEffect } from 'react'

export default function RandomRedirect() {
  useEffect(() => {
    const urls = [
'https://blog.cuger.cn/',
'https://wangyunzi.com/',
'https://zhongxiaojie.cn/',
'https://blog.tsoo.net/',
'https://zzzhome.cc/',
'https://koxiuqiu.cn/',
'https://blog.bxaw.name/',
'https://www.jeffer.xyz/',
'https://thirdshire.com/',
'https://nelsonboss.ink/',
'https://gregueria.icu/',
'https://polebug.github.io/',
'https://weekdaycare.cn/',
'https://changingmoments.one/',
'https://sunnkynews.icu/',
'https://solanalifeblog.vercel.app/',
'https://luoshui.icu/',
'https://pottypod.wordpress.com/',
'https://curly-sheep.netlify.app/',
'https://nanako.icu/',
'https://harushuura.vip/',
'https://turquoise.one/',
'https://tortie.me/posts',
'https://kiokumo.vip/',
'https://notes.midofnowhere.link/',
'https://blog-sooty-beta.vercel.app/',
'https://graugris.icu/',
'https://zhuzi.dev/',
'https://trails-of-isara.vercel.app/',
'https://naturaleki.one/',
'https://hirate3.wordpress.com/',
'https://summerwasover.vercel.app/',
'https://tantalum.life/',
'https://mantyke.icu/',
'https://xyzxy.me/',
'https://www.juroku.net/',
'https://88lin.eu.org/',
'https://dilutepillow.github.io/',
'https://cuixiping.com/',
'https://1sle29.github.io/',
'https://xyzbz.cn/',
'https://dujun.io/'
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
  }, []);

  return <p>正在跳转中...</p>;
}
