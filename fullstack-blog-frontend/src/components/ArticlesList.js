import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return articles.map((article, index) => (
    <Link
      className="article-list-item"
      key={index}
      to={`/articles/${article.name}`}
    >
      <h3 key={index}>{article.title}</h3>

      <p>{article.content[0].substring(0, 150)}...</p>
    </Link>
  ));
};

export default ArticlesList;
