import { Col, Row } from "react-bootstrap";
import NewsArticleEntry from "./NewsArticleEntry";
import styles from "./NewsArticlesGrid.module.css";

type NewsArticlesGridProps = {
  articles: INewsArticle[];
};

const NewsArticlesGrid = ({ articles }: NewsArticlesGridProps) => {
  return (
    <Row xs={1} sm={2} xl={3} className={`g-4 ${styles["news-grid"]}`}>

      {articles.map((article) => (
        <Col key={article.url}>
          <div className={styles["news-item"]}>
            <NewsArticleEntry article={article} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default NewsArticlesGrid;
