import React, { ChangeEvent } from "react";

interface CheckboxProps {
  id: number;
  isChecked?: boolean;
  onCheckBoxChange: (id: number, isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  isChecked,
  onCheckBoxChange,
}) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onCheckBoxChange(id, event.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default Checkbox;
