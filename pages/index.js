

import Link from 'next/link';
import { useState } from 'react';



export default function Home(props) {

  return (
    <main>
      <div>
        <Link href={{
              pathname: '/[username]',
              query:{username: 'username'},
            }}>
          username's page
        </Link>
      </div>
    </main>
  );
}
