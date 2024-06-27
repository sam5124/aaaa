---
title: "通用大模型提示词"
description: "整理AIGC中比较通用的提示词，希望对您有帮助！" 
pubDate: "2024-06-27 17:47:00"
category: "tool"
banner: "@images/banners/2.webp"
ogImage: "@images/posts/lambda-rds/banner-1.jpg"
tags: ["AWS", "Lambda", "RDS"]
---


<h2 style="text-align: center;">整理AIGC中比较通用的提示词<br><br>希望对您有帮助！<h2>
<style>
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 1.25em;
  margin-bottom: 8px;
  color: #333;
  text-align: center;
   line-height: 2.5;
   background-color: #f0f0f0; /* 浅灰色背景 */
}
.card-content {
  margin-bottom: 8px;
  line-height: 2.5;
  
}
.card-example {
  background-color: #f9f9f9;
  padding: 8px;
  border-radius: 4px;
}
</style>

<div class="card">
  <div class="card-title"><strong>信息检索</strong></div>
  <div class="card-content">
    <strong>用途：</strong> 获取特定信息或数据。
    <ul>
      <li><strong>问题描述：</strong></li>
      <ul>
        <li>“请解释一下[主题]是什么？”</li>
        <li>“提供有关[主题]的详细信息。”</li>
        <li>“列出[主题]的主要特点。”</li>
      </ul>
      <li><strong>示例：</strong></li>
      <div class="card-example">
        <ul>
          <li>“请解释一下机器学习是什么？”</li>
          <li>“提供有关量子计算的详细信息。”</li>
          <li>“列出人工智能的主要特点。”</li>
        </ul>
      </div>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-title"><strong>内容生成</strong></div>
  <div class="card-content">
    <strong>用途：</strong> 生成文本内容，如文章、故事等。
    <ul>
      <li><strong>问题描述：</strong></li>
      <ul>
        <li>“撰写一篇关于[主题]的文章。”</li>
        <li>“写一个关于[主题]的短篇故事。”</li>
        <li>“为[主题]生成一个引人入胜的开头。”</li>
      </ul>
      <li><strong>示例：</strong></li>
      <div class="card-example">
        <ul>
          <li>“撰写一篇关于可持续发展的文章。”</li>
          <li>“写一个关于时间旅行的短篇故事。”</li>
          <li>“为人工智能的未来生成一个引人入胜的开头。”</li>
        </ul>
      </div>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-title"><strong>解释和说明</strong></div>
  <div class="card-content">
    <strong>用途：</strong> 提供对概念、过程或现象的详细解释和说明。
    <ul>
      <li><strong>问题描述：</strong></li>
      <ul>
        <li>“解释[主题]的工作原理。”</li>
        <li>“描述[主题]的步骤。”</li>
        <li>“说明[主题]的原因。”</li>
      </ul>
      <li><strong>示例：</strong></li>
      <div class="card-example">
        <ul>
          <li>“解释区块链的工作原理。”</li>
          <li>“描述制作巧克力蛋糕的步骤。”</li>
          <li>“说明气候变化的原因。”</li>
        </ul>
      </div>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-title"><strong>比较和对比</strong></div>
  <div class="card-content">
    <strong>用途：</strong> 比较两个或多个项目或概念。
    <ul>
      <li><strong>问题描述：</strong></li>
      <ul>
        <li>“比较[主题A]和[主题B]。”</li>
        <li>“列出[主题A]和[主题B]的主要区别。”</li>
        <li>“说明[主题A]和[主题B]的相似之处和不同之处。”</li>
      </ul>
      <li><strong>示例：</strong></li>
      <div class="card-example">
        <ul>
          <li>“比较传统教育和在线教育。”</li>
          <li>“列出iOS和Android的主要区别。”</li>
          <li>“说明电动汽车和燃油汽车的相似之处和不同之处。”</li>
        </ul>
      </div>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-title"><strong>建议和指导</strong></div>
  <div class="card-content">
    <strong>用途：</strong> 提供建议、技巧或指导。
    <ul>
      <li><strong>问题描述：</strong></li>
      <ul>
        <li>“你能给出关于[主题]的建议吗？”</li>
        <li>“提供一些关于[主题]的实用技巧。”</li>
        <li>“如何有效地[动作或任务]？”</li>
      </ul>
      <li><strong>示例：</strong></li>
      <div class="card-example">
        <ul>
          <li>“你能给出关于学习编程的建议吗？”</li>
          <li>“提供一些关于时间管理的实用技巧。”</li>
          <li>“如何有效地准备考试？”</li>
        </ul>
      </div>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-title"><strong>解决方案和问题解决</strong></div>
  <div class="card-content">
    <strong>用途：</strong> 提供问题解决方案或步骤。
    <ul>
      <li><strong>问题描述：</strong></li>
      <ul>
        <li>“如何解决[问题]？”</li>
        <li>“提出一个[问题]的解决方案。”</li>
        <li>“解释解决[问题]的步骤。”</li>
      </ul>
      <li><strong>示例：</strong></li>
      <div class="card-example">
        <ul>
          <li>“如何解决网络连接问题？”</li>
          <li>“提出一个减轻交通拥堵的解决方案。”</li>
          <li>“解释解决软件故障的步骤。”</li>
        </ul>
      </div>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-title"><strong>意见和评价</strong></div>
  <div class="card-content">
    <strong>用途：</strong> 获取对某事物的评价或意见。
    <ul>
      <li><strong>问题描述：</strong></li>
      <ul>
        <li>“你对[主题]有何看法？”</li>
        <li>“评价一下[主题]的优缺点。”</li>
        <li>“你认为[主题]的重要性是什么？”</li>
      </ul>
      <li><strong>示例：</strong></li>
      <div class="card-example">
        <ul>
          <li>“你对远程工作的看法是什么？”</li>
          <li>“评价一下这款新手机的优缺点。”</li>
          <li>“你认为数据隐私的重要性是什么？”</li>
        </ul>
      </div>
    </ul>
  </div>
</div>

<div class="card">
  <div class="card-title"><strong>未来趋势预测</strong></div>
  <div class="card-content">
    <strong>用途：</strong> 获取对未来的预测或趋势分析。
    <ul>
      <li><strong>问题描述：</strong></li>
      <ul>
        <li>“你对[主题]的未来有何预测？”</li>
        <li>“分析一下[主题]的未来趋势。”</li>
        <li>“预测[主题]在未来的变化。”</li>
      </ul>
      <li><strong>示例：</strong></li>
      <div class="card-example">
        <ul>
          <li>“你对人工智能的未来有何预测？”</li>
          <li>“分析一下电动汽车的未来趋势。”</li>
          <li>“预测社交媒体在未来的变化。”</li>
        </ul>
      </div>
    </ul>
  </div>
</div>
