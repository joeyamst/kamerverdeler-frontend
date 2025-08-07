"use client";

import { Button, Heading } from "@amsterdam/design-system-react";
import { TeamInput } from "./TeamInput";
import { useActionState, useState } from "react";

import { postData } from "./actions";

const initialState: unknown = {};

function Kamerverdeler() {
  const [ids, setIds] = useState<number[]>([1]);
  const [_, formAction] = useActionState(postData, initialState);

  return (
    <div>
      <Heading level={1}>Kamerverdeler applicatie</Heading>
      <form action={formAction} className="ams-mb-xl">
        {ids.map((id) => (
          <TeamInput key={id} id={id} />
        ))}
        <Button type="submit">Verdeel kamers</Button>
      </form>
      <Button
        onClick={() => setIds([...ids, ids.length + 1])}
        variant="secondary"
      >
        Voeg teamlid toe
      </Button>
    </div>
  );
}

export default Kamerverdeler;
