import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Select, { StylesConfig } from "react-select";
type SelectOption = {
  label: string;
  value: string;
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function RegisterForm() {
  async function onSubmit() {}

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="name"
        >
          Full name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-3 xl:py-4 px-6 xl:px-6 focus:outline-none text-base xl:text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50 placeholder:italic focus:bg-transparent"
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="email"
        >
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          placeholder="email@xyz.com"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-3 xl:py-4 px-6 xl:px-6 focus:outline-none text-base xl:text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50 placeholder:italic"
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="phoneNumber"
        >
          Phone Number
        </label>
        <input
          type="text"
          placeholder="(0)-000-000"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-3 xl:py-4 px-6 xl:px-6 focus:outline-none text-base xl:text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50 placeholder:italic"
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="gender"
        >
          GENDER
        </label>
        <Select
          styles={styles}
          options={options}
          className="w-full"
          placeholder={"-Select-"}
          components={{
            IndicatorSeparator: () => (
              <ChevronDownIcon className="w-[2.625rem] h-[2.625rem]" />
            ),
          }}
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="gender"
        >
          AGE
        </label>
        <Select
          styles={styles}
          options={options}
          className="w-full"
          placeholder={"-Select-"}
          components={{
            IndicatorSeparator: () => (
              <ChevronDownIcon className="w-[2.625rem] h-[2.625rem]" />
            ),
          }}
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label className="label" htmlFor="gender">
          State
        </label>
        <Select
          styles={styles}
          options={options}
          className="w-full"
          placeholder={"-Select-"}
          components={{
            IndicatorSeparator: () => (
              <ChevronDownIcon className="w-[2.625rem] h-[2.625rem]" />
            ),
          }}
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="gender"
        >
          LGA
        </label>
        <Select
          styles={styles}
          options={options}
          className="w-full"
          placeholder={"-Select-"}
          components={{
            IndicatorSeparator: () => (
              <ChevronDownIcon className="w-[2.625rem] h-[2.625rem]" />
            ),
          }}
        />
      </div>

      <div className="flex justify-start gap-[1.12rem] items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="w-6 xl:w-[2.625rem] h-6 xl:h-[2.62rem] regular-checkbox cursor-pointer"
        />
        <label
          htmlFor="terms"
          className="text-blackI text-base xl:text-xl font-medium"
        >
          I agree to the terms and conditions
        </label>
      </div>
      <button
        className="w-full bg-blackI rounded-[0.75rem] flex justify-center items-center py-4 xl:py-[1.875rem] px-[0.625rem] mt-[2.5rem] xl:mt-5 text-white text-base xl:text-[1.75rem] font-semibold uppercase"
        type="submit"
      >
        Join the Race
      </button>
      <small className="text-center block text-blackI text-base xl:text-[1.4375rem] font-medium mt-5">
        *Registration Ends April 30th.
      </small>
    </form>
  );
}

const styles: StylesConfig<SelectOption> = {
  /** You can also pass in a 'state' argument to manage select state in each method. */
  control: (base, state) => ({
    ...base,
    border: "none",
    background: "none",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderBottom: "3px solid #1C1C1C",
    borderRadius: "none",

    // backgroundColor: backgroundColor,

    /** Overwrittes the different states of border  */
    borderColor: "none",

    cursor: "pointer",

    outline: state.isFocused ? "none" : "none",

    boxShadow: state.isFocused ? "none" : "none",
    // border: "1px solid red",

    // Removes weird border around container
    "&:hover": {
      borderColor: "#1C1C1C",
    },
  }),
  menu: (base) => ({
    ...base,
    marginTop: "0.1rem",
  }),

  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
  input: (base) => ({
    ...base,
    fontSize: "1.875rem",
    color: "#1C1C1C",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#1C1C1C",
    fontStyle: "italic",
    fontSize: "1.875rem",
    opacity: "50%"
  }),
  singleValue: (base) => ({
    ...base,
    color: "#1C1C1C",
    fontSize: "1.875rem",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "rgba(28, 28, 28, 1)",
    display: "none",
  }),
  indicatorsContainer: (base) => ({
    ...base,
  }),
};
