import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  CardSubtitle,
} from 'reactstrap';
import placeholderImg from '../../assets/images/placeHolderImage.jpeg';

const CardComponent = ({
  imgSrc = placeholderImg,
  missionName,
  details,
  launchDate,
  isUpcoming,
  rocketName,
}) => (
  <Col className="m-4 d-flex justify-content-around">
    <Card style={{ width: '18rem' }}>
      <CardImg top width="100%" src={imgSrc} alt={missionName} loading="lazy" />
      <CardBody>
        <CardTitle tag="h5">{missionName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {rocketName}
        </CardSubtitle>
        <CardText>{details}</CardText>
      </CardBody>
      <CardFooter>
        <small className="text-muted">
          {new Date(launchDate).toLocaleString('en-IN')}
        </small>
        <br />
        {isUpcoming && <small className="text-muted">Upcoming</small>}
      </CardFooter>
    </Card>
  </Col>
);
CardComponent.propTypes = {
  imgSrc: PropTypes.string,
  missionName: PropTypes.string.isRequired,
  details: PropTypes.string,
  launchDate: PropTypes.string,
  isUpcoming: PropTypes.bool.isRequired,
  rocketName: PropTypes.string.isRequired,
};
CardComponent.defaultProps = {
  imgSrc: placeholderImg,
  details: 'No details available',
  launchDate: 'No dates available',
};
export default CardComponent;
