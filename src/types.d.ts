interface IError {
  success: boolean;
  message: string;
}

interface IRegister {
  success: boolean;
  message: string;
  data: {
    link: string;
  };
}
