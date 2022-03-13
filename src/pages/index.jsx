import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';


export default function HomePage() {
  const { data: session, status } = useSession();
  
  if (status === 'loading') {
    return (
      <nav>Loading...</nav>
    );
  }

  if (status === 'authenticated') {
    return (
      <nav>
        <span>
          <small>Signed in as</small>
          <br />
          <strong>{ session.user.email || session.user.name }</strong>
        </span>
        <Link
          href={`/api/auth/signout`}
          onClick={(e) => {
            e.preventDefault()
            signOut()
          }}
        >
          <a>Sign out</a>
        </Link>
      </nav>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <nav>
        <Link
          href='/api/auth/signin'
          onClick={(event) => {
            event.preventDefault();
            signIn();
          }}
        >
          <a>Sign In</a>
        </Link>
      </nav>
    );
  }
}
