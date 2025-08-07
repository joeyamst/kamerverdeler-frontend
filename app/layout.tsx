import type { Metadata } from "next";
import "./globals.css";
import "@amsterdam/design-system-assets/font/index.css";
import "@amsterdam/design-system-css/dist/index.css";
import "@amsterdam/design-system-tokens/dist/index.css";
import "@amsterdam/design-system-tokens/dist/index.css";
import "@amsterdam/design-system-tokens/dist/compact.css";
import { Grid } from "@amsterdam/design-system-react/dist/Grid";

export const metadata: Metadata = {
  title: "Kamerverdeler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Grid>
          <Grid.Cell span="all">{children}</Grid.Cell>
        </Grid>
      </body>
    </html>
  );
}
