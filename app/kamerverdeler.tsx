"use client";

import { Button, Heading } from "@amsterdam/design-system-react";
import { TeamInput } from "./TeamInput";
import { useActionState, useState } from "react";

import { postData } from "./actions";
import { PlusIcon } from "@amsterdam/design-system-react-icons";

const initialState: unknown = {};

function Kamerverdeler() {
  const [ids, setIds] = useState<number[]>([1]);
  const [_, formAction] = useActionState(postData, initialState);

  return (
    <div>
      <Heading level={1} className="ams-mb-l">
        Vul de voorkeursdagen per team in
      </Heading>
      <Button
        onClick={() => setIds([...ids, ids.length + 1])}
        variant="secondary"
        className="ams-mb-l"
        icon={PlusIcon}
      >
        Voeg team toe
      </Button>
      <form action={formAction} className="ams-mb-xl">
        {ids.map((id) => (
          <TeamInput key={id} id={id} />
        ))}
        <Button type="submit">Verdeel kamers</Button>
      </form>
    </div>
  );
}

export default Kamerverdeler;
