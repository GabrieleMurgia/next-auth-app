import NextAuth, { AuthOptions, Session, User as AdapterUser } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import GoogleProvider from 'next-auth/providers/google';

interface CustomSession extends Session {
  userId: string | number;
}

const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: undefined,
  },
  callbacks: {
    async session({ session, user }): Promise<CustomSession> {
      const customSession = session as CustomSession;
      customSession.userId = user.id;
      return customSession;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);