import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useState, useEffect, useCallback, FormEvent } from "react";
import Select, { MultiValue, SingleValue, StylesConfig } from "react-select";

import {
  ArrowsPointingOutIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";

export default function RegisterForm() {
  const [states, setStates] = useState<SelectOption[]>([]);
  const [lgas, setLgas] = useState<SelectOption[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [state, setState] = useState<SelectOption>();
  const [age, setAge] = useState<SelectOption>();
  const [gender, setGender] = useState<SelectOption>();
  const [lga, setLga] = useState<SelectOption>();

  const [term, setTerm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name,
      email,
      phoneNumber,
      state: state?.value,
      age: age?.value,
      gender: gender?.value,
      lga: lga?.value,
      term,
    };

    try {
      await axios.post<IRegister>(
        // "http://localhost:5000/api/users/register",
        "https://tobi-city-coal.onrender.com/api/users/register",
        data
      );
      // Redirect user to google form
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSfq-NFG_O_fu9Z6lyv69b4VJcnOnOwDxH0B448_-JvQ-bDZBg/viewform";
    } catch (error) {
      const err = error as AxiosError<IError>;
      toast.error(err.response?.data.message);
    }

    setIsLoading(false);
  }

  const canSave = [
    name,
    email,
    phoneNumber,
    state,
    age,
    gender,
    lga,
    term,
  ].every((field) => Boolean(field));

  function handleStateChange(
    newValue: MultiValue<SelectOption> | SingleValue<SelectOption>
  ) {
    const option = newValue as SelectOption;
    setState(option);
  }

  const fetchStates = async () => {
    try {
      const response = await axios.get<State[]>(
        "https://nigeria-states-towns-lga.onrender.com/api/states"
      );

      const stateOptions = response.data.map((item) => {
        return {
          label: item.name,
          value: item.state_code,
        };
      });
      setStates(stateOptions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchLgas = useCallback(async () => {
    if (state) {
      try {
        const response = await axios.get<LGA[]>(
          `https://nigeria-states-towns-lga.onrender.com/api/${state.value}/lgas`
        );
        const lgaOptions = response.data.map((item) => ({
          label: item.name,
          value: item.name,
        }));

        setLgas(lgaOptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, [state]);

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchLgas();
  }, [fetchLgas, state]);

  return (
    <form className="w-full" onSubmit={(e) => onSubmit(e)}>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
          options={genderOptions}
          className="w-full react-select__placeholder react-select__input placeholder:text-sm"
          placeholder={"-Select-"}
          classNamePrefix="react-select"
          components={{
            IndicatorSeparator: () => (
              <ChevronDownIcon className="w-6 xl:w-[2.625rem] h-6 xl:h-[2.625rem]" />
            ),
          }}
          value={gender}
          onChange={(v) => setGender(v as SelectOption)}
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="age"
        >
          AGE
        </label>
        <Select
          styles={styles}
          options={ageOptions}
          className="w-full"
          placeholder={"-Select-"}
          components={{
            IndicatorSeparator: () => (
              <ChevronDownIcon className="w-6 xl:w-[2.625rem] h-6 xl:h-[2.625rem]" />
            ),
          }}
          value={age}
          onChange={(v) => setAge(v as SelectOption)}
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="state"
        >
          State
        </label>
        <Select
          value={state}
          onChange={handleStateChange}
          styles={styles}
          options={states}
          className="w-full"
          placeholder={"-Select-"}
          components={{
            IndicatorSeparator: () => (
              <ChevronDownIcon className="w-6 xl:w-[2.625rem] h-6 xl:h-[2.625rem]" />
            ),
          }}
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label
          className="text-base xl:text-2xl text-blackI font-semibold uppercase"
          htmlFor="lga"
        >
          LGA
        </label>
        <Select
          styles={styles}
          options={lgas}
          className="w-full"
          placeholder={"-Select-"}
          components={{
            IndicatorSeparator: () => (
              <ChevronDownIcon className="w-6 xl:w-[2.625rem] h-6 xl:h-[2.625rem]" />
            ),
          }}
          value={lga}
          onChange={(v) => setLga(v as SelectOption)}
        />
      </div>

      <div className="flex justify-start gap-[1.12rem] items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="w-6 xl:w-[2.625rem] h-6 xl:h-[2.62rem] regular-checkbox cursor-pointer"
          onChange={(e) => setTerm(e.target.checked)}
        />
        <label
          htmlFor="terms"
          className="text-blackI text-base xl:text-xl font-medium"
        >
          <a href="" download>
            I agree to the terms and condition
          </a>
        </label>
      </div>
      <button
        className="w-full bg-blackI rounded-[0.75rem] flex justify-center items-center py-4 xl:py-[1.875rem] px-[0.625rem] mt-[2.5rem] xl:mt-5 text-white text-base xl:text-[1.75rem] font-semibold uppercase hover:bg-opacity-80 transition duration-700"
        type="submit"
        disabled={isLoading || !canSave}
      >
        {isLoading ? (
          <ArrowsPointingOutIcon className="h-5 w-5 text-white animate-spin" />
        ) : (
          "Join the Race"
        )}
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

    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#1C1C1C",
    fontStyle: "italic",
    fontSize: "1.875rem",
    opacity: "50%",

    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#1C1C1C",
    fontSize: "1.875rem",

    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
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

const ageOptions = [
  {
    value: "18-24",
    label: "18-24",
  },
  {
    value: "25-34",
    label: "25-34",
  },
  {
    value: "35-44",
    label: "35-44",
  },
  {
    value: "45-54",
    label: "45-54",
  },
  {
    value: "55-64",
    label: "55-64",
  },
  {
    value: "65 and over",
    label: "65 and over",
  },
];

const genderOptions = [
  { value: "MALE", label: "Male" },
  { value: "FEMALE", label: "Female" },
];
