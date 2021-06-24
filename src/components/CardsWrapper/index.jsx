import {
  Container, Row, Col, Button,
} from 'reactstrap';
import useLaunches from '../../Hooks/useLaunches';
import Card from '../Cards';

const CardsWrapper = () => {
  const {
    launches, loading, fetchMore, hasMore,
  } = useLaunches();

  if (loading) {
    return (
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-light" role="status" />
      </Container>
    );
  }
  return (
    <Container className="p-3 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <Row>
        {launches.map((launch) => (
          <Card {...launch} key={launch?.id} />
        ))}
      </Row>
      {hasMore ? (
        <Row>
          <Col className="m-4">
            <Button onClick={fetchMore}>Show More</Button>
          </Col>
        </Row>
      ) : (
        ''
      )}
    </Container>
  );
};
export default CardsWrapper;
