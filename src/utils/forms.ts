import { useState, ChangeEvent } from "react";

export const useInputEntry = <T>(
  initialValue: T,
  validSelectValues: Array<string | number> = [],
  maxLength?: number
) => {
  const [value, setValue] = useState<T>(initialValue);
  const [validationMsg, setValidationMsg] = useState<string>("");

  const stringChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let val: any = event.target.value;
    if (!maxLength) {
      setValue(val);
    } else if (maxLength && val.toString().length <= maxLength) {
      setValue(val);
    }
  };

  const intChange = (event: ChangeEvent<HTMLInputElement>) => {
    const validInt = new RegExp('^[0-9]+$');
    if (validInt.test(event.target.value) ||
      event.target.value === ""
    ) {
      const val: any = event.target.value;
      if (!maxLength) {
        setValue(val);
      } else if (maxLength && val.toString().length <= maxLength) {
        setValue(val);
      }
    }
  };

  // const floatChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // Buggy...needs fix
  //   const validFloat = new RegExp('^(?!0\d)\d*(\.\d+)?$')
  //   if (validFloat.test(event.target.value) ||
  //     event.target.value === ""
  //   ) {
  //     const val: any = event.target.value;
  //     if (!maxLength) {
  //       setValue(val);
  //     } else if (maxLength && val.toString().length <= maxLength) {
  //       setValue(val);
  //     }
  //   }
  // };

  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const val: any = event.target.value;
    if (validSelectValues.includes(val)) {
      setValue(val);
    } else {
      setValue(initialValue);
    }
  };

  const imageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val: any = event.target.files;
    setValue(val[0]);
  }


  return {
    value,
    setValue,

    validationMsg,
    setValidationMsg,

    stringChange,
    intChange,
    // floatChange,
    selectChange,
    imageChange,
  };
};

export default useInputEntry;