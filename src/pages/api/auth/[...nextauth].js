import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email'
import { Client as FaunaClient } from 'faunadb';
import { FaunaAdapter } from '@next-auth/fauna-adapter';


const client = new FaunaClient({
  secret: process.env.FAUNA_CLIENT_SECRET,
  scheme: 'https',
  domain: 'db.fauna.com',
  port: 443,
});

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60,
    }),
  ],

  adapter: FaunaAdapter(client),

  secret: process.env.AUTH_SECRET,

  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  theme: 'auto',
  
  debug: true,
});
