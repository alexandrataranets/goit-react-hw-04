import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function loader() {
  return (
    <div className={css.loadbox}>
      <InfinitySpin
        width={200}
        color="darkblue"
        visible={true}
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}