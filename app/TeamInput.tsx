import {
  Field,
  Label,
  TextInput,
  FieldSet,
  Column,
  Checkbox,
} from "@amsterdam/design-system-react";

const days = [
  {
    label: "Maandag 1",
    value: "0",
  },
  {
    label: "Dinsdag 1",
    value: "1",
  },
  {
    label: "Woensdag 1",
    value: "2",
  },
  {
    label: "Donderdag 1",
    value: "3",
  },
  {
    label: "Vrijdag 1",
    value: "4",
  },
  {
    label: "Maandag 2",
    value: "5",
  },
  {
    label: "Dinsdag 2",
    value: "6",
  },
  {
    label: "Woensdag 2",
    value: "7",
  },
  {
    label: "Donderdag 2",
    value: "8",
  },
  {
    label: "Vrijdag 2",
    value: "9",
  },
];

export const TeamInput = ({ id }: { id: number }) => {
  return (
    <>
      <Field>
        <Label htmlFor={`name-${id}`}>Teamnaam</Label>
        <TextInput id={`name-${id}`} name={`name-${id}`} size={12} />
      </Field>
      <Field>
        <Label htmlFor={`size-${id}`}>Teamgrootte</Label>
        <TextInput id={`size-${id}`} name={`size-${id}`} size={4} />
      </Field>
      <FieldSet legend="Welke dag wil je werken?">
        <Column gap="x-small">
          {days.map(({ label, value }) => (
            <Checkbox name={`day-${id}-${value}`} value={value} key={value}>
              {label}
            </Checkbox>
          ))}
        </Column>
      </FieldSet>
    </>
  );
};
