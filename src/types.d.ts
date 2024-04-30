interface IError {
  success: boolean;
  message: string;
}

interface IRegister {
  success: boolean;
  message: string;
  data: string;
}

type State = {
  name: string;
  capital: string;
  state_code: string;
  creation_date: string;
  location: {
    latitude: string;
    longitude: string;
  };
  total_area: string;
  population: string;
  postal_code: string;
};

type LGA = {
  name: string;
};

type SelectOption = {
  label: string;
  value: string;
};
