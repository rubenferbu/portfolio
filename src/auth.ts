import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ profile }) {
      // Solo tu cuenta de GitHub puede entrar — cualquier otra queda rechazada
      return profile?.login === "rubenferbu";
    },
  },
  pages: {
    signIn: "/admin/login",
  },
});