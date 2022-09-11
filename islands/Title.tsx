/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import Divider from "../components/Divider.tsx";

export default function Title({ className, value }: any) {
  const [titleValue, setTitleValue] = useState(value);

  return (
    <div className={className}>
      <input
        type="text"
        placeholder="Title"
        value={titleValue}
        onInput={(event: any) => {
          const { target: { value } } = event;
          setTitleValue(value);
        }}
      />
      <Divider />
    </div>
  );
}
