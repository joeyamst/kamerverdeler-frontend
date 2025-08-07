import {
  Field,
  Label,
  TextInput,
  FieldSet,
  Column,
  Checkbox,
  Row,
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
    <Column className="ams-mb-l" style={{ backgroundColor: "#009de6" }}>
      <Field>
        <Label htmlFor={`name-${id}`}>Teamnaam</Label>
        <TextInput id={`name-${id}`} name={`name-${id}`} size={12} />
      </Field>

      <FieldSet legend="Welke dag wil je werken?">
        <Row gap="x-small" className="ams-mb-m">
          {days.slice(0, 5).map(({ label, value }) => (
            <Checkbox name={`day-${id}-${value}`} value={value} key={value}>
              {label}
            </Checkbox>
          ))}
        </Row>
        <Row gap="x-small">
          {days.slice(5, 10).map(({ label, value }) => (
            <Checkbox name={`day-${id}-${value}`} value={value} key={value}>
              {label}
            </Checkbox>
          ))}
        </Row>
      </FieldSet>

      <Field>
        <Label htmlFor={`size-${id}`}>Teamgrootte</Label>
        <TextInput id={`size-${id}`} name={`size-${id}`} size={4} />
      </Field>
    </Column>
  );
};
