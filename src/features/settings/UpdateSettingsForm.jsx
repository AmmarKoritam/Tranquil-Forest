// UI
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

// Hooks
import { useSettings } from "./useSettings";
import { useUpdataSettings } from "./useUpdataSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBook,
      breakfastPrise,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdataSettings();

  function handleUpdata(e, field) {
    const { value } = e.target;

    if (!value) return;

    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdata(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdata(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBook}
          disabled={isUpdating}
          onBlur={(e) => handleUpdata(e, "maxGuestsPerBook")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrise}
          disabled={isUpdating}
          onBlur={(e) => handleUpdata(e, "breakfastPrise")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
