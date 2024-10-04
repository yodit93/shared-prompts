import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@utils/database";
import User from "@models/User"; // Ensure the User model is correctly imported

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectToDatabase();

      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      // Add user id to session
      session.user.id = sessionUser._id.toString(); // Use `_id` and convert to string

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDatabase();

        // Check if user exists in the database
        const userExists = await User.findOne({
          email: profile.email,
        });

        // If user does not exist, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.email.split("@")[0],
            image: profile.picture, // Use profile.picture for Google profile images
          });
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
