// src/app/api
import type { NextAuthOptions } from "next-auth";
import AzureADB2C from "next-auth/providers/azure-ad-b2c";
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
    debug: false,
  providers: [
    AzureADB2C({
      tenantId: process.env.NEXT_PUBLIC_AZURE_AD_B2C_TENANT_NAME as string,
      clientId: process.env.NEXT_PUBLIC_AZURE_AD_B2C_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_AZURE_AD_B2C_CLIENT_SECRET as string,
      primaryUserFlow: process.env.NEXT_PUBLIC_AZURE_AD_B2C_PRIMARY_USER_FLOW as string,
      authorization: { params: { scope: "offline_access openid" } },
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: {
                label: "Username:",
                type: "text",
                placeholder: "username",
            },
            password: {
                label: "password:",
                type: "password",
                placeholder: "enter password"
            }
        },
        async authorize(credentials) {
            const user = { id: "41", name: "Kevin", password: "nextauth"}

            if (credentials?.username === user.name && credentials?.password === 
            user.password) {
                return user
            } else {
                return null
            }
        }
    })
  ],
};

// export default NextAuth(authOptions);