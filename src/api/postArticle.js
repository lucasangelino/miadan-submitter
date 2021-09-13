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
  return await fetch(`${"http://localhost:5001"}/api/article`, options);
}

export { postArticle };
