import { useDispatch, useSelector } from 'react-redux';
import { setCountry, setName, setEmail, setCity, setPhone, setAddress, setApartment } from './../../redux/billSlice'; // Only importing updateField
import { FormInput } from './FormInput';

export function BillingForm() {
  const dispatch = useDispatch();
  
  // Accessing the Redux state at the top level of the component
  const state = useSelector((state) => state);

  const formFields = [
    { id: "name", label: "Name", required: true },
    { id: "country", label: "Country", required: true },
    { id: "city", label: "Town/City/Region", required: true },
    { id: "address", label: "Address", required: true },
    { id: "apartment", label: "Apartment/Floor", required: false },
    { id: "email", label: "Email address", required: true, type: "email" },
    { id: "phone", label: "Phone Number", required: false, type: "tel" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', state); // Log the entire state to see the updated form data
  };

  const onvalchange = (name, value) => {
    console.log('Field:', name, 'Value:', value);

    // Dynamically dispatch the corresponding action based on the field name
    switch (name) {
      case 'name':
        dispatch(setName({ name: value }));
        break;
      case 'country':
        dispatch(setCountry({ country: value }));
        break;
      case 'city':
        dispatch(setCity({ city: value }));
        break;
      case 'address':
        dispatch(setAddress({ address: value }));
        break;
      case 'apartment':
        dispatch(setApartment({ apartment: value }));
        break;
      case 'email':
        dispatch(setEmail({ email: value }));
        break;
      case 'phone':
        dispatch(setPhone({ phone: value }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col leading-tight max-w-[570px]">
      <h1 className="text-3xl font-semibold text-green-800 max-md:max-w-full">
        Billing Information
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col w-full text-base text-red-600 max-md:max-w-full">
          {formFields.map((field) => (
            <div key={field.id} className="mt-8">
              <FormInput {...field} onValueChange={(name, val) => onvalchange(name, val)} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-4 w-full text-xs text-center text-neutral-400 max-md:max-w-full">
          <input
            type="checkbox"
            id="saveInfo"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <label htmlFor="saveInfo" className="self-stretch my-auto">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
}


//<label for="phone" class="text-sm font-semibold">Phone Number</label>