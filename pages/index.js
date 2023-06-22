
import Loader from '@components/Loader';
import Link from 'next/link';
import { toast } from 'react-hot-toast';



export default function Home(props) {

  return (
    <main>
      <div>
        <button onClick={() => toast.success('hello toast!')}>
          Toast me
        </button>
      </div>
    </main>
  );
}
