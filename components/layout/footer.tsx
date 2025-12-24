import { Container } from "./container";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-0">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} HKDA Konstruksi. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {/* Social links or extra footer links could go here */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
