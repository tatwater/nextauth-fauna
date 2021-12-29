import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';


export default function HomePage() {
  const { data: session, status } = useSession();
  
  return (
    <nav>
      { !session &&
        <Link
          href='/api/auth/signin'
          onClick={(event) => {
            event.preventDefault();
            signIn();
          }}
        >
          <a>Sign In</a>
        </Link>
      }

      { session?.user &&
        <>
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
        </>
      }
    </nav>
  );
}