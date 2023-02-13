api.map("<Ctrl-i>", "<Alt-s>");
api.map("F", "af");

settings.hintAlign = "left";

api.addSearchAlias("fg", "github", "https://github.com/search?q=", "s");
api.addSearchAlias(
  "fb",
  "bilibili",
  "https://search.bilibili.com/all?keyword=",
  "s",
  "https://s.search.bilibili.com/main/suggest?func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&userid=&bangumi_acc_num=1&special_acc_num=1&topic_acc_num=1&upuser_acc_num=3&tag_num=10&special_num=10&bangumi_num=10&upuser_num=3&rnd=0.9825738759732869&buvid=A69C80A2-EB2E-48CA-467F-31E486E237D257491infoc&spmid=333.1007&term=",
  (response) => {
    const res = JSON.parse(response.text);
    return res.result.tag ? res.result.tag.map((item) => item.value) : [];
  }
);
api.addSearchAlias(
  "z",
  "zhihu",
  "https://www.zhihu.com/search?type=content&q=",
  "s",
  "https://www.zhihu.com/api/v4/search/suggest?q=",
  (response) => {
    const res = JSON.parse(response.text);
    return res.suggest.map((item) => item.query);
  }
);
api.addSearchAlias("j", "juejin", "https://juejin.cn/search?query=", "s");

settings.theme = `
.sk_theme {
font-family: Input Sans Condensed, Charcoal, sans-serif;
font-size: 11pt;
background: #282828;
color: #ebdbb2;
}
.sk_theme tbody {
color: #b8bb26;
}
.sk_theme input {
color: #d9dce0;
}
.sk_theme .url {
color: #4ff;
}
.sk_theme .annotation {
color: #b16286;
}
.sk_theme .omnibar_highlight {
color: #ebdbb2;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(even) {
background: #282828;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
background: #282828;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
background: #1a0;
}
#sk_status, #sk_find {
font-size: 28pt;
}`;
