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

    async signin({ profile }) {
        try {
            await connectToDatabase();

            // Check if user exists in the database

            // If user does not exist, create a new user

            return true;
        } catch (error) {
            
        }
    }
    
    });

export { handler as GET, handler as POST };