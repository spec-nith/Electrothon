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
        <h1
          className={`text-6xl text-center text-white font-normal font-['Gugi']`}
        >
          Commonly Asked Questions
        </h1>
        <br />
        <br />
        <Accordion open={open === 1}>
          <AccordionHeader
            className={`text-center text-4xl text-white font-normal font-['Gugi']`}
            onClick={() => handleOpen(1)}
          >
            <h1 className="text-center text-4xl">What is Electrothon?</h1>
          </AccordionHeader>
          <AccordionBody className="text-1xl">
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            className={`text-center text-4xl text-white font-normal font-['Gugi']`}
            onClick={() => handleOpen(2)}
          >
            <h1 className="text-center text-4xl">What is Electrothon?</h1>
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>{" "}
        <Accordion open={open === 3}>
          <AccordionHeader
            className={`text-center text-4xl text-white font-normal font-['Gugi']`}
            onClick={() => handleOpen(3)}
          >
            <h1 className="text-center text-4xl">What is Electrothon?</h1>
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>{" "}
        <Accordion open={open === 4}>
          <AccordionHeader
            className={`text-center text-4xl text-white font-normal font-['Gugi']`}
            onClick={() => handleOpen(4)}
          >
            <h1 className="text-center text-4xl">What is Electrothon?</h1>
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>{" "}
        <Accordion open={open === 5}>
          <AccordionHeader
            className={`text-center text-4xl text-white font-normal font-['Gugi']`}
            onClick={() => handleOpen(5)}
          >
            <h1 className="text-center text-4xl">What is Electrothon?</h1>
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>{" "}
        <Accordion open={open === 6}>
          <AccordionHeader
            className={`text-center text-4xl text-white font-normal font-['Gugi']`}
            onClick={() => handleOpen(6)}
          >
            <h1 className="text-center text-4xl">What is Electrothon?</h1>
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>{" "}
        <Accordion open={open === 7}>
          <AccordionHeader
            className={`text-center text-4xl text-white font-normal font-['Gugi']`}
            onClick={() => handleOpen(1)}
          >
            <h1 className="text-center text-4xl">What is Electrothon?</h1>
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>{" "}
        <Accordion open={open === 7}>
          <AccordionHeader
            className={`text-center text-4xl text-white font-normal font-['Gugi']`}
            onClick={() => handleOpen(1)}
          >
            <h1 className="text-center text-4xl">What is Electrothon?</h1>
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>
      </Fragment>
      <br />
    </div>
  );
}
