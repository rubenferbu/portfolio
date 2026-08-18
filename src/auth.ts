import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ profile }) {
      return profile?.login === "rubenferbu";
    },
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
});