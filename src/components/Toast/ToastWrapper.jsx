import { useSelector } from 'react-redux';
import ToastComponent from '.';
import './ToastWrapper.scss';

const ToastWrapper = () => {
  const { notifications } = useSelector((state) => state);
  return (
    <div className="notifications">
      {notifications.map((x) => (
        <ToastComponent
          key={x.id}
          id={x.id}
          visible={x.visible}
          label={x.label}
          type={x.type}
        />
      ))}
    </div>
  );
};
export default ToastWrapper;
