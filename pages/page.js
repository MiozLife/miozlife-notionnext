// pages/random.js

import { useEffect } from 'react'

export default function RandomRedirect() {
  useEffect(() => {
    const urls = [
'https://www.oasisand.cn/',
'https://blog.cuger.cn/',
'https://wangyunzi.com/',
'https://h4ck.org.cn/',
'https://blog.6uu.us/',
'https://zzzhome.cc/',
'https://blog.bxaw.name/',
'https://www.eexuan.cn/',
'https://www.jeffer.xyz/',
'https://shixiaocaia.fun/',
'https://thirdshire.com/',
'https://nelsonboss.ink/',
'https://tothemoonriver.icu/',
'https://gregueria.icu/',
'https://polebug.github.io/',
'https://weekdaycare.cn/',
'https://changingmoments.one/',
'https://sunnkynews.icu/',
'https://www.amberoid-blog.com/',
'https://www.bio-w.cn/',
'https://solanalifeblog.vercel.app/',
'https://luoshui.icu/',
'https://pottypod.wordpress.com/',
'https://curly-sheep.netlify.app/',
'https://nanako.icu/',
'https://www.missingid.online/',
'https://harushuura.vip/',
'https://turquoise.one/',
'https://tortie.me/posts',
'https://kiokumo.vip/',
'https://notes.midofnowhere.link/',
'https://blog-sooty-beta.vercel.app/',
'https://oaad.iceco.icu/',
'https://graugris.icu/',
'https://rei.eterfinal.ink/',
'https://zhuzi.dev/',
'https://trails-of-isara.vercel.app/',
'https://naturaleki.one/',
'https://hirate3.wordpress.com/',
'https://summerwasover.vercel.app/',
'https://tantalum.life/',
'https://mantyke.icu/',
'https://xyzxy.me/',
'https://www.juroku.net/',
'https://pro.gleeze.com/'
    ];
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
  }, []);

  return <p>正在跳转中...</p>;
}
