
'use client';


import { useState } from "react";
import { Accordion } from "./components/accordion";

export default function Home() {
  const items = [1, 2, 3];
  const [value, setValue] = useState(["item-1"]);

  return (
    <div className="grid place-items-center w-screen h-screen">
      <div className="max-w-lg w-full">
        <Accordion value={value} onValueChange={(details) => setValue(details.value)}>
          {items.map((item) => (
            <Accordion.Item key={item} value={`item-${item}`}>
              <Accordion.Trigger>
                Item {item}
                <Accordion.Indicator>
                  {value.includes(`item-${item}`) ? '-' : '+'}
                </Accordion.Indicator>
              </Accordion.Trigger>
              <Accordion.Content>
                Content for item {item}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
