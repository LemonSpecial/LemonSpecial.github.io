source "https://rubygems.org"

# Jekyll（用 3.9.x 系列最贴合 GitHub Pages 传统行为；稳定、够用）
gem "jekyll", "~> 3.9"

# minima 主题（不用写前端也能好看）
gem "minima", "~> 2.5"

# ⚠️ 关键：GFM 解析器（你这个错就是它缺失导致的）
gem "kramdown-parser-gfm"

# Ruby 3.x 需要 webrick 才能跑 serve/build 的 WEBrick（Actions 里用到）
gem "webrick", "~> 1.7"

# 插件组
group :jekyll_plugins do
  gem "jekyll-feed"
end
