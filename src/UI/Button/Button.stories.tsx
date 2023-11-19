import React from "react";
import Button from "./Button";
import { MdClear } from "react-icons/md";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Atoms/Button",
  component: Button,
};

function Template() {
  return (
    <div className="container">
      <div>
        <Button label="primary" />
        <Button label="secondary" variant="secondary" />
        <Button label="tertiary" variant="tertiary" />
        <Button label="danger" danger />
      </div>
      <div className="mt-2 flex items-center">
        <Button label="primary" emphasis="medium" />
        <Button label="secondary" variant="secondary" emphasis="medium" />
        <Button label="tertiary" variant="tertiary" emphasis="medium" />
        <Button label="danger" danger emphasis="medium" />
      </div>
      <div className="mt-2 flex items-center">
        <Button icon={<MdClear />} />
        <Button icon={<MdClear />} label="TEXT_WITH_ICON" variant="secondary" />
        <Button icon={<MdClear />} variant="tertiary" />
        <Button icon={<MdClear />} danger />
        <Button icon={<MdClear />} danger emphasis="medium" />
      </div>
      <div className="mt-2 flex items-center">
        <Button icon={<MdClear />} isLoading />
        <Button
          icon={<MdClear />}
          label="TEXT_WITH_ICON"
          variant="secondary"
          isLoading
        />
        <Button icon={<MdClear />} variant="tertiary" isLoading />
        <Button icon={<MdClear />} danger isLoading />
        <Button icon={<MdClear />} danger emphasis="medium" isLoading />
      </div>
      <div className="mt-2 flex items-center">
        <Button icon={<MdClear />} disabled />
        <Button
          icon={<MdClear />}
          label="TEXT_WITH_ICON"
          variant="secondary"
          disabled
        />
        <Button icon={<MdClear />} variant="tertiary" disabled />
        <Button icon={<MdClear />} danger disabled />
        <Button icon={<MdClear />} danger emphasis="medium" disabled />
      </div>
      <div className="mt-2 flex items-center">
        <Button label="Delete" danger />
      </div>
    </div>
  );
}

export const ButtonElement = Template.bind({});
