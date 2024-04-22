import NextAuth from "next-auth/next";
import { options } from './options';

const handler = NextAuth(options);

export const GET = (req: any, res: any) => handler(req, res);
export const POST = (req: any, res: any) => handler(req, res);
