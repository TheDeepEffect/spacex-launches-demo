import { ToastBody, ToastHeader, Toast } from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeNotification } from '../../features/notifications/notificationSlice';

const ToastComponent = ({
  id, visible, label, type,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(removeNotification(id));
    }, 5000);
  }, [dispatch, id]);
  return (
    <Toast isOpen={visible}>
      <ToastHeader icon={type} />
      <ToastBody>{label}</ToastBody>
    </Toast>
  );
};

ToastComponent.propTypes = {
  visible: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};
export default ToastComponent;
