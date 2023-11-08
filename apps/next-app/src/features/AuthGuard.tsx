import { useAuthenticator } from "@aws-amplify/ui-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const router = useRouter();

  useEffect(() => {
    if (authStatus === "configuring") {
      return;
    }

    if (authStatus !== "authenticated") {
      router.replace(`/auth/sign-in?from=${pathname}`);
    }
  }, [authStatus, pathname, router]);

  return authStatus === "authenticated" ? <>{children}</> : null;
}
