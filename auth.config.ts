import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  providers: [Github, Credentials],

  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;
