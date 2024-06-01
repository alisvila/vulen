import {getSession} from "next-auth/react";
import { Session } from "next-auth/core/types";

export const TOKEN_EXPIRE_CHECK_JITTER: number = 3000

export interface Token extends Session {
    accessToken?: string;
    loginType?: string;
    access?: string;
  }

export const lockManager = () => {
    let isLocked = false;
    let currentToken: Token | null;

    return async function () {
        while (isLocked) {
            await new Promise((resolve) => setTimeout(resolve, 200));
        }
        const tokenParsed =
            currentToken?.accessToken &&
            JSON.parse(
                Buffer.from(currentToken.accessToken.split(".")[1], "base64").toString()
            );

        if (currentToken && Date.now() < tokenParsed.exp * 1000 - TOKEN_EXPIRE_CHECK_JITTER) {
            return currentToken;
        }
        isLocked = true;
        try {
            currentToken = await getSession();
        } finally {
            isLocked = false;
            return currentToken
        }
    };
};
