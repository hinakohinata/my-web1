import { useCallback } from "react";
import { Button, Col, Row } from "react-bootstrap";
const Posts = ({ posts, keyword }) => {

  const testData = useCallback(() => {

  }, [keyword])
  if (posts.length === 0) {
    return <div className="loader">
      Loading....
    </div>;
  }
  return (
    <div className="posts">
      <Row>
        {posts.map((post) => {
          return (
            <Col xs={12} md={3} key={post.id} className="post">
              <img src={post.image}
                alt="picture" width="100%"/>
              <p style={{ fontWeight: "bold", marginBottom: 5 }}>{post.name}</p>
              <p>{post.price}</p>
              <p>{post.description}</p>
              <Button onClick={testData}>click here</Button>

            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Posts;
