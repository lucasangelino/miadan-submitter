async function postArticle(args) {
  console.log(args);
  const params = {
    title: args.title,
    summary: args.summary,
    tags: args.tags,
    content: args.content,
    author: args.author,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(params),
  };
  const response = await fetch(
    `${"http://localhost:5001"}/api/article`,
    options
  );
  const json = await response.json();
  return json;
}

export { postArticle };
