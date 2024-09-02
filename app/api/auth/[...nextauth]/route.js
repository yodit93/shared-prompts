import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    async session(session) {

    },

    async signIn({ profile }) {
        try {
            await connectToDatabase();

            // Check if user exists in the database
            const userExists = await User.findOne({
                email: profile.email
            });

            // If user does not exist, create a new user

            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.email.split("@")[0],
                    image: profile.image,
                });

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    });

export { handler as GET, handler as POST };