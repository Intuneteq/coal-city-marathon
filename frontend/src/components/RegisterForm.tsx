export default function RegisterForm() {
  async function onSubmit() {}
  return (
    <form className="w-full liner" onSubmit={onSubmit}>
      <div className="flex flex-col justify-start items-start mb-6">
        <label className="label" htmlFor="name">
          Full name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-4 px-6 focus:outline-none text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50"
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label className="label" htmlFor="email">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          placeholder="email@xyz.com"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-4 px-6 focus:outline-none text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50"
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label className="label" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="(0)-000-000"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-4 px-6 focus:outline-none text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50"
        />
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label className="label" htmlFor="gender">
          GENDER
        </label>
        <select
          name="gender"
          id="gender"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-4 px-6 focus:outline-none text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50"
        >
          <option className="text-blackI text-opacity-50" value="">
            -Select-
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label className="label" htmlFor="gender">
          AGE
        </label>
        <select
          name="gender"
          id="gender"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-4 px-6 focus:outline-none text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50"
        >
          <option className="text-blackI text-opacity-50" value="">
            -Select-
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label className="label" htmlFor="gender">
          State
        </label>
        <select
          name="gender"
          id="gender"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-4 px-6 focus:outline-none text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50"
        >
          <option className="text-blackI text-opacity-50" value="">
            -Select-
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="flex flex-col justify-start items-start mb-6">
        <label className="label" htmlFor="gender">
          LGA
        </label>
        <select
          name="gender"
          id="gender"
          className="w-full bg-transparent border-b-[3px] border-b-blackI py-4 px-6 focus:outline-none text-3xl text-blackI placeholder:text-blackI placeholder:text-opacity-50"
        >
          <option className="text-blackI text-opacity-50" value="">
            -Select-
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="flex justify-start gap-[1.12rem] items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="w-[2.625rem] h-[2.62rem] regular-checkbox"
        />
        <label htmlFor="terms" className="text-blackI text-xl font-medium">
          I agree to the terms and conditions
        </label>
      </div>
      <button
        className="w-full bg-blackI rounded-[0.75rem] flex justify-center items-center py-[1.875rem] px-[0.625rem] mt-5 text-white text-[1.75rem] font-semibold uppercase"
        type="submit"
      >
        Join the Race
      </button>
      <small className="text-center block text-blackI text-[1.4375rem] font-medium mt-5">
        *Registration Ends April 30th.
      </small>
    </form>
  );
}
