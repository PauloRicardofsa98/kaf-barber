import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { db } from "./_lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [Google],
});
