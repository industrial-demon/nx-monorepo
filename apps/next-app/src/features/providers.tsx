import { ReactNode, useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { configureAuth } from "./amplify";
import axios from "axios";


configureAuth();

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: error => (getMessage(error)),
        }),
        mutationCache: new MutationCache({
          onError: error => (getMessage(error)),
        }),
      }),
  );

  return (
    <Authenticator.Provider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Authenticator.Provider>
  );
}

function getMessage(error: unknown) {
  if (axios.isAxiosError<ErrorData>(error)) {
    const message = error.response?.data.message;

    if (message) {
      return message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An error occurred";
}

type ErrorData = {
  incidentId: string;
  timestamp: string;
  errors: Record<string, string[]>;
  message: string;
};
