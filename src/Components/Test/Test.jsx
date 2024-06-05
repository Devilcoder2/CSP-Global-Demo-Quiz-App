import StartTest from "./StartTest";
import TestInput from "./TestInput";
import { useState } from "react";

const Test = () => {
  const [provider, setProvider] = useState(null);
  const [exam, setExam] = useState(null);
  const [length, setLength] = useState(null);

  return (
    <div className="text-[#DBDBEB] mt-6 ml-4">
      <div>
        <h1 className="text-3xl">Free Practice Test</h1>
        <div className=" flex mt-3">
          <h1 className="text-xl font-semibold hover:underline hover:cursor-pointer">
            Sneat
          </h1>
          <span className="ml-10">
            <ul className=" list-disc">
              <li className="text-xl opacity-50">
                New practice test each time
              </li>
            </ul>
          </span>
        </div>
      </div>

      <div>
        <TestInput
          setTestProvider={setProvider}
          setExamType={setExam}
          setExamLength={setLength}
        />
      </div>

      <div className="flex justify-start">
        <StartTest provider={provider} name={exam} length={length} />
      </div>
    </div>
  );
};

export default Test;
