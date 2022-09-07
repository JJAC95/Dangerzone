import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
export const Picker = ({ listItems, placeholder, style }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(listItems);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder}
      style={style}
    />
  );
};
