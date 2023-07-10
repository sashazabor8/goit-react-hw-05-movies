import { useNavigate } from 'react-router-dom';
import s from './BackBtn.module.css';

function BackBtn() {
  const navigate = useNavigate();

  return (
    <button
      className={s.btn}
      onClick={() => {
        navigate('/');
      }}
    >
      <span className={s.arrow}></span>
      Go back
    </button>
  );
}

export default BackBtn;
