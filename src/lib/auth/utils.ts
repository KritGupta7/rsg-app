import { auth } from "@/lib/auth/config";

export function printObj(obj: unknown): void {
    const msg = JSON.stringify(obj, null, 4);
    console.log(msg);
}

export const checkIsAuthenticated = async () => {
    const session = await auth();
    if (session) {
        return true;
    } else {
        return false;
    }
};
