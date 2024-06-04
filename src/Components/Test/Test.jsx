import StartTest from "./StartTest";
import TestInput from "./TestInput";

const Test = () => {
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
        <TestInput />
      </div>

      <div>
        <StartTest />
      </div>
    </div>
  );
};

export default Test;
