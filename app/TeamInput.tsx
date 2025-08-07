import {
  Field,
  Label,
  TextInput,
  FieldSet,
  Column,
  Checkbox,
  Row,
  Paragraph,
  Button,
} from "@amsterdam/design-system-react";

const days = [
  {
    label: "Maandag",
    value: "0",
  },
  {
    label: "Dinsdag",
    value: "1",
  },
  {
    label: "Woensdag",
    value: "2",
  },
  {
    label: "Donderdag",
    value: "3",
  },
  {
    label: "Vrijdag",
    value: "4",
  },
  {
    label: "Maandag",
    value: "5",
  },
  {
    label: "Dinsdag",
    value: "6",
  },
  {
    label: "Woensdag",
    value: "7",
  },
  {
    label: "Donderdag",
    value: "8",
  },
  {
    label: "Vrijdag",
    value: "9",
  },
];

export const TeamInput = ({
  id,
  setIds,
}: {
  id: number;
  setIds: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <Column
      className="ams-mb-l"
      style={{ backgroundColor: "#009de6", padding: "1rem" }}
    >
      <Field>
        <Label htmlFor={`name-${id}`}>Teamnaam</Label>
        <TextInput id={`name-${id}`} name={`name-${id}`} size={12} />
      </Field>

      <FieldSet legend="Welke dag wil je werken?">
        <Row gap="x-small" className="ams-mb-m">
          <Paragraph style={{ width: "120px" }}>Even weken</Paragraph>
          {days.slice(0, 5).map(({ label, value }) => (
            <Checkbox name={`day-${id}-${value}`} value={value} key={value}>
              {label}
            </Checkbox>
          ))}
        </Row>
        <Row gap="x-small">
          <Paragraph style={{ width: "120px" }}>Oneven weken</Paragraph>
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

      <div>
        <Button
          variant="secondary"
          type="button"
          onClick={() =>
            setIds((prev) => prev.filter((teamId) => teamId !== id))
          }
        >
          Verwijder team
        </Button>
      </div>
    </Column>
  );
};
