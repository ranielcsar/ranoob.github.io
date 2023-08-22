function renderPinnedRepos(pinnedRepos) {
  const reposSection = document.querySelector('.pinned-repos')
  const reposContainer = reposSection.querySelector('#repos')

  const repos = pinnedRepos
    .map(
      (pinnedRepo) => `
            <a href="${pinnedRepo.link}" target="_blank" referrer="noreferrer" class="repo-link">
              <article class="repo-content">
                <h2>${pinnedRepo.repo}</h2>
                <span style="color: inherit;"}>${pinnedRepo.language}</span>
              </article>
            </a>
        `
    )
    .join('')

  reposContainer.innerHTML = repos
}

async function getGithubPinnedRepos() {
  const response = await fetch('https://gh-pinned-repos.egoist.dev/?username=ranielcsar')
  const pinnedRepos = await response.json()

  if (pinnedRepos) renderPinnedRepos(pinnedRepos)
}

getGithubPinnedRepos()
