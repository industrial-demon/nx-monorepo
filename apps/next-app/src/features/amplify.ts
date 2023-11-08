import { Amplify, Auth } from "aws-amplify";
import axios from "axios";

if (!process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID) {
  throw new Error("NEXT_PUBLIC_COGNITO_CLIENT_ID is not defined");
}

const userPoolWebClientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;

if (!process.env.NEXT_PUBLIC_COGNITO_POOL_ID) {
  throw new Error("NEXT_PUBLIC_COGNITO_POOL_ID is not defined");
}

const userPoolId = process.env.NEXT_PUBLIC_COGNITO_POOL_ID;

/**
 * It should be used in both the client-side and server-side code
 * https://docs.amplify.aws/lib/ssr/q/platform/js/#1-run-amplifyconfigure-awsexports-ssr-true--in-undefined-the-client-side-and-server-side-code
 *
 * warn ./node_modules/aws-crt/dist/native/binding.js
 * Critical dependency: the request of a dependency is an expression
 * https://github.com/aws-amplify/amplify-js/issues/11030#issuecomment-1567584123
 */
export function configureAuth() {
  const [region] = userPoolId.split("_");

  Amplify.configure({
    Auth: {
      region,
      userPoolId,
      userPoolWebClientId,
    },
    ssr: true,
  });

  axios.interceptors.request.use(async config => {
    try {
      const session = await Auth.currentSession();
      const token = session.getIdToken().getJwtToken();
      config.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.warn(error);
    }

    return config;
  });
}
