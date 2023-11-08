import { useAuthenticator } from "@aws-amplify/ui-react";
import { useCallback } from "react";

export function useRefreshSession() {
  const { user } = useAuthenticator(context => [context.user]);

  return useCallback(
    ({
      onError,
      onSuccess,
    }: {
      onError?: (error: unknown) => void;
      onSuccess?: (session: unknown) => void;
    } = {}) => {
      const session = user.getSignInUserSession();

      if (!session) {
        return;
      }

      const token = session.getRefreshToken();

      user.refreshSession(token, (error, session) => {
        if (error) {
          onError?.(error);
        } else {
          onSuccess?.(session);
        }
      });
    },
    [user],
  );
}
