let url =
 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
 let mainDiv = document.getElementById("container");

async function getUsers() {
    let response = await fetch(url);
    let commits = await response.json();
    let user = commits
    .map((item) => {
        return `<div class="user-box">
        <img src=${item.author.avatar_url} alt="user-pic">
        <div class='user-details'>
         <p>${item.author.login}</p>
         <a href=${item.author.html_url} target='_blank'> Go to ${item.author.login} profile</a>
        </div>
      </div>`;
    })
     .join("");
    mainDiv.innerHTML = user;
}
getUsers();