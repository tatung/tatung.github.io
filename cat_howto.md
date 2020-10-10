---
layout: default
title: How-to
permalink: /categories/how-to/
---
{% assign posts_count = site.categories.How-to | size %}

<div class="home">
  {% if posts_count > 0 %}
    <div class="posts">
      {% for post in site.categories.How-to %}
        <div class="post py3">
          <p class="post-meta">
	    {% if site.date_format %}
	      {{ post.date | date: site.date_format }}
	    {% else %}
	      {{ post.date | date: "%b %-d, %Y" }}
	    {% endif %}
          </p>          
          <a href="{{ post.url | relative_url }}" class="post-link"><h3 class="h1 post-title">{{ post.title }}</h3></a>
          {% if post.thumbnail %}
            <div class="thumbnail-container">
              <a href="{{ post.url | relative_url }}" class="post-link"><img src="{{ post.thumbnail }}"/></a><br>
            </div>
          {% endif %}
          <span class="post-summary">
            {% if post.summary %}
              {{ post.summary }}
            {% else %}
              <!-- {{ post.excerpt }} -->
              {{ post.content | markdownify | strip_html | truncatewords: 50 }}
            {% endif %}
          </span>
        </div>
      {% endfor %}
    </div>
  {% else %}
    <h1 class='center'>{{ site.text.index.coming_soon }}</h1>
  {% endif %}
</div>
