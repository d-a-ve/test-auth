import { InlinePaddingContainer, MaxContainer } from "../components/Container";
import { CustomLink } from "../components/LinkButton";

export function Home() {
  return (
    <MaxContainer>
      <InlinePaddingContainer>
        <div className="flex min-h-svh flex-col items-center justify-center space-y-4 text-lg">
          <h1 className="text-xl font-medium">Testing authentication</h1>
          <p>
            Go to <CustomLink href="/login" label="login page" />
          </p>
          <p>
            Go to <CustomLink href="/signup" label="sign up page" />
          </p>
          <p>
            Go to <CustomLink href="/protected" label="protected page" />
          </p>
        </div>
      </InlinePaddingContainer>
    </MaxContainer>
  );
}
