import { posts } from './js/data'

const postsEl = document.querySelector('.posts')

const articles = posts.map((post, i) => `
  <article id="post-${i}">
    <div class="num">
      <h2>${i + 1}. <span class="triangle">&#9650;</span> </h2>
    </div>
    <div class="post">
      <div>
        <h2 class="title">${post.title}</h2>
        <span class="url">(${post.url})</span>
      </div>
      <span class="actions">
        ${post.points} points | hide | ${post.comments} comments
      </span>
    </div>
  </article>
`)

window.addEventListener('load', () => {
  console.log(posts)
  postsEl.innerHTML = articles.join('\n')
})
