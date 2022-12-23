import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="w-full bg-black text-white text-center">
      <Fragment>
        <h1>Commonly Asked Questions</h1>
        <br />
        <br />

        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Electrothon?
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to apply?
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Lorem convert.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Can a college have multiple teams?
          </AccordionHeader>
          <AccordionBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Lorem convert.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Lorem convert.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Lorem convert.
          </AccordionBody>
        </Accordion>
      </Fragment>
      <br />
    </div>
  );
}
