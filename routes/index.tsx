/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Title from "../islands/Title.tsx";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/styles/Title.css" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Trying Deno Fresh 🍋</title>
        <meta
          name="description"
          content="Trying out Deno Fresh: first look at the new, fast web framework from the Deno team with Island hydration and zero JS by default."
        />
      </Head>
      <div>{IS_BROWSER && <Title value="hello" className="title-lg" />}</div>
    </Fragment>
  );
}
